import {
  ArrowRight,
  BadgeCheck,
  CircleCheck,
  Database,
  FileText,
  LayoutDashboard,
  MessageCircle,
  RefreshCw,
  ScanSearch,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { AutomationLeadForm } from "@/components/automation/AutomationLeadForm";
import { PlanCards } from "@/components/automation/PlanCards";
import { AxisPanel, SadtPanel } from "@/components/automation/ProductPanels";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ComparisonCard, ProductHero } from "@/components/site/PageKit";
import { KeyFactsSection, RelatedGuides } from "@/components/site/KeyFacts";
import { KEY_FACTS, mergeFaqs } from "@/config/key-facts";
import { ENTITY } from "@/config/entity";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { SpotlightGroup } from "@/components/home/SpotlightGroup";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import type { AutomationPage } from "@/config/automation-pages";
import { FlowDiagram } from "@/components/site/FlowDiagram";
import { FLOWS } from "@/config/flows";
import { COMPANY } from "@/config/site";
import { formatUfPrice, type UfRate } from "@/lib/uf";

type AutomationLandingPageProps = {
  page: AutomationPage;
  ufRate: UfRate;
};

const MODULE_ICONS: LucideIcon[] = [LayoutDashboard, FileText, ShieldCheck, Database, RefreshCw, ScanSearch];

export function AutomationLandingPage({ page, ufRate }: AutomationLandingPageProps) {
  const primaryPlan = page.pricing.plans[0];
  const isSadt = page.slug === "sadt";
  const audience = isSadt ? "RRHH y operaciones de alto volumen" : "RRHH, dotación y control interno";
  const heroFacts = [
    { label: "Para quién", value: audience },
    { label: "Incluye", value: page.hero.proofSignals[1] ?? page.hero.proofSignals[0] },
    {
      label: "Precio",
      value: `Desde ${formatUfPrice(primaryPlan.priceUf)}${primaryPlan.period.includes("IVA") ? " + IVA" : ""} al mes`,
    },
  ];
  const [titleLead, ...titleRestParts] = page.hero.title.split(", ");
  const titleRest = titleRestParts.join(", ");

  const facts = KEY_FACTS[isSadt ? "sadt" : "axis"];
  const faqs = mergeFaqs(facts.faqs, page.faqs);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://yago.cl/${page.slug}#software`,
    name: page.hero.badge,
    alternateName: `${page.hero.badge} by YAGO`,
    description: facts.definition,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: isSadt ? "Automatización de trámites laborales" : "Consulta de causas penales públicas",
    operatingSystem: "Web",
    inLanguage: "es-CL",
    url: `https://yago.cl/${page.slug}`,
    ...(page.officialSite ? { sameAs: [page.officialSite.href] } : {}),
    image: `https://yago.cl/${page.slug}/opengraph-image`,
    dateModified: page.modifiedDate || ENTITY.contentUpdated,
    featureList: page.modules.map((module) => module.title),
    audience: { "@type": "BusinessAudience", audienceType: audience, geographicArea: { "@type": "Country", name: "Chile" } },
    provider: { "@id": "https://yago.cl/#organization" },
    publisher: { "@id": "https://yago.cl/#organization" },
    offers: page.pricing.plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: plan.volume,
      price: Number(plan.priceUf.toFixed(4)),
      priceCurrency: "CLF",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: Number(plan.priceUf.toFixed(4)),
        priceCurrency: "CLF",
        unitText: "mes",
        ...(plan.period.includes("IVA") ? { valueAddedTaxIncluded: false } : {}),
      },
      eligibleRegion: { "@type": "Country", name: "Chile" },
      availability: "https://schema.org/InStock",
      url: `https://yago.cl/${page.slug}#planes`,
      seller: { "@id": "https://yago.cl/#organization" },
    })),
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
  const officialSources = isSadt
    ? [
        { label: "Dirección del Trabajo", href: "https://www.dt.gob.cl/portal/1626/w3-channel.html" },
        { label: "Portal Mi DT", href: "https://midt.dirtrab.cl/" },
      ]
    : [
        { label: "Poder Judicial de Chile", href: "https://www.pjud.cl/" },
        { label: "Oficina Judicial Virtual", href: "https://oficinajudicialvirtual.pjud.cl/" },
      ];

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#070b13] text-white">
      <JsonLd id={`jsonld-automation-${page.slug}`} data={productJsonLd} />
      <JsonLd id={`jsonld-automation-faq-${page.slug}`} data={faqJsonLd} />
      <Navbar
        links={page.nav}
        subnavLabel={page.hero.badge}
        ctaHref="#formulario"
        ctaLabel="Solicitar demo"
        ctaShortLabel="Demo"
        mobileDescription={`${page.hero.badge}: cómo funciona, planes, preguntas y demo.`}
      />

      <main id="main-content">
        {/* ---------------- HERO ---------------- */}
        <ProductHero
          top={
            <Breadcrumbs
              tone="light"
              items={[
                { name: "Inicio", href: "/" },
                { name: "Productos", href: "/productos" },
                { name: page.hero.badge, href: `/${page.slug}` },
              ]}
            />
          }
          pill={page.hero.proofSignals[0]}
          title={
            titleRest ? (
              <>
                {titleLead}, <span className="text-sky-600">{titleRest}.</span>
              </>
            ) : (
              page.hero.title
            )
          }
          description={page.hero.description}
          actions={
            <>
              <a href="#formulario" className="y-btn y-btn-primary plausible-event-name=CTA+Solicitar+Demo plausible-event-location=hero">
                {page.hero.primaryCta}
                <ArrowRight className="y-arrow h-[18px] w-[18px]" aria-hidden="true" />
              </a>
              <a href="#planes" className="y-btn y-btn-outline">
                {page.hero.tertiaryCta}
              </a>
            </>
          }
          facts={heroFacts}
          aside={isSadt ? <SadtPanel /> : <div><AxisPanel /><p className="mt-4 text-sm leading-relaxed text-slate-600">Vista ilustrativa con datos ficticios; no corresponde a consultas ni resultados de clientes.</p></div>}
        />

        {/* ---------------- EN RESUMEN ---------------- */}
        <KeyFactsSection data={facts} updated={page.modifiedDate || ENTITY.contentUpdated} />
        {page.resultGuide ? (
          <section id="alcance-y-resultados" aria-labelledby="axis-result-guide-title" className="y-light y-sheet">
            <div className="y-container">
              <div className="flex max-w-3xl flex-col gap-5"><span className="y-eyebrow">Alcance y evidencia</span><h2 id="axis-result-guide-title" className="y-h2 text-slate-950">{page.resultGuide.title}</h2><p className="y-lead">{page.resultGuide.description}</p></div>
              <div role="region" aria-labelledby="axis-result-guide-title" tabIndex={0} className="mt-9 overflow-x-auto rounded-2xl border border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700">
                <table className="w-full min-w-[36rem] text-left text-[15px] leading-relaxed text-slate-700"><caption className="sr-only">Estados de consulta y revisión del resultado</caption><thead className="bg-mist text-slate-950"><tr><th scope="col" className="px-5 py-4">Estado</th><th scope="col" className="px-5 py-4">Qué indica</th><th scope="col" className="px-5 py-4">Qué revisar</th></tr></thead><tbody>{page.resultGuide.states.map((state) => <tr key={state.name} className="border-t border-slate-200"><th scope="row" className="px-5 py-4 font-semibold text-slate-950">{state.name}</th><td className="px-5 py-4">{state.meaning}</td><td className="px-5 py-4">{state.review}</td></tr>)}</tbody></table>
              </div>
              <p className="mt-6 max-w-4xl text-[15px] leading-relaxed text-slate-600">{page.resultGuide.scope}</p>
              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                <Link href="/nosotros" className="y-link">Conocer a YAGO, proveedor de AXIS<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                {page.officialSite ? <a href={page.officialSite.href} className="y-link plausible-event-name=AXIS+Sitio+Oficial">{page.officialSite.label}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a> : null}
              </div>
            </div>
          </section>
        ) : null}

        {/* ---------------- HOY VS. CON EL PRODUCTO ---------------- */}
        <section id="problema" className="y-mist y-sheet">
          <div className="y-container">
            <div className="flex max-w-3xl flex-col gap-5">
              <span className="y-eyebrow">El problema</span>
              <h2 className="y-h2 text-slate-950">{page.problem.title}</h2>
              <p className="y-lead">{page.problem.description}</p>
            </div>
            <div className="mt-12">
              <ComparisonCard rows={page.comparison} productLabel={page.hero.badge} />
            </div>
          </div>
        </section>

        {/* ---------------- CÓMO FUNCIONA ---------------- */}
        <section id="como-funciona" className="y-dark y-sheet y-grain overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[26rem] w-[60rem] -translate-x-1/2 rounded-full bg-sky-400/[0.07] blur-[120px]" />
          </div>
          <div className="y-container relative">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
              <div className="flex flex-col gap-5 lg:col-span-7">
                <span className="y-eyebrow">Cómo funciona</span>
                <h2 className="y-h2 text-white">{page.solution.title}</h2>
              </div>
              <p className="y-lead lg:col-span-4 lg:col-start-9">{page.solution.description}</p>
            </div>
            <div className="y-glass y-reveal mt-14 px-4 py-6 sm:p-8 lg:px-12 lg:py-10">
              <FlowDiagram {...FLOWS[isSadt ? "sadt" : "axis"]} />
            </div>
            <ol className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(13rem,1fr))]">
              {page.steps.map((step, index) => (
                <li key={step.name} className="y-glass y-reveal flex flex-col gap-4 p-7">
                  <span className="grid grid-cols-1 h-9 w-9 place-items-center rounded-full bg-[#0b1220] font-mono text-[13px] font-medium text-sky-300 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.45),0_0_20px_rgba(56,189,248,0.25)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="y-h3 text-[1.3rem] text-white">{step.name}</h3>
                  <p className="text-[15px] leading-relaxed text-slate-300">{step.description}</p>
                  <span className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {step.outputs.map((output) => (
                      <span key={output} className="rounded-full px-2.5 py-1 text-[12.5px] text-slate-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]">
                        {output}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-16 grid grid-cols-1 gap-10 border-t border-white/[0.08] pt-12 lg:grid-cols-12">
              <div className="flex flex-col gap-3 lg:col-span-4">
                <h3 className="y-h3 text-[1.5rem] text-white">{page.riskTitle}</h3>
                <p className="text-[15px] leading-relaxed text-slate-400">
                  Lo que puede fallar en un portal externo está contemplado desde el diseño.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-8">
                {page.risks.map((risk) => (
                  <li key={risk.title} className="flex gap-3.5">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
                    <span className="flex flex-col gap-1">
                      <span className="font-semibold text-white">{risk.title}</span>
                      <span className="text-[15px] leading-relaxed text-slate-400">{risk.description}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------------- QUÉ INCLUYE ---------------- */}
        <section id="modulos" className="y-light y-sheet">
          <div className="y-container">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="flex max-w-3xl flex-col gap-5">
                <span className="y-eyebrow">Qué incluye</span>
                <h2 className="y-h2 text-slate-950">
                  {isSadt ? "No es solo un bot: es una aplicación completa." : "Todo lo que queda funcionando."}
                </h2>
              </div>
              <ul className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
                {page.solution.support.map((item) => (
                  <li key={item} className="rounded-full bg-mist px-3 py-1.5 text-[13px] text-slate-700 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.07)]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <SpotlightGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.modules.map((module, index) => {
                const Icon = MODULE_ICONS[index % MODULE_ICONS.length];
                return (
                  <div key={module.title} className="y-spot y-card y-card-hover y-reveal flex flex-col gap-3 p-7">
                    <span className="grid grid-cols-1 h-11 w-11 place-items-center rounded-2xl bg-gradient-to-b from-sky-50 to-sky-100 text-sky-700 shadow-[inset_0_0_0_1px_rgba(14,165,233,0.18)]">
                      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <h3 className="y-h3 mt-2 text-[1.2rem] text-slate-950">{module.title}</h3>
                    <p className="text-[15px] leading-relaxed text-slate-600">{module.description}</p>
                  </div>
                );
              })}
            </SpotlightGroup>

            <div className="mt-14 grid grid-cols-1 gap-4 rounded-[1.75rem] bg-mist p-6 sm:p-8 md:grid-cols-4">
              <p className="font-headline text-lg font-semibold text-slate-950 md:col-span-1">Casos donde genera valor rápido</p>
              {page.useCases.slice(0, 3).map((useCase) => (
                <div key={useCase.title} className="flex flex-col gap-1">
                  <span className="font-semibold text-slate-950">{useCase.title}</span>
                  <span className="text-[14.5px] leading-relaxed text-slate-600">{useCase.description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- PLANES ---------------- */}
        <section id="planes" className="y-mist y-sheet">
          <div className="y-container">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
              <span className="y-eyebrow">Planes</span>
              <h2 className="y-h2 text-slate-950">{page.pricing.title}</h2>
              <p className="y-lead">{page.pricing.description}</p>
            </div>
            <div className="mt-14">
              <PlanCards page={page} ufRate={ufRate} />
            </div>
          </div>
        </section>

        {/* ---------------- PREGUNTAS ---------------- */}
        <section id="faq" className="y-light y-sheet">
          <div className="y-container grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col items-start gap-5 lg:col-span-4">
              <span className="y-eyebrow">Preguntas</span>
              <h2 className="y-h2 text-slate-950 lg:text-[2.75rem]">Dudas comunes sobre {page.hero.badge}.</h2>
              <div className="mt-2 rounded-2xl bg-mist p-5 text-[14.5px] leading-relaxed text-slate-600">
                <p className="font-semibold text-slate-900">Información pública y alcance</p>
                <p className="mt-1.5">
                  YAGO es un proveedor independiente y no representa a los organismos enlazados. Consulta siempre el portal
                  oficial para requisitos, disponibilidad y vigencia del procedimiento.
                </p>
                <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {officialSources.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-sky-700 underline underline-offset-2 hover:text-sky-800"
                    >
                      {source.label}
                    </a>
                  ))}
                </p>
              </div>
              <RelatedGuides guides={facts.guides} />
            </div>
            <Accordion type="single" collapsible defaultValue="faq-0" className="lg:col-span-7 lg:col-start-6">
              {faqs.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`} className="border-slate-200 first:border-t">
                  <AccordionTrigger className="gap-6 py-6 text-left font-headline text-[1.15rem] font-semibold tracking-[-0.01em] text-slate-950 hover:no-underline md:text-[1.25rem] [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-sky-600">
                    <span className="flex-1">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl pb-6 text-[16.5px] leading-relaxed text-slate-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ---------------- DEMO + FORMULARIO ---------------- */}
        <section id="formulario" className="y-dark y-sheet y-grain overflow-hidden">
          <span id="demo" className="absolute -top-24" aria-hidden="true" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute right-[-8%] top-[-6.5rem] h-[36rem] w-[36rem] rounded-full bg-sky-400/[0.12] blur-[120px]" />
          </div>
          <div className="y-container relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-5">
              <span className="y-eyebrow">Demo</span>
              <h2 className="y-h2 text-white">{page.demo.title}.</h2>
              <p className="y-lead">{page.demo.description}</p>
              <ul className="flex flex-col gap-3">
                {page.demo.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-base text-white">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="y-link mt-2 plausible-event-name=CTA+WhatsApp plausible-event-location=automation_demo"
              >
                <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
                {page.demo.secondaryCta}
              </a>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <AutomationLeadForm page={page} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
