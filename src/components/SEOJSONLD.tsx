import Script from "next/script";
import { COMPANY } from "@/config/site";

export function SEOJSONLD() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";
  const logoUrl = `${SITE_URL}${COMPANY.logo || "/logo-yago.png"}`;
  const ogImage = `${SITE_URL}/opengraph-image`;
  const description =
    "Automatizacion de procesos, OCR e integraciones para equipos de operaciones, backoffice y finanzas en Chile y LATAM.";

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
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
        areaServed: "Latin America",
        availableLanguage: ["es"],
      },
    ],
    sameAs: [COMPANY.whatsappLink].filter(Boolean),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.name,
    url: SITE_URL,
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: COMPANY.name,
    url: SITE_URL,
    logo: logoUrl,
    image: ogImage,
    description,
    areaServed: ["Chile", "Latin America"],
    email: COMPANY.email,
  };

  return (
    <>
      <Script id="jsonld-org" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <Script id="jsonld-website" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <Script id="jsonld-service" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }} />
    </>
  );
}
