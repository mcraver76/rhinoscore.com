// One list of public pages: used by the app (browser tab title) and by scripts/prerender.mjs
// (per-page <title>, description, canonical, share tags, sitemap.xml). Plain JS so Node can import it.

export const SITE = "https://rhinoscore.com";
export const APP_URL = "https://app.rhinoscore.com";
export const OG_IMAGE = `${SITE}/og-image.jpg`;
// Where every "Request a demo" button goes.
export const DEMO_HREF = "/demo";

export const ROUTES = [
  {
    path: "/",
    title: "RhinoScore — Operational Intelligence Platform",
    description: "The Operational Intelligence Platform. Run every site from one screen: inspections, teams, work orders, subcontractors and customer reporting together. Manage exceptions, not data. English and Spanish.",
  },
  {
    path: "/platform",
    title: "The platform | RhinoScore",
    description: "How RhinoScore gives service companies visibility, accountability and clear priorities across every site, crew and customer.",
  },
  {
    path: "/how-it-works",
    title: "How it works | RhinoScore",
    description: "From scattered texts, calls and paper to one connected view: how RhinoScore surfaces what needs attention across your sites.",
  },
  {
    path: "/who-its-for",
    title: "Who it's for | RhinoScore",
    description: "Owners, managers, crews, subcontractors and your customers: everyone sees what they need in RhinoScore, in English or Spanish.",
  },
  {
    path: "/security",
    title: "Security, trust & architecture | RhinoScore",
    description: "How RhinoScore keeps your data isolated, encrypted, access-controlled and exportable. Infrastructure, AI use and engineering practices explained.",
  },
  {
    path: "/demo",
    title: "Request a demo | RhinoScore",
    description: "Ask for a short RhinoScore walkthrough tailored to how your service company runs. No pressure, no jargon.",
  },
  {
    path: "/account",
    title: "Account & data | RhinoScore",
    description: "Unsubscribe from emails, delete your RhinoScore account, or ask for a copy of your data.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | RhinoScore",
    description: "How RhinoScore, a product of Six10 Digital LLC, collects, uses and protects information, including text messaging. English and Spanish.",
  },
  {
    path: "/terms",
    title: "Terms of Service | RhinoScore",
    description: "The RhinoScore Terms of Service, the same terms you accept in the app. English and Spanish.",
  },
  {
    path: "/sms-terms",
    title: "SMS Terms | RhinoScore Alerts",
    description: "Terms for RhinoScore Alerts text messages: what we send, how often, and how to get help or opt out. English and Spanish.",
  },
  {
    path: "/sms-opt-in",
    title: "Text alerts opt-in | RhinoScore",
    description: "A public copy of the in-app screen where RhinoScore users opt in to RhinoScore Alerts text messages. English and Spanish.",
  },
];

export const NOT_FOUND = {
  title: "Page not found | RhinoScore",
  description: "This page doesn't exist. Head back to the RhinoScore home page.",
};

export function routeFor(path) {
  const clean = path.replace(/\/+$/, "") || "/";
  return ROUTES.find((r) => r.path === clean) || null;
}
