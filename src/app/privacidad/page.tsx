import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { COMPANY } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";
import { GOOGLE_ANALYTICS_ID } from "@/config/analytics";
import { AnalyticsPreference } from "@/components/analytics/AnalyticsPreference";

export const metadata = createPageMetadata({
  title: `Política de Privacidad | ${COMPANY.name}`,
  description:
    "Cómo tratamos tus datos personales cuando usas nuestro sitio y nos contactas.",
  path: "/privacidad",
});

const UPDATED_AT = "2026-10-13";

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "";
const CF_TOKEN =
  process.env.NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN ||
  process.env.NEXT_PUBLIC_CF_BEACON_TOKEN ||
  "";

const USES_ANALYTICS = Boolean(PLAUSIBLE_DOMAIN || CF_TOKEN || GOOGLE_ANALYTICS_ID);

const mailLink = <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>;

const SECTIONS: LegalSection[] = [
  {
    id: "responsable",
    title: "Responsable del tratamiento",
    content: (
      <p>
        El responsable que opera {COMPANY.name} presta servicios desde {COMPANY.location}. Para solicitar la identificación legal
        aplicable a un servicio o tratamiento específico, contacta a {mailLink}.
      </p>
    ),
  },
  {
    id: "datos",
    title: "Datos que recopilamos",
    content: (
      <ul>
        <li>
          <strong>Contacto</strong>: nombre, correo, empresa y el contenido del mensaje que envías.
        </li>
        <li>
          <strong>Comunicaciones</strong>: nuestra respuesta y seguimiento comercial.
        </li>
        <li><strong>Opiniones de usuarios y responsables</strong>: respuestas que compartes sobre nuestros productos o proyectos y, opcionalmente, aplicación/proyecto, nombre, cargo, empresa y correo. Puedes responder los cuestionarios sin identificarte.</li>
        <li>
          <strong>Uso del sitio</strong>: información técnica mínima para seguridad y operación (logs del servidor).
          {USES_ANALYTICS
              ? " También usamos analítica para medir visitas, navegación y eventos comerciales. No enviamos nombres, correos ni el contenido de los formularios a la herramienta analítica."
            : " No utilizamos cookies de seguimiento salvo que se indique lo contrario en el futuro."}
        </li>
        <li>
          <strong>Atribución comercial</strong>: página de entrada, referente, parámetros UTM e identificadores de clic publicitario
          cuando llegas desde una campaña. Estos datos se guardan localmente hasta 90 días y se adjuntan sólo cuando envías un
          formulario.
        </li>
      </ul>
    ),
  },
  {
    id: "finalidades",
    title: "Finalidades",
    content: (
      <ul>
        <li>Atender tus consultas y enviarte una propuesta o demo.</li>
        <li>Gestionar la relación comercial y prestarte nuestros servicios.</li>
        <li>Mejorar el sitio, prevenir fraude y cumplir obligaciones legales.</li>
        <li>Revisar opiniones de usuarios para mejorar nuestros productos. Si autorizas de forma opcional la publicación en el cuestionario, podemos publicar respuestas o extractos fieles en yago.cl con la atribución elegida. El correo no se publica. Sin esa autorización, necesitamos solicitarla por separado; las respuestas anteriores conservan su estado original.</li>
        <li>Con tu consentimiento, enviarte comunicaciones comerciales.</li>
      </ul>
    ),
  },
  {
    id: "base-juridica",
    title: "Base jurídica",
    content: (
      <p>
        Según corresponda: tu <em>consentimiento</em>, ejecución de medidas precontractuales o contractuales, y nuestro{" "}
        <em>interés legítimo</em> en operar y proteger nuestros servicios.
      </p>
    ),
  },
  {
    id: "encargados",
    title: "Con quién compartimos tus datos",
    content: (
      <div>
        <p>
          No vendemos tus datos. Compartimos lo necesario con <em>encargados de tratamiento</em> para operar el servicio:
          infraestructura y hosting (p. ej., Firebase/Google Cloud), envío de correos (Resend), herramientas de productividad (p. ej.,
          Google/Microsoft), y mensajería (p. ej., WhatsApp). Estos proveedores tratan datos siguiendo nuestras instrucciones y con
          medidas de seguridad adecuadas.
        </p>
        {GOOGLE_ANALYTICS_ID ? <p>Utilizamos Google Analytics 4 para medir el uso del sitio. Esta integración tiene desactivadas las señales de Google y las señales de personalización publicitaria.</p> : null}
      </div>
    ),
  },
  {
    id: "transferencias",
    title: "Transferencias internacionales",
    content: (
      <p>
        Algunos proveedores pueden estar ubicados fuera de tu país. En tal caso, aplicamos salvaguardas adecuadas (p. ej., cláusulas
        contractuales tipo o mecanismos equivalentes).
      </p>
    ),
  },
  {
    id: "conservacion",
    title: "Plazos de conservación",
    content: (
      <ul>
        <li>Consultas comerciales: hasta 24 meses desde el último contacto, salvo obligación legal distinta.</li>
        <li>Opiniones de usuarios: hasta 24 meses desde su recepción o último seguimiento, salvo solicitud de eliminación u obligación legal distinta.</li>
        <li>Registros técnicos de seguridad: hasta 12 meses.</li>
        <li>Atribución guardada en tu navegador: hasta 90 días; si envías una consulta, se conserva con ella.</li>
      </ul>
    ),
  },
  {
    id: "derechos",
    title: "Tus derechos",
    content: (
      <p>
        Puedes ejercer derechos de acceso, rectificación, cancelación/supresión, oposición, portabilidad y limitación escribiendo a{" "}
        {mailLink}. También puedes presentar un reclamo ante la autoridad de control competente de tu país.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <div>
        <p>
          Este sitio no usa cookies de marketing. Podemos utilizar cookies estrictamente necesarias para el funcionamiento y
          almacenamiento local para conservar la atribución de campaña descrita anteriormente.
          {GOOGLE_ANALYTICS_ID
            ? " Cuando está habilitado, Google Analytics 4 utiliza cookies analíticas para reconocer sesiones y medir visitas y eventos. Puedes desactivar esa medición para este navegador con el control que aparece a continuación."
            : USES_ANALYTICS
              ? " Para analítica usamos un enfoque sin cookies (por ejemplo, Cloudflare Web Analytics) para entender el rendimiento del sitio."
              : " Si en el futuro incorporamos analítica, te lo informaremos y te daremos opciones de control."}
        </p>
        <AnalyticsPreference />
      </div>
    ),
  },
  {
    id: "menores",
    title: "Menores de edad",
    content: (
      <p>
        Nuestros servicios no están dirigidos a menores de 16 años. Si crees que un menor nos ha enviado datos, contáctanos para
        eliminar esa información.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "Cambios a esta política",
    content: (
      <p>
        Podemos actualizar esta política para reflejar cambios legales o operativos. Publicaremos la nueva versión indicando la fecha
        de actualización.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "Contacto",
    content: (
      <p>
        Email: {mailLink} · Ubicación: {COMPANY.location}
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de Privacidad"
      description="Qué datos recopilamos, para qué los usamos y cómo puedes ejercer tus derechos."
      updatedAt={UPDATED_AT}
      intro={
        <p>
          En {COMPANY.name} valoramos tu privacidad. Este documento explica cómo tratamos tus datos personales cuando navegas nuestro
          sitio o nos contactas. Si tienes dudas, escríbenos a {mailLink}.
        </p>
      }
      sections={SECTIONS}
    />
  );
}
