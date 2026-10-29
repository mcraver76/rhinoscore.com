import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { ROUTES } from "../src/routes.js";

const read = (p) => readFile(new URL(p, import.meta.url), "utf8");

test("builds a React and Vite app", async () => {
  const [html, assets, app, home, styles, packageJson] = await Promise.all([
    read("../dist/index.html"),
    readdir(new URL("../dist/assets/", import.meta.url)),
    read("../src/App.jsx"),
    read("../src/home.jsx"),
    read("../src/styles.css"),
    read("../package.json"),
  ]);

  assert.match(html, /<title>RhinoScore — Operational Intelligence Platform<\/title>/);
  assert.match(html, /\/assets\/index-/);
  assert.ok(assets.some((file) => file.endsWith(".js")));
  assert.ok(assets.some((file) => file.endsWith(".css")));
  assert.match(packageJson, /"dev": "vite --host 127\.0\.0\.1"/);
  assert.doesNotMatch(packageJson, /vinext|next|wrangler/i);
  assert.match(home, /The Operational Intelligence Platform\./);
  assert.match(home, /Run every site from one screen, <em>and manage exceptions, not data\.<\/em>/);
  assert.doesNotMatch(home, /missed area|service companies with crews/);
  assert.match(home, /Owners manage <b>exceptions<\/b>, not data\./);
  assert.match(app, /Privacy Policy/);
  assert.match(app, /Terms of Service/);
  assert.match(app, /Sign in/);
  assert.match(styles, /\.home-hero/);
});

test("every page has its own title, description and canonical", async () => {
  const titles = new Set();
  for (const r of ROUTES) {
    const file = r.path === "/" ? "index.html" : `${r.path.slice(1)}.html`;
    const html = await read(`../dist/${file}`);
    assert.ok(html.includes(`<title>${r.title.replace(/&/g, "&amp;")}</title>`), `title on ${r.path}`);
    assert.match(html, /<link rel="canonical" href="https:\/\/rhinoscore\.com\/?[a-z-]*"/);
    assert.match(html, /<meta property="og:image" content="https:\/\/rhinoscore\.com\/og-image\.jpg"/);
    titles.add(r.title);
  }
  assert.equal(titles.size, ROUTES.length);
});

test("404 page, sitemap and robots", async () => {
  const [notFound, sitemap, robots] = await Promise.all([read("../dist/404.html"), read("../dist/sitemap.xml"), read("../dist/robots.txt")]);
  assert.match(notFound, /<meta name="robots" content="noindex" \/>/);
  assert.doesNotMatch(notFound, /rel="canonical"/);
  for (const r of ROUTES) assert.ok(sitemap.includes(`<loc>https://rhinoscore.com${r.path === "/" ? "/" : r.path}</loc>`));
  assert.match(robots, /Sitemap: https:\/\/rhinoscore\.com\/sitemap\.xml/);
});

test("no background video, every image has alt text, demo link set in one place", async () => {
  const files = await readdir(new URL("../dist/", import.meta.url));
  assert.ok(!files.includes("hero.mp4"));
  for (const f of ["../src/App.jsx", "../src/home.jsx", "../src/sms.jsx"]) {
    const src = await read(f);
    for (const tag of src.match(/<img\b[^>]*>/g) || []) assert.match(tag, /\balt=/, `${f}: ${tag}`);
  }
  const routes = await read("../src/routes.js");
  assert.match(routes, /DEMO_HREF = "\/demo"/);
  for (const f of ["../src/App.jsx", "../src/home.jsx", "../src/sms.jsx", "../src/routes.js"]) {
    assert.doesNotMatch(await read(f), /(legal|info)@rhinoscore\.com/, f);
  }
});

test("demo form: industries match the server, Turnstile is wired, hosts are narrow", async () => {
  const [demo, api, vercel] = await Promise.all([read("../src/demo.jsx"), read("../api/demo-request.js"), read("../vercel.json")]);
  const list = (src) => JSON.parse(src.match(/const INDUSTRIES = (\[[^\]]*\])/)[1]);
  assert.deepEqual(list(demo), ["Building services / facility services", "Schools & education", "Property management", "Healthcare", "Other service company"]);
  assert.deepEqual(list(api), list(demo));
  assert.match(api, /challenges\.cloudflare\.com\/turnstile\/v0\/siteverify/);
  assert.doesNotMatch(api, /\[a-z0-9-\]\+\\\.vercel\\\.app/);
  assert.match(vercel, /frame-src https:\/\/challenges\.cloudflare\.com/);
});
