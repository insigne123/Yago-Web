import { Briefcase, Building2, ChartColumn, FileText, Keyboard, ListChecks, Truck, Users, Wallet, Workflow, type LucideIcon } from "lucide-react";

/** Ícono por página de /soluciones (clave: slug de src/config/seo-pages.ts). */
const SOLUTION_ICONS: Record<string, LucideIcon> = {
  "automatizacion-backoffice": Building2,
  "automatizacion-finanzas": Wallet,
  "automatizacion-aprobaciones": ListChecks,
  "automatizacion-carga-de-datos": Keyboard,
  "automatizacion-documental": FileText,
  "automatizacion-reportes": ChartColumn,
  "automatizacion-para-logistica": Truck,
  "automatizacion-para-servicios": Briefcase,
  "automatizacion-para-rrhh-y-dotacion": Users,
};

export function solutionIcon(slug: string): LucideIcon {
  return SOLUTION_ICONS[slug] ?? Workflow;
}
