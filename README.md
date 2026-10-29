# RhinoScore Website

A quick React + Vite website for RhinoScore at `rhinoscore.com`.

## Pages

- `/` - product homepage
- `/privacy` - privacy policy starter
- `/terms` - terms of service starter
- `/demo` - request-a-demo form (posts to `api/demo-request.js`)
- `/platform`, `/how-it-works`, `/who-its-for`, `/security`, `/account`, `/sms-terms`, `/sms-opt-in`

Page titles/descriptions live in `src/routes.js`; `npm run build` writes one HTML file per page,
`404.html` and `sitemap.xml` (see `scripts/prerender.mjs`).

Demo form email: set `RESEND_API_KEY` in the Vercel project (optional `DEMO_TO`, `DEMO_FROM`).
Without it the form shows the support email instead.

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
