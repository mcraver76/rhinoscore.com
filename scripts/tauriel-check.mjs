// Tauriel's safety check (Varda 2026-11-09, reviewed by Tauriel).
// Fails a PR whose ADDED lines bring in data collection or outside code: forms/fields, iframes, outside scripts,
// outbound data calls, analytics/pixels, new tracking packages, new outside domains in vercel.json,
// or ANY change to this check itself (.github/**, scripts/tauriel-check.mjs).
// A PR labelled "tauriel-pass" (Tauriel reviewed it) is allowed through by the workflow, until the next push.
// Usage: node tauriel-check.mjs <base-ref>
import { execFileSync } from "node:child_process";

const base = process.argv[2] || "origin/main";
const SELF = /^(\.github\/|scripts\/tauriel-check\.mjs$)/;
const SCANNED = (f) =>
  !/^tests\//.test(f) && !/\.md$/i.test(f) &&
  (/^api\//.test(f) || /\.(m?js|jsx|ts|tsx|html)$/i.test(f) || f === "vercel.json" || f === "package.json");

const ANALYTICS = /\b(gtag\s*\(|googletagmanager|google-analytics|ga4|fbq\s*\(|connect\.facebook\.net|hotjar|clarity\.ms|snap\.licdn\.com|analytics\.tiktok|mixpanel|posthog|segment\.(com|io)|plausible|umami|heap(analytics)?\.|fullstory|amplitude|intercom|hubspot|hs-scripts|doubleclick|adservice|pixel|@vercel\/analytics|speed-insights|sentry|logrocket)\b/i;
const RULES = [
  ["a form", /<form\b/i],
  ["an input field", /<(input|textarea|select)\b/i],
  ["an email/phone field", /type\s*=\s*["']?(email|tel)\b/i],
  ["an embedded page (iframe)", /<iframe\b/i],
  ["an outside script", /<script\b[^>]*\bsrc\s*=\s*["'{]?\s*["'`]?(https?:)?\/\//i],
  ["a script loaded from code", /createElement\(\s*["']script["']\s*\)/i],
  ["data sent out (sendBeacon)", /navigator\.sendBeacon/i],
  ["data sent to an outside address", /\b(fetch|axios(\.\w+)?)\s*\(\s*["'`]https?:\/\//i],
  ["a form that emails (mailto action)", /action\s*=\s*["'{]?\s*["'`]?mailto:/i],
  ["analytics / tracking", ANALYTICS],
];
const PKG = /analytics|gtag|ga4|react-ga|@vercel\/analytics|speed-insights|posthog|segment|mixpanel|sentry|logrocket|hotjar/i;
const DOMAIN = /https?:\/\/[a-z0-9.-]+/gi;

const diff = execFileSync("git", ["diff", "--no-renames", "--unified=0", "--no-color", `${base}...HEAD`], { encoding: "utf8", maxBuffer: 64 << 20 });
let file = null, line = 0;
const hits = [];
const selfHit = new Set();
for (const raw of diff.split("\n")) {
  const old = raw.match(/^--- a\/(.+)$/);
  if (old && SELF.test(old[1])) selfHit.add(old[1]);
  if (raw.startsWith("+++ ")) {
    file = raw.slice(4).replace(/^b\//, "");
    if (SELF.test(file)) selfHit.add(file);
    continue;
  }
  const hunk = raw.match(/^@@ -\d+(?:,\d+)? \+(\d+)/);
  if (hunk) { line = Number(hunk[1]); continue; }
  if (!file || file === "/dev/null" || SELF.test(file) || !SCANNED(file)) continue;
  if (raw.startsWith("+") && !raw.startsWith("+++")) {
    const text = raw.slice(1);
    const show = text.trim().slice(0, 140);
    if (file === "package.json") { if (PKG.test(text)) hits.push(`${file}:${line}  tracking/monitoring package: ${show}`); }
    else for (const [what, re] of RULES) if (re.test(text)) hits.push(`${file}:${line}  ${what}: ${show}`);
    if (file === "vercel.json") for (const d of text.match(DOMAIN) || []) hits.push(`${file}:${line}  outside domain in security headers/config: ${d}`);
    line++;
  }
}
for (const f of selfHit) hits.push(`${f}  changes the safety check or CI itself`);

if (hits.length) {
  console.log("Tauriel's safety check: this PR adds things that can collect data or load outside code:\n");
  for (const h of hits) console.log("  - " + h);
  console.log('\nAsk Tauriel to review. Once she approves, she adds the label "tauriel-pass". Any new push re-scans; she removes and re-adds the label after re-reading.');
  process.exit(1);
}
console.log("Tauriel's safety check: no forms, fields, outside code, tracking or header domains added. OK.");
