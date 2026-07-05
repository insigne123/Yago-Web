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

const bookingLink = process.env.NEXT_PUBLIC_BOOKING_URL?.trim() || "";

export const COMPANY = {
  name: "Yago",
  email: "nicolas.yarur.g@yago.cl",
  whatsapp: "+56963930231",
  whatsappLink: "https://wa.me/56963930231",
  bookingLink,
  location: "Chile · Remoto · LATAM",
  // Logo principal en carpeta /public
  logo: "/logo-yago.png",           // <-- tu archivo real en /public
  logoMark: "/logo-yago-mark.svg",  // opcional si luego lo agregas
};

export const PRIMARY_CTA = {
  href: bookingLink || "#contacto",
  label: "Agendar sesion",
};

export const about = {
  id: "nosotros",
  title: "Nosotros",
  description:
    "En Yago automatizamos procesos empresariales con IA para equipos de operaciones, backoffice y finanzas que necesitan bajar carga manual sin perder control.",
  whatWeDo:
    "Diseniamos, construimos y operamos automatizaciones y agentes de IA que eliminan tareas repetitivas, integran sistemas y entregan visibilidad real para seguir operando mejor.",
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

export const navLinks = [
    { name: "Inicio", href: "/#inicio" },
    {
      name: "Apps listas",
      href: "/#elige-ruta",
      eyebrow: "Servicios listos",
      description: "OCR, SADT y AXIS para problemas operativos específicos.",
      detail: "Elige esta ruta si ya sabes qué proceso quieres resolver.",
      children: [
        {
          name: "OCR",
          href: "/ocr",
          eyebrow: "Documentos a datos",
          description: "Convierte facturas, contratos, formularios y PDFs escaneados en datos útiles para operar.",
        },
        {
          name: "SADT",
          href: "/sadt",
          eyebrow: "Portal DT",
          description: "Automatiza contratos, desvinculaciones y certificados F30/F30-1.",
        },
        {
          name: "AXIS",
          href: "/axis",
          eyebrow: "Consulta PJUD",
          description: "Consulta causas penales públicas a volumen con evidencia y monitoreo diario.",
        },
      ],
    },
    {
      name: "Soluciones",
      href: "/soluciones",
      eyebrow: "Por problema",
      description: "Rutas para backoffice, finanzas, reportes, aprobaciones, RRHH y procesos documentales.",
      detail: "Útil si tu caso no calza exactamente con OCR, SADT o AXIS.",
    },
    {
      name: "Casos",
      href: "/#casos",
      eyebrow: "Prueba operativa",
      description: "Ejemplos de procesos donde YAGO libera carga manual y ordena la trazabilidad.",
    },
    {
      name: "Blog",
      href: "/blog",
      eyebrow: "Guías prácticas",
      description: "Automatización, IA, OCR y ROI explicados sin humo para equipos de operaciones.",
    },
    {
      name: "FAQ",
      href: "/#faq",
      eyebrow: "Dudas comunes",
      description: "Respuestas rápidas sobre seguridad, alcance, ROI, tiempos y la sesión inicial.",
    },
];

export const footerLinks = [
    { name: "Casos", href: "/#casos" },
    { name: "Proceso", href: "/proceso" },
    { name: "Servicios", href: "/servicios" },
    { name: "Soluciones", href: "/soluciones" },
    { name: "Blog", href: "/blog" },
    { name: "OCR", href: "/ocr" },
    { name: "SADT", href: "/sadt" },
    { name: "AXIS", href: "/axis" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contacto", href: "/#contacto" },
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Términos", href: "#" },
];
