// RhinoScore — SMS / A2P 10DLC compliance pages (English + Spanish on each page).
//   /privacy     Privacy Policy (same text as the in-app policy, src/legal.js in the app repo) + SMS section
//   /sms-terms   SMS Terms for the "RhinoScore Alerts" program
//   /sms-opt-in  Public copy of the in-app "Text alerts" opt-in screen (carrier reviewers can't log in)
// Wording drafted from carrier/CTIA requirements. LAWYER REVIEW REQUIRED before relying on it;
// Spanish needs a fluent reviewer. Keep the opt-in text here identical to the in-app checkbox text.

export const OWNER = "Six10 Digital LLC";
export const SUPPORT_EMAIL = "support@rhinoscore.com";
const PROGRAM = "RhinoScore Alerts";
const UPDATED_EN = "Last updated: October 29, 2026";
const UPDATED_ES = "Última actualización: 29 de octubre de 2026";

function Mail({ subject }) {
  const href = subject ? `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}` : `mailto:${SUPPORT_EMAIL}`;
  return <a href={href}>{SUPPORT_EMAIL}</a>;
}

function LangSwitch({ to, label }) {
  return (
    <p className="lang-switch">
      <a href={to}>{label} <span aria-hidden="true">↓</span></a>
    </p>
  );
}

function LangDivider({ id, lang, title, sub }) {
  return (
    <section className="policy-hero lang-divider" id={id} lang={lang}>
      <div className="wrap">
        <p className="updated">{lang === "es" ? "Español" : "English"}</p>
        <h1>{title}</h1>
        {sub && <p>{sub}</p>}
      </div>
    </section>
  );
}

/* ================= Privacy Policy ================= */
// Sections 1–12 mirror PRIVACY_DOC / PRIVACY_DOC_ES in the app (rhinoscore/src/legal.js, version 2026-10-25)
// so the website and the in-app policy say the same thing. Section 13 (SMS) is new and must also be added
// to the in-app policy (bump LEGAL_VERSION there).

const PRIVACY_EN = [
  ["1. Overview", "This Privacy Policy explains how RhinoScore collects, uses, and protects information when you use the Service."],
  ["2. Information we collect", "Account information (name, email, phone, company, role); content you upload (inspection photos and videos, invoices, notes, customer and site details); and usage and device information (such as log data and browser type) collected automatically to operate and secure the Service."],
  ["3. Location, photos and devices", "When you check in or check out for a shift or service, the app records your location (GPS) at that moment, a photo (selfie) you take, the time, and an identifier for the phone you use. Your company uses this to confirm that work was done at the right place and time and to calculate pay or invoices. Location is collected only when you check in or out (and, if your company turns it on, while you are checked in) — not at other times. Your check-in photos can be seen only by you and your own company's management."],
  ["4. Tax and identity documents", "If your company asks you to provide documents such as a W-9 tax form, a photo ID or an insurance certificate, they are stored privately and can be opened only by you and the people your company authorizes (W-9 forms: only the company owner). Tax identification numbers are kept only inside the document file."],
  ["5. How we use information", "To provide and improve the Service, authenticate users, send transactional messages (like report, invoice and check-in notices), provide support, keep the Service secure, and meet legal obligations. We send marketing email only to people who opt in, and you can unsubscribe at any time."],
  ["6. How we share information", "We share information with service providers who help us run the Service (for example, cloud hosting and email delivery) under confidentiality obligations, within your own organization according to each person's role, and when required by law. We do not sell your personal information. Mobile phone numbers and text-messaging consent are never shared for marketing — see section 13."],
  ["7. Data retention", "We keep your information for as long as your account is active and as needed to provide the Service, then delete or anonymize it within a reasonable period unless a longer period is required by law (for example, tax and pay records)."],
  ["8. Security", "We use reasonable technical and organizational measures to protect your information, including access controls and encryption in transit. No system is perfectly secure, so we cannot guarantee absolute security."],
  ["9. Your choices", "You can access and update your profile, opt out of marketing email, and request a copy or deletion of your personal data by contacting us. Some data may be retained where required for legal or legitimate business reasons. See the Account & data page for step-by-step instructions."],
  ["10. Children", "The Service is not directed to children under 18, and we do not knowingly collect their information."],
  ["11. Changes", "We may update this Policy. If we make material changes we will notify you and update the effective date."],
  ["12. Contact", "Questions or privacy requests: legal@rhinoscore.com or support@rhinoscore.com."],
];

const PRIVACY_ES = [
  ["1. Resumen", "Esta Política de privacidad explica cómo RhinoScore recopila, usa y protege la información cuando usas el Servicio."],
  ["2. Información que recopilamos", "Información de la cuenta (nombre, correo, teléfono, empresa, puesto); contenido que subes (fotos y videos de inspecciones, facturas, notas, datos de clientes y sitios); e información de uso y del dispositivo (como registros y tipo de navegador) que se recopila automáticamente para operar y proteger el Servicio."],
  ["3. Ubicación, fotos y dispositivos", "Cuando registras tu entrada o salida de un turno o servicio, la app guarda tu ubicación (GPS) en ese momento, una foto (selfie) que tomas, la hora y un identificador del teléfono que usas. Tu empresa usa esto para confirmar que el trabajo se hizo en el lugar y la hora correctos y para calcular pagos o facturas. La ubicación se recopila solo al registrar entrada o salida (y, si tu empresa lo activa, mientras estás registrado) — no en otros momentos. Tus fotos de registro solo las pueden ver tú y la gerencia de tu propia empresa."],
  ["4. Documentos de impuestos e identidad", "Si tu empresa te pide documentos como el formulario W-9, una identificación con foto o un certificado de seguro, se guardan de forma privada y solo pueden abrirlos tú y las personas que tu empresa autorice (formularios W-9: solo el dueño de la empresa). Los números de identificación fiscal se guardan solo dentro del archivo del documento."],
  ["5. Cómo usamos la información", "Para ofrecer y mejorar el Servicio, verificar a los usuarios, enviar mensajes necesarios (como reportes, facturas y avisos de registro), dar soporte, mantener el Servicio seguro y cumplir obligaciones legales. Solo enviamos correos de mercadeo a quienes lo aceptan, y puedes darte de baja cuando quieras."],
  ["6. Cómo compartimos la información", "Compartimos información con proveedores que nos ayudan a operar el Servicio (por ejemplo, alojamiento en la nube y envío de correos) bajo obligaciones de confidencialidad, dentro de tu propia organización según el puesto de cada persona, y cuando la ley lo exige. No vendemos tu información personal. Los números de celular y el consentimiento para mensajes de texto nunca se comparten con fines de mercadeo — consulta la sección 13."],
  ["7. Conservación de datos", "Guardamos tu información mientras tu cuenta esté activa y según sea necesario para ofrecer el Servicio; después la eliminamos o anonimizamos en un tiempo razonable, salvo que la ley exija un periodo más largo (por ejemplo, registros de impuestos y pagos)."],
  ["8. Seguridad", "Usamos medidas técnicas y organizativas razonables para proteger tu información, incluidos controles de acceso y cifrado en tránsito. Ningún sistema es perfectamente seguro, por lo que no podemos garantizar seguridad absoluta."],
  ["9. Tus opciones", "Puedes ver y actualizar tu perfil, darte de baja de correos de mercadeo y pedir una copia o la eliminación de tus datos personales escribiéndonos. Algunos datos pueden conservarse cuando se requiera por razones legales o comerciales legítimas."],
  ["10. Menores", "El Servicio no está dirigido a menores de 18 años y no recopilamos su información a sabiendas."],
  ["11. Cambios", "Podemos actualizar esta Política. Si hacemos cambios importantes, te avisaremos y actualizaremos la fecha de vigencia."],
  ["12. Contacto", "Preguntas o solicitudes de privacidad: legal@rhinoscore.com o support@rhinoscore.com."],
];

function SmsPrivacyEn() {
  return (
    <section className="policy-section sms-highlight" id="sms">
      <p className="eyebrow">Text messaging</p>
      <h2>13. Text Messaging (SMS)</h2>
      <p>If you opt in to text messages from {PROGRAM}, the RhinoScore text program run by {OWNER}, we collect your mobile phone number, your consent record (date, time, wording, and language), and the messages you send and receive. We use this information only to send you {PROGRAM} messages about your RhinoScore account (sign-in codes and work alerts), to respond to HELP requests, and to honor opt-outs.</p>
      <p><strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</strong> Text messaging opt-in data and consent will not be shared with, sold to, or rented to any third party, affiliate, or lead generator. We share phone numbers and message content only with our telecommunications providers (for example, Telnyx) as needed to deliver messages, and as required by law.</p>
      <p>You can opt out at any time by replying STOP (or PARAR) or by turning texts off in the app. Message frequency varies. Msg &amp; data rates may apply. Carriers are not liable for delayed or undelivered messages. See our <a href="/sms-terms">SMS Terms</a>. Questions: <Mail subject="SMS question" />.</p>
    </section>
  );
}

function SmsPrivacyEs() {
  return (
    <section className="policy-section sms-highlight" id="sms-es">
      <p className="eyebrow">Mensajes de texto</p>
      <h2>13. Mensajes de texto (SMS)</h2>
      <p>Si aceptas recibir mensajes de texto de {PROGRAM}, el programa de mensajes de texto de RhinoScore operado por {OWNER}, recopilamos tu número de celular, el registro de tu consentimiento (fecha, hora, texto e idioma) y los mensajes que envías y recibes. Usamos esta información únicamente para enviarte mensajes de {PROGRAM} sobre tu cuenta de RhinoScore (códigos de inicio de sesión y alertas de trabajo), responder a solicitudes de AYUDA y respetar las bajas.</p>
      <p><strong>No compartiremos tu información móvil con terceros ni afiliados con fines de mercadeo o promoción.</strong> Los datos y el consentimiento de inscripción a mensajes de texto no se compartirán, venderán ni alquilarán a terceros, afiliados ni generadores de clientes potenciales. Solo compartimos números de teléfono y el contenido de los mensajes con nuestros proveedores de telecomunicaciones (por ejemplo, Telnyx) cuando es necesario para entregar los mensajes, y cuando lo exige la ley.</p>
      <p>Puedes darte de baja en cualquier momento respondiendo STOP (o PARAR) o desactivando los mensajes en la app. La frecuencia de los mensajes varía. Pueden aplicarse tarifas de mensajes y datos. Los operadores no son responsables de mensajes retrasados o no entregados. Consulta nuestros <a href="/sms-terms#es">Términos de SMS</a>. Preguntas: <Mail subject="Pregunta sobre SMS" />.</p>
    </section>
  );
}

function SectionList({ rows }) {
  return rows.map(([title, body]) => (
    <section className="policy-section" key={title}>
      <h2>{title}</h2>
      <p>{body}</p>
    </section>
  ));
}

export function PrivacyPage() {
  return (
    <main>
      <section className="policy-hero">
        <div className="wrap">
          <p className="updated">{UPDATED_EN}</p>
          <h1>Privacy Policy</h1>
          <p>This policy explains how RhinoScore, a product of {OWNER}, handles information for people who visit rhinoscore.com or use the RhinoScore platform. Text messaging is covered in <a className="inline-link" href="#sms">section 13</a>.</p>
          <LangSwitch to="#es" label="Leer en español" />
        </div>
      </section>
      <div className="wrap">
        <div className="policy-stack">
          <SectionList rows={PRIVACY_EN} />
          <SmsPrivacyEn />
        </div>
      </div>

      <LangDivider
        id="es"
        lang="es"
        title="Política de privacidad"
        sub={`${UPDATED_ES}. RhinoScore es un producto de ${OWNER}. Traducción de cortesía: si hay alguna diferencia, prevalece la versión en inglés.`}
      />
      <div className="wrap" lang="es">
        <div className="policy-stack">
          <SectionList rows={PRIVACY_ES} />
          <SmsPrivacyEs />
        </div>
      </div>
    </main>
  );
}

/* ================= SMS Terms ================= */

const TERMS = {
  en: {
    eyebrow: "SMS Terms",
    title: `${PROGRAM} — SMS Terms`,
    intro: `These terms cover text messages from ${PROGRAM}, sent by ${OWNER}, the maker of RhinoScore. RhinoScore is a work-operations app used by companies (for example, cleaning and facilities companies) to coordinate their crews and subcontractors.`,
    sections: [
      ["Program", <>
        <p><strong>Program name: {PROGRAM}.</strong> All texts in this program come from one sender, {PROGRAM} ({OWNER}), and are about your RhinoScore account. Each message starts with “{PROGRAM}:”. These are operational messages only. We never send marketing or promotional texts in this program.</p>
      </>],
      ["Types of messages", <>
        <ul>
          <li>Account messages: sign-in and verification codes.</li>
          <li>Work alerts: check-in reminders and missed check-ins.</li>
          <li>Schedule changes and shift updates.</li>
          <li>Pay, invoice and document reminders (for example, a missing W-9 or insurance certificate).</li>
          <li>Urgent site alerts (for example, a building closure or an urgent issue at a site).</li>
        </ul>
      </>],
      ["How to opt in", <>
        <p>You opt in inside the RhinoScore app on the <strong>Text alerts</strong> screen by entering your mobile number and checking an optional box that is <strong>unchecked by default</strong>. A confirmation text is sent right after you opt in. <a href="/sms-opt-in">See what the opt-in screen looks like</a>.</p>
        <p><strong>Opting in is optional and is not a condition of using RhinoScore or of receiving work.</strong> Your consent is given only to {PROGRAM} ({OWNER}) and is not shared with or transferred to anyone else.</p>
      </>],
      ["Frequency and cost", <>
        <p><strong>Message frequency varies</strong> depending on your schedule and activity. <strong>Msg &amp; data rates may apply</strong> according to your mobile plan.</p>
      </>],
      ["How to stop (opt out)", <>
        <p>Reply <strong>STOP</strong> to any message to opt out at any time. We also accept STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT, PARAR, ALTO, CANCELAR and BAJA, or any reasonable request such as turning texts off in the app or emailing us. You will receive one confirmation text and then no more texts from {PROGRAM} until you opt in again. To opt back in, reply <strong>START</strong> or turn texts back on in the app.</p>
      </>],
      ["How to get help", <>
        <p>Reply <strong>HELP</strong> (or INFO / AYUDA) to any message for help, or email <Mail subject="SMS help" />.</p>
      </>],
      ["Carriers", <>
        <p>Carriers are not liable for delayed or undelivered messages.</p>
      </>],
      ["Privacy", <>
        <p>Mobile information and text-messaging opt-in data are never shared with or sold to third parties or affiliates for marketing or promotional purposes. Read the <a href="/privacy#sms">Privacy Policy</a> and the <a href="/terms">Terms of Service</a>.</p>
      </>],
      ["Contact", <>
        <p>{OWNER} (RhinoScore) · <Mail subject="SMS question" /></p>
      </>],
    ],
  },
  es: {
    eyebrow: "Términos de SMS",
    title: `${PROGRAM} — Términos de SMS`,
    intro: `Estos términos cubren los mensajes de texto de ${PROGRAM}, enviados por ${OWNER}, el creador de RhinoScore. RhinoScore es una app de operaciones de trabajo que usan las empresas (por ejemplo, empresas de limpieza y mantenimiento) para coordinar a sus equipos y subcontratistas.`,
    sections: [
      ["Programa", <>
        <p><strong>Nombre del programa: {PROGRAM}.</strong> Todos los mensajes de este programa vienen de un solo remitente, {PROGRAM} ({OWNER}), y tratan sobre tu cuenta de RhinoScore. Cada mensaje comienza con “{PROGRAM}:”. Son solo mensajes operativos. Nunca enviamos mensajes de mercadeo ni promociones en este programa.</p>
      </>],
      ["Tipos de mensajes", <>
        <ul>
          <li>Mensajes de la cuenta: códigos de inicio de sesión y verificación.</li>
          <li>Alertas de trabajo: recordatorios de registro (check-in) y registros no realizados.</li>
          <li>Cambios de horario y actualizaciones de turnos.</li>
          <li>Recordatorios de pagos, facturas y documentos (por ejemplo, un W-9 o un certificado de seguro pendiente).</li>
          <li>Alertas urgentes del sitio (por ejemplo, un edificio cerrado o un problema urgente en un sitio).</li>
        </ul>
      </>],
      ["Cómo inscribirse", <>
        <p>Te inscribes dentro de la app RhinoScore, en la pantalla <strong>Alertas por texto</strong>, escribiendo tu número de celular y marcando una casilla opcional que <strong>aparece sin marcar</strong>. Después de inscribirte recibirás un mensaje de confirmación. <a href="/sms-opt-in#es">Mira cómo se ve la pantalla de inscripción</a>.</p>
        <p><strong>Inscribirse es opcional y no es una condición para usar RhinoScore ni para recibir trabajo.</strong> Tu consentimiento es solo para {PROGRAM} ({OWNER}) y no se comparte ni se transfiere a nadie más.</p>
      </>],
      ["Frecuencia y costo", <>
        <p><strong>La frecuencia de los mensajes varía</strong> según tu horario y actividad. <strong>Pueden aplicarse tarifas de mensajes y datos</strong> según tu plan móvil.</p>
      </>],
      ["Cómo cancelar (darse de baja)", <>
        <p>Responde <strong>STOP</strong> (o <strong>PARAR</strong>) a cualquier mensaje para darte de baja en cualquier momento. También aceptamos ALTO, CANCELAR, BAJA, STOPALL, UNSUBSCRIBE, CANCEL, END y QUIT, o cualquier solicitud razonable, como desactivar los mensajes en la app o escribirnos por correo. Recibirás un mensaje de confirmación y luego ningún otro mensaje de {PROGRAM} hasta que te inscribas de nuevo. Para volver a inscribirte, responde <strong>START</strong> o <strong>ALTA</strong>, o activa los mensajes otra vez en la app.</p>
      </>],
      ["Cómo obtener ayuda", <>
        <p>Responde <strong>AYUDA</strong> (o HELP / INFO) a cualquier mensaje, o escribe a <Mail subject="Ayuda con SMS" />.</p>
      </>],
      ["Operadores", <>
        <p>Los operadores no son responsables de mensajes retrasados o no entregados.</p>
      </>],
      ["Privacidad", <>
        <p>La información móvil y los datos de inscripción a mensajes de texto nunca se comparten ni se venden a terceros ni afiliados con fines de mercadeo o promoción. Lee la <a href="/privacy#es">Política de privacidad</a> y los <a href="/terms">Términos de servicio</a>.</p>
      </>],
      ["Contacto", <>
        <p>{OWNER} (RhinoScore) · <Mail subject="Pregunta sobre SMS" /></p>
      </>],
    ],
  },
};

function TermsBlock({ t }) {
  return t.sections.map(([title, body]) => (
    <section className="policy-section" key={title}>
      <h2>{title}</h2>
      {body}
    </section>
  ));
}

export function SmsTermsPage() {
  return (
    <main>
      <section className="policy-hero">
        <div className="wrap">
          <p className="updated">{UPDATED_EN}</p>
          <h1>{TERMS.en.title}</h1>
          <p>{TERMS.en.intro}</p>
          <LangSwitch to="#es" label="Leer en español" />
        </div>
      </section>
      <div className="wrap">
        <div className="policy-stack"><TermsBlock t={TERMS.en} /></div>
      </div>

      <LangDivider id="es" lang="es" title={TERMS.es.title} sub={`${UPDATED_ES}. ${TERMS.es.intro}`} />
      <div className="wrap" lang="es">
        <div className="policy-stack"><TermsBlock t={TERMS.es} /></div>
      </div>
    </main>
  );
}

/* ================= Public opt-in example ================= */
// Must match the in-app checkbox text (consent v2) word for word. Two-party: the person and RhinoScore Alerts (Six10 Digital LLC) only.

const OPTIN = {
  en: {
    screen: "Text alerts",
    back: "Settings",
    lead: "Get urgent work alerts by text message.",
    phoneLabel: "Mobile number",
    phone: "(706) 555-0123",
    consent: <>
      <strong>Text me RhinoScore Alerts.</strong> I agree to receive text messages from RhinoScore Alerts (Six10 Digital LLC) at the mobile number above about my RhinoScore account: sign-in codes and work alerts (such as check-in reminders, schedule changes, pay, invoice and document reminders, and urgent site issues). Message frequency varies. Msg &amp; data rates may apply. Reply <strong>HELP</strong> for help, <strong>STOP</strong> to opt out. Consent is not a condition of receiving work. See <a href="/sms-terms">SMS Terms</a> and <a href="/privacy#sms">Privacy Policy</a>.
    </>,
    button: "Save",
    lang: "Español",
  },
  es: {
    screen: "Alertas por texto",
    back: "Ajustes",
    lead: "Recibe alertas urgentes de trabajo por mensaje de texto.",
    phoneLabel: "Número de celular",
    phone: "(706) 555-0123",
    consent: <>
      <strong>Envíenme Alertas de RhinoScore.</strong> Acepto recibir mensajes de texto de RhinoScore Alerts (Six10 Digital LLC) en el número de celular indicado arriba sobre mi cuenta de RhinoScore: códigos de inicio de sesión y alertas de trabajo (por ejemplo, recordatorios de registro, cambios de horario, recordatorios de pagos, facturas y documentos, y problemas urgentes en el sitio). La frecuencia de los mensajes varía. Pueden aplicarse tarifas de mensajes y datos. Responde <strong>HELP</strong> o <strong>AYUDA</strong> para obtener ayuda, <strong>STOP</strong> o <strong>PARAR</strong> para cancelar. El consentimiento no es una condición para recibir trabajo. Consulta los <a href="/sms-terms#es">Términos de SMS</a> y la <a href="/privacy#es">Política de privacidad</a>.
    </>,
    button: "Guardar",
    lang: "English",
  },
};

function PhoneMock({ lang }) {
  const t = OPTIN[lang];
  return (
    <figure className="phone-mock" lang={lang} aria-label={lang === "es" ? "Ejemplo de la pantalla de inscripción" : "Example of the opt-in screen"}>
      <div className="pm-frame">
        <div className="pm-status" aria-hidden="true"><span>9:41</span><span className="pm-notch" /><span>●●● ▮</span></div>
        <div className="pm-appbar">
          <span className="pm-back">‹ {t.back}</span>
          <span className="pm-title">{t.screen}</span>
          <span className="pm-lang">{t.lang}</span>
        </div>
        <div className="pm-body">
          <div className="pm-brand"><img src="/brand/rhino.png" alt="" width="22" height="22" /><span>RhinoScore</span></div>
          <p className="pm-lead">{t.lead}</p>
          <label className="pm-label">{t.phoneLabel}</label>
          <div className="pm-input">{t.phone}</div>
          <div className="pm-consent">
            <span className="pm-box" role="img" aria-label={lang === "es" ? "Casilla sin marcar" : "Unchecked checkbox"} />
            <p>{t.consent}</p>
          </div>
          <div className="pm-button">{t.button}</div>
        </div>
      </div>
    </figure>
  );
}

export function SmsOptInPage() {
  return (
    <main>
      <section className="policy-hero">
        <div className="wrap">
          <p className="updated">SMS opt-in · {PROGRAM}</p>
          <h1>How people opt in to text alerts</h1>
          <p>Crew members and subcontractors opt in inside the RhinoScore app, on the <strong>Text alerts</strong> screen. This page shows a copy of that screen so anyone can see exactly what people agree to. It is shown in the language each person picks in the app (English or Spanish).</p>
          <LangSwitch to="#es" label="Ver en español" />
        </div>
      </section>

      <div className="wrap">
        <div className="optin-grid">
          <PhoneMock lang="en" />
          <div className="policy-stack optin-notes">
            <section className="policy-section">
              <h2>What to notice</h2>
              <ul>
                <li>The checkbox is <strong>unchecked by default</strong> and is optional. Texts are never required to use the app or to receive work.</li>
                <li>The full consent text sits right next to the checkbox: who is texting, what kinds of messages, “Message frequency varies,” “Msg &amp; data rates may apply,” and HELP / STOP instructions.</li>
                <li>Links to the <a href="/sms-terms">SMS Terms</a> and the <a href="/privacy#sms">Privacy Policy</a> are inside the consent text.</li>
                <li>After someone opts in, a confirmation text is sent. Replying STOP at any time ends the texts.</li>
              </ul>
            </section>
            <section className="policy-section">
              <h2>One sender, one opt-in</h2>
              <p>Everyone who uses RhinoScore sees this same opt-in. Texts come only from RhinoScore Alerts (Six10 Digital LLC); your number and consent are never shared with or sold to anyone.</p>
              <p className="smallprint">RhinoScore is a product of {OWNER}. Questions: <Mail subject="SMS opt-in question" />.</p>
            </section>
          </div>
        </div>
      </div>

      <LangDivider
        id="es"
        lang="es"
        title="Cómo se inscriben a las alertas por texto"
        sub="Los miembros del equipo y los subcontratistas se inscriben dentro de la app RhinoScore, en la pantalla Alertas por texto. Esta página muestra una copia de esa pantalla para que cualquiera pueda ver exactamente lo que aceptan."
      />
      <div className="wrap" lang="es">
        <div className="optin-grid">
          <PhoneMock lang="es" />
          <div className="policy-stack optin-notes">
            <section className="policy-section">
              <h2>Qué observar</h2>
              <ul>
                <li>La casilla <strong>aparece sin marcar</strong> y es opcional. Los mensajes nunca son obligatorios para usar la app ni para recibir trabajo.</li>
                <li>El texto completo del consentimiento está junto a la casilla: quién envía los mensajes, qué tipo de mensajes, “La frecuencia de los mensajes varía”, “Pueden aplicarse tarifas de mensajes y datos” e instrucciones de AYUDA / STOP.</li>
                <li>Los enlaces a los <a href="/sms-terms#es">Términos de SMS</a> y a la <a href="/privacy#es">Política de privacidad</a> están dentro del texto.</li>
                <li>Después de inscribirse, se envía un mensaje de confirmación. Responder STOP en cualquier momento termina los mensajes.</li>
              </ul>
            </section>
            <section className="policy-section">
              <h2>Un solo remitente, una sola inscripción</h2>
              <p>Todas las personas que usan RhinoScore ven esta misma inscripción. Los mensajes vienen únicamente de RhinoScore Alerts (Six10 Digital LLC); tu número y tu consentimiento nunca se comparten ni se venden a nadie.</p>
              <p className="smallprint">RhinoScore es un producto de {OWNER}. Preguntas: <Mail subject="Pregunta sobre inscripción SMS" />.</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
