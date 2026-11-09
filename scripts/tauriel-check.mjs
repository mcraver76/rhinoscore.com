// Tauriel's safety check (Varda 2026-11-09, for Tauriel's review).
// Fails a PR whose ADDED lines bring in data collection or outside code:
// a form or input field, a new outside <script>, an analytics/pixel tag, or a new outside domain in vercel.json.
// A PR labelled "tauriel-pass" (Tauriel reviewed it) is allowed through by the workflow.
// Usage: node scripts/tauriel-check.mjs <base-ref>
import { execFileSync } from "node:child_process";

const base = process.argv[2] || "origin/main";
const SCANNED = /^(src\/|index\.html$|public\/.*\.html$|vercel\.json$)/;

const RULES = [
  ["a form", /<form\b/i],
  ["an input field", /<(input|textarea|select)\b/i],
  ["an email/phone field", /type\s*=\s*["']?(email|tel)\b/i],
  ["an outside script", /<script\b[^>]*\bsrc\s*=\s*["'{]?\s*["'`]?(https?:)?\/\//i],
  ["a script loaded from code", /createElement\(\s*["']script["']\s*\)/i],
  ["analytics / tracking", /\b(gtag\s*\(|googletagmanager|google-analytics|fbq\s*\(|connect\.facebook\.net|hotjar|clarity\.ms|snap\.licdn\.com|analytics\.tiktok|mixpanel|posthog|segment\.(com|io)|plausible|umami|heap(analytics)?\.|fullstory|amplitude|intercom|hubspot|hs-scripts|doubleclick|adservice|pixel)\b/i],
];
const DOMAIN = /https?:\/\/[a-z0-9.-]+/gi;

const diff = execFileSync("git", ["diff", "--unified=0", "--no-color", `${base}...HEAD`], { encoding: "utf8", maxBuffer: 64 << 20 });
let file = null, line = 0;
const hits = [];
for (const raw of diff.split("\n")) {
  if (raw.startsWith("+++ ")) { file = raw.slice(4).replace(/^b\//, ""); continue; }
  const hunk = raw.match(/^@@ -\d+(?:,\d+)? \+(\d+)/);
  if (hunk) { line = Number(hunk[1]); continue; }
  if (!file || !SCANNED.test(file)) continue;
  if (raw.startsWith("+") && !raw.startsWith("+++")) {
    const text = raw.slice(1);
    for (const [what, re] of RULES) if (re.test(text)) hits.push(`${file}:${line}  ${what}: ${text.trim().slice(0, 140)}`);
    if (file === "vercel.json") for (const d of text.match(DOMAIN) || []) hits.push(`${file}:${line}  outside domain in security headers/config: ${d}`);
    line++;
  }
}

if (hits.length) {
  console.log("Tauriel's safety check: this PR adds things that can collect data or load outside code:\n");
  for (const h of hits) console.log("  - " + h);
  console.log('\nAsk Tauriel to review. Once she approves, add the label "tauriel-pass" to the PR and re-run.');
  process.exit(1);
}
console.log("Tauriel's safety check: no forms, fields, outside scripts, tracking or new header domains added. OK.");
