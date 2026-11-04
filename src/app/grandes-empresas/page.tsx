import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stepGridClass } from "@/components/catalog/CatalogKit";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ActionLink, BOOKING_ACTION, CheckList, CtaBand, FaqSection, PageHero, PageSection, PageShell, SectionHeader, StepCard, TextLink, faqJsonLd } from "@/components/site/PageKit";
import { COLABORADORES } from "@/config/colaboradores";
import { ENTITY } from "@/config/entity";
import { ENTERPRISE_PAGE as PAGE, ENTERPRISE_UPDATED } from "@/config/grandes-empresas";
import { COMPANY } from "@/config/site";
import { createPageMetadata, SITE_URL } from "@/lib/seo";

const PATH = "/grandes-empresas";

export const metadata = createPageMetadata({
  title: PAGE.seoTitle,
  description: PAGE.seoDescription,
  path: PATH,
});

export default function EnterprisePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${PATH}#page`,
    url: `${SITE_URL}${PATH}`,
    name: PAGE.seoTitle,
    description: PAGE.summary.description,
    dateModified: ENTERPRISE_UPDATED,
    inLanguage: "es-CL",
    about: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    audience: { "@type": "BusinessAudience", name: "Grandes empresas en Chile" },
  };

  return (
    <PageShell>
      <JsonLd id="jsonld-enterprise" data={jsonLd} />
      <JsonLd id="jsonld-enterprise-faq" data={faqJsonLd(PAGE.faqs)} />
      <PageHero
        top={<Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Grandes empresas", href: PATH }]} />}
        eyebrow={PAGE.hero.eyebrow}
        title={PAGE.hero.title}
        highlight={PAGE.hero.highlight}
        description={PAGE.hero.description}
        actions={<ActionLink action={BOOKING_ACTION} arrow />}
      />

      <PageSection id="resumen" tone="mist">
        <SectionHeader eyebrow={PAGE.summary.eyebrow} title={PAGE.summary.title} description={PAGE.summary.description} />
        <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PAGE.summary.facts.map((fact) => (
            <div key={fact.label} className="border-t border-slate-300 pt-4">
              <dt className="font-mono text-xs uppercase tracking-wider text-slate-600">{fact.label}</dt>
              <dd className="mt-2 text-[16px] leading-relaxed text-slate-900">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </PageSection>

      <PageSection id="donde-encajamos" tone="light">
        <SectionHeader eyebrow={PAGE.fit.eyebrow} title={PAGE.fit.title} description={PAGE.fit.description} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PAGE.fit.good.map((item) => (
            <article key={item.href} className="y-card flex flex-col gap-4 p-7">
              <h3 className="y-h3 text-[1.25rem] text-slate-950">{item.title}</h3>
              <p className="text-[15.5px] leading-relaxed text-slate-600">{item.description}</p>
              <Link href={item.href} className="y-link mt-auto">{item.label}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </article>
          ))}
        </div>
        <div id="otro-proveedor" className="mt-16 scroll-mt-28">
          <h3 className="y-h3 text-2xl text-slate-950">{PAGE.fit.otherTitle}</h3>
          <p className="mt-3 text-[15.5px] leading-relaxed text-slate-600">{PAGE.fit.otherDescription}</p>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {PAGE.fit.other.map((item) => (
              <li key={item.title} className="border-t border-slate-300 pt-4">
                <p className="font-medium text-slate-950">{item.title}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageSection id="como-parte" tone="dark">
        <SectionHeader eyebrow={PAGE.pilot.eyebrow} title={PAGE.pilot.title} dark />
        <ol className={`mt-10 ${stepGridClass(PAGE.pilot.steps.length)}`}>
          {PAGE.pilot.steps.map((step, index) => (
            <StepCard key={step.title} index={index} title={step.title} description={step.description} />
          ))}
        </ol>
      </PageSection>

      <PageSection id="ti-y-seguridad" tone="light">
        <SectionHeader eyebrow={PAGE.controls.eyebrow} title={PAGE.controls.title} />
        <dl className="mt-10 grid gap-x-8 gap-y-7 md:grid-cols-2">
          {PAGE.controls.items.map((item) => (
            <div key={item.title} className="border-t border-slate-300 pt-4">
              <dt className="font-medium text-slate-950">{item.title}</dt>
              <dd className="mt-2 text-[15.5px] leading-relaxed text-slate-600">{item.description}</dd>
            </div>
          ))}
        </dl>
      </PageSection>

      <PageSection id="por-escrito" tone="mist">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow={PAGE.written.eyebrow} title={PAGE.written.title} />
            <CheckList items={PAGE.written.items} className="mt-8" />
          </div>
          <div id="continuidad" className="y-card scroll-mt-28 p-7 sm:p-9">
            <h3 className="y-h3 text-2xl text-slate-950">{PAGE.written.continuityTitle}</h3>
            <p className="mt-4 text-[15.5px] leading-relaxed text-slate-600">{PAGE.written.continuity}</p>
            <div className="mt-6"><TextLink href="/proceso">Ver cómo trabajamos</TextLink></div>
          </div>
        </div>
      </PageSection>

      <PageSection id="compras-y-legal" tone="light">
        <SectionHeader eyebrow={PAGE.procurement.eyebrow} title={PAGE.procurement.title} />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <dl className="grid content-start gap-6 sm:grid-cols-2">
            <div className="border-t border-slate-300 pt-4"><dt className="font-mono text-xs uppercase tracking-wider text-slate-600">Razón social</dt><dd className="mt-2 text-[16px] text-slate-900">{ENTITY.legalName}</dd></div>
            <div className="border-t border-slate-300 pt-4"><dt className="font-mono text-xs uppercase tracking-wider text-slate-600">RUT</dt><dd className="mt-2 text-[16px] text-slate-900">{ENTITY.taxID}</dd></div>
            <div className="border-t border-slate-300 pt-4"><dt className="font-mono text-xs uppercase tracking-wider text-slate-600">Equipo</dt><dd className="mt-2 text-[16px] text-slate-900">2 a 10 personas</dd></div>
            <div className="border-t border-slate-300 pt-4"><dt className="font-mono text-xs uppercase tracking-wider text-slate-600">Contacto</dt><dd className="mt-2 break-all text-[16px] text-slate-900"><a href={`mailto:${COMPANY.email}`} className="underline underline-offset-4">{COMPANY.email}</a></dd></div>
          </dl>
          <div>
            <h3 className="y-h3 text-xl text-slate-950">{PAGE.procurement.integrityTitle}</h3>
            <p className="mt-3 text-[15.5px] leading-relaxed text-slate-600">{PAGE.procurement.integrity}</p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-slate-600">{PAGE.procurement.certifications}</p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-slate-300 pt-6">
          <span className="text-sm text-slate-600">Ya operan con YAGO</span>
          {COLABORADORES.map((client) => (
            <a key={client.name} href={client.url} target="_blank" rel="noreferrer" aria-label={`Sitio de ${client.name}`}>
              <Image src={client.logo} alt={`Logo de ${client.name}`} width={160} height={48} className="h-9 w-auto object-contain" />
            </a>
          ))}
          <a href="https://clutch.co/profile/yago" target="_blank" rel="noreferrer" className="y-link">Perfil de YAGO en Clutch<ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
        <p className="mt-6 text-sm text-slate-600">Información revisada: <time dateTime={ENTERPRISE_UPDATED}>4 de noviembre de 2026</time>.</p>
      </PageSection>

      <FaqSection title={PAGE.faqTitle} items={PAGE.faqs} />
      <CtaBand title={PAGE.cta.title} text={PAGE.cta.text} />
    </PageShell>
  );
}
