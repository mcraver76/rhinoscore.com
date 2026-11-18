// Makes public/badges/app-store-qr.svg: a static QR code for the RhinoScore App Store page,
// so people on a computer can scan it with their iPhone. Run by hand when the link changes:
//   node scripts/make-app-store-qr.mjs
// Black on white with the standard 4-module quiet zone. No runtime QR library, no outside service.
import { writeFile } from "node:fs/promises";
import QRCode from "qrcode";
import { APP_STORE_URL, PLAY_STORE_URL } from "../src/routes.js";

// Also makes public/badges/google-play-qr.svg for Android phones (2026-11-18).
for (const [url, file] of [[APP_STORE_URL, "app-store-qr.svg"], [PLAY_STORE_URL, "google-play-qr.svg"]]) {
  // Check what we encode is exactly the store link (one byte segment, nothing added).
  const qr = QRCode.create(url, { errorCorrectionLevel: "M" });
  const encoded = qr.segments.map((s) => (s.data instanceof Uint8Array ? Buffer.from(s.data).toString("utf8") : String(s.data))).join("");
  if (encoded !== url) throw new Error(`QR text mismatch: ${encoded}`);
  const svg = await QRCode.toString(url, {
    type: "svg", errorCorrectionLevel: "M", margin: 4, color: { dark: "#000000", light: "#ffffff" },
  });
  await writeFile(new URL(`../public/badges/${file}`, import.meta.url), svg);
  console.log(`${file} written for ${encoded}`);
}
