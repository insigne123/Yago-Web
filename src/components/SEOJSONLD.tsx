import { COMPANY } from "@/config/site";
import { ENTITY } from "@/config/entity";
import { SERVICES } from "@/config/services";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * Grafo de entidad global (Organization + WebSite + ProfessionalService).
 * Ayuda a Google, Bing y asistentes de IA a entender quién es YAGO, qué ofrece y dónde opera.
 */
export function SEOJSONLD() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";
  const logoUrl = `${SITE_URL}${COMPANY.logo}`;
  const ogImage = `${SITE_URL}/opengraph-image`;

  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const serviceId = `${SITE_URL}/#professional-service`;

  const catalog = {
    "@type": "OfferCatalog",
    name: "Productos y servicios de YAGO",
    itemListElement: [
      ...SERVICES.map((service) => ({ type: "Service", name: service.title, description: service.definition || service.short, url: `${SITE_URL}/servicios/${service.slug}` })),
      { type: "Service", name: "OCR y digitalización de documentos", description: "Lectura, extracción y validación de datos desde PDFs e imágenes para procesos empresariales.", url: `${SITE_URL}/ocr` },
      { type: "SoftwareApplication", name: "SADT", description: "Automatización del Portal Mi DT: contratos, términos de contrato y certificados F30/F30-1.", url: `${SITE_URL}/sadt` },
      { type: "SoftwareApplication", name: "AXIS", description: "Consulta de causas penales públicas del Poder Judicial (PJUD) a volumen.", url: `${SITE_URL}/axis` },
      { type: "WebAPI", name: "OCR Master API", description: "API de OCR que devuelve JSON estructurado.", url: `${SITE_URL}/ocr-master` },
    ].map(({ type, ...item }) => ({ "@type": "Offer", itemOffered: { "@type": type, ...item } })),
  };

  const org = {
    "@type": "Organization",
    "@id": organizationId,
    name: COMPANY.name,
    legalName: ENTITY.legalName,
    alternateName: ["YAGO", "Yago", ENTITY.legalName],
    url: SITE_URL,
    logo: { "@type": "ImageObject", "@id": `${SITE_URL}/#logo`, url: logoUrl, contentUrl: logoUrl, width: 600, height: 600, caption: COMPANY.name },
    image: ogImage,
    description: ENTITY.description,
    slogan: ENTITY.slogan,
    email: COMPANY.email,
    telephone: COMPANY.whatsapp,
    address: { "@type": "PostalAddress", addressCountry: ENTITY.country },
    areaServed: [{ "@type": "Country", name: "Chile" }, "Latinoamérica"],
    knowsAbout: ENTITY.knowsAbout,
    ...(ENTITY.sameAs.length ? { sameAs: ENTITY.sameAs } : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: COMPANY.email,
        telephone: COMPANY.whatsapp,
        areaServed: "CL",
        availableLanguage: ["es-CL", "es"],
      },
    ],
    hasOfferCatalog: catalog,
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: COMPANY.name,
    url: SITE_URL,
    inLanguage: "es-CL",
    publisher: { "@id": organizationId },
  };

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": serviceId,
    name: COMPANY.name,
    url: SITE_URL,
    logo: { "@id": `${SITE_URL}/#logo` },
    image: ogImage,
    description: ENTITY.description,
    areaServed: { "@type": "Country", name: "Chile" },
    address: { "@type": "PostalAddress", addressCountry: ENTITY.country },
    email: COMPANY.email,
    telephone: COMPANY.whatsapp,
    parentOrganization: { "@id": organizationId },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [org, website, professionalService],
  };

  return (
    <JsonLd id="jsonld-entity-graph" data={graph} />
  );
}
