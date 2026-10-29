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

Demo form: set in Vercel `RESEND_API_KEY`, `TURNSTILE_SECRET_KEY` and `VITE_TURNSTILE_SITE_KEY`
(Production). Previews use Cloudflare's test keys. Missing keys: the form shows the support email.
See the top of `api/demo-request.js` for the per-IP rate-limit rule to add in Vercel Firewall.
