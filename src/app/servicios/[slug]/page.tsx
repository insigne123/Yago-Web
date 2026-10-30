import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock3, Info } from "lucide-react";
import { getServiceBySlug, SERVICES, type Service } from "@/config/services";
import { ChipList, ColumnHeader, ImageLinkCard, ListCard, stepGridClass } from "@/components/catalog/CatalogKit";
import { DetailHeroAside, contactLinks, countWord } from "@/components/catalog/DetailKit";
import { SpotlightGroup } from "@/components/home/SpotlightGroup";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Testimonials } from "@/components/cases/Testimonials";
import { RelatedCases } from "@/components/cases/RelatedCases";
import { ServiceFlowExample } from "@/components/services/ServiceFlowExample";
import {
  ActionLink,
  CtaBand,
  FaqSection,
  PageHero,
  PageSection,
  PageShell,
  SectionHeader,
  StepCard,
  TextLink,
  WhatsAppLink,
} from "@/components/site/PageKit";
import { ENTITY, formatUpdated } from "@/config/entity";
import { PRIMARY_CTA, getDiagnosticHref } from "@/config/site";
import { createPageMetadata, SITE_URL } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

/** "Capacitación de equipos en IA" -> "capacitación de equipos en IA" (conserva siglas). */
function lowerFirst(text: string) {
  return text.charAt(0).toLowerCase() + text.slice(1);
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};

  return createPageMetadata({
    title: svc.seoTitle || `${svc.title} — Yago`,
    description: svc.seoDescription || svc.pageSubtitle || svc.short,
    path: `/servicios/${svc.slug}`,
    image: svc.image,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  const { waHref } = contactLinks({
    subject: `Interés en ${svc.title}`,
    message: `Hola YAGO, me interesa el servicio: ${svc.title}. ¿Podemos agendar una conversación?`,
  });

  const heading = svc.pageTitle || svc.title;
  const subtitle = svc.pageSubtitle || svc.short;
  const primaryAction = {
    label: svc.ctaPrimary || PRIMARY_CTA.label,
    href: getDiagnosticHref(svc.slug),
    event: `plausible-event-name=Service+CTA+Primary plausible-event-service=${svc.slug} plausible-event-location=service_page`,
  };
  const secondaryLabel = svc.ctaSecondary || "Ver etapas";
  const faqs = svc.faq || [];
  const stack = svc.stack ?? [];
  const notes = svc.notes ?? [];
  const relatedServices = svc.relatedServiceSlugs
    ? svc.relatedServiceSlugs.map(getServiceBySlug).filter((service): service is Service => service !== undefined && service.slug !== svc.slug)
    : SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 3);
  const reviewedDate = svc.modifiedDate || ENTITY.contentUpdated;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/servicios/${svc.slug}#service`,
    name: svc.title,
    serviceType: svc.title,
    description: svc.definition || svc.seoDescription || subtitle,
    url: `${SITE_URL}/servicios/${svc.slug}`,
    image: `${SITE_URL}${svc.image}`,
    areaServed: { "@type": "Country", name: "Chile" },
    inLanguage: "es-CL",
    dateModified: reviewedDate,
    ...(svc.audience ? { audience: { "@type": "BusinessAudience", audienceType: svc.audience } } : {}),
    provider: { "@id": `${SITE_URL}/#organization` },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <PageShell>
      <JsonLd id={`jsonld-service-${svc.slug}`} data={serviceJsonLd} />
      {faqs.length ? <JsonLd id={`jsonld-service-faq-${svc.slug}`} data={faqJsonLd} /> : null}

      {/* ---------------- HERO ---------------- */}
      <PageHero
        top={
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Servicios", href: "/servicios" },
              { name: svc.title, href: `/servicios/${svc.slug}` },
            ]}
          />
        }
        eyebrow="Servicio a medida"
        title={heading}
        description={subtitle}
        actions={
          <>
            <ActionLink action={primaryAction} arrow />
            <a href="#como-funciona" className="y-btn y-btn-glass">
              {secondaryLabel}
            </a>
          </>
        }
        aside={
          <DetailHeroAside
            src={svc.image}
            alt={svc.imageAlt || `Ilustración del servicio ${svc.title}`}
            card={
              <div className="flex items-start gap-3.5 px-5 py-4 sm:px-6 sm:py-5">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
                <p className="flex min-w-0 flex-col gap-1">
                  <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-slate-400">Tiempo típico</span>
                  <span className="text-[15px] leading-snug text-white">{svc.duration}</span>
                </p>
              </div>
            }
          />
        }
      >
        {svc.supportPoints?.length ? <ChipList items={svc.supportPoints} dark className="mt-2 max-w-xl" /> : null}
      </PageHero>

      {svc.definition ? (
        <PageSection id="resumen" tone="mist">
          <SectionHeader eyebrow="En resumen" title={svc.title} description={svc.definition} />
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Para quién", value: svc.audience || "Empresas en Chile" },
              { label: "Implementación", value: svc.approach || "Diagnóstico, alcance, piloto y validación" },
              { label: "Precio", value: svc.pricing || "Cotización según alcance, integraciones y operación" },
              ...(svc.workflow ? [
                { label: "Entrada", value: svc.workflow.input },
                { label: "Salida", value: svc.workflow.output },
                { label: "Conexiones", value: svc.workflow.connections },
              ] : []),
            ].map((fact) => (
              <div key={fact.label} className="border-t border-slate-300 pt-4">
                <dt className="font-mono text-xs uppercase tracking-wider text-slate-600">{fact.label}</dt>
                <dd className="mt-2 text-[16px] leading-relaxed text-slate-900">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </PageSection>
      ) : null}

      {svc.useCases?.length ? (
        <PageSection id="aplicaciones" tone="light">
          <SectionHeader eyebrow="Ejemplos de aplicación" title="Qué podemos implementar en tu operación." description="El diagnóstico define qué ejemplo encaja con tus sistemas, datos y objetivos." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {svc.useCases.map((item) => (
              <article key={item.title} className="y-card flex flex-col gap-3 p-7">
                <h3 className="y-h3 text-[1.3rem] text-slate-950">{item.title}</h3>
                <p className="text-[15.5px] leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </PageSection>
      ) : null}

      {svc.workflow ? <ServiceFlowExample workflow={svc.workflow} /> : null}

      {/* ---------------- ENTREGABLES ---------------- */}
      <PageSection id="entregables" tone="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <ColumnHeader eyebrow="Entregables" title="Qué te llevas." description="Lo que queda en manos de tu equipo al cerrar el proyecto." />
          </div>
          <div className="flex flex-col gap-6 lg:col-span-7">
            <ListCard items={svc.deliverables} />
            {notes.length ? (
              <div className="flex flex-col gap-3 rounded-2xl bg-mist p-6 sm:px-8">
                <h3 className="font-mono text-[12px] uppercase tracking-[0.12em] text-slate-600">A considerar</h3>
                <ul className="flex flex-col gap-2.5">
                  {notes.map((note) => (
                    <li key={note} className="flex gap-2.5 text-[15px] leading-relaxed text-slate-700">
                      <Info className="mt-1 h-4 w-4 shrink-0 text-sky-700" strokeWidth={1.8} aria-hidden="true" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </PageSection>

      {/* ---------------- CÓMO FUNCIONA ---------------- */}
      <PageSection id="como-funciona" tone="dark">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="flex flex-col gap-5 lg:col-span-7">
            <span className="y-eyebrow">Cómo funciona</span>
            <h2 className="y-h2 text-white">Paso a paso, en {countWord(svc.stages.length)} etapas.</h2>
          </div>
          <p className="y-lead lg:col-span-4 lg:col-start-9">
            Cada etapa cierra con entregables concretos antes de pasar a la siguiente.
          </p>
        </div>

        <ol className={`mt-16 ${stepGridClass(svc.stages.length)}`}>
          {svc.stages.map((stage, index) => (
            <StepCard key={stage.name} index={index} title={stage.name} description={stage.description} chips={stage.outputs} />
          ))}
        </ol>

        {stack.length ? (
          <div className="mt-16 flex flex-col gap-5 border-t border-white/[0.08] pt-10 lg:flex-row lg:items-center">
            <h3 className="shrink-0 text-[15px] font-medium leading-snug text-slate-300 lg:w-52">Tecnologías frecuentes</h3>
            <ChipList items={stack} dark className="min-w-0 flex-1" />
          </div>
        ) : null}
      </PageSection>

      {svc.costFactors?.length ? (
        <PageSection id="alcance-y-costo" tone="mist">
          <div className="grid gap-10 lg:grid-cols-2">
            <SectionHeader eyebrow="Alcance y costo" title="Qué define la propuesta." description="Revisamos estos factores para estimar el proyecto. La propuesta distingue implementación, operación y consumo de herramientas externas cuando corresponde." />
            <ListCard items={svc.costFactors} />
          </div>
        </PageSection>
      ) : null}

      {/* ---------------- PREGUNTAS ---------------- */}
      {faqs.length ? (
        <FaqSection
          title={`Dudas comunes sobre ${lowerFirst(svc.title)}.`}
          items={faqs}
          aside={
            <div className="mt-2 flex flex-col items-start gap-3 rounded-2xl bg-mist p-5 text-[14.5px] leading-relaxed text-slate-600">
              <p>Contenido revisado en <time dateTime={reviewedDate}>{formatUpdated(reviewedDate)}</time>.</p>
              <WhatsAppLink label="Hacer otra pregunta" location="service_faq" />
            </div>
          }
        />
      ) : null}

      {svc.relatedGuides?.length ? (
        <PageSection id="guias" tone="light">
          <SectionHeader eyebrow="Para decidir" title="Guías relacionadas con este servicio." />
          <ul className="mt-8 flex flex-col gap-5">
            {svc.relatedGuides.map((guide) => <li key={guide.href}><TextLink href={guide.href}>{guide.label}</TextLink></li>)}
            {svc.relatedProducts?.map((product) => <li key={product.href}><TextLink href={product.href}>{product.label}</TextLink></li>)}
            <li><TextLink href="/casos">Cómo medimos y documentamos los resultados</TextLink></li>
          </ul>
        </PageSection>
      ) : null}

      <RelatedCases service={svc.slug} />
      <Testimonials service={svc.slug} />

      {/* ---------------- OTROS SERVICIOS ---------------- */}
      {relatedServices.length ? (
        <PageSection id="otros-servicios" tone="mist">
          <SectionHeader
            eyebrow="Más servicios"
            title="Otros servicios."
            action={<TextLink href="/servicios">Ver todos los servicios</TextLink>}
          />
          <SpotlightGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((related) => (
              <ImageLinkCard
                key={related.slug}
                href={`/servicios/${related.slug}`}
                image={related.image}
                imageAlt={related.imageAlt}
                title={related.title}
                description={related.short}
              />
            ))}
          </SpotlightGroup>
        </PageSection>
      ) : null}

      {/* ---------------- CIERRE ---------------- */}
      <CtaBand
        title={svc.closeCta?.title || `¿Listo para conversar sobre ${lowerFirst(svc.title)}?`}
        text={svc.closeCta?.text || "Te ayudamos a evaluar el mejor plan para tu contexto."}
        primary={{
          ...primaryAction,
          label: svc.closeCta?.primary || PRIMARY_CTA.label,
          event: `plausible-event-name=Service+CTA+Primary plausible-event-service=${svc.slug} plausible-event-location=service_close`,
        }}
        secondary={{
          label: svc.closeCta?.secondary || "Escribir por WhatsApp",
          href: waHref,
          event: `plausible-event-name=Service+Contact plausible-event-method=whatsapp plausible-event-service=${svc.slug} plausible-event-location=service_page`,
        }}
      />
    </PageShell>
  );
}
