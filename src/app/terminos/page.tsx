import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { COMPANY, PRIMARY_CTA } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Términos de uso | YAGO",
  description: "Condiciones generales de uso del sitio web de YAGO y de su contenido informativo.",
  path: "/terminos",
});

const UPDATED_AT = "2026-09-01";

const SECTIONS: LegalSection[] = [
  {
    id: "alcance",
    title: "Alcance del sitio",
    content: (
      <p>
        Este sitio presenta información general sobre YAGO, sus productos y servicios. El contenido no constituye por sí solo una
        oferta contractual ni reemplaza una propuesta comercial, técnica o legal específica.
      </p>
    ),
  },
  {
    id: "uso-permitido",
    title: "Uso permitido",
    content: (
      <p>
        Puedes utilizar el sitio para informarte y contactar a YAGO. No debes intentar afectar su disponibilidad, acceder sin
        autorización a sistemas relacionados ni reutilizar su contenido de forma engañosa.
      </p>
    ),
  },
  {
    id: "informacion-y-resultados",
    title: "Información y resultados",
    content: (
      <p>
        Tiempos, alcances y resultados dependen del proceso, los datos, las integraciones y las condiciones acordadas con cada
        cliente. Los compromisos aplicables se establecen en la propuesta o contrato correspondiente.
      </p>
    ),
  },
  {
    id: "servicios-externos",
    title: "Sitios y servicios externos",
    content: (
      <p>
        Algunos enlaces dirigen a herramientas externas, como agenda o mensajería. Esos servicios operan bajo sus propias condiciones
        y políticas de privacidad.
      </p>
    ),
  },
  {
    id: "contacto",
    title: "Contacto",
    content: (
      <p>
        Para consultas sobre estas condiciones, escribe a <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Este documento
        debe revisarse junto con la identificación legal definitiva del responsable del sitio.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Términos de uso"
      description="Condiciones generales de uso del sitio web de YAGO y de su contenido informativo."
      updatedAt={UPDATED_AT}
      sections={SECTIONS}
      navbar={{ ctaHref: PRIMARY_CTA.href, ctaLabel: PRIMARY_CTA.label }}
    />
  );
}
