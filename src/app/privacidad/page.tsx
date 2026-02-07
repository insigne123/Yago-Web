import { COMPANY } from "@/config/site";

export const metadata = {
  title: `Política de Privacidad | ${COMPANY.name}`,
  description:
    "Cómo tratamos tus datos personales cuando usas nuestro sitio y nos contactas.",
};

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400";

const UPDATED_AT = "2026-02-06";

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "";
const USES_ANALYTICS = Boolean(PLAUSIBLE_DOMAIN);

export default function PrivacyPage() {
  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-black via-slate-950 to-black text-white">
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className={`text-4xl font-bold tracking-tight ${gradientText}`}>
          Política de Privacidad
        </h1>
        <p className="mt-2 text-sm text-foreground/70">Última actualización: {UPDATED_AT}</p>

        <article className="prose prose-invert mt-8 prose-p:leading-relaxed prose-li:marker:text-foreground/60">
          <p>
            En {COMPANY.name} valoramos tu privacidad. Este documento explica cómo
            tratamos tus datos personales cuando navegas nuestro sitio o nos
            contactas. Si tienes dudas, escríbenos a{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>

          <h2>Responsable del tratamiento</h2>
          <p>
            {COMPANY.name} ({COMPANY.location}). Contacto:{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>

          <h2>Datos que recopilamos</h2>
          <ul>
            <li><strong>Contacto</strong>: nombre, correo, empresa y el contenido del mensaje que envías.</li>
            <li><strong>Comunicaciones</strong>: nuestra respuesta y seguimiento comercial.</li>
            <li>
              <strong>Uso del sitio</strong>: información técnica mínima para seguridad y operación
              (logs del servidor).
              {USES_ANALYTICS
                ? " También usamos analítica para medir tráfico y eventos de uso del sitio (sin enviar información identificable como emails o nombres)."
                : " No utilizamos cookies de seguimiento salvo que se indique lo contrario en el futuro."}
            </li>
          </ul>

          <h2>Finalidades</h2>
          <ul>
            <li>Atender tus consultas y enviarte una propuesta o demo.</li>
            <li>Gestionar la relación comercial y prestarte nuestros servicios.</li>
            <li>Mejorar el sitio, prevenir fraude y cumplir obligaciones legales.</li>
            <li>Con tu consentimiento, enviarte comunicaciones comerciales.</li>
          </ul>

          <h2>Base jurídica</h2>
          <p>
            Según corresponda: tu <em>consentimiento</em>, ejecución de medidas precontractuales o
            contractuales, y nuestro <em>interés legítimo</em> en operar y proteger nuestros servicios.
          </p>

          <h2>Con quién compartimos tus datos</h2>
          <p>
            No vendemos tus datos. Compartimos lo necesario con <em>encargados de tratamiento</em> para
            operar el servicio: infraestructura y hosting (p. ej., Firebase/Google Cloud),
            envío de correos (Resend), herramientas de productividad (p. ej., Google/Microsoft),
            y mensajería (p. ej., WhatsApp). Estos proveedores tratan datos siguiendo nuestras
            instrucciones y con medidas de seguridad adecuadas.
          </p>

          <h2>Transferencias internacionales</h2>
          <p>
            Algunos proveedores pueden estar ubicados fuera de tu país. En tal caso, aplicamos
            salvaguardas adecuadas (p. ej., cláusulas contractuales tipo o mecanismos equivalentes).
          </p>

          <h2>Plazos de conservación</h2>
          <ul>
            <li>Consultas comerciales: hasta 24 meses desde el último contacto, salvo obligación legal distinta.</li>
            <li>Registros técnicos de seguridad: hasta 12 meses.</li>
          </ul>

          <h2>Tus derechos</h2>
          <p>
            Puedes ejercer derechos de acceso, rectificación, cancelación/supresión, oposición,
            portabilidad y limitación escribiendo a{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. También puedes presentar un
            reclamo ante la autoridad de control competente de tu país.
          </p>

          <h2>Cookies</h2>
          <p>
            Este sitio no usa cookies de marketing. Podemos utilizar cookies estrictamente
            necesarias para el funcionamiento.
            {USES_ANALYTICS
              ? " Para analítica usamos un enfoque sin cookies (por ejemplo, Plausible Analytics) para entender el rendimiento del sitio."
              : " Si en el futuro incorporamos analítica, te lo informaremos y te daremos opciones de control."}
          </p>

          <h2>Menores de edad</h2>
          <p>
            Nuestros servicios no están dirigidos a menores de 16 años. Si crees que un menor nos
            ha enviado datos, contáctanos para eliminar esa información.
          </p>

          <h2>Cambios a esta política</h2>
          <p>
            Podemos actualizar esta política para reflejar cambios legales o operativos. Publicaremos
            la nueva versión indicando la fecha de actualización.
          </p>

          <h2>Contacto</h2>
          <p>
            Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> · Ubicación: {COMPANY.location}
          </p>
        </article>

        <div className="mt-10">
          <a
            href="/"
            className="inline-flex rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Volver al inicio
          </a>
        </div>
      </main>
    </div>
  );
}
