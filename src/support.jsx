// RhinoScore — /support (English + Spanish on one page, like /terms).
// The App Store and Google Play "Support URL" for the phone apps (Varda's copy, 2026-10-31).
import { SUPPORT_EMAIL } from "./sms.jsx";
import { DEMO_HREF } from "./routes.js";

const Mail = () => <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;

const SUPPORT = {
  en: {
    title: "How can we help?",
    intro: <>Email <b><Mail /></b> and a real person will reply, usually within one business day.</>,
    heading: "Common questions",
    faq: [
      ["I can't sign in.", "Your company administrator sets up your account. Ask them to resend your invite or reset your access. Still stuck? Email us."],
      ["I had no signal while working.", "The phone app saves your check-ins, checklists, inspections and work logs on the phone, then sends them on its own when signal returns. Keep the app installed and open it once you're back in signal."],
      ["My clock-in didn't work.", "The time clock checks that you're at the job site and takes a quick selfie. Turn on Location and Camera for RhinoScore in your phone's settings, then try again."],
      ["How do I change the language?", <>RhinoScore works in English and Spanish. In the app, tap <b>Profile</b> and choose English or Español under Language. You can also pick it on the sign-in screen.</>],
      ["I'm a manager and want to see a demo.", <>Email <a href={DEMO_HREF}>{SUPPORT_EMAIL}</a> and we'll set one up.</>],
    ],
    links: <><a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Service</a> · <a href="/account">Account &amp; data</a></>,
  },
  es: {
    title: "¿Cómo podemos ayudarle?",
    intro: <>Escriba a <b><Mail /></b> y una persona real le responderá, normalmente en un día hábil.</>,
    heading: "Preguntas frecuentes",
    faq: [
      ["No puedo iniciar sesión.", "El administrador de su empresa crea su cuenta. Pídale que le reenvíe la invitación o restablezca su acceso. ¿Sigue sin poder entrar? Escríbanos."],
      ["No tenía señal mientras trabajaba.", "La aplicación guarda sus entradas, listas, inspecciones y registros de trabajo en el teléfono y los envía sola cuando vuelve la señal."],
      ["No pude marcar mi entrada.", "El reloj verifica que esté en el sitio y toma una selfie rápida. Active Ubicación y Cámara para RhinoScore en los ajustes del teléfono e intente de nuevo."],
      ["¿Cómo cambio el idioma?", <>RhinoScore funciona en inglés y español. En la aplicación, toque <b>Perfil</b> y elija English o Español en Idioma. También puede elegirlo en la pantalla de inicio de sesión.</>],
      ["Soy gerente y quiero ver una demostración.", <>Escriba a <a href={DEMO_HREF}>{SUPPORT_EMAIL}</a> y la programamos.</>],
    ],
    links: <><a href="/privacy#es">Política de privacidad</a> · <a href="/terms#es">Términos del servicio</a> · <a href="/account">Cuenta y datos</a></>,
  },
};

function Faq({ t }) {
  return (
    <section className="policy-section">
      <h2>{t.heading}</h2>
      <ul>
        {t.faq.map(([q, a]) => <li key={q}><b>{q}</b> {a}</li>)}
      </ul>
      <p style={{ marginTop: 18 }}>{t.links}</p>
    </section>
  );
}

export function SupportPage() {
  return (
    <main>
      <section className="policy-hero">
        <div className="wrap">
          <p className="updated">Support</p>
          <h1>{SUPPORT.en.title}</h1>
          <p>{SUPPORT.en.intro}</p>
          <p className="lang-switch"><a href="#es">Leer en español <span aria-hidden="true">↓</span></a></p>
        </div>
      </section>
      <div className="wrap">
        <div className="policy-stack"><Faq t={SUPPORT.en} /></div>
      </div>

      <section className="policy-hero lang-divider" id="es" lang="es">
        <div className="wrap">
          <p className="updated">Español</p>
          <h1>{SUPPORT.es.title}</h1>
          <p>{SUPPORT.es.intro}</p>
        </div>
      </section>
      <div className="wrap" lang="es">
        <div className="policy-stack"><Faq t={SUPPORT.es} /></div>
      </div>
    </main>
  );
}
