const features = [
  "Capture scores from practices, events, and internal reviews",
  "Keep team history organized around a single scoring record",
  "Export clean summaries for coaches, operators, and program leads",
];

const steps = [
  ["Create", "Set up a scorecard for the team, event, or workflow you track."],
  ["Record", "Enter observations and scores from the field or after review."],
  ["Review", "Compare results over time and share the outcome with your group."],
];

const policySections = {
  privacy: {
    title: "Privacy Policy",
    eyebrow: "Last updated: July 14, 2026",
    intro:
      "This policy explains how RhinoScore handles information for people who visit rhinoscore.com or use the RhinoScore app. Replace the bracketed placeholders with your final business and contact details before publishing.",
    sections: [
      {
        title: "Information We Collect",
        items: [
          "Account details such as name, email address, and organization.",
          "Scorecard content, scoring records, notes, and related app data.",
          "Basic technical information such as device, browser, and log data.",
        ],
      },
      {
        title: "How We Use Information",
        body: "We use information to provide RhinoScore, maintain user accounts, save score records, respond to support requests, improve product reliability, and meet legal or security obligations.",
      },
      {
        title: "Sharing",
        body: "We do not sell personal information. We may share information with service providers that help operate RhinoScore, when required by law, or with your direction.",
      },
      {
        title: "Data Choices",
        body: "Users may request access, correction, or deletion of their information by contacting [support@rhinoscore.com]. Some records may be retained when needed for security, legal, or operational reasons.",
      },
      {
        title: "Contact",
        body: "For privacy questions, contact [Your Company Name] at [support@rhinoscore.com].",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    eyebrow: "Last updated: July 14, 2026",
    intro:
      "These terms are a practical starter for RhinoScore. Replace the bracketed placeholders with your final legal entity and contact details before publishing.",
    sections: [
      {
        title: "Use of RhinoScore",
        body: "RhinoScore provides scoring, tracking, and reporting tools. You are responsible for the information you enter and for using the app in accordance with applicable laws and team policies.",
      },
      {
        title: "Accounts",
        body: "You agree to provide accurate account information and to keep your sign-in credentials secure. Contact support if you believe your account has been accessed without permission.",
      },
      {
        title: "User Content",
        body: "You retain responsibility for scorecards, notes, and other content entered into RhinoScore. You grant RhinoScore permission to process that content as needed to provide the service.",
      },
      {
        title: "Service Changes",
        body: "RhinoScore may update, improve, suspend, or discontinue features as the product evolves. We aim to communicate material changes clearly when they affect users.",
      },
      {
        title: "Contact",
        body: "Questions about these terms can be sent to [Your Company Name] at [support@rhinoscore.com].",
      },
    ],
  },
};

function Header({ compact = false }) {
  return (
    <header className={compact ? "policy-hero" : "hero"}>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="RhinoScore home">
          <span className="brand-mark">R</span>
          <span>RhinoScore</span>
        </a>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/#features">Features</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/support">Support</a>
        </div>
      </nav>
      {!compact && <HeroContent />}
    </header>
  );
}

function HeroContent() {
  return (
    <div className="hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">RhinoScore.com</p>
        <h1>Scorekeeping that keeps the whole program aligned.</h1>
        <p className="lede">
          RhinoScore is a lightweight scoring and reporting app for teams that
          need a reliable place to capture performance, review results, and
          share score summaries.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/support">
            Contact support
          </a>
          <a className="button secondary" href="/privacy">
            View privacy policy
          </a>
        </div>
      </div>

      <div className="score-panel" aria-label="Sample RhinoScore dashboard">
        <div className="panel-header">
          <span>Live scorecard</span>
          <strong>84%</strong>
        </div>
        <div className="meter" aria-hidden="true">
          <span />
        </div>
        <div className="score-list">
          <div>
            <span>Accuracy</span>
            <strong>92</strong>
          </div>
          <div>
            <span>Consistency</span>
            <strong>81</strong>
          </div>
          <div>
            <span>Readiness</span>
            <strong>78</strong>
          </div>
        </div>
        <p>
          Example data shown for product preview. Your team controls the
          scorecards and records it creates in RhinoScore.
        </p>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <main>
      <Header />

      <section className="section" id="features">
        <div className="section-heading">
          <p className="eyebrow">Built for focused scoring</p>
          <h2>A simple home for performance records.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature" key={feature}>
              <span aria-hidden="true" />
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section workflow">
        <div className="section-heading">
          <p className="eyebrow">Workflow</p>
          <h2>From scorecard to shareable result.</h2>
        </div>
        <div className="step-grid">
          {steps.map(([title, body], index) => (
            <article className="step" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-band" aria-label="Account and policy links">
        <div>
          <h2>Public account information</h2>
          <p>
            RhinoScore is operated from rhinoscore.com. These pages are provided
            for account review, app verification, and user transparency.
          </p>
        </div>
        <div className="policy-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/support">Support</a>
        </div>
      </section>
    </main>
  );
}

function PolicyPage({ type }) {
  const page = policySections[type];

  return (
    <>
      <Header compact />
      <main className="policy-page">
        <div className="policy-intro">
          <p className="updated">{page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
        <div className="policy-stack">
          {page.sections.map((section) => (
            <section className="policy-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.items ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.body}</p>
              )}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

function SupportPage() {
  return (
    <>
      <Header compact />
      <main className="policy-page">
        <div className="policy-intro">
          <p className="updated">RhinoScore support</p>
          <h1>Need help with RhinoScore?</h1>
          <p>
            For account questions, app setup, scorecard issues, or data
            requests, contact the RhinoScore team. Replace the placeholder email
            with the support address you want Google and users to see.
          </p>
        </div>

        <div className="policy-stack">
          <section className="policy-section">
            <h2>Support Email</h2>
            <p>[support@rhinoscore.com]</p>
          </section>
          <section className="policy-section">
            <h2>Typical Response</h2>
            <p>
              We aim to respond to support requests within two business days.
              Include your account email, organization name, and a short
              description of the issue.
            </p>
          </section>
          <section className="policy-section">
            <h2>Privacy and Data Requests</h2>
            <p>
              Use the same support address for account access, correction,
              export, or deletion requests.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}

export default function App() {
  const path = window.location.pathname;

  if (path === "/privacy") {
    return <PolicyPage type="privacy" />;
  }

  if (path === "/terms") {
    return <PolicyPage type="terms" />;
  }

  if (path === "/support") {
    return <SupportPage />;
  }

  return <HomePage />;
}
