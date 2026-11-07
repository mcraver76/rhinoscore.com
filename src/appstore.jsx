// "Download on the App Store" badge + scan-to-download QR code (Varda's build spec, 2026-11-07).
// Apple's rules: official badge artwork only, at least 40px tall, clear space of 1/4 its height,
// never bigger than the buttons next to it. Trademark line goes in the footer small print.
import { APP_STORE_URL } from "./routes.js";

const ALT = { en: "Download on the App Store", es: "Descárgalo en el App Store" };

export const APPLE_TRADEMARK = "Apple, the Apple logo, iPhone, and App Store are trademarks of Apple Inc., registered in the U.S. and other countries.";

export function AppStoreBadge({ lang = "en", className = "" }) {
  return (
    <a className={`app-badge ${className}`.trim()} href={APP_STORE_URL} target="_blank" rel="noopener">
      <img src={`/badges/app-store-${lang}.svg`} width="120" height="40" alt={ALT[lang]} />
    </a>
  );
}

const QR_CAPTION = {
  en: "On your computer? Scan with your iPhone camera to get the app.",
  es: "¿Está en su computadora? Escanee con la cámara de su iPhone para descargar la app.",
};

// Desktop only (hidden below 768px): phone users just tap the badge.
export function AppStoreQr({ lang = "en", small = false }) {
  return (
    <figure className={small ? "app-qr small" : "app-qr"}>
      <img src="/badges/app-store-qr.svg" width="132" height="132" alt="QR code: RhinoScore on the App Store" loading="lazy" decoding="async" />
      <figcaption>{QR_CAPTION[lang]}</figcaption>
    </figure>
  );
}
