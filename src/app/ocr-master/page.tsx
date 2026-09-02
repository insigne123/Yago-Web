import Link from "next/link";
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  FileJson2,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { BrandStamp } from "@/components/BrandStamp";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { COMPANY } from "@/config/site";
import { OCR_MASTER } from "@/config/ocr-master";
import { createPageMetadata } from "@/lib/seo";

const toneClasses = {
  sky: {
    accent: "bg-sky-300",
    border: "border-sky-200/20",
    panel: "bg-sky-400/10 text-sky-700",
  },
  amber: {
    accent: "bg-amber-200",
    border: "border-amber-200/20",
    panel: "bg-amber-100 text-amber-900",
  },
  mint: {
    accent: "bg-emerald-200",
    border: "border-emerald-200/20",
    panel: "bg-emerald-100 text-emerald-900",
  },
};

const buyerIcons = [Braces, ShieldCheck, FileJson2, Layers3];

export const metadata = createPageMetadata({
  title: OCR_MASTER.seoTitle,
  description: OCR_MASTER.seoDescription,
  path: "/ocr-master",
});

export default function OcrMasterPage() {
  const mailHref = `mailto:${COMPANY.email}?subject=${encodeURIComponent("Interes en OCR Master")}&body=${encodeURIComponent(
    "Hola YAGO, me interesa OCR Master. ¿Podemos revisar una demo o propuesta?"
  )}`;

  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900">
      <Navbar />

      <main id="main-content" className="main-premium py-20 md:py-24">
        <div className="mx-auto max-w-6xl space-y-8 px-4 md:space-y-10">
          <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr] xl:items-start">
            <Card className="overflow-hidden rounded-[2rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] shadow-[0_28px_100px_rgba(30,58,95,0.08)]">
              <CardHeader className="pb-5 md:pb-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Badge
                    variant="outline"
                    className="border-amber-200/20 bg-amber-100/[0.08] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-amber-700"
                  >
                    {OCR_MASTER.badge}
                  </Badge>
                  <Link
                    href="/productos"
                    className="text-sm text-slate-600 underline underline-offset-4 transition hover:text-slate-900"
                  >
                    Volver a productos
                  </Link>
                </div>

                <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-slate-900 md:text-6xl">
                  {OCR_MASTER.title}
                </h1>
                <CardDescription className="mt-3 text-2xl leading-tight text-slate-900 md:text-3xl">
                  {OCR_MASTER.pageTitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
                  {OCR_MASTER.pageSubtitle}
                </p>

                <div className="flex flex-wrap gap-2">
                  {OCR_MASTER.pageSupportPoints.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-slate-900/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-900"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    asChild
                    className="rounded-full border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] px-5 text-slate-950"
                  >
                    <a href={mailHref}>{OCR_MASTER.closeCta.primary}</a>
                  </Button>

                  <Button
                    asChild
                    variant="ghost"
                    className="rounded-full border border-slate-900/10 bg-white/[0.04] text-slate-900 hover:bg-slate-50"
                  >
                    <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
                      {OCR_MASTER.closeCta.secondary}
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="ghost"
                    className="rounded-full border border-slate-900/10 bg-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <a href="#planes">Ver Planes</a>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-slate-600">
                  {[
                    OCR_MASTER.metaValue,
                    "API lista para demo o piloto",
                    "JSON estructurado para integracion",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-2">
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-5">
              <Card className="overflow-hidden rounded-[2rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] shadow-[0_28px_100px_rgba(30,58,95,0.08)]">
                <CardHeader className="pb-4">
                  <Badge
                    variant="outline"
                    className="w-fit border-sky-200/20 bg-sky-200/[0.08] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-sky-700"
                  >
                    {OCR_MASTER.apiBadge}
                  </Badge>
                  <CardTitle as="h2" className="mt-4 text-3xl text-slate-900">{OCR_MASTER.apiTitle}</CardTitle>
                  <CardDescription className="max-w-lg text-base leading-relaxed text-slate-600">
                    {OCR_MASTER.apiDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {OCR_MASTER.apiDetails.map((item) => (
                    <div
                      key={item.label}
                      className="flex flex-col gap-2 rounded-[1.2rem] border border-slate-900/10 bg-white/[0.05] px-4 py-4 md:flex-row md:items-center md:justify-between"
                    >
                      <div className="text-xs uppercase tracking-[0.16em] text-slate-600">{item.label}</div>
                      <div className="text-base font-semibold text-slate-900">{item.value}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="overflow-hidden rounded-[2rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]">
                <CardHeader className="pb-4">
                  <CardTitle as="h2" className="text-2xl text-slate-900">{OCR_MASTER.metaTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-[1.4rem] border border-amber-200/20 bg-amber-100/[0.08] px-4 py-5">
                    <div className="text-3xl font-semibold text-slate-900">{OCR_MASTER.metaValue}</div>
                    <div className="mt-2 text-sm leading-relaxed text-slate-600">{OCR_MASTER.metaDescription}</div>
                  </div>

                  <div className="rounded-[1.4rem] border border-slate-900/10 bg-slate-900/5 px-4 py-4">
                    <div className="text-sm font-medium text-sky-700">{OCR_MASTER.proposalTitle}</div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {OCR_MASTER.proposalDescription}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="rounded-[1.8rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6">
            <div className="flex flex-wrap gap-2">
              {[
                { id: "impacto", label: "Impacto" },
                { id: "perfiles", label: "Compradores" },
                { id: "como-funciona", label: "Como funciona" },
                { id: "planes", label: "Planes" },
                { id: "faq", label: "FAQ" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-full border border-slate-900/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-800 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </section>

          <section id="impacto" className="space-y-5">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Impacto</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                Por que OCR Master puede convertirse en una oferta comercial muy facil de entender.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {OCR_MASTER.results.map((result) => (
                <Card
                  key={result.title}
                  className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-900">{result.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed text-slate-600">
                      {result.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="perfiles" className="space-y-5">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Perfiles Compradores</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                La propuesta se puede adaptar a operaciones, control y liderazgo sin cambiar el core del producto.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {OCR_MASTER.buyerBlocks.map((block, index) => {
                const Icon = buyerIcons[index % buyerIcons.length];
                return (
                  <Card
                    key={block.buyer}
                    className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]"
                  >
                    <CardHeader>
                      <div className="flex size-12 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/[0.05] text-sky-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <CardTitle className="pt-4 text-2xl text-slate-900">{block.buyer}</CardTitle>
                      <CardDescription className="text-base leading-relaxed text-slate-600">
                        {block.summary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm text-slate-600">
                        {block.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-200" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section id="como-funciona" className="space-y-5">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Como Funciona</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                De un archivo a un dato listo para integrarse, sin vender humo tecnico.
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-5">
              {OCR_MASTER.stages.map((stage, index) => (
                <Card
                  key={stage.name}
                  className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]"
                >
                  <CardHeader>
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-600">Paso {index + 1}</div>
                    <CardTitle className="pt-2 text-2xl text-slate-900">{stage.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm leading-relaxed text-slate-600">
                      {stage.description}
                    </CardDescription>
                    {stage.outputs?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {stage.outputs.map((output) => (
                          <span
                            key={output}
                            className="rounded-full border border-slate-900/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-800"
                          >
                            {output}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="planes" className="space-y-5">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-600">Pricing</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                {OCR_MASTER.pricingTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {OCR_MASTER.pricingDescription}
              </p>
            </div>

            <div className="grid gap-4 xl:grid-cols-3">
              {OCR_MASTER.plans.map((plan) => {
                const tone = toneClasses[plan.tone];
                return (
                  <Card
                    key={plan.name}
                    className={`overflow-hidden rounded-[1.8rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] ${tone.border}`}
                  >
                    <div className={`h-1.5 w-full ${tone.accent}`} />
                    <CardHeader className="space-y-4">
                      <Badge
                        variant="outline"
                        className="w-fit border-slate-900/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-600"
                      >
                        {plan.audience}
                      </Badge>
                      <div>
                        <CardTitle className="text-4xl text-slate-900">{plan.name}</CardTitle>
                        <div className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-slate-900 md:text-5xl">
                          {plan.documentsPerMonth}
                        </div>
                        <CardDescription className="text-base text-slate-600">
                          documentos / mes
                        </CardDescription>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">{plan.summary}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
                        <div className="rounded-[1.35rem] border border-slate-900/10 bg-white/[0.05] px-4 py-4">
                          <div className="text-xs uppercase tracking-[0.16em] text-slate-600">Pago anual</div>
                          <div className="mt-2 text-3xl font-semibold text-slate-900">{plan.annualPrice}</div>
                          <div className="mt-1 text-xs text-slate-600">por mes con pago anual</div>
                        </div>
                        <div className="rounded-[1.35rem] border border-slate-900/10 bg-white/[0.05] px-4 py-4">
                          <div className="text-xs uppercase tracking-[0.16em] text-slate-600">Pago mensual</div>
                          <div className="mt-2 text-3xl font-semibold text-slate-900">{plan.monthlyPrice}</div>
                          <div className="mt-1 text-xs text-slate-600">por mes con pago mensual</div>
                        </div>
                      </div>

                      <div className="rounded-[1.35rem] border border-slate-900/10 bg-slate-900/5 px-4 py-4 text-sm font-medium text-slate-900">
                        {plan.extraDocPrice}
                      </div>

                      <ul className="space-y-2 text-sm text-slate-600">
                        {plan.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        asChild
                        className="w-full rounded-full border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950"
                      >
                        <a href={mailHref}>
                          {plan.cta}
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </section>

          <section id="faq" className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="rounded-[1.8rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6">
              <CardHeader className="px-0 pb-4 pt-0">
                <CardTitle as="h2" className="text-3xl text-slate-900">Preguntas frecuentes</CardTitle>
                <CardDescription className="text-base leading-relaxed text-slate-600">
                  Objeciones, conversaciones comerciales y dudas tecnicas frecuentes para presentar OCR Master con claridad.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="rounded-[1.4rem] border border-slate-900/10 bg-slate-900/5 p-5 text-sm leading-relaxed text-slate-600">
                  El objetivo de esta pagina es que puedas explicar producto, API, confianza y pricing en minutos, sin depender de una narrativa tecnica compleja.
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[1.8rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-2 md:p-4">
              <Accordion type="single" collapsible className="w-full">
                {OCR_MASTER.faqs.map((item, idx) => (
                  <AccordionItem key={item.question} value={`item-${idx}`} className="border-slate-900/10 px-4">
                    <AccordionTrigger className="text-left text-slate-900 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>
          </section>

          <section className="overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] px-6 py-6 md:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="text-3xl font-semibold text-slate-900">{OCR_MASTER.closeCta.title}</div>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{OCR_MASTER.closeCta.text}</p>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[22rem]">
                {OCR_MASTER.footerHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-slate-900/10 bg-white/[0.04] px-4 py-3 text-center text-sm font-medium text-slate-900"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-6 bg-border" />

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-slate-600">
                Si quieres, armamos un demo o una propuesta comercial lista para presentar con tus propios casos de uso.
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950"
                >
                  <a href={mailHref}>{OCR_MASTER.closeCta.primary}</a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="rounded-full border border-slate-900/10 bg-white/[0.04] text-slate-900 hover:bg-slate-50"
                >
                  <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
                    {OCR_MASTER.closeCta.secondary}
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <BrandStamp />
      <Footer />
    </div>
  );
}
