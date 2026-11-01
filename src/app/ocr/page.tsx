import Link from "next/link";
import {
  Archive,
  ArrowRight,
  BadgeCheck,
  Braces,
  CircleCheck,
  ClipboardList,
  FileText,
  FolderOpen,
  Mail,
  MessageCircle,
  Plus,
  ShoppingCart,
  Signature,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { OcrDocumentExample } from "@/components/ocr/OcrDocumentExample";
import { OcrCapabilities } from "@/components/ocr/OcrCapabilities";
import { SpotlightGroup } from "@/components/home/SpotlightGroup";
import { OcrLeadForm } from "@/components/ocr/OcrLeadForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Testimonials } from "@/components/cases/Testimonials";
import { RelatedCases } from "@/components/cases/RelatedCases";
import {
  CheckList,
  ComparisonCard,
  FaqSection,
  IconTile,
  PageShell,
  ProductHero,
  StepCard,
  faqJsonLd,
} from "@/components/site/PageKit";
import { OCR_PAGE } from "@/config/ocr";
import { KeyFactsSection, RelatedGuides } from "@/components/site/KeyFacts";
import { KEY_FACTS, mergeFaqs } from "@/config/key-facts";
import { FlowDiagram } from "@/components/site/FlowDiagram";
import { FLOWS } from "@/config/flows";
import { COMPANY } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: OCR_PAGE.seoTitle,
  description: OCR_PAGE.seoDescription,
  keywords: [
    "OCR para empresas",
    "automatización documental",
    "lectura de documentos",
    "digitalización de procesos",
    "PDFs escaneados",
    "extracción de datos",
  ],
  path: "/ocr",
  image: "/ocr/opengraph-image",
});

const USE_CASE_ICONS: LucideIcon[] = [FileText, ShoppingCart, Signature, ClipboardList, Truck, FolderOpen, Archive];

const REVIEW_ITEMS = [
  "Tipo de documento y variaciones de formato",
  "Campos que realmente importan para tu proceso",
  "Volumen, equipo involucrado y punto de integración",
  "Siguiente paso recomendado: muestra, piloto o implementación",
];

const FACTS = KEY_FACTS.ocr;
const FAQS = mergeFaqs(FACTS.faqs, OCR_PAGE.faqs);

const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yago.cl/ocr#service",
  name: "OCR para empresas",
  alternateName: "OCR de YAGO",
  serviceType: "Procesamiento inteligente de documentos (OCR)",
  description: FACTS.definition,
  url: "https://yago.cl/ocr",
  image: "https://yago.cl/ocr/opengraph-image",
  inLanguage: "es-CL",
  areaServed: { "@type": "Country", name: "Chile" },
  audience: { "@type": "BusinessAudience", audienceType: "Operaciones, finanzas y backoffice" },
  provider: { "@id": "https://yago.cl/#organization" },
  dateModified: OCR_PAGE.modifiedDate,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Casos de uso de OCR",
    itemListElement: OCR_PAGE.useCases.map((useCase) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `OCR de ${useCase.title.toLowerCase()}`, description: useCase.description },
    })),
  },
};

export default function OcrPage() {
  const { hero } = OCR_PAGE;

  return (
    <PageShell
      navbar={{
        links: OCR_PAGE.nav,
        subnavLabel: "OCR",
        ctaHref: "#formulario",
        ctaLabel: hero.primaryCta,
        mobileDescription: "OCR para empresas: cómo funciona, casos de uso, preguntas y evaluación inicial.",
      }}
    >
      <JsonLd id="jsonld-ocr-faq" data={faqJsonLd(FAQS)} />
      <JsonLd id="jsonld-ocr-service" data={SERVICE_JSONLD} />

      {/* ---------------- HERO ---------------- */}
      <ProductHero
        top={
          <Breadcrumbs
            tone="light"
            items={[
              { name: "Inicio", href: "/" },
              { name: "Productos", href: "/productos" },
              { name: "OCR", href: "/ocr" },
            ]}
          />
        }
        pill={hero.badge}
          title={<>{hero.title} <span className="text-sky-600">en Chile.</span></>}
        description={hero.description}
        actions={
          <>
            <a href="#formulario" className="y-btn y-btn-primary plausible-event-name=OCR+Evaluation+Click plausible-event-location=ocr_hero plausible-event-service=ocr">
              {hero.primaryCta}
              <ArrowRight className="y-arrow h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="y-btn y-btn-outline plausible-event-name=CTA+WhatsApp plausible-event-location=hero"
            >
              <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
              {hero.secondaryCta}
            </a>
          </>
        }
        facts={[
          { label: "Para quién", value: "Operaciones, finanzas y backoffice" },
          { label: "Lee", value: "PDFs, imágenes y documentos escaneados" },
          { label: "Primer paso", value: "Evaluación con tus documentos" },
        ]}
        aside={<OcrDocumentExample />}
      />

      {/* ---------------- EN RESUMEN ---------------- */}
      <KeyFactsSection data={FACTS} updated={OCR_PAGE.modifiedDate} />
      <RelatedCases service="ocr" />
      <Testimonials service="ocr" />

      {/* ---------------- EL PROBLEMA ---------------- */}
      <section id="problema" className="y-mist y-sheet">
        <div className="y-container">
          <div className="flex max-w-3xl flex-col gap-5">
            <span className="y-eyebrow">El problema</span>
            <h2 className="y-h2 text-slate-950">{OCR_PAGE.problem.title}.</h2>
            <p className="y-lead">{OCR_PAGE.problem.description}</p>
          </div>
          <div className="mt-12">
            <ComparisonCard rows={OCR_PAGE.comparison} productLabel="OCR de YAGO" />
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
              <h2 className="y-h2 text-white">De un documento a un dato útil, en cuatro pasos.</h2>
            </div>
            <p className="y-lead lg:col-span-4 lg:col-start-9">{OCR_PAGE.solution.description}</p>
          </div>

          <div className="y-glass y-reveal mt-14 px-4 py-6 sm:p-8 lg:px-12 lg:py-10">
            <FlowDiagram {...FLOWS["ocr"]} />
          </div>
          <ol className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {OCR_PAGE.steps.map((step, index) => (
              <StepCard key={step.name} index={index} title={step.name} description={step.description} chips={step.outputs} />
            ))}
          </ol>

          {/* Lo que entra → lo que sale */}
          <div className="mt-16 grid grid-cols-1 items-stretch gap-4 border-t border-white/[0.08] pt-12 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
            <div className="y-glass flex flex-col gap-5 p-7">
              <h3 className="font-mono text-[12px] uppercase tracking-[0.12em] text-slate-400">{OCR_PAGE.solution.inputLabel}</h3>
              <ul className="flex flex-col gap-2.5">
                {OCR_PAGE.solution.inputItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15.5px] text-slate-200">
                    <FileText className="h-4 w-4 shrink-0 text-slate-400" strokeWidth={1.8} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center" aria-hidden="true">
              <span className="grid h-12 w-12 rotate-90 place-items-center rounded-full bg-[#0b1220] text-sky-300 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.45),0_0_24px_rgba(56,189,248,0.3)] lg:rotate-0">
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>
            <div className="y-beam">
              <div className="y-beam__inner flex h-full flex-col gap-5 bg-[#0b1220] p-7">
                <h3 className="font-mono text-[12px] uppercase tracking-[0.12em] text-sky-300">{OCR_PAGE.solution.outputLabel}</h3>
                <ul className="flex flex-col gap-2.5">
                  {OCR_PAGE.solution.outputItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[15.5px] text-white">
                      <Braces className="h-4 w-4 shrink-0 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-2">
            {OCR_PAGE.solution.support.map((item) => (
              <li key={item} className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13.5px] text-slate-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)]">
                <BadgeCheck className="h-4 w-4 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- CASOS DE USO ---------------- */}
      <section id="casos-de-uso" className="y-light y-sheet">
        <div className="y-container">
          {/* Servicio de digitalización: responde a las búsquedas de "digitalización de documentos". */}
          <div id="servicio-digitalizacion" className="mb-20 grid scroll-mt-28 grid-cols-1 gap-10 border-b border-slate-200 pb-20 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col gap-5 lg:col-span-6">
              <span className="y-eyebrow">{OCR_PAGE.digitization.eyebrow}</span>
              <h2 className="y-h2 text-slate-950">{OCR_PAGE.digitization.title}.</h2>
              {OCR_PAGE.digitization.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[16.5px] leading-relaxed text-slate-700">{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-col gap-6 lg:col-span-5 lg:col-start-8">
              <div className="y-card p-7 sm:p-8">
                <CheckList items={OCR_PAGE.digitization.bullets} />
              </div>
              <nav aria-label="Guías sobre digitalización de documentos" className="flex flex-col gap-3">
                {OCR_PAGE.digitization.guides.map((guide) => (
                  <Link key={guide.href} href={guide.href} className="y-link w-fit">
                    {guide.label}
                    <ArrowRight className="y-arrow h-4 w-4 shrink-0" aria-hidden="true" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="flex max-w-3xl flex-col gap-5">
              <span className="y-eyebrow">Casos de uso</span>
              <h2 className="y-h2 text-slate-950">Dónde el OCR genera valor más rápido.</h2>
            </div>
            <p className="max-w-md text-[16px] leading-relaxed text-slate-600">
              El foco no es la tecnología: es que el dato llegue listo al siguiente paso del proceso.
            </p>
          </div>

          <SpotlightGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OCR_PAGE.useCases.map((useCase, index) => (
              <div key={useCase.title} className="y-spot y-card y-card-hover y-reveal flex flex-col gap-3 p-7">
                <IconTile icon={USE_CASE_ICONS[index % USE_CASE_ICONS.length]} />
                <h3 className="y-h3 mt-2 text-[1.15rem] text-slate-950">{useCase.title}</h3>
                <p className="text-[15px] leading-relaxed text-slate-600">{useCase.description}</p>
              </div>
            ))}
            <a
              href="#formulario"
              className="group flex flex-col justify-between gap-6 rounded-[1.5rem] border-[1.5px] border-dashed border-slate-300 p-7 transition-colors hover:border-sky-400 hover:bg-sky-50/50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-100 text-slate-700 transition-colors group-hover:bg-sky-100 group-hover:text-sky-700">
                <Plus className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col gap-2">
                <span className="y-h3 text-[1.15rem] text-slate-950">¿Otro tipo de documento?</span>
                <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-sky-700">
                  Evalúalo con nosotros
                  <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </a>
          </SpotlightGroup>
        </div>
      </section>

      {/* ---------------- BENEFICIOS + POR QUÉ YAGO ---------------- */}
      <section id="beneficios" className="y-mist y-sheet">
        <div className="y-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col gap-5 lg:col-span-4">
              <span className="y-eyebrow">Beneficios</span>
              <h2 className="y-h2 text-slate-950">Menos digitación, más control.</h2>
              <p className="y-lead">Lo que cambia en el día a día cuando los documentos dejan de copiarse a mano.</p>
            </div>
            <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8">
              {OCR_PAGE.benefits.map((benefit, index) => (
                <li key={benefit.title} className="flex gap-4 border-t border-slate-200 pt-6">
                  <span className="font-mono text-[13px] text-sky-700">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex flex-col gap-1.5">
                    <span className="font-headline text-[1.1rem] font-semibold tracking-[-0.01em] text-slate-950">{benefit.title}</span>
                    <span className="text-[15px] leading-relaxed text-slate-600">{benefit.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <OcrCapabilities />
        </div>
      </section>

      {/* ---------------- PREGUNTAS ---------------- */}
      <FaqSection
        title="Dudas comunes sobre OCR."
        items={FAQS}
        aside={
          <>
          <RelatedGuides guides={FACTS.guides.filter((guide) => guide.href !== "/ocr-master")} />
          <div className="mt-2 flex flex-col gap-3 rounded-2xl bg-mist p-5 text-[14.5px] leading-relaxed text-slate-600">
            <p className="font-semibold text-slate-900">¿Necesitas integrarlo en tu propio software?</p>
            <p>OCR Master es la versión API: envías el documento y recibes los datos estructurados en JSON.</p>
            <Link href="/ocr-master" className="y-link w-fit">
              Ver OCR Master API
              <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          </>
        }
      />

      {/* ---------------- DEMO + FORMULARIO ---------------- */}
      <section id="formulario" className="y-dark y-sheet y-grain overflow-hidden">
        <span id="demo" className="absolute -top-24" aria-hidden="true" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-8%] top-[-10%] h-[36rem] w-[36rem] rounded-full bg-sky-400/[0.12] blur-[120px]" />
        </div>
        <div className="y-container relative grid grid-cols-1 items-start gap-14 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5 lg:pt-4">
            <span className="y-eyebrow">Evaluación inicial</span>
            <h2 className="y-h2 text-white">{OCR_PAGE.demo.title}.</h2>
            <p className="y-lead">{OCR_PAGE.demo.description}</p>
            <div className="y-glass flex flex-col gap-4 p-6">
              <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-slate-400">Qué revisamos contigo</p>
              <ul className="flex flex-col gap-3">
                {REVIEW_ITEMS.map((item) => (
                  <li key={item} className="flex gap-3 text-[15.5px] text-white">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="y-link plausible-event-name=CTA+WhatsApp plausible-event-location=ocr_demo"
              >
                <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
                {OCR_PAGE.demo.secondaryCta}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="y-link">
                <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
                {COMPANY.email}
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <OcrLeadForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
