// RhinoScore — /app: the crew download page (EN + ES). Moved off the home page (Varda 2026-11-09)
// so the home page speaks to buyers. Invite emails and the home page link here.
// Claims: only live + device-proven features (no offline/no-signal claims until the live app proves them).
import { StoreBadges, AppStoreQr } from "./appstore.jsx";

const CREW_APP = {
  en: {
    eyebrow: "For crews",
    heading: "The RhinoScore app. Free for your whole crew.",
    body: "Check in at the site, work your checklists and log your work from your own phone, iPhone or Android. Your company sends your invite so you can sign in.",
    bullets: [
      "Check in only when you're at the job site",
      "Today's sites, checklists and work orders in one place",
      "Messages from the office, right in the app",
      "English and Spanish",
    ],
    help: <>Need help? See <a href="/support">Support</a>.</>,
  },
  es: {
    eyebrow: "Para el equipo",
    heading: "La app de RhinoScore. Gratis para todo tu equipo.",
    body: "Registra tu entrada en el sitio, completa tus listas y registra tu trabajo desde tu propio teléfono, iPhone o Android. Tu empresa te envía la invitación para iniciar sesión.",
    bullets: [
      "Registra tu entrada solo cuando estés en el sitio de trabajo",
      "Los sitios, listas y órdenes de trabajo del día en un solo lugar",
      "Mensajes de la oficina, directamente en la app",
      "Inglés y español",
    ],
    help: <>¿Necesitas ayuda? Ve a <a href="/support#es">Soporte</a>.</>,
  },
};

function Tick() {
  return (
    <svg className="tick" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Block({ lang, id }) {
  const t = CREW_APP[lang];
  return (
    <div className="crew-app-grid" id={id} lang={lang === "es" ? "es" : undefined}>
      <div>
        <span className="eyebrow">{t.eyebrow}</span>
        <h2>{t.heading}</h2>
        <p className="crew-app-body">{t.body}</p>
        <ul className="check-list">
          {t.bullets.map((b) => (<li key={b}><Tick />{b}</li>))}
        </ul>
      </div>
      <div className="crew-app-get">
        <div className="crew-app-row">
          <StoreBadges lang={lang} />
          <AppStoreQr lang={lang} />
        </div>
        <p className="crew-app-android">{t.help}</p>
      </div>
    </div>
  );
}

export function CrewAppPage() {
  return (
    <main className="home">
      <section className="section crew-app crew-page">
        <div className="wrap">
          <Block lang="en" id="en" />
          <div className="crew-app-es"><Block lang="es" id="es" /></div>
        </div>
      </section>
    </main>
  );
}
