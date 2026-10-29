// POST /api/demo-request — the website's "Request a demo" form (Vercel serverless function).
// Emails the request to the RhinoScore team through Resend. Nothing is stored and nothing is logged
// except a short error code. Personal details travel only in the POST body, never in a URL.
//
// Vercel project settings → Environment Variables (Production + Preview):
//   RESEND_API_KEY   required. Until it is set the endpoint answers 503 and the form shows the support email.
//   DEMO_TO          optional, default support@rhinoscore.com
//   DEMO_FROM        optional, default "RhinoScore Website <reports@rhinoscore.com>" (a Resend-verified sender)

const LIMITS = { name: 100, email: 200, phone: 40, company: 150, industry: 60, sites: 20, message: 2000 };
const INDUSTRIES = ["Cleaning / janitorial", "Facilities / maintenance", "Property management", "Schools / education", "Healthcare", "Other"];
const SITE_COUNTS = ["1-5", "6-25", "26-100", "100+"];
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[a-z]{2,}$/i;
const ALLOWED_HOSTS = /^(rhinoscore\.com|www\.rhinoscore\.com|[a-z0-9-]+\.vercel\.app|localhost(:\d+)?|127\.0\.0\.1(:\d+)?)$/i;

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

  const b = req.body && typeof req.body === "object" ? req.body : {};
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
  if (!key) return res.status(503).json({ ok: false, error: "not_configured" });

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
