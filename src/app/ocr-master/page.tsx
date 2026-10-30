import {
  ArrowRight,
  Braces,
  ClipboardCheck,
  FileInput,
  FileJson2,
  Gauge,
  Layers3,
  ShieldCheck,
  Timer,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { stepGridClass } from "@/components/catalog/CatalogKit";
import { SpotlightGroup } from "@/components/home/SpotlightGroup";
import { CodeBlock, CodeWindow, SAMPLE_REQUEST, SAMPLE_RESPONSE, jsonTokens } from "@/components/ocr-master/CodeWindow";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  ActionLink,
  CheckList,
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
  faqJsonLd,
} from "@/components/site/PageKit";
import { COMPANY } from "@/config/site";
import { OCR_MASTER } from "@/config/ocr-master";
import { KeyFactsSection } from "@/components/site/KeyFacts";
import { KEY_FACTS, mergeFaqs } from "@/config/key-facts";
import { ENTITY } from "@/config/entity";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: OCR_MASTER.seoTitle,
  description: OCR_MASTER.seoDescription,
  path: "/ocr-master",
});

const RESULT_ICONS: LucideIcon[] = [Timer, Workflow, Layers3, ClipboardCheck];
const BUYER_ICONS: LucideIcon[] = [Braces, ShieldCheck, FileJson2, Layers3];

const DEMO_EVENT = "plausible-event-name=CTA+Solicitar+Demo plausible-event-product=ocr-master";

function mailHref(plan?: string) {
  const subject = plan ? `Interés en OCR Master · Plan ${plan}` : "Interés en OCR Master";
  const body = plan
    ? `Hola YAGO, me interesa el plan ${plan} de OCR Master. ¿Podemos revisar una demo o propuesta?`
    : "Hola YAGO, me interesa OCR Master. ¿Podemos revisar una demo o propuesta?";
  return `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const RESPONSE_TOKENS = jsonTokens(SAMPLE_RESPONSE);

function StatusOk() {
  return <span className="y-status y-status-ok font-mono">200 OK</span>;
}

const FACTS = KEY_FACTS["ocr-master"];
const FAQS = mergeFaqs(FACTS.faqs, OCR_MASTER.faqs);
const usd = (label: string) => Number(label.replace(/[^\d,.]/g, "").replace(/\./g, "").replace(",", "."));

const SOFTWARE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebAPI",
  "@id": "https://yago.cl/ocr-master#api",
  name: "OCR Master",
  alternateName: "OCR Master API by YAGO",
  description: FACTS.definition,
  url: "https://yago.cl/ocr-master",
  inLanguage: "es-CL",
  documentation: "https://yago.cl/ocr-master#api",
  provider: { "@id": "https://yago.cl/#organization" },
  dateModified: ENTITY.contentUpdated,
  offers: OCR_MASTER.plans.map((plan) => ({
    "@type": "Offer",
    name: `OCR Master ${plan.name}`,
    description: `${plan.documentsPerMonth} documentos al mes. ${plan.extraDocPrice}`,
    price: usd(plan.annualPrice),
    priceCurrency: "USD",
    priceSpecification: { "@type": "UnitPriceSpecification", price: usd(plan.annualPrice), priceCurrency: "USD", unitText: "mes (pago anual)" },
    url: "https://yago.cl/ocr-master#planes",
    seller: { "@id": "https://yago.cl/#organization" },
  })),
};

export default function OcrMasterPage() {
  const inputFormats = OCR_MASTER.stages[0]?.outputs ?? [];

  return (
    <PageShell>
      <JsonLd id="jsonld-ocr-master-faq" data={faqJsonLd(FAQS)} />
      <JsonLd id="jsonld-ocr-master-api" data={SOFTWARE_JSONLD} />

      {/* ---------------- HERO ---------------- */}
      <PageHero
        fx
        top={
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Productos", href: "/productos" },
              { name: "OCR Master API", href: "/ocr-master" },
            ]}
          />
        }
        eyebrow={OCR_MASTER.badge}
        title="OCR Master: de PDF o imagen a"
        highlight="JSON estructurado."
        description={OCR_MASTER.description}
        actions={
          <>
            <a href={mailHref()} className={`y-btn y-btn-primary ${DEMO_EVENT} plausible-event-location=hero`}>
              {OCR_MASTER.closeCta.primary}
              <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
            </a>
            <ActionLink action={{ label: "Ver planes", href: "#planes" }} variant="glass" />
          </>
        }
        aside={
          <CodeWindow
            beam
            title="POST /v1/process"
            meta={<StatusOk />}
            footer="Respuesta de ejemplo · datos ficticios"
          >
            <CodeBlock tokens={RESPONSE_TOKENS} label="Ejemplo de respuesta JSON de OCR Master" />
          </CodeWindow>
        }
      >
        <dl className="mt-2 grid w-full grid-cols-1 gap-x-8 gap-y-4 border-t border-white/[0.08] pt-6 sm:grid-cols-2">
          {OCR_MASTER.apiDetails.map((detail) => (
            <div key={detail.label} className="flex min-w-0 flex-col gap-1">
              <dt className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-slate-400">{detail.label}</dt>
              <dd className="font-mono text-[14.5px] text-white">{detail.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* ---------------- EN RESUMEN ---------------- */}
      <KeyFactsSection data={FACTS} />

      {/* ---------------- QUÉ ENTREGA ---------------- */}
      <PageSection id="impacto" tone="mist">
        <SectionHeader
          eyebrow="Qué entrega"
          title="Campos listos para tu sistema, no documentos por digitar."
          description={OCR_MASTER.pageSubtitle}
        />

        <div className="y-card y-reveal mt-12 grid grid-cols-1 items-stretch gap-4 p-4 sm:p-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <div className="flex flex-col gap-4 rounded-[1.1rem] bg-mist p-6">
            <span className="flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-slate-600">
              <FileInput className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              Entra
            </span>
            <ul className="flex flex-wrap gap-2">
              {inputFormats.map((format) => (
                <li
                  key={format}
                  className="rounded-lg bg-white px-3 py-1.5 font-mono text-[13.5px] font-medium text-slate-900 shadow-[inset_0_0_0_1px_#e2e8f0]"
                >
                  {format}
                </li>
              ))}
            </ul>
            <p className="text-[14.5px] leading-relaxed text-slate-600">Desde portales, sistemas o flujos automatizados.</p>
          </div>
          <div className="flex items-center justify-center" aria-hidden="true">
            <span className="grid h-11 w-11 rotate-90 place-items-center rounded-full bg-[#0b1220] text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] lg:rotate-0">
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>
          <div className="flex flex-col gap-4 rounded-[1.1rem] bg-sky-50 p-6 shadow-[inset_0_0_0_1px_rgba(14,165,233,0.2)]">
            <span className="flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-sky-800">
              <Braces className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              Sale
            </span>
            <ul className="flex flex-wrap gap-2">
              {(OCR_MASTER.stages[2]?.outputs ?? []).map((output) => (
                <li
                  key={output}
                  className="rounded-lg bg-white px-3 py-1.5 font-mono text-[13.5px] font-medium text-slate-900 shadow-[inset_0_0_0_1px_rgba(14,165,233,0.25)]"
                >
                  {output}
                </li>
              ))}
            </ul>
            <p className="text-[14.5px] leading-relaxed text-slate-700">Para sistemas, workflows, onboarding o backoffice.</p>
          </div>
        </div>

        <SpotlightGroup className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {OCR_MASTER.results.map((result, index) => (
            <div key={result.title} className="y-spot y-card y-reveal flex flex-col gap-3 p-7">
              <IconTile icon={RESULT_ICONS[index % RESULT_ICONS.length]} />
              <h3 className="y-h3 mt-2 text-[1.15rem] text-slate-950">{result.title}</h3>
              <p className="text-[15px] leading-relaxed text-slate-600">{result.description}</p>
            </div>
          ))}
        </SpotlightGroup>
      </PageSection>

      {/* ---------------- CÓMO FUNCIONA ---------------- */}
      <PageSection id="como-funciona" tone="dark">
        <SectionHeader
          dark
          eyebrow="Cómo funciona"
          title="Del archivo a la integración, en cinco pasos."
          description={OCR_MASTER.apiDescription}
        />
        <ol className={`mt-16 ${stepGridClass(OCR_MASTER.stages.length)}`}>
          {OCR_MASTER.stages.map((stage, index) => (
            <StepCard key={stage.name} index={index} title={stage.name} description={stage.description} chips={stage.outputs} />
          ))}
        </ol>
      </PageSection>

      {/* ---------------- REQUEST / RESPONSE ---------------- */}
      <PageSection id="api" tone="mist">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex min-w-0 flex-col items-start gap-6 lg:col-span-5">
            <span className="y-eyebrow">{OCR_MASTER.apiBadge}</span>
            <h2 className="y-h2 text-slate-950">Un endpoint. Una respuesta en JSON.</h2>
            <p className="y-lead">
              Envías el archivo a <code className="rounded-md bg-white px-1.5 py-0.5 font-mono text-[0.9em] text-slate-900 shadow-[inset_0_0_0_1px_#e2e8f0]">POST /v1/process</code>{" "}
              autenticado con <code className="rounded-md bg-white px-1.5 py-0.5 font-mono text-[0.9em] text-slate-900 shadow-[inset_0_0_0_1px_#e2e8f0]">x-api-key</code>{" "}
              y recibes los datos listos para consumir.
            </p>
            <CheckList items={OCR_MASTER.pageSupportPoints} />

            <div className="y-card mt-2 flex w-full flex-col gap-2 p-6">
              <span className="flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-sky-700">
                <Gauge className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                {OCR_MASTER.metaTitle}
              </span>
              <p className="y-h3 text-[1.35rem] text-slate-950">{OCR_MASTER.metaValue}</p>
              <p className="text-[14.5px] leading-relaxed text-slate-600">{OCR_MASTER.metaDescription}</p>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-4 lg:col-span-7">
            <CodeWindow title="Request · curl" meta={<span className="font-mono text-[12px] text-slate-400">multipart/form-data</span>}>
              <CodeBlock tokens={SAMPLE_REQUEST} label="Ejemplo de solicitud con curl a OCR Master" />
            </CodeWindow>
            <CodeWindow title="Response · application/json" meta={<StatusOk />}>
              <CodeBlock tokens={RESPONSE_TOKENS} label="Ejemplo de respuesta JSON de la solicitud" />
            </CodeWindow>
            <p className="text-[13.5px] leading-relaxed text-slate-600">
              Ejemplo ilustrativo con datos ficticios. La estructura final depende del tipo documental y de la configuración del flujo.
            </p>
          </div>
        </div>
      </PageSection>

      {/* ---------------- CASOS DE USO ---------------- */}
      <PageSection id="perfiles" tone="light">
        <SectionHeader
          eyebrow="Casos de uso"
          title="Para operaciones, control y liderazgo."
          description="La misma API se adapta a cada área sin cambiar el core del producto."
        />
        <SpotlightGroup className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {OCR_MASTER.buyerBlocks.map((block, index) => (
            <div key={block.buyer} className="y-spot y-card y-reveal flex flex-col gap-4 p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <IconTile icon={BUYER_ICONS[index % BUYER_ICONS.length]} />
                <div className="flex min-w-0 flex-col gap-1.5">
                  <h3 className="y-h3 text-[1.3rem] text-slate-950">{block.buyer}</h3>
                  <p className="text-[15px] leading-relaxed text-slate-600">{block.summary}</p>
                </div>
              </div>
              <CheckList items={block.items} className="border-t border-slate-200 pt-5" />
            </div>
          ))}
        </SpotlightGroup>
      </PageSection>

      {/* ---------------- PLANES ---------------- */}
      <PageSection id="planes" tone="mist">
        <SectionHeader eyebrow="Precios" title={`${OCR_MASTER.pricingTitle}.`} description={OCR_MASTER.pricingDescription} />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {OCR_MASTER.plans.map((plan) => (
            <div key={plan.name} className="y-card y-reveal flex flex-col gap-6 p-7 sm:p-8">
              <div className="flex flex-col gap-3">
                <span className="w-fit rounded-full bg-sky-50 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-sky-800">
                  {plan.audience}
                </span>
                <h3 className="y-h3 text-[1.35rem] text-slate-950">{plan.name}</h3>
                <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="font-headline text-[2.6rem] font-semibold leading-none tracking-[-0.035em] text-slate-950 tabular-nums">
                    {plan.documentsPerMonth}
                  </span>
                  <span className="whitespace-nowrap text-base font-medium text-slate-600">documentos/mes</span>
                </p>
                <p className="text-[15px] leading-relaxed text-slate-600">{plan.summary}</p>
              </div>

              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="flex flex-col gap-1 rounded-2xl bg-mist p-4">
                  <dt className="text-[13px] text-slate-600">Pago anual</dt>
                  <dd className="font-headline text-[1.5rem] font-semibold tracking-[-0.02em] text-slate-950 tabular-nums">{plan.annualPrice}</dd>
                  <dd className="text-[12.5px] text-slate-600">por mes</dd>
                </div>
                <div className="flex flex-col gap-1 rounded-2xl bg-mist p-4">
                  <dt className="text-[13px] text-slate-600">Pago mensual</dt>
                  <dd className="font-headline text-[1.5rem] font-semibold tracking-[-0.02em] text-slate-950 tabular-nums">{plan.monthlyPrice}</dd>
                  <dd className="text-[12.5px] text-slate-600">por mes</dd>
                </div>
              </dl>

              <div className="flex flex-col gap-4 border-t border-slate-200 pt-5">
                <p className="text-[14.5px] font-medium text-sky-800">{plan.extraDocPrice}</p>
                <CheckList items={plan.includes} />
              </div>

              <a
                href={mailHref(plan.name)}
                className="y-btn y-btn-outline mt-auto w-full plausible-event-name=Plan+Click plausible-event-location=planes plausible-event-product=ocr-master"
              >
                {plan.cta}
                <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-5 rounded-[1.75rem] border-[1.5px] border-dashed border-slate-300 p-7 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div className="flex max-w-2xl flex-col gap-2">
            <h3 className="y-h3 text-[1.2rem] text-slate-950">¿No tienes equipo para integrar una API?</h3>
            <p className="text-[15px] leading-relaxed text-slate-600">
              OCR para empresas parte con una evaluación sobre una muestra real de tus documentos: qué campos se extraen, con qué calidad
              y cómo se integran a tu flujo.
            </p>
          </div>
          <div className="shrink-0">
            <TextLink href="/ocr">Ver OCR para empresas</TextLink>
          </div>
        </div>
      </PageSection>

      {/* ---------------- PREGUNTAS ---------------- */}
      <FaqSection
        title="Dudas frecuentes sobre OCR Master."
        items={FAQS}
        aside={
          <div className="mt-2 flex w-full flex-col gap-3 rounded-2xl bg-mist p-5 text-[14.5px] leading-relaxed text-slate-600">
            <p className="font-semibold text-slate-900">¿Prefieres un servicio gestionado?</p>
            <p>
              OCR para empresas es la versión gestionada: partimos evaluando tus documentos y definimos contigo el siguiente paso, sea demo,
              piloto o implementación.
            </p>
            <TextLink href="/ocr">Ver OCR para empresas</TextLink>
          </div>
        }
      />

      {/* ---------------- CIERRE ---------------- */}
      <CtaBand
        eyebrow="OCR Master API"
        title={OCR_MASTER.closeCta.title}
        text={OCR_MASTER.closeCta.text}
        primary={{ label: OCR_MASTER.closeCta.primary, href: mailHref(), event: `${DEMO_EVENT} plausible-event-location=cta` }}
        secondary={{ ...WHATSAPP_ACTION, label: OCR_MASTER.closeCta.secondary }}
      />
    </PageShell>
  );
}
