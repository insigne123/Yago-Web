import { COMPANY } from "@/config/site";

export function SEOJSONLD() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";
  const logoUrl = `${SITE_URL}${COMPANY.logo || "/logo-yago.png"}`;
  const ogImage = `${SITE_URL}/opengraph-image`;
  const description =
    "Automatizacion de procesos, OCR e integraciones para equipos de operaciones, backoffice y finanzas en Chile y LATAM.";

  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const serviceId = `${SITE_URL}/#professional-service`;

  const org = {
    "@type": "Organization",
    "@id": organizationId,
    name: COMPANY.name,
    url: SITE_URL,
    logo: logoUrl,
    image: ogImage,
    description,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: COMPANY.email,
        telephone: COMPANY.whatsapp,
        areaServed: ["CL", "Latin America"],
        availableLanguage: ["es-CL", "es"],
      },
    ],
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
    logo: logoUrl,
    image: ogImage,
    description,
    areaServed: ["Chile", "Latin America"],
    email: COMPANY.email,
    telephone: COMPANY.whatsapp,
    parentOrganization: { "@id": organizationId },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [org, website, professionalService],
  };

  return (
    <script id="jsonld-entity-graph" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}
