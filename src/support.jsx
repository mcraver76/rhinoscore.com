// RhinoScore — /support (English + Spanish on one page, like /terms).
// The App Store and Google Play "Support URL" for the phone apps (Varda's copy, 2026-10-31).
import { SUPPORT_EMAIL, SUPPORT_PHONE, SUPPORT_TEL } from "./sms.jsx";
import { DEMO_HREF } from "./routes.js";
import { AppStoreBadge, AppStoreQr } from "./appstore.jsx";

const Mail = () => <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>;
const Phone = () => <a href={SUPPORT_TEL}>{SUPPORT_PHONE}</a>;

const SUPPORT = {
  en: {
    title: "How can we help?",
    intro: <>Email <b><Mail /></b> or call or text <b><Phone /></b>, and a real person will reply, usually within one business day.</>,
    heading: "Common questions",
    faq: [
      ["Where do I get the app?", <>On iPhone, tap the button below or search "RhinoScore" in the App Store. It's free. Your company administrator sends your invite so you can sign in.<span className="faq-app"><AppStoreBadge /><AppStoreQr small /></span></>],
      ["I can't sign in.", "Your company administrator sets up your account. Ask them to resend your invite or reset your access. Still stuck? Email us."],
      ["I had no signal while working.", "Move to where you have service and try again. If you still can't save your work, tell your supervisor."],
      ["My check-in didn't work.", "The app checks that you're at the job site and takes a quick selfie. Turn on Location and Camera for RhinoScore in your phone's settings, then try again."],
      ["How do I change the language?", <>RhinoScore works in English and Spanish. In the app, tap <b>Profile</b> and choose English or Español under Language. You can also pick it on the sign-in screen.</>],
      ["I'm a manager and want to see a demo.", <>Email <a href={DEMO_HREF}>{SUPPORT_EMAIL}</a> and we'll set one up.</>],
    ],
    links: <><a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Service</a> · <a href="/account">Account &amp; data</a></>,
  },
  es: {
    title: "¿Cómo podemos ayudarte?",
    intro: <>Escribe a <b><Mail /></b> o llama o envía un mensaje de texto al <b><Phone /></b>, y una persona real te responderá, normalmente en un día hábil.</>,
    heading: "Preguntas frecuentes",
    faq: [
      ["¿Dónde consigo la aplicación?", <>En iPhone, toca el botón o busca "RhinoScore" en el App Store. Es gratis. El administrador de tu empresa te envía la invitación para iniciar sesión.<span className="faq-app"><AppStoreBadge lang="es" /><AppStoreQr lang="es" small /></span></>],
      ["No puedo iniciar sesión.", "El administrador de tu empresa crea tu cuenta. Pídele que te reenvíe la invitación o restablezca tu acceso. ¿Sigues sin poder entrar? Escríbenos."],
      ["No tenía señal mientras trabajaba.", "Ve a un lugar con servicio e intenta de nuevo. Si aún no puedes guardar tu trabajo, avisa a tu supervisor."],
      ["No pude registrar mi entrada.", "La aplicación verifica que estés en el sitio y toma una selfie rápida. Activa Ubicación y Cámara para RhinoScore en los ajustes del teléfono e intenta de nuevo."],
      ["¿Cómo cambio el idioma?", <>RhinoScore funciona en inglés y español. En la aplicación, toca <b>Perfil</b> y elige English o Español en Idioma. También puedes elegirlo en la pantalla de inicio de sesión.</>],
      ["Soy gerente y quiero ver una demostración.", <>Escribe a <a href={DEMO_HREF}>{SUPPORT_EMAIL}</a> y la programamos.</>],
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
