import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CircleCheck, Info } from "lucide-react";
import { PRODUCTS } from "@/config/productos";
import { HOME_AGENTS } from "@/config/home";
import { ChipList, ColumnHeader, ImageLinkCard, ListCard, stepGridClass } from "@/components/catalog/CatalogKit";
import { DetailHeroAside, StatRow, contactLinks, countWord } from "@/components/catalog/DetailKit";
import { SpotlightGroup } from "@/components/home/SpotlightGroup";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  CheckList,
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
import { createPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

function getProductBySlug(slug: string) {
  return PRODUCTS.find((x) => x.slug === slug);
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return {};

  return createPageMetadata({
    title: p.seoTitle || `${p.name} — Yago`,
    description: p.seoDescription || p.pageSubtitle || p.tagline,
    path: `/productos/${p.slug}`,
    image: `/images/product_${p.slug}.png`,
  });
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) notFound();

  const { mailHref, waHref } = contactLinks({
    subject: `Interés en ${p.name}`,
    message: `Hola YAGO, me interesa ${p.name}. ¿Podemos revisar una demo?`,
  });

  const heading = p.pageTitle || p.name;
  const [headingLead, ...headingRest] = heading.split(", ");
  const subtitle = p.pageSubtitle || p.details.description;
  const primaryLabel = p.ctaPrimary || "Solicitar demo";
  const secondaryLabel = p.ctaSecondary || "Ver módulos";
  const supportPoints = p.supportPoints?.length ? p.supportPoints : p.highlights;
  const results = p.results?.length
    ? p.results
    : p.highlights.map((item) => ({
      title: item,
      description: "Impacto directo en eficiencia operativa, consistencia y velocidad de ejecución.",
    }));
  const idealFor = p.idealFor?.length ? p.idealFor : p.details.notes || [];
  const faqs = p.faq || [];
  const stages = p.details.stages ?? [];
  const integrations = p.details.integrations ?? [];
  const notes = p.idealFor?.length ? p.details.notes ?? [] : [];
  const tag = HOME_AGENTS.find((agent) => agent.href === `/productos/${p.slug}`)?.tag;
  const badge = p.badge && p.badge !== "—" ? p.badge : undefined;
  const stats = [
    { value: String(p.details.modules.length), label: "módulos clave" },
    integrations.length ? { value: String(integrations.length), label: "integraciones" } : null,
    stages.length ? { value: String(stages.length), label: "etapas" } : null,
  ].filter(Boolean) as { value: string; label: string }[];
  const relatedProducts = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://yago.cl/productos/${p.slug}#software`,
    name: p.name,
    description: p.seoDescription || subtitle,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `https://yago.cl/productos/${p.slug}`,
    image: `https://yago.cl/images/product_${p.slug}.png`,
    provider: { "@id": "https://yago.cl/#organization" },
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
      <JsonLd id={`jsonld-product-${p.slug}`} data={productJsonLd} />
      {faqs.length ? <JsonLd id={`jsonld-product-faq-${p.slug}`} data={faqJsonLd} /> : null}

      {/* ---------------- HERO ---------------- */}
      <PageHero
        top={
          <>
            <Breadcrumbs
              items={[
                { name: "Inicio", href: "/" },
                { name: "Productos", href: "/productos" },
                { name: p.name, href: `/productos/${p.slug}` },
              ]}
            />
            <div className="flex flex-wrap items-center gap-3">
              <span className="y-eyebrow">
                {p.name}
                {tag ? ` · ${tag}` : ""}
              </span>
              {badge ? (
                <span className="rounded-full bg-sky-400/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-sky-200 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.3)]">
                  {badge}
                </span>
              ) : null}
            </div>
          </>
        }
        title={headingRest.length ? `${headingLead},` : heading}
        highlight={headingRest.length ? headingRest.join(", ") : undefined}
        description={subtitle}
        actions={
          <>
            <a
              href={mailHref}
              className={`y-btn y-btn-primary plausible-event-name=Product+CTA+Primary plausible-event-product=${p.slug} plausible-event-location=product_page`}
            >
              {primaryLabel}
              <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#modulos"
              className={`y-btn y-btn-glass plausible-event-name=Product+CTA+Secondary plausible-event-product=${p.slug} plausible-event-location=product_page`}
            >
              {secondaryLabel}
            </a>
          </>
        }
        aside={
          <DetailHeroAside
            src={`/images/product_${p.slug}.png`}
            alt={`Ilustración de ${p.name}`}
            card={stats.length ? <StatRow items={stats} /> : undefined}
          />
        }
      >
        {supportPoints.length ? <ChipList items={supportPoints} dark className="mt-2 max-w-xl" /> : null}
      </PageHero>

      {/* ---------------- QUÉ HACE + MÓDULOS ---------------- */}
      <PageSection id="modulos" tone="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <ColumnHeader eyebrow="Qué hace" title="Lo que resuelve en tu equipo." description={p.details.description}>
              {p.highlights.length ? <CheckList items={p.highlights} /> : null}
            </ColumnHeader>
          </div>
          <div className="flex flex-col gap-5 lg:col-span-7">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.12em] text-slate-600">Módulos clave</h3>
            <ListCard items={p.details.modules} numbered />
          </div>
        </div>
      </PageSection>

      {/* ---------------- IMPACTO + IDEAL PARA ---------------- */}
      <PageSection id="impacto" tone="mist">
        <SectionHeader
          eyebrow="Impacto"
          title="Lo que cambia en tu operación."
          description={p.tagline}
        />

        <SpotlightGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {results.map((result, index) => (
            <article key={result.title} className="y-spot y-card y-reveal flex flex-col gap-3 p-7">
              <span className="font-mono text-[13px] text-sky-700">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="y-h3 mt-1 text-[1.2rem] text-slate-950">{result.title}</h3>
              <p className="text-[15px] leading-relaxed text-slate-600">{result.description}</p>
            </article>
          ))}
        </SpotlightGroup>

        {idealFor.length ? (
          <div id="ideal" className="mt-16 overflow-hidden rounded-[1.75rem] bg-[#0b1220] text-white shadow-[0_40px_80px_-40px_rgba(11,18,32,0.7)]">
            <div className="flex flex-col gap-2 border-b border-white/[0.08] px-7 py-6 sm:px-9">
              <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-sky-300">Ideal para</span>
              <h3 className="y-h3 text-[1.5rem] text-white">Dónde {p.name} rinde más.</h3>
            </div>
            <ul
              className={`grid grid-cols-1 divide-y divide-white/[0.08] md:divide-x md:divide-y-0 ${
                idealFor.length >= 3 ? "md:grid-cols-3" : idealFor.length === 2 ? "md:grid-cols-2" : ""
              }`}
            >
              {idealFor.map((item) => (
                <li key={item} className="flex gap-3 px-7 py-7 sm:px-9">
                  <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
                  <span className="min-w-0 text-[15.5px] leading-relaxed text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </PageSection>

      {/* ---------------- CÓMO FUNCIONA ---------------- */}
      <PageSection id="implementacion" tone="dark">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="flex flex-col gap-5 lg:col-span-7">
            <span className="y-eyebrow">Cómo funciona</span>
            <h2 className="y-h2 text-white">
              {stages.length ? `Paso a paso, en ${countWord(stages.length)} etapas.` : "Cómo se pone en marcha."}
            </h2>
          </div>
          <div className="flex flex-col gap-2 lg:col-span-4 lg:col-start-9">
            <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-slate-400">Puesta en marcha</span>
            <p className="y-lead">{p.details.timeToValue}</p>
          </div>
        </div>

        {stages.length ? (
          <ol className={`mt-16 ${stepGridClass(stages.length)}`}>
            {stages.map((stage, index) => (
              <StepCard key={stage.name} index={index} title={stage.name} description={stage.description} chips={stage.outputs} />
            ))}
          </ol>
        ) : null}

        {integrations.length ? (
          <div id="integraciones" className="mt-16 flex flex-col gap-5 border-t border-white/[0.08] pt-10 lg:flex-row lg:items-center">
            <h3 className="shrink-0 text-[15px] font-medium leading-snug text-slate-300 lg:w-52">Integraciones frecuentes</h3>
            <ChipList items={integrations} dark className="min-w-0 flex-1" />
          </div>
        ) : null}

        {notes.length ? (
          <ul className={`flex flex-col gap-2.5 ${integrations.length ? "mt-8" : "mt-16 border-t border-white/[0.08] pt-10"}`}>
            {notes.map((note) => (
              <li key={note} className="flex gap-2.5 text-[14.5px] leading-relaxed text-slate-400">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" strokeWidth={1.8} aria-hidden="true" />
                {note}
              </li>
            ))}
          </ul>
        ) : null}
      </PageSection>

      {/* ---------------- PREGUNTAS ---------------- */}
      {faqs.length ? (
        <FaqSection
          title={`Dudas comunes sobre ${p.name}.`}
          items={faqs}
          aside={
            <div className="mt-2 flex flex-col items-start gap-3 rounded-2xl bg-mist p-5 text-[14.5px] leading-relaxed text-slate-600">
              <p>Contenido revisado en septiembre de 2026.</p>
              <WhatsAppLink label="Hacer otra pregunta" location="product_faq" />
            </div>
          }
        />
      ) : null}

      {/* ---------------- OTROS PRODUCTOS ---------------- */}
      {relatedProducts.length ? (
        <PageSection id="otros-productos" tone="mist">
          <SectionHeader
            eyebrow="Más productos"
            title="Otros productos de YAGO."
            action={<TextLink href="/productos">Ver todos los productos</TextLink>}
          />
          <SpotlightGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((related) => (
              <ImageLinkCard
                key={related.slug}
                href={`/productos/${related.slug}`}
                image={`/images/product_${related.slug}.png`}
                tag={HOME_AGENTS.find((agent) => agent.href === `/productos/${related.slug}`)?.tag}
                title={related.name}
                description={related.tagline}
                meta={related.badge && related.badge !== "—" ? related.badge : undefined}
                className={`plausible-event-name=Product+More+Info plausible-event-product=${related.slug} plausible-event-location=product_related`}
              />
            ))}
          </SpotlightGroup>
        </PageSection>
      ) : null}

      {/* ---------------- CIERRE ---------------- */}
      <CtaBand
        title={p.closeCta?.title || `¿Listo para implementar ${p.name}?`}
        text={p.closeCta?.text || "Te ayudamos a evaluar alcance, tiempos y el mejor plan de adopción para tu equipo."}
        primary={{
          label: p.closeCta?.primary || "Contactar por email",
          href: mailHref,
          event: `plausible-event-name=Product+Contact plausible-event-method=email plausible-event-product=${p.slug} plausible-event-location=product_page`,
        }}
        secondary={{
          label: p.closeCta?.secondary || "WhatsApp",
          href: waHref,
          event: `plausible-event-name=Product+Contact plausible-event-method=whatsapp plausible-event-product=${p.slug} plausible-event-location=product_page`,
        }}
      />
    </PageShell>
  );
}
