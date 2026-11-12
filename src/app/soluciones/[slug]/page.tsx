import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, Target } from "lucide-react";
import { notFound } from "next/navigation";
import { ColumnHeader, ListCard, stepGridClass } from "@/components/catalog/CatalogKit";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  ActionLink,
  BOOKING_ACTION,
  CtaBand,
  FaqSection,
  IconTile,
  PageHero,
  PageSection,
  PageShell,
  SectionHeader,
  StepCard,
  TextLink,
  WHATSAPP_ACTION,
} from "@/components/site/PageKit";
import { getSeoPageBySlug, SEO_PAGES } from "@/config/seo-pages";
import { createPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

/** "noviembre de 2026" a partir de la fecha de revisión de la página. */
function reviewedLabel(modifiedDate = "2026-09-15") {
  return new Intl.DateTimeFormat("es-CL", { month: "long", year: "numeric", timeZone: "America/Santiago" }).format(new Date(`${modifiedDate}T12:00:00.000Z`));
}

export function generateStaticParams() {
  return SEO_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);

  if (!page) return {};

  return createPageMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    keywords: page.keywords,
    path: `/soluciones/${page.slug}`,
  });
}

export default async function SeoSolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);

  if (!page) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://yago.cl/soluciones/${page.slug}#service`,
    name: page.title,
    description: page.seoDescription,
    url: `https://yago.cl/soluciones/${page.slug}`,
    areaServed: page.areaServed?.length ? page.areaServed.map((name) => ({ "@type": "Country", name })) : "Chile",
    provider: { "@id": "https://yago.cl/#organization" },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <PageShell>
      <JsonLd id={`jsonld-solution-${page.slug}`} data={serviceJsonLd} />
      <JsonLd id={`jsonld-solution-faq-${page.slug}`} data={faqJsonLd} />

      {/* ---------------- HERO ---------------- */}
      <PageHero
        top={
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Soluciones", href: "/soluciones" },
              { name: page.name, href: `/soluciones/${page.slug}` },
            ]}
          />
        }
        eyebrow={`${page.eyebrow} · ${page.name}`}
        title={page.title}
        description={page.description}
        actions={
          <>
            <ActionLink action={BOOKING_ACTION} arrow />
            <ActionLink action={WHATSAPP_ACTION} variant="glass" />
          </>
        }
      >
        <ul className="mt-2 grid w-full max-w-5xl grid-cols-1 gap-4 border-t border-white/[0.08] pt-6 sm:grid-cols-3 sm:gap-6">
          {page.proof.map((item) => (
            <li key={item} className="flex gap-2.5 text-[14.5px] leading-snug text-slate-300">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" strokeWidth={2.4} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </PageHero>

      {/* ---------------- EL PROBLEMA ---------------- */}
      <PageSection id="problema" tone="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <ColumnHeader eyebrow="El problema" title={page.problemTitle} description={page.problemDescription} />
          </div>
          <div className="min-w-0 lg:col-span-7">
            <ListCard items={page.painPoints} numbered />
          </div>
        </div>
      </PageSection>

      {/* ---------------- POR DÓNDE PARTIR + ENCAJE ---------------- */}
      <PageSection id="por-donde-partir" tone="mist">
        <SectionHeader
          eyebrow="Por dónde partir"
          title={page.startingTitle}
          description="La mejor primera automatización no siempre es la más grande. Normalmente es la que mueve un cuello de botella real con poco riesgo y mucho aprendizaje."
        />
        <ol className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {page.startingItems.map((item, index) => (
            <li key={item} className="y-card y-reveal flex flex-col gap-4 p-7">
              <span className="font-mono text-[13px] text-sky-700">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-[16.5px] font-medium leading-relaxed text-slate-900">{item}</p>
            </li>
          ))}
        </ol>

        <div className="y-card y-reveal mt-5 grid grid-cols-1 gap-8 p-7 sm:p-9 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col items-start gap-4 lg:col-span-4">
            <IconTile icon={Target} />
            <h3 className="y-h3 text-[1.35rem] text-slate-950">{page.fitTitle}</h3>
          </div>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:col-span-8">
            {page.fitItems.map((item) => (
              <li key={item} className="flex gap-2.5 text-[15.5px] leading-snug text-slate-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" strokeWidth={2.4} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      {/* ---------------- RESULTADOS ---------------- */}
      <PageSection id="resultados" tone="light">
        <SectionHeader eyebrow="Resultados" title={page.outcomesTitle} />
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {page.outcomes.map((item) => (
            <article key={item.title} className="y-card y-reveal flex flex-col gap-4 p-7">
              <IconTile icon={BadgeCheck} />
              <h3 className="y-h3 mt-1 text-[1.25rem] text-slate-950">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </PageSection>

      {/* ---------------- EJEMPLOS ---------------- */}
      {page.scenarios?.length ? (
        <PageSection id="ejemplos" tone="mist">
          <SectionHeader eyebrow="Ejemplos" title="Cómo se ve antes y después." />
          <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
            {page.scenarios.map((item) => (
              <li key={item.title} className="y-card y-reveal flex flex-col gap-4 p-7">
                <h3 className="y-h3 text-[1.25rem] text-slate-950">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-slate-600">
                  <span className="mb-1 block font-mono text-[11.5px] uppercase tracking-[0.1em] text-slate-500">Hoy</span>
                  {item.before}
                </p>
                <p className="text-[15px] leading-relaxed text-slate-700">
                  <span className="mb-1 block font-mono text-[11.5px] uppercase tracking-[0.1em] text-sky-700">Con automatización</span>
                  {item.after}
                </p>
              </li>
            ))}
          </ul>
        </PageSection>
      ) : null}

      {/* ---------------- CÓMO TRABAJAMOS ---------------- */}
      <PageSection id="como-trabajamos" tone="dark">
        <SectionHeader
          dark
          eyebrow="Cómo trabajamos"
          title={page.processTitle}
          action={<TextLink href="/proceso">Ver el proceso completo</TextLink>}
        />
        <ol className={`mt-14 ${stepGridClass(page.processSteps.length)}`}>
          {page.processSteps.map((step, index) => (
            <StepCard key={step.title} index={index} title={step.title} description={step.description} />
          ))}
        </ol>
      </PageSection>

      {/* ---------------- GUÍA PRÁCTICA ---------------- */}
      {page.guide?.length ? (
        <PageSection id="guia" tone="mist">
          <SectionHeader eyebrow="Guía práctica" title="Cómo aplicarlo en tu empresa." />
          <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {page.guide.map((section) => (
              <article key={section.heading} className="y-card y-reveal flex flex-col gap-4 p-7 sm:p-8">
                <h3 className="y-h3 text-[1.25rem] text-slate-950">{section.heading}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[15.5px] leading-relaxed text-slate-700">{paragraph}</p>
                ))}
                {section.bullets?.length ? (
                  <ul className="flex flex-col gap-2.5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-[15px] leading-snug text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" strokeWidth={2.4} aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
          {page.sources?.length ? (
            <nav aria-label="Fuentes oficiales" className="mt-8 rounded-2xl bg-white p-6 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)]">
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.12em] text-slate-600">Fuentes oficiales</p>
              <ul className="mt-3 flex flex-col gap-2">
                {page.sources.map((source) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-sky-800 underline underline-offset-4 hover:text-sky-600">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </PageSection>
      ) : null}

      {/* ---------------- PREGUNTAS + RELACIONADOS ---------------- */}
      <FaqSection
        items={page.faq}
        aside={
          <div className="flex w-full flex-col gap-5">
            <p className="text-[14px] text-slate-600">Contenido revisado en {reviewedLabel(page.modifiedDate)}.</p>
            <nav aria-label="Páginas relacionadas" className="w-full rounded-2xl bg-mist p-5 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)]">
              <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.12em] text-slate-600">Relacionado</p>
              <ul className="mt-3 flex flex-col">
                {page.relatedLinks.map((item, index) => (
                  <li key={item.href} className={index ? "border-t border-slate-200/80" : ""}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between gap-3 py-3 text-[15px] font-medium text-slate-900 transition-colors hover:text-sky-700"
                    >
                      <span className="min-w-0">{item.label}</span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-sky-700 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        }
      />

      {/* ---------------- CIERRE ---------------- */}
      <CtaBand
        title="Ubiquemos tu cuello de botella."
        text="En una sesión de diagnóstico revisamos tu flujo y te decimos si conviene partir por OCR, automatización o una app interna."
      />
    </PageShell>
  );
}
