import Link from "next/link";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { COMPANY } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: `Política de Privacidad | ${COMPANY.name}`,
  description:
    "Cómo tratamos tus datos personales cuando usas nuestro sitio y nos contactas.",
  path: "/privacidad",
});

const UPDATED_AT = "2026-09-01";

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "";
const CF_TOKEN =
  process.env.NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN ||
  process.env.NEXT_PUBLIC_CF_BEACON_TOKEN ||
  "";

const USES_ANALYTICS = Boolean(PLAUSIBLE_DOMAIN || CF_TOKEN);

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900">
      <Navbar />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-20 md:py-24">
        <p className="text-xs uppercase tracking-[0.22em] text-sky-700">Información legal</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
          Política de Privacidad
        </h1>
        <p className="mt-2 text-sm text-slate-600">Última actualización: {UPDATED_AT}</p>

        <article className="mt-10 text-base leading-7 text-slate-700 [&_a]:font-medium [&_a]:text-sky-800 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-950 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-slate-900 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          <p>
            En {COMPANY.name} valoramos tu privacidad. Este documento explica cómo
            tratamos tus datos personales cuando navegas nuestro sitio o nos
            contactas. Si tienes dudas, escríbenos a{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
          </p>

          <h2>Responsable del tratamiento</h2>
          <p>
             El responsable que opera {COMPANY.name} presta servicios desde {COMPANY.location}. Para solicitar la
             identificación legal aplicable a un servicio o tratamiento específico, contacta a{" "}
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
                ? " También usamos analítica para medir tráfico y rendimiento del sitio (sin enviar información identificable como emails o nombres)."
                : " No utilizamos cookies de seguimiento salvo que se indique lo contrario en el futuro."}
            </li>
            <li>
              <strong>Atribución comercial</strong>: página de entrada, referente, parámetros UTM e
              identificadores de clic publicitario cuando llegas desde una campaña. Estos datos se
              guardan localmente hasta 90 días y se adjuntan sólo cuando envías un formulario.
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
            <li>Atribución guardada en tu navegador: hasta 90 días; si envías una consulta, se conserva con ella.</li>
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
            necesarias para el funcionamiento y almacenamiento local para conservar la atribución de
            campaña descrita anteriormente.
            {USES_ANALYTICS
              ? " Para analítica usamos un enfoque sin cookies (por ejemplo, Cloudflare Web Analytics) para entender el rendimiento del sitio."
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
           <Link
             href="/"
             className="inline-flex rounded-xl border border-slate-900/10 bg-white/80 px-4 py-2 text-sm font-medium hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
           >
             Volver al inicio
           </Link>
         </div>
      </main>
      <Footer />
    </div>
  );
}
