# RhinoScore Website

A quick React + Vite website for RhinoScore at `rhinoscore.com`.

## Pages

- `/` - product homepage
- `/privacy` - privacy policy starter
- `/terms` - terms of service starter
- `/demo` - request-a-demo form (posts to `api/demo-request.js`, Cloudflare Turnstile + Resend)
- `/platform`, `/how-it-works`, `/who-its-for`, `/security`, `/account`, `/sms-terms`, `/sms-opt-in`

Page titles/descriptions live in `src/routes.js`; `npm run build` writes one HTML file per page,
`404.html` and `sitemap.xml` (see `scripts/prerender.mjs`).

## Before Publishing

Replace the bracketed placeholders:

- `[support@rhinoscore.com]`
- `[Your Company Name]`

## Commands

```bash
npm install
npm run dev
npm run build
npm test
```

Demo form (`api/demo-request.js`):
- Vercel **Production** env only: `RESEND_API_KEY` (a NEW send-only Resend key restricted to the rhinoscore.com
  domain, not the app's key), `TURNSTILE_SECRET_KEY`, `VITE_TURNSTILE_SITE_KEY`. Michael creates these.
- Previews and local never send email: they check everything with Cloudflare's test keys and answer `dryRun`.
- Missing Production keys: the form shows the support email instead.
- **Required before merge:** Vercel Firewall rule: POST `/api/demo-request`, 3 per hour per IP, deny (429).
  Test: 4 POSTs with an invalid body (`{}`) to production; the 4th must return 429.
