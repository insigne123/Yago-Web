import { getAutomationPage } from "@/config/automation-pages";
import { OCR_MASTER } from "@/config/ocr-master";
import { formatUfPrice } from "@/lib/uf";

/**
 * "En resumen" de cada producto: una definición directa + datos clave.
 * Pensado para personas que llegan desde un buscador y para asistentes de IA que citan
 * respuestas cortas (qué es, para quién, cuánto cuesta). Todo sale de la configuración
 * de cada producto para no desalinearse con los precios publicados.
 */

export type KeyFact = { label: string; value: string };
export type Faq = { question: string; answer: string };
export type LinkRef = { label: string; href: string };

export type ProductKeyFacts = {
  slug: "sadt" | "axis" | "ocr" | "ocr-master";
  name: string;
  question: string;
  definition: string;
  facts: KeyFact[];
  /** Preguntas que se agregan al inicio del FAQ del producto (visibles + FAQPage). */
  faqs: Faq[];
  /** Guías internas relacionadas (blog, glosario). */
  guides: LinkRef[];
  /** Fuentes oficiales citadas. */
  sources?: LinkRef[];
};

const sadt = getAutomationPage("sadt")!;
const axis = getAutomationPage("axis")!;

const uf = (value: number) => formatUfPrice(value);
const planLine = (plan: (typeof sadt.pricing.plans)[number], vat: boolean) =>
  `${plan.name}: ${uf(plan.priceUf)}${vat ? " + IVA" : ""} al mes (${plan.volume.replace(" / mes", "")})`;

const [sadtBase, sadtHigh] = sadt.pricing.plans;
const sadtExtra = sadt.pricing.plans.find((plan) => plan.extraUf)?.extraUf;
const axisBase = axis.pricing.plans[0];
const [omStandard] = OCR_MASTER.plans;

const DT_SOURCES: LinkRef[] = [
  { label: "DT · Registro de contrato de trabajo", href: "https://dt.gob.cl/portal/1626/w3-article-121013.html" },
  { label: "DT · Registro de término de contrato", href: "https://www.dt.gob.cl/portal/1626/w3-article-121011.html" },
  { label: "DT · Certificado F30-1", href: "https://www.dt.gob.cl/portal/1626/w3-article-100359.html" },
];

export const KEY_FACTS: Record<ProductKeyFacts["slug"], ProductKeyFacts> = {
  sadt: {
    slug: "sadt",
    name: "SADT",
    question: "¿Qué es SADT?",
    definition:
      "SADT es un software de YAGO que automatiza los trámites del Portal Mi DT de la Dirección del Trabajo de Chile: registro de contratos, registro de términos de contrato (desvinculaciones) y descarga de certificados F30 y F30-1. Toma los datos desde un archivo o desde Workges, los valida antes de ejecutar y guarda comprobante, folio o PDF de cada registro, con los errores a la vista para reprocesarlos.",
    facts: [
      { label: "Para quién", value: "RRHH, remuneraciones y operaciones con alto volumen de contratos" },
      { label: "Qué automatiza", value: "Registro de contratos y de términos de contrato, certificados F30 y F30-1" },
      { label: "Carga de datos", value: "Desde archivo o integración con Workges" },
      { label: "Evidencia", value: "Comprobante, folio o PDF por cada registro" },
      { label: "Precio", value: `Desde ${uf(sadtBase.priceUf)} al mes (${sadtBase.volume})` },
      { label: "Soporte", value: "24/7 incluido en los planes" },
    ],
    faqs: [
      {
        question: "¿Qué es SADT?",
        answer:
          "Es un software de YAGO que automatiza los trámites del Portal Mi DT: registro de contratos y de términos de contrato y descarga de certificados F30 y F30-1, con validación previa, evidencia de cada registro y reproceso de errores.",
      },
      {
        question: "¿Cuánto cuesta SADT?",
        answer: `SADT se contrata por planes mensuales en UF. ${planLine(sadtBase, false)}; ${planLine(sadtHigh, false)}. Cada interacción con el Portal DT (un contrato, una desvinculación o un certificado) consume 1 crédito${
          sadtExtra ? ` y el crédito adicional cuesta ${uf(sadtExtra)}` : ""
        }. En la página de precios se muestra el equivalente en pesos según la UF del día.`,
      },
      {
        question: "¿Qué plazos pone la Dirección del Trabajo para registrar contratos y términos de contrato?",
        answer:
          "Según la Dirección del Trabajo, el contrato debe registrarse en su sitio dentro de los 15 días hábiles siguientes a su celebración, ya firmado por ambas partes. El término de contrato se registra dentro de 3, 6 o 10 días hábiles según la causal, o junto con la carta de aviso en los despidos del artículo 161, y es obligatorio desde el 8 de junio de 2023. Confirma siempre el detalle vigente en dt.gob.cl.",
      },
    ],
    guides: [
      { label: "Registro de contratos y términos en Mi DT: plazos y cómo hacerlo a volumen", href: "/blog/registro-contratos-terminos-mi-dt-plazos" },
      { label: "Certificados F30 y F30-1: diferencias y cómo obtenerlos", href: "/blog/certificados-f30-y-f30-1-diferencias" },
      { label: "Control de contratistas: Ley de Subcontratación y F30-1", href: "/blog/control-contratistas-subcontratacion-f30-1" },
      { label: "Finiquito electrónico en Mi DT: plazos y pago", href: "/blog/finiquito-electronico-mi-dt-plazos" },
      { label: "Glosario: Mi DT, F30, F30-1 y registro electrónico laboral", href: "/glosario#tramites-laborales" },
    ],
    sources: DT_SOURCES,
  },
  axis: {
    slug: "axis",
    name: "AXIS",
    question: "¿Qué es AXIS?",
    definition:
      "AXIS es un servicio de YAGO que consulta causas penales públicas del Poder Judicial de Chile (PJUD) para una persona o para un lote completo. Entrega un resultado estructurado en aproximadamente 1 minuto por persona, guarda evidencia de cada consulta y permite monitorear a diario a las personas que elijas.",
    facts: [
      { label: "Para quién", value: "RRHH, control interno y cumplimiento" },
      { label: "Fuente", value: "Causas penales públicas del Poder Judicial (PJUD)" },
      { label: "Tiempo", value: "~1 minuto por persona consultada" },
      { label: "Evidencia", value: "Bitácora y resultado estructurado por persona" },
      { label: "Monitoreo", value: "Diario, incluido en cada crédito" },
      { label: "Precio", value: `Desde ${uf(axisBase.priceUf)} + IVA al mes (${axisBase.volume.replace(" / mes", "")}), sin cobro inicial` },
    ],
    faqs: [
      {
        question: "¿Qué es AXIS?",
        answer:
          "Es un servicio de YAGO que consulta causas penales públicas del Poder Judicial de Chile para una persona o un lote, con resultado en aproximadamente 1 minuto por persona, evidencia auditable y monitoreo diario.",
      },
      {
        question: "¿Cuánto cuesta AXIS?",
        answer: `AXIS se contrata por planes mensuales en UF + IVA, donde cada crédito equivale a una persona revisada. ${axis.pricing.plans
          .map((plan) => planLine(plan, true))
          .join("; ")}. También hay contratos de 6 o 12 meses con bolsas de créditos a medida.`,
      },
      {
        question: "¿AXIS entrega un certificado oficial de antecedentes?",
        answer: "No. AXIS organiza consultas sobre causas penales públicas del PJUD de Chile, con resultado, fecha y evidencia. No emite certificados oficiales de antecedentes ni ofrece acceso a información reservada. Un resultado sin hallazgos se interpreta dentro del alcance y momento de la consulta.",
      },
    ],
    guides: [
      { label: "Glosario: PJUD, Oficina Judicial Virtual y causas penales", href: "/glosario#poder-judicial" },
      { label: "Automatización de procesos: qué es, tipos y ejemplos", href: "/blog/que-es-la-automatizacion-de-procesos-con-ia" },
    ],
    sources: [
      { label: "Poder Judicial de Chile", href: "https://www.pjud.cl/" },
      { label: "Oficina Judicial Virtual", href: "https://oficinajudicialvirtual.pjud.cl/" },
    ],
  },
  ocr: {
    slug: "ocr",
    name: "OCR de YAGO",
    question: "¿Qué es el OCR de YAGO?",
    definition:
      "Es un servicio de lectura automática de documentos: convierte facturas, órdenes de compra, contratos, formularios y PDFs escaneados en datos estructurados, validados y listos para planillas, ERP o flujos internos. Parte con una evaluación sobre documentos reales de tu operación.",
    facts: [
      { label: "Para quién", value: "Operaciones, finanzas y backoffice" },
      { label: "Documentos", value: "Facturas, órdenes de compra, contratos, formularios y guías" },
      { label: "Formatos", value: "PDF, imágenes y documentos escaneados" },
      { label: "Salida", value: "Campos estructurados para revisar, planillas o sistemas" },
      { label: "Integración", value: "Planillas, ERP y flujos internos; API con OCR Master" },
      { label: "Precio", value: "Según volumen y tipo de documento, tras una evaluación inicial" },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta el servicio de digitalización de documentos con OCR?",
        answer:
          "Se cotiza según el volumen, los tipos de documento y las integraciones, después de evaluar una muestra de tus documentos reales. No usamos un precio fijo por página, porque el trabajo cambia con los formatos, las validaciones y la revisión que necesita cada proceso. Si prefieres integrar la lectura por tu cuenta, OCR Master tiene planes mensuales publicados.",
      },
      {
        question: "¿Qué diferencia hay entre el OCR de YAGO y OCR Master?",
        answer: `El OCR de YAGO es un servicio implementado para tu proceso: definimos campos, validaciones e integración contigo. OCR Master es la API: tu equipo envía el PDF o la imagen y recibe JSON estructurado, con planes desde ${omStandard.annualPrice} al mes en pago anual (${omStandard.documentsPerMonth} documentos al mes).`,
      },
    ],
    guides: [
      { label: "Digitalización de documentos: qué es, cómo se hace y cuándo usar OCR", href: "/blog/ocr-con-ia-digitalizar-documentos" },
      { label: "Cuánto cuesta digitalizar documentos: factores y cálculo", href: "/blog/cuanto-cuesta-digitalizar-documentos" },
      { label: "Validez legal de documentos digitalizados en Chile", href: "/blog/validez-legal-documentos-digitalizados-chile" },
      { label: "Evaluar un proyecto OCR: precisión, validaciones y costo", href: "/blog/evaluar-piloto-ocr-precision-costos" },
      { label: "Glosario: OCR, IDP, API y JSON", href: "/glosario#documentos-e-ia" },
      { label: "Automatización del flujo documental completo", href: "/soluciones/automatizacion-documental" },
      { label: "OCR Master API", href: "/ocr-master" },
    ],
  },
  "ocr-master": {
    slug: "ocr-master",
    name: "OCR Master",
    question: "¿Qué es OCR Master?",
    definition: `OCR Master es la API de OCR de YAGO: recibe PDF o imágenes (${OCR_MASTER.apiDetails
      .find((detail) => detail.label === "Formatos")
      ?.value.replace(/ \| /g, ", ")}) y devuelve JSON estructurado para integrarlo en sistemas, portales y flujos de onboarding. Se contrata por planes mensuales en USD según el volumen de documentos.`,
    facts: [
      ...OCR_MASTER.apiDetails.map((detail) => ({
        label: detail.label === "Auth" ? "Autenticación" : detail.label,
        value: detail.value.replace(/ \| /g, ", "),
      })),
      { label: "Precio", value: `Desde ${omStandard.annualPrice} al mes en pago anual (${omStandard.documentsPerMonth} documentos al mes)` },
      { label: "Precisión", value: `${OCR_MASTER.metaValue} (meta en flujos compatibles)` },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta OCR Master?",
        answer: `Hay tres planes mensuales en USD: ${OCR_MASTER.plans
          .map((plan) => `${plan.name} con ${plan.documentsPerMonth} documentos al mes (${plan.annualPrice} en pago anual o ${plan.monthlyPrice} mensual)`)
          .join("; ")}.`,
      },
    ],
    guides: [
      { label: "OCR de YAGO (servicio implementado)", href: "/ocr" },
      { label: "Glosario: OCR, API y JSON", href: "/glosario#documentos-e-ia" },
    ],
  },
};

/** Preguntas del producto con las de "en resumen" primero, sin duplicados. */
export function mergeFaqs(extra: Faq[], base: Faq[]) {
  const seen = new Set(extra.map((item) => item.question.toLowerCase()));
  return [...extra, ...base.filter((item) => !seen.has(item.question.toLowerCase()))];
}
