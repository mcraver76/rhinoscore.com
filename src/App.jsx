// RhinoScore — public marketing site
// Minimal, single-screen landing (immersive hero) + separate pages that explain.
// Industry-agnostic. Owned by Six10 Digital LLC (header + footer).

import { useEffect, useRef } from "react";

const OWNER = "Six10 Digital LLC";
const SUPPORT_EMAIL = "support@rhinoscore.com";
const DEMO = `mailto:${SUPPORT_EMAIL}?subject=RhinoScore%20demo%20request`;

const pillars = [
  ["Operational Visibility", "Know what's happening, know what isn't, and know what changed — across every location, in one connected view."],
  ["Operational Accountability", "Who owns it, what happened, what proof exists, and what still needs action. Nothing falls through the cracks."],
  ["Operational Intelligence", "Thousands of operational signals turned into a short list of priorities. Not more reports — better decisions."],
  ["Operational Simplicity", "Powerful underneath, simple where it matters. Everyone sees exactly what they need and nothing they don't."],
  ["Operational Confidence", "Everyone knows what to do, where to go, what changed, and what needs attention. Confidence is what teams run on."],
];

const before = ["Scattered systems", "Emails and texts", "Spreadsheets", "Paper forms", "Memory and phone calls", "Fire drills", "Reactive management"];
const after = ["Clear priorities", "Connected operations", "Visibility", "Accountability", "Faster decisions", "Proactive leadership", "Confidence"];

const audience = [
  ["Executive", "The whole operation, at a glance", "I can finally see the operation."],
  ["Operations Leader", "Every location, one connected view", "I can finally run the operation."],
  ["Site Manager", "Today's priorities, surfaced for you", "I know exactly what needs attention."],
  ["Team Member", "Clear, simple, in your hands", "I know exactly what to do."],
  ["Customer", "Transparency they can trust", "I finally have visibility."],
];

const steps = [
  ["Connect", "Bring the people, locations, work, issues, assets, documents, and operational data you already have into one place."],
  ["Surface", "RhinoScore highlights what needs attention, what changed, what's at risk, and what action comes next."],
  ["Act", "Owners manage exceptions instead of chasing updates — clearer priorities, faster decisions, proactive leadership."],
];

/* ---------- shared bits ---------- */

function Check() {
  return (
    <svg className="tick" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10.5l3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OwnerBar() {
  return (
    <div className="ownerbar">
      RhinoScore is owned by <b>{OWNER}</b>
    </div>
  );
}

function Brand() {
  return (
    <a className="brand" href="/" aria-label="RhinoScore home">
      <img src="/brand/rhino.png" alt="" width="32" height="32" />
      <span><span className="b-rhino">Rhino</span><span className="b-score">Score</span></span>
    </a>
  );
}

function Nav() {
  return (
    <header className="site-nav">
      <div className="wrap nav-inner">
        <Brand />
        <nav className="nav-links" aria-label="Primary">
          <a href="/platform">The platform</a>
          <a href="/how-it-works">How it works</a>
          <a href="/who-its-for">Who it's for</a>
          <a href="/account">Account &amp; data</a>
        </nav>
        <div className="nav-cta">
          <a className="button secondary" href={`mailto:${SUPPORT_EMAIL}`}>Talk to us</a>
          <a className="button primary" href={DEMO}>Request a demo</a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <Brand />
          <p className="owner-note">
            The Operational Intelligence Platform — clarity, accountability, and
            actionable priorities for complex, multi-location organizations.
          </p>
          <p className="owner-note">
            RhinoScore is owned and operated by <b>{OWNER}</b>.
          </p>
        </div>
        <nav className="footer-cols" aria-label="Footer">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="/platform">The platform</a>
            <a href="/how-it-works">How it works</a>
            <a href="/who-its-for">Who it's for</a>
            <a href={DEMO}>Request a demo</a>
          </div>
          <div className="footer-col">
            <h4>Legal &amp; data</h4>
            <a href="/account">Account &amp; data</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </div>
        </nav>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 {OWNER}. All rights reserved.</span>
        <span>RhinoScore is a product of {OWNER}.</span>
      </div>
    </footer>
  );
}

/* ---------- Landing (minimal, single screen) ---------- */

function Landing() {
  return (
    <section className="landing">
      <div className="landing-inner">
        <span className="hud-c tl" aria-hidden="true" />
        <span className="hud-c tr" aria-hidden="true" />
        <span className="hud-c bl" aria-hidden="true" />
        <span className="hud-c br" aria-hidden="true" />
        <div className="hud-bar">
          <span className="hud-bar-id">Operational Intelligence Platform</span>
          <span className="hud-bar-live"><span className="hud-live" aria-hidden="true" />Live</span>
        </div>
        <h1>RhinoScore turns operational complexity into <em>clear, actionable intelligence</em>.</h1>
        <p className="lede">
          Know what needs attention before it becomes a bigger problem — so
          leaders manage exceptions, not data.
        </p>
        <div className="hero-actions">
          <a className="button primary" href={DEMO}>Request a demo</a>
          <a className="button secondary" href="/platform">Explore the platform</a>
        </div>
      </div>
      <a className="scroll-hint" href="/platform">See what it does <span aria-hidden="true">↓</span></a>
    </section>
  );
}

/* ---------- content sections (used on the explainer pages) ---------- */

function Pillars() {
  return (
    <section className="section" id="platform">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The platform</span>
          <h2>Five things every operation needs.</h2>
          <p>
            RhinoScore connects the people, locations, work, issues, assets,
            documents, and communications that already exist across your
            organization — and makes them legible.
          </p>
        </div>
        <div className="pillars">
          {pillars.map(([title, body], i) => (
            <article className="pillar" key={title}>
              <div className="pnum">0{i + 1}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Principle() {
  return (
    <section className="principle">
      <div className="wrap">
        <p className="k">Owners manage <b>exceptions</b>, not data.</p>
        <p className="sub">
          Organizations don't need more data. They need clarity, accountability,
          and the few things that actually require action right now.
        </p>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="problem-quote">
          Operations don't fail because people don't care.{" "}
          <span>They fail because information arrives too late, lives in too many places, and no one has the complete picture.</span>
        </p>
        <div className="compare">
          <div className="compare-card">
            <h3>Without RhinoScore</h3>
            <ul className="compare-list">
              {before.map((t) => (<li key={t}><span className="dash" aria-hidden="true" />{t}</li>))}
            </ul>
          </div>
          <div className="compare-card after">
            <h3>With RhinoScore</h3>
            <ul className="compare-list">
              {after.map((t) => (<li key={t}><Check />{t}</li>))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function How() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>From scattered information to the next right action.</h2>
          <p>
            Instead of forcing leaders to chase updates, RhinoScore helps surface
            what requires attention, what changed, what's at risk, and what comes
            next.
          </p>
        </div>
        <div className="steps">
          {steps.map(([title, body], i) => (
            <article className="step" key={title}>
              <div className="snum">{i + 1}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section className="section audience" id="who">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">One platform, every role</span>
          <h2>Same platform. Different promise.</h2>
          <p>
            Everyone from the front line to the executive team sees RhinoScore
            differently — because everyone needs something different from the
            operation.
          </p>
        </div>
        <div className="aud-list">
          {audience.map(([role, sub, says]) => (
            <div className="aud-row" key={role}>
              <div className="role">{role}<span>{sub}</span></div>
              <div className="says">{says}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="cta-band">
          <h2>From complexity to <em>clarity</em>.</h2>
          <p>A short walkthrough of RhinoScore, tailored to how your organization actually runs. No pressure, no jargon.</p>
          <div className="hero-actions">
            <a className="button primary" href={DEMO}>Request a demo</a>
            <a className="button secondary" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- explainer pages ---------- */

function PlatformPage() {
  return (<main><Pillars /><Principle /><CtaBand /></main>);
}
function HowPage() {
  return (<main><Problem /><How /><CtaBand /></main>);
}
function WhoPage() {
  return (<main><Audience /><CtaBand /></main>);
}

/* ---------- account & data (unsubscribe / delete) ---------- */

function AccountPage() {
  return (
    <main>
      <section className="policy-hero">
        <div className="wrap">
          <p className="updated">Account &amp; Data</p>
          <h1>Managing your account and your data.</h1>
          <p>
            RhinoScore, a product of {OWNER}, gives you direct control over your
            emails and your account. Here's how to unsubscribe, delete your
            account, or ask us for your data — plainly, with no runaround.
          </p>
        </div>
      </section>
      <div className="wrap">
        <div className="policy-stack">
          <section className="policy-section">
            <h2>Unsubscribe from emails</h2>
            <div className="legal-steps">
              <div className="legal-step">
                <div>
                  <h3>Use the unsubscribe link</h3>
                  <p>Every marketing email from RhinoScore includes an “unsubscribe” link at the bottom. Click it and you're removed right away — no account or password needed.</p>
                </div>
              </div>
              <div className="legal-step">
                <div>
                  <h3>Or just email us</h3>
                  <p>Prefer to ask a person? Email <a href={`mailto:${SUPPORT_EMAIL}?subject=Unsubscribe`}>{SUPPORT_EMAIL}</a> with “Unsubscribe” and we'll take care of it.</p>
                </div>
              </div>
            </div>
            <p className="note" style={{ marginTop: 16, color: "var(--ink-mute)", fontWeight: 400 }}>
              If you have an active RhinoScore account, we may still send essential
              service messages (for example, security or billing notices) that keep
              your account working. Those stop when your account is closed.
            </p>
          </section>

          <section className="policy-section">
            <h2>Delete your account and data</h2>
            <div className="legal-steps">
              <div className="legal-step">
                <div>
                  <h3>From your account settings</h3>
                  <p>Signed-in RhinoScore users can request account deletion from their account settings. This removes your access and schedules your personal data for deletion.</p>
                </div>
              </div>
              <div className="legal-step">
                <div>
                  <h3>Or request it by email</h3>
                  <p>Email <a href={`mailto:${SUPPORT_EMAIL}?subject=Delete%20my%20account`}>{SUPPORT_EMAIL}</a> from the address on your account with “Delete my account.” We'll confirm and process your request, typically within 30 days.</p>
                </div>
              </div>
            </div>
            <p className="note" style={{ marginTop: 16, color: "var(--ink-mute)", fontWeight: 400 }}>
              Some records may be retained where required for legal, security, or
              legitimate business reasons — for example, records tied to billing or
              fraud prevention. We'll tell you if anything must be kept, and why.
            </p>
          </section>

          <section className="policy-section">
            <h2>Access, correct, or export your data</h2>
            <p>
              You can ask for a copy of the personal data we hold about you, ask us
              to correct it, or ask us to restrict how it's used. Send your request
              to <a href={`mailto:${SUPPORT_EMAIL}?subject=Data%20request`}>{SUPPORT_EMAIL}</a> and we'll respond promptly.
            </p>
          </section>

          <section className="policy-section">
            <h2>Who's responsible</h2>
            <p>
              RhinoScore is owned and operated by {OWNER}. For any account or data
              question, contact us at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

/* ---------- privacy + terms ---------- */

const policySections = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: July 15, 2026",
    intro: `This policy explains how RhinoScore, a product of ${OWNER}, handles information for people who visit rhinoscore.com or use the RhinoScore platform.`,
    sections: [
      { title: "Information We Collect", items: [
        "Account details such as name, email address, and organization.",
        "Content and records you create in RhinoScore, and related operational data.",
        "Basic technical information such as device, browser, and log data.",
      ] },
      { title: "How We Use Information", body: "We use information to provide RhinoScore, maintain your account, respond to support requests, improve reliability and security, and meet legal obligations." },
      { title: "Sharing", body: "We do not sell personal information. We may share information with service providers that help operate RhinoScore, when required by law, or at your direction." },
      { title: "Your Choices", body: "You can unsubscribe from emails and request access, correction, export, or deletion of your data at any time. See the Account & data page for step-by-step instructions." },
      { title: "Contact", body: `For privacy questions, contact ${OWNER} at ${SUPPORT_EMAIL}.` },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: July 15, 2026",
    intro: `These terms govern your use of RhinoScore, a product of ${OWNER}.`,
    sections: [
      { title: "Use of RhinoScore", body: "RhinoScore provides operational visibility, accountability, and reporting tools. You are responsible for the information you enter and for using the platform in accordance with applicable laws and your organization's policies." },
      { title: "Accounts", body: "You agree to provide accurate account information and to keep your sign-in credentials secure. Contact us if you believe your account has been accessed without permission." },
      { title: "Your Content", body: `You retain responsibility for the content and records entered into RhinoScore. You grant ${OWNER} permission to process that content as needed to provide the service.` },
      { title: "Service Changes", body: "RhinoScore may update, improve, suspend, or discontinue features as the product evolves. We aim to communicate material changes clearly when they affect you." },
      { title: "Governing Law & Contact", body: `These terms are governed by the laws of the State of Georgia, United States. Questions can be sent to ${OWNER} at ${SUPPORT_EMAIL}.` },
    ],
  },
};

function PolicyPage({ type }) {
  const page = policySections[type];
  return (
    <main>
      <section className="policy-hero">
        <div className="wrap">
          <p className="updated">{page.updated}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
      </section>
      <div className="wrap">
        <div className="policy-stack">
          {page.sections.map((s) => (
            <section className="policy-section" key={s.title}>
              <h2>{s.title}</h2>
              {s.items ? (
                <ul>{s.items.map((it) => (<li key={it}>{it}</li>))}</ul>
              ) : (
                <p>{s.body}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

/* ---------- router ---------- */

export default function App() {
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  }, []);

  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  let page;
  if (path === "/platform") page = <PlatformPage />;
  else if (path === "/how-it-works") page = <HowPage />;
  else if (path === "/who-its-for") page = <WhoPage />;
  else if (path === "/privacy") page = <PolicyPage type="privacy" />;
  else if (path === "/terms") page = <PolicyPage type="terms" />;
  else if (path === "/account") page = <AccountPage />;
  else page = <Landing />;

  return (
    <>
      <div className="site-bg" aria-hidden="true">
        <video ref={videoRef} className="site-bg-video" autoPlay muted loop playsInline preload="auto">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="site-bg-veil" />
      </div>
      <OwnerBar />
      <Nav />
      {page}
      <Footer />
    </>
  );
}
