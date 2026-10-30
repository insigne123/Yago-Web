import { getServiceBySlug, type Service } from "@/config/services";

export type EvidenceService = Service["slug"] | "ocr" | "ocr-master" | "sadt" | "axis";
export type EvidenceSource = { label: string; href: string };

export type Testimonial = {
  id: string;
  quote: string;
  person: string;
  role: string;
  company: string;
  date: string;
  services: EvidenceService[];
  source?: EvidenceSource;
  /** Publicar únicamente después de obtener autorización para esta cita y atribución. */
  approved: boolean;
};

export type CaseMetric = {
  value: string;
  label: string;
  period: string;
  method: string;
  basis: "measured" | "estimated";
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  services: EvidenceService[];
  before: string;
  implemented: string;
  result: string;
  measurement: string;
  metrics: CaseMetric[];
  publishedDate: string;
  modifiedDate?: string;
  testimonialId?: string;
  source?: EvidenceSource;
  approved: boolean;
};

// Sin contenido de ejemplo: las entradas autorizadas activan los bloques y rutas públicas.
// Instrucciones de recopilación y publicación: docs/kit-clientes-resenas.md.
export const TESTIMONIALS: Testimonial[] = [];
export const CASE_STUDIES: CaseStudy[] = [];

export function getPublishedTestimonials(service?: EvidenceService) {
  return TESTIMONIALS.filter((item) => item.approved && item.quote.trim() && item.person.trim() && item.company.trim() && (!service || item.services.includes(service)));
}

export function getPublishedCaseStudies(service?: EvidenceService) {
  return CASE_STUDIES.filter((item) => item.approved && item.slug.trim() && item.title.trim() && item.client.trim() && item.measurement.trim() && (!service || item.services.includes(service)))
    .sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));
}

export function getPublishedCaseBySlug(slug: string) {
  return getPublishedCaseStudies().find((item) => item.slug === slug);
}

export function getEvidenceServiceLink(slug: EvidenceService) {
  const service = getServiceBySlug(slug);
  if (service) return { name: service.title, href: `/servicios/${service.slug}` };
  const products = {
    ocr: { name: "OCR para empresas", href: "/ocr" },
    "ocr-master": { name: "OCR Master API", href: "/ocr-master" },
    sadt: { name: "SADT", href: "/sadt" },
    axis: { name: "AXIS", href: "/axis" },
  };
  return products[slug as keyof typeof products];
}
