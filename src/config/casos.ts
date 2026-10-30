import { ChartNoAxesColumnIncreasing, CircleCheck, ClipboardCheck, Clock, Lock, Search, Users, type LucideIcon } from "lucide-react";

// Contenido de /casos. Los escenarios son los mismos de `caseStudies` (src/config/site.ts), con tildes corregidas:
// describen patrones operativos, no testimonios ni resultados de un cliente específico.

export const CASE_METHOD: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Línea base",
    description: "Medimos volumen, tiempo manual, errores, esperas y responsables antes de automatizar.",
    icon: Search,
  },
  {
    title: "Alcance verificable",
    description: "Acordamos qué hará el flujo, qué seguirá revisando una persona y cómo se manejarán las excepciones.",
    icon: ClipboardCheck,
  },
  {
    title: "Validación operativa",
    description: "Probamos con datos y usuarios del proceso antes de considerar terminada la implementación.",
    icon: CircleCheck,
  },
  {
    title: "Resultado comparable",
    description: "Comparamos la operación contra la línea base y documentamos el método de cálculo.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

export const CASE_SCENARIOS: {
  area: string;
  title: string;
  description: string;
  stats: { icon: LucideIcon; text: string }[];
  related: { label: string; href: string };
}[] = [
  {
    area: "Backoffice financiero",
    title: "Carga y validación documental",
    description: "Facturas, órdenes de compra y respaldos dejan de pasar por digitación manual para poder seguir operando.",
    stats: [
      { icon: Clock, text: "Menos digitación y tiempos de registro" },
      { icon: Users, text: "Más capacidad para revisión y control" },
      { icon: Lock, text: "Trazabilidad y validación cuando aplica" },
    ],
    related: { label: "Automatización para finanzas", href: "/soluciones/automatizacion-finanzas" },
  },
  {
    area: "Operaciones y aprobaciones",
    title: "Flujos internos más rápidos y visibles",
    description: "Solicitudes, aprobaciones y traspasos entre áreas dejan de depender de correos, planillas sueltas o seguimiento manual.",
    stats: [
      { icon: Clock, text: "Menos esperas entre etapas del proceso" },
      { icon: Users, text: "Responsables y estados más claros" },
      { icon: Lock, text: "Reglas, logs y ownership operativo" },
    ],
    related: { label: "Automatización de aprobaciones", href: "/soluciones/automatizacion-aprobaciones" },
  },
  {
    area: "Soporte interno y reportes",
    title: "Menos trabajo repetitivo para el equipo",
    description: "Consultas internas, consolidación de datos y reportes operativos se resuelven con mejor contexto y menos retrabajo.",
    stats: [
      { icon: Clock, text: "Respuestas y reportes más rápidos" },
      { icon: Users, text: "Equipos liberados para tareas de mayor valor" },
      { icon: Lock, text: "Información más ordenada y auditable" },
    ],
    related: { label: "Automatización de reportes", href: "/soluciones/automatizacion-reportes" },
  },
];
