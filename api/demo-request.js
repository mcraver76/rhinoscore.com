// POST /api/demo-request — the website's "Request a demo" form (Vercel serverless function).
// Emails the request to the RhinoScore team through Resend. Nothing is stored and nothing is logged
// except a short error code. Personal details travel only in the POST body, never in a URL.
//
// Bot check: Cloudflare Turnstile, verified here on the server before anything is sent.
//
// Vercel project settings → Environment Variables:
//   RESEND_API_KEY            required (Production + Preview). Missing → 503 and the form shows the support email.
//   TURNSTILE_SECRET_KEY      required in Production. Missing in Production → 503.
//                             Previews/local fall back to Cloudflare's documented always-pass TEST secret.
//   VITE_TURNSTILE_SITE_KEY   the matching public site key (build-time; Production). Previews use the TEST site key.
//   DEMO_TO                   optional, default support@rhinoscore.com
//   DEMO_FROM                 optional, default "RhinoScore Website <reports@rhinoscore.com>" (a Resend-verified sender)
//
// TODO(Michael, Vercel dashboard): per-IP backstop limit. Firewall → Rules → New rule:
//   If Request Path equals /api/demo-request AND Method equals POST → Rate Limit, fixed window 1 hour,
//   3 requests, key = IP, action = Deny (429). (Free WAF rule; no code or extra accounts needed.)
//   @vercel/firewall checkRateLimit was not used: it needs a dashboard rule anyway plus a new dependency.

const LIMITS = { name: 100, email: 200, phone: 40, company: 150, industry: 60, sites: 20, message: 2000 };
// Keep in the same order as the form (src/home.jsx).
const INDUSTRIES = ["Building services / facility services", "Schools & education", "Property management", "Healthcare", "Other service company"];
const SITE_COUNTS = ["1-5", "6-25", "26-100", "100+"];
// The domain must end in a dot + 2 or more letters (a real TLD): "a@b" and "a@b.c" are rejected.
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[a-z]{2,}$/i;
// Our production hosts, THIS Vercel project's previews only, and local dev.
const PROD_HOSTS = ["rhinoscore.com", "www.rhinoscore.com"];
const ALLOWED_HOSTS = /^(rhinoscore\.com|www\.rhinoscore\.com|rhinoscorewebsite-[a-z0-9-]+-michael-s-esix10\.vercel\.app|localhost(:\d+)?|127\.0\.0\.1(:\d+)?)$/i;
const MAX_BODY = 10 * 1024;
const TURNSTILE_ACTION = "demo";
// Cloudflare's documented always-pass TEST secret, used only outside Production.
const TURNSTILE_TEST_SECRET = "1x0000000000000000000000000000000AA";
const isProd = () => process.env.VERCEL_ENV === "production";

async function verifyTurnstile(token, ip, secret) {
  if (!token || typeof token !== "string" || token.length > 2048) return false;
  const form = new URLSearchParams({ secret, response: token });
  if (ip) form.set("remoteip", ip);
  try {
    const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: form });
    const d = await r.json();
    if (!d.success) return false;
    // Real keys (Production): the token must come from our site and from this form.
    if (isProd() && (!PROD_HOSTS.includes(d.hostname) || d.action !== TURNSTILE_ACTION)) return false;
    return true;
  } catch {
    return false;
  }
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const clean = (v, max) => (typeof v === "string" ? v.replace(/[\u0000-\u0008\u000b-\u001f\u007f]/g, "").trim().slice(0, max) : "");

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method" });
  }
  // Same-site only: browsers always send Origin on a cross-site POST.
  const origin = req.headers.origin;
  if (origin) {
    let host = "";
    try { host = new URL(origin).host; } catch { /* bad origin */ }
    if (!ALLOWED_HOSTS.test(host)) return res.status(403).json({ ok: false, error: "origin" });
  }
  if (!String(req.headers["content-type"] || "").includes("application/json")) {
    return res.status(415).json({ ok: false, error: "type" });
  }
  if (Number(req.headers["content-length"] || 0) > MAX_BODY) return res.status(413).json({ ok: false, error: "too_large" });

  let b;
  try {
    b = req.body && typeof req.body === "object" ? req.body : {};
  } catch {
    return res.status(400).json({ ok: false, error: "invalid" }); // body could not be parsed
  }
  if (JSON.stringify(b).length > MAX_BODY) return res.status(413).json({ ok: false, error: "too_large" });
  // Honeypot: a hidden field people never fill. Pretend success so bots learn nothing.
  if (clean(b.website, 200)) return res.status(200).json({ ok: true });

  const f = {
    name: clean(b.name, LIMITS.name),
    email: clean(b.email, LIMITS.email),
    phone: clean(b.phone, LIMITS.phone),
    company: clean(b.company, LIMITS.company),
    industry: INDUSTRIES.includes(b.industry) ? b.industry : "",
    sites: SITE_COUNTS.includes(b.sites) ? b.sites : "",
    message: clean(b.message, LIMITS.message),
  };
  const missing = ["name", "email", "company"].filter((k) => !f[k]);
  if (missing.length || !EMAIL_RE.test(f.email) || (f.phone && !/^[0-9+().\-\s]{7,40}$/.test(f.phone))) {
    return res.status(400).json({ ok: false, error: "invalid" });
  }

  const key = process.env.RESEND_API_KEY;
  const secret = process.env.TURNSTILE_SECRET_KEY || (isProd() ? "" : TURNSTILE_TEST_SECRET);
  if (!key || !secret) return res.status(503).json({ ok: false, error: "not_configured" });

  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  if (!(await verifyTurnstile(b["cf-turnstile-response"], ip, secret))) {
    return res.status(400).json({ ok: false, error: "bot_check" });
  }

  const rows = [
    ["Name", f.name], ["Work email", f.email], ["Phone", f.phone || "—"], ["Company", f.company],
    ["Industry", f.industry || "—"], ["Number of sites", f.sites || "—"], ["Message", f.message || "—"],
  ];
  const html = `<h2 style="font-family:Arial,sans-serif">New demo request from rhinoscore.com</h2>
<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="padding:6px 14px 6px 0;color:#555;vertical-align:top">${k}</td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join("")}</table>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.DEMO_FROM || "RhinoScore Website <reports@rhinoscore.com>",
        to: [process.env.DEMO_TO || "support@rhinoscore.com"],
        reply_to: f.email,
        subject: `Demo request: ${f.company.slice(0, 80)}`,
        html,
        text,
      }),
    });
    if (!r.ok) {
      console.error("demo-request: resend status", r.status);
      return res.status(502).json({ ok: false, error: "send" });
    }
  } catch {
    console.error("demo-request: resend unreachable");
    return res.status(502).json({ ok: false, error: "send" });
  }
  return res.status(200).json({ ok: true });
}
