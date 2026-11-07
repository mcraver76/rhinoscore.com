// Home page (Varda's approved copy v1, 2026-10-29).
// Product pictures are real RhinoScore screens rendered with made-up demo data only
// (no real companies, customers, crews or prices).


import { DEMO_HREF as DEMO } from "./routes.js";
import { AppStoreBadge, AppStoreQr } from "./appstore.jsx";

const problems = [
  "Updates come by text, phone call and paper.",
  "You hear about a problem when the customer calls.",
  "Pay, invoices and paperwork take hours to piece together.",
];

const features = [
  ["Inspections and scores", "Score every site 1 to 10 with photos, and send polished reports automatically.", "card-inspections", "An inspections list with a score out of 10 for each walkthrough and buttons for customer and internal PDF reports."],
  ["Crew check-in", "Time clock with photo and location check, so you know who was really on site.", "card-checkin", "A crew member's phone screen with a site and service picked and a large Check in button."],
  ["Work orders and supplies", "Track repairs, maintenance and reorders from request to done.", "card-workorders", "The maintenance screen with an open work order for a leaking faucet, ready to assign and mark done."],
  ["Subcontractors", "Check-ins per service, pay invoices, signed agreements, and reminders for missing W-9s.", "card-subcontractors", "A team screen listing phones to approve, documents to review, unsigned agreements and an expiring insurance certificate."],
  ["Customer portal", "Your customers see scores, photos and issue reports, without calling you.", "card-portal", "The customer portal home screen showing an overall inspection score of 9 out of 10 across their locations."],
  ["Safety training", "Courses with quizzes, e-signatures, renewal reminders and a compliance report.", "card-training", "Safety training modules such as Bloodborne Pathogens with how many people are current on each course."],
];

const selling = [
  "Read an RFP and start the estimate in minutes.",
  "Let AI draft the estimate, then send a polished proposal.",
  "Get follow-up reminders so no bid goes cold.",
  "See which customers are at risk of leaving, before they do.",
];

// The iPhone app section (App Store build spec, Varda 2026-11-07). EN first, then ES on the same page.
const crewApp = {
  en: {
    heading: "The RhinoScore app. Free for your whole crew.",
    body: "Your team clocks in, works their checklists and logs their work from their own iPhone. No signal in the basement? The app saves the work on the phone and sends it on its own when signal returns.",
    bullets: [
      "Clock in only when they're at the job site",
      "Today's sites, checklists and work orders in one place",
      "Saves work with no signal, then sends it when signal returns",
      "English and Spanish",
    ],
    android: "Using Android? Your crew can still use RhinoScore in the phone's web browser.",
  },
  es: {
    heading: "La app de RhinoScore. Gratis para todo su equipo.",
    body: "Su equipo marca su entrada, completa sus listas y registra su trabajo desde su propio iPhone. ¿Sin señal en el sótano? La app guarda el trabajo en el teléfono y lo envía sola cuando vuelve la señal.",
    bullets: [
      "Marcan su entrada solo cuando están en el sitio de trabajo",
      "Los sitios, listas y órdenes de trabajo del día en un solo lugar",
      "Guarda el trabajo sin señal y lo envía cuando vuelve",
      "Inglés y español",
    ],
    android: "¿Usa Android? Su equipo puede usar RhinoScore en el navegador del teléfono.",
  },
};

const roles = [
  ["Owners", "The whole operation at a glance."],
  ["Managers", "Today's priorities across every site."],
  ["Crews and subcontractors", "Clear, simple, in English or Spanish, on their phone."],
  ["Your customers", "Proof of the work, any time."],
];

function CrewApp({ lang }) {
  const t = crewApp[lang];
  return (
    <div className="crew-app-grid" lang={lang === "es" ? "es" : undefined}>
      <div>
        <h2>{t.heading}</h2>
        <p className="crew-app-body">{t.body}</p>
        <ul className="check-list">
          {t.bullets.map((b) => (
            <li key={b}>
              <svg className="tick" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="crew-app-get">
        <div className="crew-app-row">
          <AppStoreBadge lang={lang} />
          <AppStoreQr lang={lang} />
        </div>
        <p className="crew-app-android">{t.android}</p>
      </div>
    </div>
  );
}

function Devices() {
  return (
    <div className="devices">
      <figure className="laptop">
        <div className="laptop-screen">
          <img
            src="/shots/hero-dashboard.webp"
            width="1280"
            height="800"
            alt="RhinoScore owner dashboard: 6 crew on the clock, 5 items that need attention, 3 new messages, and this week's inspection score of 8.9 out of 10, with a Heads up list below."
            fetchPriority="high"
          />
        </div>
        <div className="laptop-base" aria-hidden="true" />
      </figure>
      <figure className="phone">
        <div className="phone-screen">
          <img
            src="/shots/hero-checkin.webp"
            width="780"
            height="1288"
            alt="RhinoScore crew phone screen: a site and service are selected and a large Check in button confirms the visit with a quick selfie."
          />
        </div>
      </figure>
    </div>
  );
}

export function HomePage() {
  return (
    <main className="home">
      <section className="home-hero">
        <div className="wrap home-hero-grid">
          <div className="home-hero-copy">
            <p className="hero-kicker">Run every site from one screen.</p>
            <h1>The Operational Intelligence Platform.</h1>
            <p className="hero-sub">Manage exceptions, <em>not data.</em></p>
            <p className="lede">
              RhinoScore brings your people, sites, work and customer reporting together, and tells you what needs
              attention before your customer notices.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={DEMO}>Request a demo</a>
              <a className="button secondary" href="/how-it-works">See how it works</a>
            </div>
            <div className="hero-app">
              <AppStoreBadge />
              <p>
                Crew on iPhone? Get the free app.
                <span lang="es">¿Su equipo usa iPhone? Descargue la app gratis.</span>
              </p>
            </div>
            <p className="hero-note">Built for teams across many locations. English and Spanish.</p>
          </div>
          <Devices />
        </div>
      </section>

      <section className="section home-problem">
        <div className="wrap">
          <h2>You can't be at every site. <span>Your problems know it.</span></h2>
          <ul className="problem-list">
            {problems.map((p) => (<li key={p}><span className="dash" aria-hidden="true" />{p}</li>))}
          </ul>
          <p className="problem-close">Owners manage <b>exceptions</b>, not data.</p>
        </div>
      </section>

      <section className="section" id="features">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What it does</span>
            <h2>Everything your operation runs on, in one place.</h2>
          </div>
          <div className="features">
            {features.map(([title, body, img, alt]) => (
              <article className="feature" key={title}>
                <div className="feature-shot">
                  <img src={`/shots/${img}.webp`} width="640" height="400" alt={alt} loading="lazy" decoding="async" />
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-sell">
        <div className="wrap home-sell-grid">
          <div>
            <span className="eyebrow">Win and keep accounts</span>
            <h2>Sell and serve from the same system.</h2>
          </div>
          <ul className="check-list">
            {selling.map((t) => (
              <li key={t}>
                <svg className="tick" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section audience">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Who uses it</span>
            <h2>One platform. Everyone sees what they need.</h2>
          </div>
          <div className="aud-list">
            {roles.map(([role, says]) => (
              <div className="aud-row plain" key={role}>
                <div className="role">{role}</div>
                <div className="says">{says}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section crew-app" id="app">
        <div className="wrap">
          <span className="eyebrow">For your crew</span>
          <CrewApp lang="en" />
          <div className="crew-app-es"><CrewApp lang="es" /></div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="wrap">
          <p>
            <b>Your data stays yours:</b> isolated by design, encrypted, exportable any time.{" "}
            <a href="/security">How we protect it <span aria-hidden="true">→</span></a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <h2>See it with <em>your own sites</em>.</h2>
            <p>A short walkthrough tailored to how your company runs. No pressure, no jargon.</p>
            <div className="hero-actions">
              <a className="button primary" href={DEMO}>Request a demo</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
