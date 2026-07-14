/* RhinoScore marketing site — content written to the RhinoScore Marketing Foundation.
   Category: Operational Intelligence Platform.
   Promise: Know what needs attention before it becomes a bigger problem.
   Principle: Owners manage exceptions, not data.
   Voice: operationally experienced, calm, direct. Outcomes over technology. */

const SUPPORT_EMAIL = "support@rhinoscore.com";

/* ---------- shared bits ---------- */

function Check() {
  return (
    <svg className="tick" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 10.5l3.5 3.5L16 5.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Brand() {
  return (
    <a className="brand" href="/" aria-label="RhinoScore home">
      <img src="/brand/rhino.png" alt="" />
      <span>
        <span className="b-rhino">Rhino</span>
        <span className="b-score">Score</span>
      </span>
    </a>
  );
}

function Nav() {
  return (
    <header className="site-nav">
      <div className="wrap nav-inner">
        <Brand />
        <nav className="nav-links" aria-label="Primary">
          <a href="/#platform">Platform</a>
          <a href="/#how">How it works</a>
          <a href="/#who">Who it's for</a>
          <a href="/support">Support</a>
        </nav>
        <div className="nav-cta">
          <a className="button secondary" href="/support">
            Talk to us
          </a>
          <a className="button primary" href="/support">
            Request a demo
          </a>
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
          <div className="brand" style={{ marginBottom: 16 }}>
            <img src="/brand/rhino.png" alt="" />
            <span>
              <span className="b-rhino">Rhino</span>
              <span className="b-score">Score</span>
            </span>
          </div>
          <p>
            The Operational Intelligence Platform for complex, multi-location
            organizations. Turn operational complexity into clear, actionable
            intelligence.
          </p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href="/#platform">Platform</a>
          <a href="/#how">How it works</a>
          <a href="/#who">Who it's for</a>
          <a href="/support">Support</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 RhinoScore. All rights reserved.</span>
        <span>Know what needs attention before it becomes a bigger problem.</span>
      </div>
    </footer>
  );
}

/* ---------- home sections ---------- */

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Operational Intelligence Platform</span>
          <h1>Know what needs attention before it becomes a bigger problem.</h1>
          <p className="lede">
            RhinoScore turns operational complexity across every location into
            clear, actionable intelligence — so owners manage exceptions, not
            data.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/support">
              Request a demo
            </a>
            <a className="button secondary" href="#platform">
              See the platform
            </a>
          </div>
          <p className="hero-note">
            Built and proven with multi-site building service operations.
          </p>
        </div>
        <div className="device">
          <img
            src="/shots/dashboard.png"
            alt="RhinoScore dashboard showing an average operational score across sites and inspections"
          />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const before = [
    "Disconnected systems and spreadsheets",
    "Updates buried in emails and texts",
    "Paper forms and things kept in memory",
    "Problems found after the customer finds them",
    "Reactive management and fire drills",
  ];
  const after = [
    "One connected picture of the operation",
    "Clear priorities and what changed",
    "Documented accountability and proof",
    "Problems surfaced before they escalate",
    "Proactive, confident leadership",
  ];
  return (
    <section className="section">
      <div className="wrap">
        <p className="problem-quote">
          Operations don't fail because people don't care.{" "}
          <span>
            They fail because information arrives too late, lives in too many
            places, and no one has a complete picture.
          </span>
        </p>
        <div className="compare">
          <div className="compare-card">
            <h3>Without RhinoScore</h3>
            <ul className="compare-list">
              {before.map((t) => (
                <li key={t}>
                  <span className="dash" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="compare-card after">
            <h3>With RhinoScore</h3>
            <ul className="compare-list">
              {after.map((t) => (
                <li key={t}>
                  <Check />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Principle() {
  return (
    <section className="principle">
      <div className="wrap">
        <p className="k">
          Owners manage <b>exceptions</b>, not data.
        </p>
        <p className="sub">
          Organizations don't need more data. They need clarity, accountability,
          and the few things that actually require action right now.
        </p>
      </div>
    </section>
  );
}

const PILLARS = [
  [
    "Operational Visibility",
    "Know what is happening, what is not happening, and what changed — across every location, in one place.",
  ],
  [
    "Operational Accountability",
    "Who owns it, what happened, what proof exists, and what still requires action. Nothing falls through the cracks.",
  ],
  [
    "Operational Intelligence",
    "Turn thousands of operational signals into priorities. Not more reports — better decisions.",
  ],
  [
    "Operational Simplicity",
    "Powerful underneath, simple where it matters. Everyone knows exactly what to do next.",
  ],
  [
    "Operational Confidence",
    "Everyone knows where to go, what changed, and what needs attention. Confidence is what customers ultimately buy.",
  ],
];

function Pillars() {
  return (
    <section className="section" id="platform">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The platform</span>
          <h2>Five things every operation needs.</h2>
          <p>
            RhinoScore connects the people, locations, work, inspections, issues,
            and communications that already exist across your organization — and
            makes them legible.
          </p>
        </div>
        <div className="pillars">
          {PILLARS.map(([title, body], i) => (
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

const FEATURES = [
  {
    eyebrow: "Operational Visibility",
    title: "See the whole operation at a glance.",
    body: "A single, current picture of every site — how work is trending, where it changed, and where it needs attention. Information shouldn't have to be chased.",
    shot: "/shots/dashboard.png",
    alt: "Operational scoreboard across all sites",
    points: [
      "One score for the health of the operation",
      "Trends across sites and inspections",
      "What changed, surfaced automatically",
    ],
    reverse: false,
  },
  {
    eyebrow: "Accountability & Proof",
    title: "Work you can see — and prove.",
    body: "Track work from assignment through completion with documented accountability. The field checks in, captures proof, and it lands on the site's record.",
    shot: "/shots/field.png",
    alt: "Field view for checking in and logging proof of work",
    points: [
      "Check in on location and on time",
      "Photo and video proof on the record",
      "Works in the field, in the language teams speak",
    ],
    reverse: true,
  },
  {
    eyebrow: "Operational Intelligence",
    title: "Turn signals into priorities.",
    body: "Inspections and quality checks become a clear, comparable signal over time — so leaders act on what matters instead of sifting through everything.",
    shot: "/shots/inspections.png",
    alt: "Inspection scoring view",
    points: [
      "Consistent scoring across locations",
      "Issues flagged before customers notice",
      "Priorities, not another report to read",
    ],
    reverse: false,
  },
  {
    eyebrow: "Customer Confidence",
    title: "Give customers real visibility.",
    body: "Share the proof and the picture with the people you serve. When customers can see the work, trust follows — and accounts stay.",
    shot: "/shots/portal.png",
    alt: "Customer-facing visibility portal",
    points: [
      "Transparency your customers can log into",
      "Proof of service, not promises",
      "Fewer surprises, longer relationships",
    ],
    reverse: true,
  },
];

function Features() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        {FEATURES.map((f) => (
          <div
            className={`feature-row${f.reverse ? " reverse" : ""}`}
            key={f.title}
          >
            <div className="feature-copy">
              <span className="eyebrow">{f.eyebrow}</span>
              <h2>{f.title}</h2>
              <p>{f.body}</p>
              <ul className="mini">
                {f.points.map((p) => (
                  <li key={p}>
                    <Check />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="feature-media">
              <img src={f.shot} alt={f.alt} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const AUDIENCE = [
  ["Executive", "Owner / leadership", "I can finally see the operation."],
  ["Operations Leader", "Regional / ops", "I can finally run the operation."],
  ["Site Manager", "On the ground", "I know exactly what requires attention."],
  ["Employee", "In the field", "I know exactly what to do."],
  ["Customer", "The people you serve", "I finally have visibility."],
];

function Audience() {
  return (
    <section className="section audience">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">One platform, every role</span>
          <h2>Same platform. Different promise.</h2>
          <p>
            Everyone sees RhinoScore differently — because everyone needs
            something different from the operation.
          </p>
        </div>
        <div className="aud-list">
          {AUDIENCE.map(([role, sub, says]) => (
            <div className="aud-row" key={role}>
              <div className="role">
                {role}
                <span>{sub}</span>
              </div>
              <div className="says">{says}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  [
    "Connect",
    "Bring people, locations, work, inspections, and communications into one place — no more scattered systems.",
  ],
  [
    "Surface",
    "RhinoScore highlights what changed, what's at risk, and what requires attention across every site.",
  ],
  [
    "Act",
    "Teams act on clear priorities with documented accountability — and leaders lead proactively.",
  ],
];

function How() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>From scattered information to clear action.</h2>
        </div>
        <div className="steps">
          {STEPS.map(([title, body], i) => (
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

function Who() {
  return (
    <section className="section" id="who">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Who it's for</span>
          <h2>Built for complex, multi-location operations.</h2>
          <p>
            RhinoScore is building the Operational Intelligence Platform for
            organizations that run work across many locations. Building service
            operations are the proving ground; the model is designed to travel.
          </p>
        </div>
        <div className="industries">
          <article className="industry">
            <span className="tag">Proving ground</span>
            <h3>Building service contractors</h3>
            <p>
              Multi-site teams that live or die on consistency, proof of work,
              and keeping customers confident.
            </p>
          </article>
          <article className="industry">
            <span className="tag">Validating configurability</span>
            <h3>Schools & districts</h3>
            <p>
              Many buildings, many stakeholders, high accountability — a proving
              case for how far the platform configures.
            </p>
          </article>
          <article className="industry">
            <span className="tag">Future direction</span>
            <h3>More multi-location operations</h3>
            <p>
              As the operational model demonstrates its adaptability, additional
              industries follow.
            </p>
          </article>
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
          <h2>See what your operation looks like with a complete picture.</h2>
          <p>
            We'll walk through RhinoScore against your real operation — your
            sites, your work, your priorities.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/support">
              Request a demo
            </a>
            <a className="button secondary" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Principle />
        <Pillars />
        <Features />
        <Audience />
        <How />
        <Who />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}

/* ---------- policy + support pages ---------- */

const policySections = {
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: July 14, 2026",
    intro:
      "This policy explains how RhinoScore handles information for people who visit rhinoscore.com or use the RhinoScore platform. This is a starting template — the bracketed placeholders should be replaced with your final legal entity and contact details, and reviewed by counsel, before public launch.",
    sections: [
      {
        title: "Information We Collect",
        items: [
          "Account details such as name, email address, and organization.",
          "Operational content you enter — sites, work records, inspections, notes, photos, and related data.",
          "Basic technical information such as device, browser, and log data.",
        ],
      },
      {
        title: "How We Use Information",
        body: "We use information to provide RhinoScore, maintain accounts, store operational records, respond to support requests, improve reliability, and meet legal or security obligations.",
      },
      {
        title: "Sharing",
        body: "We do not sell personal information. We may share information with service providers that help operate RhinoScore, when required by law, or at your direction.",
      },
      {
        title: "Data Choices",
        body: `You may request access, correction, or deletion of your information by contacting ${SUPPORT_EMAIL}. Some records may be retained where needed for security, legal, or operational reasons.`,
      },
      {
        title: "Contact",
        body: `For privacy questions, contact [Your Legal Entity Name] at ${SUPPORT_EMAIL}.`,
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    updated: "Last updated: July 14, 2026",
    intro:
      "These terms are a practical starting template for RhinoScore. Replace the bracketed placeholders with your final legal entity and contact details, and have counsel review, before public launch.",
    sections: [
      {
        title: "Use of RhinoScore",
        body: "RhinoScore provides operational visibility, accountability, and intelligence tools. You are responsible for the information you enter and for using the platform in accordance with applicable laws and your organization's policies.",
      },
      {
        title: "Accounts",
        body: "You agree to provide accurate account information and to keep your sign-in credentials secure. Contact support if you believe an account has been accessed without permission.",
      },
      {
        title: "Your Content",
        body: "You retain responsibility for the sites, records, inspections, and other content entered into RhinoScore. You grant RhinoScore permission to process that content as needed to provide the service.",
      },
      {
        title: "Service Changes",
        body: "RhinoScore may update, improve, suspend, or discontinue features as the product evolves. We aim to communicate material changes clearly when they affect users.",
      },
      {
        title: "Contact",
        body: `Questions about these terms can be sent to [Your Legal Entity Name] at ${SUPPORT_EMAIL}.`,
      },
    ],
  },
};

function PolicyPage({ type }) {
  const page = policySections[type];
  return (
    <>
      <Nav />
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
                  <ul>
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{s.body}</p>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SupportPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="policy-hero">
          <div className="wrap">
            <p className="updated">RhinoScore support</p>
            <h1>Talk to us.</h1>
            <p>
              For a demo, setup questions, account help, or data requests, reach
              the RhinoScore team. We'll respond with a real answer, not a
              runaround.
            </p>
          </div>
        </section>
        <div className="wrap">
          <div className="policy-stack">
            <section className="policy-section">
              <h2>Email</h2>
              <p>
                <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: "#22c55e" }}>
                  {SUPPORT_EMAIL}
                </a>
              </p>
              <p className="note">
                Note: point this at a real inbox before launch.
              </p>
            </section>
            <section className="policy-section">
              <h2>Request a demo</h2>
              <p>
                Tell us a bit about your operation — how many locations, what
                you run, and where things fall through the cracks today. We'll
                walk RhinoScore through your real world.
              </p>
            </section>
            <section className="policy-section">
              <h2>Privacy & data requests</h2>
              <p>
                Use the same address for account access, correction, export, or
                deletion requests.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const path = window.location.pathname;
  if (path === "/privacy") return <PolicyPage type="privacy" />;
  if (path === "/terms") return <PolicyPage type="terms" />;
  if (path === "/support") return <SupportPage />;
  return <HomePage />;
}
