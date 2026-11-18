// "Download on the App Store" badge + scan-to-download QR code (Varda's build spec, 2026-11-07).
// Apple's rules: official badge artwork only, at least 40px tall, clear space of 1/4 its height,
// never bigger than the buttons next to it. Trademark line goes in the footer small print.
import { APP_STORE_URL, PLAY_STORE_URL } from "./routes.js";

const ALT = { en: "Download on the App Store", es: "Descárgalo en el App Store" };

export const APPLE_TRADEMARK = "Apple, the Apple logo, iPhone, and App Store are trademarks of Apple Inc., registered in the U.S. and other countries.";
export const GOOGLE_TRADEMARK = "Google Play and the Google Play logo are trademarks of Google LLC.";

// "Get it on Google Play" badge (Google's official artwork, unchanged). Google's rules: official art only,
// same size or larger than other store badges shown with it, link straight to the Play listing.
// The PNG has Google's own clear space built in, so it is drawn taller and pulled in with a negative margin
// so the visible badge lines up with the 40px App Store badge.
const PLAY_ALT = { en: "Get it on Google Play", es: "Disponible en Google Play" };

export function GooglePlayBadge({ lang = "en", className = "" }) {
  return (
    <a className={`app-badge play-badge ${className}`.trim()} href={PLAY_STORE_URL} target="_blank" rel="noopener">
      <img src={`/badges/google-play-${lang}.png`} width="155" height="60" alt={PLAY_ALT[lang]} />
    </a>
  );
}

// Both store badges side by side (App Store first, as everywhere else on the site).
export function StoreBadges({ lang = "en", className = "" }) {
  return (
    <span className="store-badges">
      <AppStoreBadge lang={lang} className={className} />
      <GooglePlayBadge lang={lang} className={className} />
    </span>
  );
}

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
