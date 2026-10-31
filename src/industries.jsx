// RhinoScore — industry pages (Varda's copy v1, 2026-10-31). HIDDEN for now (Michael 10-31 5:25: "keep the
// pages hidden on the main site, but go ahead and build them out for ourselves"): reachable by direct link only —
// not in the nav, the home page or the sitemap, and served with noindex (routes.js HIDDEN_ROUTES + vercel.json).
// Live features only (each "today" line checked against the app code by Galadriel 10-31); the rest is "Coming".
import { DEMO_HREF } from "./routes.js";

const PILOT_HREF = "mailto:support@rhinoscore.com?subject=Office-building%20pilot";

function Hero({ kicker, title, sub, actions }) {
  return (
    <section className="policy-hero industry-hero">
      <div className="wrap">
        <span className="eyebrow">The Operational Intelligence Platform</span>
        <p className="hero-kicker" style={{ marginTop: 18 }}>{kicker}</p>
        <h1>{title}</h1>
        <p>{sub}</p>
        <div className="hero-actions" style={{ marginTop: 28 }}>{actions}</div>
      </div>
    </section>
  );
}

function Features({ eyebrow, title, items }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className="pillars">
          {items.map(([h, body], i) => (
            <article className="pillar" key={h}>
              <div className="pnum">{String(i + 1).padStart(2, "0")}</div>
              <h3>{h}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Prose({ eyebrow, title, children }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

function Coming({ items }) {
  return (
    <Prose eyebrow="Coming" title="What's next.">
      <ul className="coming-list">
        {items.map((x) => <li key={x}>{x}</li>)}
      </ul>
    </Prose>
  );
}

function Close({ actions, word = "buildings" }) {
  return (
    <>
      <section className="principle">
        <div className="wrap">
          <p className="k">Manage <b>exceptions</b>, not data.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <h2>See it with your own <em>{word}</em>.</h2>
            <p>A short walkthrough of RhinoScore, tailored to how your team actually runs. No pressure, no jargon.</p>
            <div className="hero-actions">{actions}</div>
          </div>
        </div>
      </section>
    </>
  );
}

const demo = <a className="button primary" href={DEMO_HREF}>Request a demo</a>;

/* ---------- /industries/building-services ---------- */
export function BuildingServicesPage() {
  return (
    <main>
      <Hero
        kicker="For building service contractors"
        title="Run every site from one screen."
        sub="Janitorial, custodial, landscaping and other building services. See what was done, where and when, and fix what wasn't before your customer calls."
        actions={<>{demo}<a className="button secondary" href="/#features">See how it works</a></>}
      />
      <Features eyebrow="Today" title="What you get today." items={[
        ["Proof of work at every site.", "Crews clock in with a selfie and a job-site check, and log their work with photos. You know who was there and when."],
        ["Scored inspections.", "Supervisors score each area 1–10 with photos and notes. AI writes the summary, and a PDF report goes to your customer."],
        ["A portal for your customers.", "Your customers sign in to see their results and report an issue, so fewer surprises reach your phone."],
        ["Work orders and supplies.", "Track requests to the finish, and reorder supplies before a site runs out."],
        ["Subcontractor management.", "Crew check-ins, pay invoices built from the actual work, missing-paperwork tracking and e-signed agreements."],
        ["Training that sticks.", "Safety courses with quizzes, e-signatures, re-certification and a compliance report."],
        ["Selling in the same system.", "Estimates and emailed proposals, an RFP reader, AI-drafted estimates, follow-up reminders, a prospect list with win chances, and alerts when a customer looks at risk."],
        ["English and Spanish", "for every crew member."],
      ]} />
      <Prose eyebrow="Why it matters" title="Most days, most sites are fine.">
        <p>RhinoScore shows you the few that aren't (a missed check-in, a low score, an open work order) so your managers spend their time on exceptions, not on chasing data.</p>
      </Prose>
      <Close actions={demo} word="sites" />
    </main>
  );
}

/* ---------- /industries/schools ---------- */
export function SchoolsPage() {
  return (
    <main>
      <Hero
        kicker="For K-12 school districts"
        title="Every building, one screen."
        sub="For in-house custodial and facilities teams. See which buildings need attention tonight, and show leadership the work your custodians do."
        actions={demo}
      />
      <Features eyebrow="Today" title="What your team can use today." items={[
        ["Scored building walkthroughs.", "Score each area with photos and notes, then share a PDF report with principals and leadership."],
        ["Cleaning schedules by area.", "Daily, weekly, monthly and quarterly tasks for every area."],
        ["QR codes at every building.", "Custodians check in, and the time clock confirms location with a quick selfie."],
        ["Send to Maintenance.", "A custodian spots a problem and sends a work order in a few taps."],
        ["Custodial supplies.", "See stock levels by building and reorder before they run out."],
        ["Safety training,", "such as bloodborne pathogens, with sign-offs and a compliance report."],
        ["Team messaging", "for supervisors and night-shift custodians."],
        ["English and Spanish", "in the custodian's phone app."],
        ["Designed to hold no student data.", "RhinoScore tracks buildings and the work done in them."],
      ]} />
      <Coming items={["Cleanliness scoring based on APPA levels", "A district-wide view across all schools"]} />
      <Close actions={demo} />
    </main>
  );
}

/* ---------- /industries/property-management ---------- */
export function PropertyManagementPage() {
  const pilot = <a className="button primary" href={PILOT_HREF}>Join the office-building pilot</a>;
  return (
    <main>
      <Hero
        kicker="For property management companies"
        title="Every property, one screen."
        sub="Scored inspections, owner-ready reports and a portal for owners, across your whole portfolio."
        actions={<>{pilot}<a className="button secondary" href={DEMO_HREF}>Request a demo</a></>}
      />
      <Features eyebrow="Office properties" title="Built for office buildings first." items={[
        ["Property inspections, scored.", "Score each area (lobby, restrooms, suites, common areas) 1–10 with photos. In English and Spanish."],
        ["You choose what the owner sees.", "Share the inspections and photos that matter. Owners see a clear, polished picture, not day-to-day noise."],
        ["Owner reports by email,", "with photos."],
        ["An owner portal.", "Owner contacts sign in, see results and report an issue."],
        ["Work orders", "from report to finish."],
        ["Your whole portfolio in one account,", "each property with its own contacts."],
        ["QR codes on areas and equipment.", "Staff scan to check in at an area, or to see a machine's repair history and log a repair."],
        ["Time clock for your in-house staff,", "such as porters and maintenance techs."],
      ]} />
      <Prose eyebrow="Retail and shopping centers" title="The same view, outdoors too.">
        <p>Common areas, lot sweeping, porters and outdoor work: inspect each zone of a center, score it, and show the owner with photos. The same portfolio view, the same owner portal.</p>
      </Prose>
      <Coming items={[
        "Vendor visit proof reports",
        "Tenant service requests by QR code",
        "Vendor insurance (COI) tracking and reminders",
        "Vendor scorecards",
        "Monthly owner report packs",
        "Property-management words throughout the app (Owner, Property, Vendor, Service request)",
      ]} />
      <Prose eyebrow="Office-building pilot" title="Help shape what's next.">
        <p>We're looking for a small number of office property managers to shape these next features with us.</p>
        <div className="hero-actions" style={{ marginTop: 24 }}>{pilot}</div>
      </Prose>
      <Close actions={demo} word="properties" />
    </main>
  );
}
