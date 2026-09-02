import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileJson2,
  Mail,
  MessageCircle,
  ShieldCheck,
  Waypoints,
  Workflow,
} from "lucide-react";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { Section } from "@/components/landing/Section";
import { OcrLeadForm } from "@/components/ocr/OcrLeadForm";
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DividerGlow, SectionReveal } from "@/components/ui/animated";
import { OCR_PAGE } from "@/config/ocr";
import { COMPANY } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: OCR_PAGE.seoTitle,
  description: OCR_PAGE.seoDescription,
  keywords: [
    "OCR para empresas",
    "automatizacion documental",
    "lectura de documentos",
    "digitalizacion de procesos",
    "PDFs escaneados",
    "extraccion de datos",
  ],
  path: "/ocr",
});

export default function OcrPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900">
      <Navbar
        links={OCR_PAGE.nav}
        ctaHref="#formulario"
        ctaLabel="Solicitar demo"
        mobileDescription="Explora OCR para empresas, casos de uso, FAQ y evaluacion inicial."
        homeHref="/"
      />

      <main id="main-content" className="main-premium">
        <section id="inicio" className="relative overflow-hidden pb-20 pt-10 md:pb-24 md:pt-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-7rem] top-[6%] h-[18rem] w-[18rem] rounded-full bg-sky-300/10 blur-[84px]" />
            <div className="absolute right-[-6rem] top-[10%] h-[16rem] w-[16rem] rounded-full bg-indigo-300/10 blur-[96px]" />
            <div className="absolute inset-x-[18%] bottom-[-6rem] h-[15rem] rounded-full bg-amber-200/[0.06] blur-[88px]" />
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid-overlay" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/[0.04] px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  Volver a YAGO
                </a>

                <Badge
                  variant="outline"
                  className="border-sky-200/20 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-sky-700"
                >
                  {OCR_PAGE.hero.badge}
                </Badge>
              </div>

              <h1 className="mt-6 max-w-4xl text-balance font-headline text-5xl font-semibold leading-[0.92] text-slate-900 md:text-7xl lg:text-[5.35rem]">
                {OCR_PAGE.hero.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-[1.14rem]">
                {OCR_PAGE.hero.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-600">
                {OCR_PAGE.hero.proofSignals.map((item) => (
                  <div key={item} className="rounded-full border border-slate-900/10 bg-white/[0.04] px-4 py-2">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="group rounded-full border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] px-6 text-slate-950 shadow-[0_14px_38px_rgba(167,199,255,0.16)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(167,199,255,0.2)] active:scale-[0.98]"
                >
                  <a href="#formulario">
                    {OCR_PAGE.hero.primaryCta}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="rounded-full border border-slate-900/10 bg-white/[0.03] px-6 text-slate-900 transition-colors hover:bg-slate-50"
                >
                  <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
                    {OCR_PAGE.hero.secondaryCta}
                  </a>
                </Button>

                <a
                  href="#formulario"
                  className="inline-flex items-center gap-2 rounded-full px-1 text-sm font-medium text-slate-600 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {OCR_PAGE.hero.tertiaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-600">
                {OCR_PAGE.hero.trustSignals.map((signal) => (
                  <div key={signal} className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/[0.03] px-3 py-2">
                    <BadgeCheck className="h-4 w-4 text-sky-700" aria-hidden="true" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:justify-self-end">
              <div className="absolute inset-x-10 top-6 h-24 rounded-full bg-sky-300/10 blur-[72px]" aria-hidden="true" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-1 shadow-[0_30px_100px_rgba(30,58,95,0.14)]">
                <Card className="relative overflow-hidden rounded-[1.75rem] border-slate-900/10 bg-transparent shadow-none">
                  <CardHeader className="pb-5">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-600">
                      <Waypoints className="h-4 w-4 text-sky-700" aria-hidden="true" />
                      Flujo OCR YAGO
                    </div>
                    <CardTitle as="h2" className="mt-3 text-[2rem] leading-none text-slate-900 md:text-[2.35rem]">
                      {OCR_PAGE.hero.previewTitle}
                    </CardTitle>
                    <CardDescription className="max-w-md text-sm leading-relaxed text-slate-600">
                      {OCR_PAGE.hero.previewDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="grid gap-4 xl:grid-cols-[0.88fr_1.12fr]">
                      <div className="rounded-[1.45rem] border border-slate-900/10 bg-white/[0.04] p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="text-xs uppercase tracking-[0.16em] text-slate-600">Documento escaneado</div>
                            <div className="mt-2 text-sm font-semibold text-slate-900">Factura proveedor</div>
                          </div>
                          <div className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1 text-xs text-slate-600">
                            PDF
                          </div>
                        </div>

                        <div className="mt-4 rounded-[1.25rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4">
                          <div className="space-y-2">
                            {[
                              "Factura No. FC-20481",
                              "Proveedor: Transporte Andino",
                              "Monto total: CLP 1.248.000",
                              "Fecha emision: 08/04/2026",
                            ].map((line, index) => (
                              <div
                                key={line}
                                className={`h-3 rounded-full ${index === 1 || index === 2 ? "bg-sky-200/25" : "bg-white/[0.08]"}`}
                                style={{ width: `${92 - index * 12}%` }}
                              >
                                <span className="sr-only">{line}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="rounded-[1.45rem] border border-slate-900/10 bg-slate-900/5 p-4">
                          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-sky-700">
                            <Workflow className="h-4 w-4" aria-hidden="true" />
                            Extraccion de campos
                          </div>

                          <div className="mt-4 grid gap-2">
                            {OCR_PAGE.hero.previewFields.map((field) => (
                              <div key={field.label} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-900/10 bg-white/[0.04] px-4 py-3 text-sm">
                                <span className="text-slate-600">{field.label}</span>
                                <span className="font-medium text-slate-900">{field.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-[1.45rem] border border-slate-900/10 bg-white/[0.04] p-4">
                          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-amber-700">
                            <FileJson2 className="h-4 w-4" aria-hidden="true" />
                            Datos listos para usar
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {OCR_PAGE.hero.previewTargets.map((target) => (
                              <span key={target} className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-2 text-xs uppercase tracking-[0.14em] text-slate-800">
                                {target}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <DividerGlow />

        <SectionReveal as="div" surface="soft">
          <Section id="problema" className="z-10">
            <div className="mx-auto max-w-7xl px-4">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Problema</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">{OCR_PAGE.problem.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                  {OCR_PAGE.problem.description}
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {OCR_PAGE.pains.map((pain) => (
                  <Card
                    key={pain.title}
                    className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]"
                  >
                    <CardHeader>
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-600">{pain.eyebrow}</div>
                      <CardTitle className="pt-3 text-2xl text-slate-900">{pain.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-slate-600">
                        {pain.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Section>
        </SectionReveal>

        <DividerGlow />

        <SectionReveal as="div" surface="strong">
          <Section id="solucion" className="z-10">
            <div className="mx-auto grid max-w-7xl gap-6 px-4 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Solucion</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">{OCR_PAGE.solution.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                  {OCR_PAGE.solution.description}
                </p>

                <div className="mt-6 grid gap-3">
                  {OCR_PAGE.solution.support.map((item) => (
                    <div
                      key={item}
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-900/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-800"
                    >
                      <CheckCircle2 className="h-4 w-4 text-sky-700" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <Card className="overflow-hidden rounded-[2rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] shadow-[0_24px_90px_rgba(30,58,95,0.08)]">
                <CardContent className="grid gap-4 p-6 lg:grid-cols-[0.95fr_auto_1.05fr] lg:items-center">
                  <div className="rounded-[1.45rem] border border-slate-900/10 bg-white/[0.04] p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-600">{OCR_PAGE.solution.inputLabel}</div>
                    <div className="mt-4 grid gap-3 text-sm text-slate-800">
                      {OCR_PAGE.solution.inputItems.map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-900/10 bg-slate-900/5 px-4 py-3">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sky-200/20 bg-sky-300/10 text-sky-700">
                      <Workflow className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="h-20 w-px bg-gradient-to-b from-sky-200/30 to-transparent" />
                    <div className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-2 text-xs uppercase tracking-[0.16em] text-slate-600">
                      OCR + estructura
                    </div>
                  </div>

                  <div className="rounded-[1.45rem] border border-slate-900/10 bg-slate-900/5 p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-600">{OCR_PAGE.solution.outputLabel}</div>
                    <div className="mt-4 grid gap-3 text-sm text-slate-800">
                      {OCR_PAGE.solution.outputItems.map((item) => (
                        <div key={item} className="rounded-2xl border border-slate-900/10 bg-white/[0.04] px-4 py-3">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Section>
        </SectionReveal>

        <DividerGlow />

        <SectionReveal as="div" surface="soft">
          <Section id="como-funciona" className="z-10">
            <div className="mx-auto max-w-7xl px-4">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Como funciona</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">
                  De un documento a un dato util en cuatro pasos claros
                </h2>
              </div>

              <div className="mt-10 grid gap-4 lg:grid-cols-4">
                {OCR_PAGE.steps.map((step, index) => (
                  <Card
                    key={step.name}
                    className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]"
                  >
                    <CardHeader>
                      <div className="text-xs uppercase tracking-[0.16em] text-slate-600">Paso {index + 1}</div>
                      <CardTitle className="pt-3 text-2xl text-slate-900">{step.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {step.outputs.map((output) => (
                          <span
                            key={output}
                            className="rounded-full border border-slate-900/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.12em] text-slate-800"
                          >
                            {output}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Section>
        </SectionReveal>

        <DividerGlow />

        <SectionReveal as="div" surface="strong">
          <Section id="casos-de-uso" className="z-10">
            <div className="mx-auto max-w-7xl px-4">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Casos de uso</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">Casos de uso frecuentes</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                  El foco no es mostrar tecnologia. El foco es mostrar donde OCR y automatizacion documental generan valor real para la empresa.
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {OCR_PAGE.useCases.map((useCase) => (
                  <Card
                    key={useCase.title}
                    className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]"
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl text-slate-900">{useCase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-slate-600">
                        {useCase.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Section>
        </SectionReveal>

        <DividerGlow />

        <SectionReveal as="div" surface="soft">
          <Section id="beneficios" className="z-10">
            <div className="mx-auto max-w-7xl px-4">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Beneficios</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">Beneficios para tu empresa</h2>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {OCR_PAGE.benefits.map((benefit) => (
                  <Card
                    key={benefit.title}
                    className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]"
                  >
                    <CardHeader>
                      <div className="flex size-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/[0.04] text-sky-700">
                        <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <CardTitle className="pt-4 text-2xl text-slate-900">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-slate-600">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Section>
        </SectionReveal>

        <DividerGlow />

        <SectionReveal as="div" surface="strong">
          <Section id="diferenciadores" className="z-10">
            <div className="mx-auto max-w-7xl px-4">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Por que YAGO</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">
                  Mas que OCR: automatizacion pensada para tu operacion
                </h2>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {OCR_PAGE.differentiators.map((item, index) => (
                  <Card
                    key={item.title}
                    className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]"
                  >
                    <CardHeader>
                      <div className="flex size-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/[0.04] text-sky-700">
                        {index % 2 === 0 ? (
                          <Building2 className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                        )}
                      </div>
                      <CardTitle className="pt-4 text-2xl text-slate-900">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-slate-600">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Section>
        </SectionReveal>

        <DividerGlow />

        <SectionReveal as="div" surface="strong">
          <Section id="demo" className="z-10">
            <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Prueba o demo</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">{OCR_PAGE.demo.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                  {OCR_PAGE.demo.description}
                </p>

                <div className="mt-6 grid gap-3">
                  {OCR_PAGE.demo.bullets.map((item) => (
                    <div
                      key={item}
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-900/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-800"
                    >
                      <BadgeCheck className="h-4 w-4 text-sky-700" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(167,199,255,0.2)] active:scale-[0.98]"
                  >
                    <a href="#formulario">{OCR_PAGE.demo.primaryCta}</a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="rounded-full border border-slate-900/10 bg-white/[0.03] px-6 text-slate-900 transition-colors hover:bg-slate-50"
                  >
                    <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
                      {OCR_PAGE.demo.secondaryCta}
                    </a>
                  </Button>
                </div>
              </div>

              <Card className="overflow-hidden rounded-[2rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] shadow-[0_24px_90px_rgba(30,58,95,0.08)]">
                <CardHeader>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-600">
                    <Workflow className="h-4 w-4 text-sky-700" aria-hidden="true" />
                    Que revisamos contigo
                  </div>
                  <CardTitle className="mt-3 text-3xl text-slate-900">Una conversacion comercial con contexto real</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 text-sm text-slate-600">
                  {[
                    "Tipo de documento y variaciones de formato",
                    "Campos que realmente importan para tu proceso",
                    "Volumen, equipo involucrado y punto de integracion",
                    "Siguiente paso recomendado: demo, piloto o implementacion",
                  ].map((item) => (
                    <div key={item} className="rounded-[1.3rem] border border-slate-900/10 bg-white/[0.04] px-4 py-4">
                      {item}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </Section>
        </SectionReveal>

        <DividerGlow />

        <SectionReveal as="div" surface="strong">
          <Section id="formulario" className="z-10">
            <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 lg:grid-cols-[0.92fr_1.08fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Contacto</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">Cuentanos tu caso</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                  Si manejas facturas, contratos, formularios o documentos escaneados en volumen, podemos revisar como aplicar OCR y automatizacion documental sin partir de cero.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="hover-lift rounded-[1.5rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-4 text-sm text-slate-600 transition hover:border-slate-900/10"
                  >
                    <div className="flex items-center gap-2 text-slate-900">
                      <Mail className="h-4 w-4 text-sky-700" aria-hidden="true" />
                      Correo directo
                    </div>
                    <div className="mt-2 underline underline-offset-4">{COMPANY.email}</div>
                  </a>

                  <a
                    href={COMPANY.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-lift rounded-[1.5rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-4 text-sm text-slate-600 transition hover:border-slate-900/10"
                  >
                    <div className="flex items-center gap-2 text-slate-900">
                      <MessageCircle className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                      WhatsApp
                    </div>
                    <div className="mt-2 underline underline-offset-4">{COMPANY.whatsapp}</div>
                  </a>

                  <div className="hover-lift rounded-[1.5rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-4 text-sm text-slate-600 sm:col-span-2">
                    <div className="flex items-center gap-2 text-slate-900">
                      <ShieldCheck className="h-4 w-4 text-amber-700" aria-hidden="true" />
                      Enfoque de la evaluacion inicial
                    </div>
                    <div className="mt-2 leading-relaxed">
                      Conversamos sobre documentos, volumen, campos utiles y forma de integracion. La meta es ayudarte a decidir rapido si hay fit y cual deberia ser el siguiente paso.
                    </div>
                  </div>
                </div>
              </div>

              <OcrLeadForm />
            </div>
          </Section>
        </SectionReveal>

        <DividerGlow />

        <SectionReveal as="div" surface="soft">
          <Section id="faq" className="z-10">
            <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-[0.92fr_1.08fr]">
              <Card className="rounded-[1.8rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6">
                <CardHeader className="px-0 pb-4 pt-0">
                  <CardTitle as="h2" className="text-3xl text-slate-900">Preguntas frecuentes</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-600">
                    Respuestas simples para resolver dudas comunes antes de una demo o evaluacion inicial.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="rounded-[1.4rem] border border-slate-900/10 bg-slate-900/5 p-5 text-sm leading-relaxed text-slate-600">
                    Si tu proceso depende de PDFs, imagenes o documentos escaneados, la evaluacion inicial nos permite ver rapidamente si el caso vale la pena y como aterrizarlo.
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[1.8rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-2 md:p-4">
                <Accordion type="single" collapsible className="w-full">
                  {OCR_PAGE.faqs.map((item, idx) => (
                    <AccordionItem key={item.question} value={`item-${idx}`} className="border-slate-900/10 px-4">
                      <AccordionTrigger className="text-left text-slate-900 hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </div>
          </Section>
        </SectionReveal>

        <DividerGlow />

        <SectionReveal as="div" surface="strong">
          <Section className="z-10 pt-0">
            <div className="mx-auto max-w-7xl px-4">
              <div className="overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] px-6 py-6 md:px-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="text-3xl font-semibold text-slate-900">{OCR_PAGE.finalCta.title}</div>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">{OCR_PAGE.finalCta.text}</p>
                  </div>

                  <div className="flex flex-col gap-3 lg:min-w-[22rem]">
                    {[
                      "OCR para empresas con foco operativo",
                      "PDFs escaneados, facturas, contratos y formularios",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-slate-900/10 bg-white/[0.04] px-4 py-3 text-center text-sm font-medium text-slate-900"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="my-6 h-px bg-border" />

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="text-sm text-slate-600">
                    Si quieres, revisamos tus documentos y te proponemos el siguiente paso con criterio comercial y operativo.
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      asChild
                      className="rounded-full border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(167,199,255,0.2)] active:scale-[0.98]"
                    >
                      <a href="#formulario">{OCR_PAGE.finalCta.primary}</a>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      className="rounded-full border border-slate-900/10 bg-white/[0.04] text-slate-900 transition-colors hover:bg-slate-50"
                    >
                      <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
                        {OCR_PAGE.finalCta.secondary}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </SectionReveal>
      </main>

      <Footer />
    </div>
  );
}
