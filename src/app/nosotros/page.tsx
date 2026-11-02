import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ActionLink, BOOKING_ACTION, CtaBand, FaqSection, PageHero, PageSection, PageShell, SectionHeader, TextLink, faqJsonLd } from "@/components/site/PageKit";
import { ENTITY } from "@/config/entity";
import { HOME_SERVICES } from "@/config/home";
import { COMPANY } from "@/config/site";
import { TEAM_MEMBERS, getPersonJsonLd } from "@/config/team";
import { createPageMetadata, SITE_URL } from "@/lib/seo";
import { COMPANY_PROFILE, DISCOVERY_UPDATED } from "@/config/discovery";

export const metadata = createPageMetadata({
  title: "YAGO: automatización e inteligencia artificial en Chile",
  description: "Conoce YAGO: implementación de automatización, integración de IA, aplicaciones y procesamiento documental para empresas en Chile, con alcance y validación definidos.",
  path: "/nosotros",
});

const PROFILE_LABELS: Record<string, string> = {
  "www.linkedin.com": "LinkedIn de YAGO",
  "clutch.co": "Perfil de YAGO en Clutch",
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "AboutPage", "@id": `${SITE_URL}/nosotros#page`, url: `${SITE_URL}/nosotros`, name: "Sobre YAGO", description: COMPANY_PROFILE.definition, dateModified: DISCOVERY_UPDATED, inLanguage: "es-CL", mainEntity: { "@id": `${SITE_URL}/#organization` }, isPartOf: { "@id": `${SITE_URL}/#website` } },
      ...TEAM_MEMBERS.map((member) => getPersonJsonLd(member, SITE_URL)),
    ],
  };

  return (
    <PageShell>
      <JsonLd id="jsonld-about" data={jsonLd} />
      <JsonLd id="jsonld-about-faq" data={faqJsonLd(COMPANY_PROFILE.faqs)} />
      <PageHero
        top={<Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Nosotros", href: "/nosotros" }]} />}
        eyebrow="YAGO · Chile"
        title="Implementamos IA y automatización"
        highlight="sobre tu operación."
        description="Somos una empresa chilena que diseña y construye flujos, integraciones, aplicaciones y procesamiento documental. Trabajamos con equipos de negocio y tecnología para pasar de una necesidad a una solución evaluable."
        actions={<ActionLink action={BOOKING_ACTION} arrow />}
      />
      <PageSection id="empresa" tone="light">
        <SectionHeader eyebrow="Qué hace YAGO" title="Tecnología conectada a un problema concreto." description={COMPANY_PROFILE.definition} />
        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          <div><dt className="y-eyebrow">Empresa</dt><dd className="mt-3 text-lg text-slate-950">{ENTITY.legalName}<span className="mt-1 block text-sm text-slate-600">RUT {ENTITY.taxID}</span></dd></div>
          <div><dt className="y-eyebrow">Mercado principal</dt><dd className="mt-3 text-lg text-slate-950">Empresas en Chile</dd></div>
          <div><dt className="y-eyebrow">Modalidad</dt><dd className="mt-3 text-lg text-slate-950">Atención remota · Chile y Latinoamérica</dd></div>
          <div><dt className="y-eyebrow">Contacto</dt><dd className="mt-3 break-all text-lg text-slate-950"><a href={`mailto:${COMPANY.email}`} className="underline underline-offset-4">{COMPANY.email}</a></dd></div>
        </dl>
        <p className="mt-6 text-sm text-slate-600">Información revisada: <time dateTime={DISCOVERY_UPDATED}>26 de octubre de 2026</time>.</p>
      </PageSection>
      <PageSection id="capacidades" tone="mist">
        <SectionHeader eyebrow="Especialidades" title="Automatización, IA, aplicaciones y documentos." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {HOME_SERVICES.map((service) => (
            <article key={service.href} className="y-card flex flex-col gap-4 p-7">
              <h3 className="y-h3 text-[1.3rem] text-slate-950">{service.title}</h3>
              <p className="text-[15.5px] leading-relaxed text-slate-600">{service.description}</p>
              <Link href={service.href} className="y-link mt-auto">Ver el servicio<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
      </PageSection>
      <PageSection id="forma-de-trabajo" tone="light">
        <SectionHeader eyebrow="Cómo trabajamos" title="Alcance, prueba y operación definidos." description="Revisamos el proceso y sus datos, acordamos entregables, construimos un primer alcance y lo validamos junto al equipo que lo utilizará. Documentamos integraciones, excepciones y mantenimiento según el proyecto." />
        <ul className="mt-8 flex flex-col gap-5">
          <li><TextLink href="/proceso">Conocer las etapas de implementación</TextLink></li>
          <li><TextLink href="/casos">Cómo medimos los resultados</TextLink></li>
          <li><TextLink href="/blog/elegir-proveedor-automatizacion-ia-chile">Criterios para elegir un proveedor</TextLink></li>
        </ul>
      </PageSection>
      <PageSection id="productos-y-entregables" tone="mist">
        <SectionHeader eyebrow="Qué puedes revisar" title="Productos propios y entregables definidos." description="Los productos muestran un alcance concreto. En los proyectos a medida, acordamos qué se entrega y cómo se comprueba antes de ampliar la implementación." />
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {COMPANY_PROFILE.products.map((product) => <article key={product.href} className="y-card flex flex-col gap-4 p-7"><h3 className="y-h3 text-2xl text-slate-950">{product.name}</h3><p className="text-[15px] leading-relaxed text-slate-600">{product.description}</p><TextLink href={product.href}>Revisar alcance y planes de {product.name}</TextLink></article>)}
        </div>
        <h3 className="y-h3 mt-10 text-xl text-slate-950">Qué acordamos en una implementación</h3>
        <ul className="mt-5 grid gap-4 text-[15px] leading-relaxed text-slate-700 md:grid-cols-2">{COMPANY_PROFILE.deliverables.map((item) => <li key={item} className="border-t border-slate-300 pt-4">{item}</li>)}</ul>
        <div className="mt-8 flex flex-col items-start gap-4"><TextLink href="/blog/evaluar-piloto-ocr-precision-costos">Preparar una evaluación OCR con una plantilla</TextLink><TextLink href="/blog/integrar-ia-procesos-empresa">Definir entradas, validaciones y destino de una integración</TextLink></div>
      </PageSection>
      {TEAM_MEMBERS.length ? (
        <PageSection id="equipo" tone="mist">
          <SectionHeader eyebrow="Personas" title="Equipo de YAGO." />
          <div className={`mt-10 grid gap-5 ${TEAM_MEMBERS.length > 1 ? "md:grid-cols-2" : "max-w-3xl"}`}>
            {TEAM_MEMBERS.map((member) => <article key={member.slug} id={member.slug} className="y-card scroll-mt-28 p-7"><h3 className="y-h3 text-slate-950">{member.name}</h3><p className="mt-2 font-medium text-sky-700">{member.role}</p><p className="mt-4 text-[15.5px] leading-relaxed text-slate-600">{member.bio}</p>{member.profileUrl ? <a href={member.profileUrl} target="_blank" rel="noreferrer" className="y-link mt-5">LinkedIn profesional<ArrowRight className="h-4 w-4" aria-hidden="true" /></a> : null}</article>)}
          </div>
        </PageSection>
      ) : null}
      {ENTITY.sameAs.length ? (
        <PageSection id="perfiles" tone="light"><SectionHeader eyebrow="Perfiles oficiales" title="YAGO en otras plataformas." /><ul className="mt-8 flex flex-col gap-4">{ENTITY.sameAs.map((href) => <li key={href}><a href={href} target="_blank" rel="noreferrer" className="y-link break-all">{PROFILE_LABELS[new URL(href).hostname] || new URL(href).hostname.replace(/^www\./, "")}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a></li>)}</ul></PageSection>
      ) : null}
      <FaqSection title="Sobre YAGO y la implementación." items={COMPANY_PROFILE.faqs} />
      <CtaBand title="Conversemos sobre tu próximo proyecto." text="Cuéntanos la tarea, aplicación o integración que necesita tu empresa y definamos por dónde partir." />
    </PageShell>
  );
}
