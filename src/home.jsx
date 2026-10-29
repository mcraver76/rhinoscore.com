// Home page (Varda's approved copy v1, 2026-10-29) and the /demo request form.
// Product pictures are real RhinoScore screens rendered with made-up demo data only
// (no real companies, customers, crews or prices).

import { useState } from "react";
import { SUPPORT_EMAIL } from "./sms.jsx";

const DEMO = "/demo";

const problems = [
  "Updates come by text, phone call and paper.",
  "You hear about a missed area when the customer calls.",
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

const roles = [
  ["Owners", "The whole operation at a glance."],
  ["Managers", "Today's priorities across every site."],
  ["Crews and subcontractors", "Clear, simple, in English or Spanish, on their phone."],
  ["Your customers", "Proof of the work, any time."],
];

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
            width="390"
            height="844"
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
            <span className="eyebrow">Operational Intelligence Platform</span>
            <h1>Run every site from <em>one screen</em>.</h1>
            <p className="lede">
              RhinoScore brings your inspections, crews, work orders, subcontractors and customer reporting
              together, and tells you what needs attention before your customer notices.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={DEMO}>Request a demo</a>
              <a className="button secondary" href="/how-it-works">See how it works</a>
            </div>
            <p className="hero-note">Built for service companies with crews in many locations. English and Spanish.</p>
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

/* ---------- /demo: request form ---------- */

const INDUSTRIES = ["Cleaning / janitorial", "Facilities / maintenance", "Property management", "Schools / education", "Healthcare", "Other"];
const SITE_COUNTS = [["1-5", "1 to 5"], ["6-25", "6 to 25"], ["26-100", "26 to 100"], ["100+", "More than 100"]];

export function DemoPage() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const r = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const out = await r.json().catch(() => ({}));
      if (r.ok && out.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      setError(out.error === "invalid" ? "Please check your name, work email, phone and company, then try again." : "");
    } catch {
      setError("");
    }
    setStatus("error");
  }

  return (
    <main>
      <section className="policy-hero">
        <div className="wrap">
          <p className="updated">Request a demo</p>
          <h1>See RhinoScore with your own sites.</h1>
          <p>Tell us a little about your company and we'll set up a short walkthrough tailored to how you run. No pressure, no jargon.</p>
        </div>
      </section>
      <div className="wrap">
        <div className="demo-wrap">
          {status === "sent" ? (
            <div className="policy-section demo-done" role="status">
              <h2>Thanks, we got it.</h2>
              <p>We'll reach out soon to find a time that works. Questions before then? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
            </div>
          ) : (
            <form className="demo-form policy-section" onSubmit={submit} noValidate={false}>
              <div className="field-row">
                <label>
                  <span>Your name *</span>
                  <input name="name" type="text" autoComplete="name" required maxLength={100} />
                </label>
                <label>
                  <span>Company *</span>
                  <input name="company" type="text" autoComplete="organization" required maxLength={150} />
                </label>
              </div>
              <div className="field-row">
                <label>
                  <span>Work email *</span>
                  <input name="email" type="email" autoComplete="email" required maxLength={200} />
                </label>
                <label>
                  <span>Phone (optional)</span>
                  <input name="phone" type="tel" autoComplete="tel" maxLength={40} pattern="[0-9+().\-\s]{7,40}" />
                </label>
              </div>
              <div className="field-row">
                <label>
                  <span>Industry</span>
                  <select name="industry" defaultValue="">
                    <option value="">Choose one</option>
                    {INDUSTRIES.map((i) => (<option key={i} value={i}>{i}</option>))}
                  </select>
                </label>
                <label>
                  <span>Number of sites</span>
                  <select name="sites" defaultValue="">
                    <option value="">Choose one</option>
                    {SITE_COUNTS.map(([v, l]) => (<option key={v} value={v}>{l}</option>))}
                  </select>
                </label>
              </div>
              <label>
                <span>Anything we should know? (optional)</span>
                <textarea name="message" rows={4} maxLength={2000} />
              </label>
              {/* Honeypot for bots: hidden from people and screen readers. */}
              <label className="hp" aria-hidden="true">
                <span>Website</span>
                <input name="website" type="text" tabIndex={-1} autoComplete="off" />
              </label>
              {status === "error" && (
                <p className="form-error" role="alert">
                  {error || "Sorry, that didn't go through."} You can also email us at <a href={`mailto:${SUPPORT_EMAIL}?subject=Demo%20request`}>{SUPPORT_EMAIL}</a>.
                </p>
              )}
              <button className="button primary" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Request my demo"}
              </button>
              <p className="smallprint">
                We use these details only to set up your demo and follow up about RhinoScore. See our <a href="/privacy">Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
