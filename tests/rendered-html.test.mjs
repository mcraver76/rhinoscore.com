import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

test("builds a React and Vite app", async () => {
  const [html, assets, app, styles, packageJson] = await Promise.all([
    readFile(new URL("../dist/index.html", import.meta.url), "utf8"),
    readdir(new URL("../dist/assets/", import.meta.url)),
    readFile(new URL("../src/App.jsx", import.meta.url), "utf8"),
    readFile(new URL("../src/styles.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(html, /<title>RhinoScore<\/title>/i);
  assert.match(html, /\/src\/main\.jsx|\/assets\/index-/);
  assert.ok(assets.some((file) => file.endsWith(".js")));
  assert.ok(assets.some((file) => file.endsWith(".css")));
  assert.match(packageJson, /"dev": "vite --host 127\.0\.0\.1"/);
  assert.doesNotMatch(packageJson, /vinext|next|wrangler/i);
  assert.match(app, /Scorekeeping that keeps the whole program aligned/);
  assert.match(app, /Privacy Policy/);
  assert.match(app, /Terms of Service/);
  assert.match(app, /Need help with RhinoScore/);
  assert.match(styles, /\.hero/);
});
