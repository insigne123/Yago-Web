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

export const COMPANY = {
  name: "Yago",
  email: "nicolas.yarur.g@yago.cl",
  whatsapp: "+56963930231",
  whatsappLink: "https://wa.me/56963930231",
  location: "Chile · Remoto · LATAM",
  // Logo principal en carpeta /public
  logo: "/logo-yago.png",           // <-- tu archivo real en /public
  logoMark: "/logo-yago-mark.svg",  // opcional si luego lo agregas
};

export const about = {
  id: "nosotros",
  title: "Nosotros",
  description:
    "En Yago automatizamos procesos empresariales con IA para liberar tiempo operativo y potenciar a las personas. La tecnología asiste; las decisiones siguen siendo humanas.",
  whatWeDo:
    "Diseñamos, construimos y operamos automatizaciones y agentes de IA que eliminan tareas repetitivas, integran sistemas y aportan sugerencias basadas en datos para acelerar el trabajo diario.",
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
    company: "Empresa 1",
    title: "Automatización de soporte N1",
    description: "Integración de chatbot + ticketing + RAG documental.",
    stats: [
      { icon: Clock, text: "TTR ↓ 55% · SLA 95% · Satisfacción ↑ 30%" },
      { icon: Users, text: "300+ agentes asistidos · 24/7" },
      { icon: Lock, text: "SSO + roles + auditoría" },
    ],
  },
  {
    company: "Empresa 2",
    title: "Automatización de soporte N2",
    description: "Integración de chatbot + ticketing + RAG documental.",
    stats: [
      { icon: Clock, text: "TTR ↓ 50% · SLA 98% · Satisfacción ↑ 25%" },
      { icon: Users, text: "500+ agentes asistidos · 24/7" },
      { icon: Lock, text: "SSO + roles + auditoría" },
    ],
  },
  {
    company: "Empresa 3",
    title: "Automatización de soporte N3",
    description: "Integración de chatbot + ticketing + RAG documental.",
    stats: [
      { icon: Clock, text: "TTR ↓ 65% · SLA 99% · Satisfacción ↑ 40%" },
      { icon: Users, text: "150+ agentes asistidos · 24/7" },
      { icon: Lock, text: "SSO + roles + auditoría" },
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

export const faqItems = [
    {
      q: "¿Trabajan con datos sensibles?",
      a: "Sí, aplicamos principios de privacidad by‑design, control de accesos por rol y auditoría. La infraestructura se despliega en proveedores con buenas prácticas. Podemos adaptar políticas a tu compliance.",
    },
    {
      q: "¿Cuánto tarda un proyecto típico?",
      a: "Prototipo funcional en 2‑4 semanas con entregas quincenales. La duración depende del alcance y las integraciones requeridas.",
    },
    {
      q: "¿Qué necesito para comenzar?",
      a: "Una conversación de descubrimiento (30‑45 min) para entender procesos, herramientas actuales y objetivos de negocio.",
    },
];

export const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Productos", href: "#productos" },
    { name: "Tecnología", href: "#tecnologia" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
];

export const footerLinks = [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Productos", href: "#productos" },
    { name: "Tecnología", href: "#tecnologia" },
    { name: "FAQ", href: "#faq" },
    { name: "Política de Privacidad", href: "/privacidad" },
    { name: "Términos", href: "#" },
];
