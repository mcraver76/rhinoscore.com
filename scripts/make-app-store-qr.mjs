// Makes public/badges/app-store-qr.svg: a static QR code for the RhinoScore App Store page,
// so people on a computer can scan it with their iPhone. Run by hand when the link changes:
//   node scripts/make-app-store-qr.mjs
// Black on white with the standard 4-module quiet zone. No runtime QR library, no outside service.
import { writeFile } from "node:fs/promises";
import QRCode from "qrcode";
import { APP_STORE_URL } from "../src/routes.js";

// Check what we encode is exactly the App Store link (one byte segment, nothing added).
const qr = QRCode.create(APP_STORE_URL, { errorCorrectionLevel: "M" });
const encoded = qr.segments.map((s) => (s.data instanceof Uint8Array ? Buffer.from(s.data).toString("utf8") : String(s.data))).join("");
if (encoded !== APP_STORE_URL) throw new Error(`QR text mismatch: ${encoded}`);

const svg = await QRCode.toString(APP_STORE_URL, {
  type: "svg", errorCorrectionLevel: "M", margin: 4, color: { dark: "#000000", light: "#ffffff" },
});
await writeFile(new URL("../public/badges/app-store-qr.svg", import.meta.url), svg);
console.log(`app-store-qr.svg written for ${encoded}`);
