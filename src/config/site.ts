import {
  Bot,
  Workflow,
  Zap,
  Shield,
  Database,
  Cloud,
  MessageSquare,
  Rocket,
  Layers,
  Clock,
  Lock,
  Users,
} from "lucide-react";
import { AUTOMATION_PAGES } from "./automation-pages";

const bookingLink = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "";

export const COMPANY = {
  name: "YAGO",
  email: "nicolas.yarur.g@yago.cl",
  whatsapp: "+56963930231",
  whatsappLink: "https://wa.me/56963930231",
  bookingLink,
  location: "Chile · Remoto · LATAM",
  // Logo (isotipo + nombre, 600×600) e isotipo vectorial en /public/brand. Se regeneran con `npm run brand:assets`.
  logo: "/brand/yago-logo.png",
  logoMark: "/brand/yago-mark.svg",
};

export const PRIMARY_CTA = {
  href: bookingLink || "/#contacto",
  label: "Agendar diagnóstico",
};

export function getDiagnosticHref(service: string) {
  return bookingLink || `/?servicio=${encodeURIComponent(service)}#contacto`;
}

/** "31,80 UF" a partir del primer plan configurado de cada producto. */
function startingPrice(slug: "sadt" | "axis") {
  const plan = AUTOMATION_PAGES.find((page) => page.slug === slug)?.pricing.plans[0];
  if (!plan) return undefined;
  const value = new Intl.NumberFormat("es-CL", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(plan.priceUf);
  return `Desde ${value} UF${plan.period.includes("IVA") ? " + IVA" : ""}/mes`;
}

export const PRODUCT_PRICES = {
  sadt: startingPrice("sadt"),
  axis: startingPrice("axis"),
};

export const about = {
  id: "nosotros",
  title: "Nosotros",
  description:
    "YAGO implementa automatización, integración de IA, aplicaciones a medida y procesamiento documental para empresas en Chile.",
  whatWeDo:
    "Diseñamos y construimos flujos, integraciones, aplicaciones y agentes de IA conectados a los datos y sistemas de cada empresa, con alcance, validaciones y operación definidos.",
  principles: [
    "Automatización como mecanismo de colaboración humano-máquina.",
    "Ahorro de tiempo en procesos repetitivos y tediosos.",
    "Potenciar habilidades con datos y sugerencias de IA.",
    "Medir por el ahorro en recursos (HH/administrativos), no solo por el costo.",
  ],
  ctaLabel: "Conversemos por WhatsApp",
};

export const features = [
  {
    icon: Bot,
    title: "Agentes IA a medida",
    desc: "Chatbots, copilotos y asistentes que entienden tus procesos y documentos.",
  },
  {
    icon: Workflow,
    title: "Automatización de flujos",
    desc: "Orquestamos procesos complejos entre tus apps con fiabilidad y trazabilidad.",
  },
  {
    icon: Database,
    title: "RAG & Datos",
    desc: "Indexamos tu conocimiento con embeddings, vectores y búsqueda semántica.",
  },
  {
    icon: Cloud,
    title: "Apps Web Cloud",
    desc: "Aplicaciones modernas personalizadas para tus necesidades con analitica y IA",
  },
  {
    icon: Shield,
    title: "Seguridad & Roles",
    desc: "Autenticación, permisos y auditoría integrados desde el diseño.",
  },
  {
    icon: Zap,
    title: "Integraciones rápidas",
    desc: "APIs, n8n/Make, CRMs, ERPs, WhatsApp, Gmail, Drive y más: todo conectado.",
  },
];

export const products = [
  {
    icon: MessageSquare,
    name: "SOF.IA",
    subtitle: "Support Agent",
    summary:
      "Asistente corporativo para consultas internas, documentos y flujo de tickets.",
    bullets: ["RAG multi-fuente", "Resúmenes y respuestas accionables", "Dashboards"],
  },
  {
    icon: Rocket,
    name: "ANTON.IA",
    subtitle: "Leads App",
    summary:
      "Prospección inteligente: scraping ético, scoring de leads y email outreach.",
    bullets: ["Buyer persona dinámico", "Plantillas IA", "Seguimiento de conversiones"],
  },
];

export const processSteps = [
  { icon: Layers, title: "Descubrimiento", desc: "Relevamos procesos y KPIs" },
  { icon: Workflow, title: "Blueprint", desc: "Diseño de flujos y datos" },
  { icon: Bot, title: "Build", desc: "Iteraciones quincenales, QA y UAT" },
  { icon: Rocket, title: "Go‑Live", desc: "Acompañamiento + soporte" },
];

export const caseStudies = [
  {
    company: "Backoffice financiero",
    title: "Carga y validacion documental",
    description: "Facturas, ordenes de compra y respaldos dejan de pasar por digitacion manual para poder seguir operando.",
    stats: [
      { icon: Clock, text: "Menos digitacion y tiempos de registro" },
      { icon: Users, text: "Mas capacidad para revision y control" },
      { icon: Lock, text: "Trazabilidad y validacion cuando aplica" },
    ],
  },
  {
    company: "Operaciones y aprobaciones",
    title: "Flujos internos mas rapidos y visibles",
    description: "Solicitudes, aprobaciones y traspasos entre areas dejan de depender de correos, planillas sueltas o seguimiento manual.",
    stats: [
      { icon: Clock, text: "Menos esperas entre etapas del proceso" },
      { icon: Users, text: "Responsables y estados mas claros" },
      { icon: Lock, text: "Reglas, logs y ownership operativo" },
    ],
  },
  {
    company: "Soporte interno y reportes",
    title: "Menos trabajo repetitivo para el equipo",
    description: "Consultas internas, consolidacion de datos y reportes operativos se resuelven con mejor contexto y menos retrabajo.",
    stats: [
      { icon: Clock, text: "Respuestas y reportes mas rapidos" },
      { icon: Users, text: "Equipos liberados para tareas de mayor valor" },
      { icon: Lock, text: "Informacion mas ordenada y auditable" },
    ],
  },
];

export const technologies = [
  "Firebase",
  "Next.js",
  "Supabase",
  "n8n",
  "Make",
  "GCP",
  "WhatsApp API",
  "PostgreSQL",
  "Meta/Facebook",
  "Excel",
  "Instagram",
  "Telegram",
  "Gmail",
  "Google Workspace",
  "Microsoft 365",
  "Microsoft Azure",
  "Google Cloud",
  "IA",
  "LLM",
  "y muchos más...",
];

export const testimonials = [];

export type NavIcon =
  | "sadt"
  | "axis"
  | "ocr"
  | "audit"
  | "flow"
  | "integration"
  | "apps"
  | "bot"
  | "cap"
  | "book"
  | "route"
  | "grid"
  | "glossary";

export type NavItem = {
  name: string;
  href: string;
  eyebrow?: string;
  description?: string;
  detail?: string;
  meta?: string;
  icon?: NavIcon;
  children?: NavItem[];
};

export const navLinks: NavItem[] = [
  {
    name: "Servicios",
    href: "/servicios",
    eyebrow: "Implementación a medida",
    description: "Automatización, IA, apps y documentos.",
    children: [
      {
        name: "Auditoría IA",
        href: "/servicios/auditoria-ia",
        description: "Investigamos tu empresa y te proponemos qué automatizar e integrar.",
        meta: "No necesitas llegar con una idea",
        icon: "audit",
      },
      {
        name: "Automatización de procesos",
        href: "/servicios/automatizacion-procesos",
        description: "Tareas repetitivas orquestadas con IA y APIs.",
        meta: "MVP en 1–2 semanas",
        icon: "flow",
      },
      {
        name: "Integración de IA",
        href: "/servicios/integracion-ia",
        description: "IA conectada a los datos y procesos de tu empresa.",
        icon: "integration",
      },
      {
        name: "Aplicaciones y software con IA",
        href: "/servicios/apps-automatizacion",
        description: "Apps a medida y desarrollo asistido por IA, con revisión y pruebas.",
        icon: "apps",
      },
      {
        name: "Agentes y asistentes de IA",
        href: "/servicios/agentes-ia",
        description: "Conocimiento interno y herramientas con un alcance definido.",
        icon: "bot",
      },
      {
        name: "OCR y documentos",
        href: "/ocr",
        description: "Lectura y extracción de datos desde PDFs e imágenes.",
        icon: "ocr",
      },
      {
        name: "Capacitación en IA",
        href: "/servicios/capacitacion-ia",
        description: "Workshops prácticos para que tu equipo adopte IA con seguridad.",
        meta: "Bootcamp de 6–12 h",
        icon: "cap",
      },
    ],
  },
  {
    name: "Productos",
    href: "/productos",
    eyebrow: "Productos YAGO",
    description: "Implementaciones para procesos específicos.",
    children: [
      { name: "SADT", href: "/sadt", eyebrow: "Portal Dirección del Trabajo", description: "Contratos, desvinculaciones y F30/F30-1 por lote.", meta: PRODUCT_PRICES.sadt, icon: "sadt" },
      { name: "AXIS", href: "/axis", eyebrow: "Consultas PJUD", description: "Causas penales públicas, evidencia y monitoreo diario.", meta: PRODUCT_PRICES.axis, icon: "axis" },
      { name: "OCR Master API", href: "/ocr-master", eyebrow: "Documentos a JSON", description: "Lectura de documentos para integrar en tus aplicaciones.", icon: "ocr" },
    ],
  },
  { name: "Casos", href: "/casos" },
  { name: "Precios", href: "/precios" },
  {
    name: "Recursos",
    href: "/blog",
    eyebrow: "Recursos",
    description: "Guías prácticas y cómo trabajamos.",
    children: [
      { name: "Blog", href: "/blog", description: "Guías sobre automatización, IA, OCR y retorno operativo.", icon: "book" },
      { name: "Cómo trabajamos", href: "/proceso", description: "Cómo priorizamos, construimos y ponemos en marcha.", icon: "route" },
      { name: "Soluciones por problema", href: "/soluciones", description: "Backoffice, finanzas, aprobaciones, RRHH y más.", icon: "grid" },
      { name: "Glosario", href: "/glosario", description: "IA, desarrollo, automatización y OCR, además de trámites laborales.", icon: "glossary" },
      { name: "Nosotros", href: "/nosotros", description: "Qué hace YAGO y cómo implementamos IA y automatización en Chile.", icon: "grid" },
    ],
  },
];

export const footerGroups: { title: string; links: { name: string; href: string }[] }[] = [
  {
    title: "Productos",
    links: [
      { name: "SADT · Portal DT", href: "/sadt" },
      { name: "AXIS · PJUD", href: "/axis" },
      { name: "OCR · Documentos", href: "/ocr" },
      { name: "OCR Master API", href: "/ocr-master" },
      { name: "Precios", href: "/precios" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { name: "Auditoría IA", href: "/servicios/auditoria-ia" },
      { name: "Automatización", href: "/servicios/automatizacion-procesos" },
      { name: "Integración de IA", href: "/servicios/integracion-ia" },
      { name: "Apps y software con IA", href: "/servicios/apps-automatizacion" },
      { name: "Agentes y asistentes", href: "/servicios/agentes-ia" },
      { name: "OCR y documentos", href: "/ocr" },
      { name: "Capacitación en IA", href: "/servicios/capacitacion-ia" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Nosotros", href: "/nosotros" },
      { name: "Casos", href: "/casos" },
      { name: "Cómo trabajamos", href: "/proceso" },
      { name: "Soluciones", href: "/soluciones" },
      { name: "Blog", href: "/blog" },
      { name: "Glosario", href: "/glosario" },
    ],
  },
];

export const footerLinks = [
    { name: "Casos", href: "/casos" },
    { name: "Proceso", href: "/proceso" },
    { name: "Productos", href: "/productos" },
    { name: "Servicios", href: "/servicios" },
    { name: "Soluciones", href: "/soluciones" },
    { name: "Blog", href: "/blog" },
    { name: "OCR", href: "/ocr" },
    { name: "SADT", href: "/sadt" },
    { name: "AXIS", href: "/axis" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contacto", href: "/#contacto" },
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Términos", href: "/terminos" },
];
