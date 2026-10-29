// /demo: the "Request a demo" form. Posts JSON to /api/demo-request (Cloudflare Turnstile + Resend).

import { useEffect, useRef, useState } from "react";
import { SUPPORT_EMAIL } from "./sms.jsx";

/* ---------- /demo: request form ---------- */

// Keep in the same order as the server allow-list (api/demo-request.js).
const INDUSTRIES = ["Building services / facility services", "Schools & education", "Property management", "Healthcare", "Other service company"];
const SITE_COUNTS = [["1-5", "1 to 5"], ["6-25", "6 to 25"], ["26-100", "26 to 100"], ["100+", "More than 100"]];

// Cloudflare Turnstile (spam check, verified on the server). Live site: VITE_TURNSTILE_SITE_KEY.
// Previews and local builds: Cloudflare's documented always-pass TEST site key.
/* global __VERCEL_ENV__ */
const TURNSTILE_TEST_SITE_KEY = "1x00000000000000000000AA";
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || (__VERCEL_ENV__ === "production" ? "" : TURNSTILE_TEST_SITE_KEY);
const TURNSTILE_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

function useTurnstile(ref) {
  const widget = useRef(null);
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !ref.current) return undefined;
    let cancelled = false;
    const render = () => {
      if (cancelled || !ref.current || !window.turnstile || widget.current !== null) return;
      widget.current = window.turnstile.render(ref.current, { sitekey: TURNSTILE_SITE_KEY, action: "demo", theme: "dark" });
    };
    if (window.turnstile) render();
    else {
      let tag = document.querySelector(`script[src="${TURNSTILE_SRC}"]`);
      if (!tag) {
        tag = document.createElement("script");
        tag.src = TURNSTILE_SRC;
        tag.async = true;
        document.head.appendChild(tag);
      }
      tag.addEventListener("load", render);
    }
    return () => {
      cancelled = true;
      if (widget.current !== null && window.turnstile) window.turnstile.remove(widget.current);
      widget.current = null;
    };
  }, [ref]);
  return () => { if (widget.current !== null && window.turnstile) window.turnstile.reset(widget.current); };
}

export function DemoPage() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const tsRef = useRef(null);
  const resetTurnstile = useTurnstile(tsRef);

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
      setError(
        out.error === "invalid" ? "Please check your name, work email, phone and company, then try again."
          : out.error === "bot_check" ? "Please complete the quick check above the button, then try again." : "",
      );
      resetTurnstile();
    } catch {
      setError("");
      resetTurnstile();
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
              {TURNSTILE_SITE_KEY && <div className="turnstile" ref={tsRef} />}
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
