// After `vite build`: write one HTML file per public page with its own <title>, description,
// canonical and share tags (so Google and link previews see the right text without running JS),
// a 404.html for unknown URLs (served with a real 404 status by Vercel), and sitemap.xml.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { HIDDEN_ROUTES, NOT_FOUND, ROUTES, SITE } from "../src/routes.js";

const dist = new URL("../dist/", import.meta.url);
const base = await readFile(new URL("index.html", dist), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function page({ title, description, url, noindex }) {
  let html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${esc(description)}$2`);
  if (url) {
    html = html
      .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
      .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  } else {
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, "").replace(/\s*<meta property="og:url"[^>]*>/, "");
  }
  if (noindex) html = html.replace("</title>", `</title>\n    <meta name="robots" content="noindex" />`);
  for (const must of [title, description].map(esc)) if (!html.includes(must)) throw new Error(`prerender: tag not replaced for ${title}`);
  return html;
}

for (const r of ROUTES) {
  const url = r.path === "/" ? `${SITE}/` : `${SITE}${r.path}`;
  const file = r.path === "/" ? "index.html" : `${r.path.slice(1)}.html`;
  await writeFile(new URL(file, dist), page({ ...r, url }));
}
// Hidden pages: real HTML (direct links work, own title) with noindex; never in the sitemap below.
for (const r of HIDDEN_ROUTES) {
  const file = new URL(`${r.path.slice(1)}.html`, dist);
  await mkdir(new URL(".", file), { recursive: true });
  await writeFile(file, page({ ...r, url: `${SITE}${r.path}`, noindex: true }));
}
await writeFile(new URL("404.html", dist), page({ ...NOT_FOUND, noindex: true }));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((r) => `  <url><loc>${r.path === "/" ? `${SITE}/` : SITE + r.path}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;
await writeFile(new URL("sitemap.xml", dist), sitemap);
console.log(`prerender: ${ROUTES.length} pages + ${HIDDEN_ROUTES.length} hidden + 404.html + sitemap.xml`);
