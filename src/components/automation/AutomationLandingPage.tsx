import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileText,
  Mail,
  MessageCircle,
  ShieldCheck,
  Waypoints,
  Workflow,
} from "lucide-react";
import { AutomationLeadForm } from "@/components/automation/AutomationLeadForm";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { Section } from "@/components/landing/Section";
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
import type { AutomationPage } from "@/config/automation-pages";
import { COMPANY } from "@/config/site";
import {
  formatClpFromUf,
  formatUfPrice,
  formatUfRateLabel,
  type UfRate,
} from "@/lib/uf";

const AXIS_PRICING_MEETING_URL = "https://calendar.app.google/X3T5GeoXVQhqKHJz5";

type AutomationLandingPageProps = {
  page: AutomationPage;
  ufRate: UfRate;
};

type AutomationPlan = AutomationPage["pricing"]["plans"][number];

function formatPlanUnit(plan: AutomationPlan) {
  const unit = plan.unitUf ? `${formatUfPrice(plan.unitUf)} ${plan.unitLabel}` : plan.unitLabel;

  return [unit, plan.unitDetail].filter(Boolean).join(" · ");
}

export function AutomationLandingPage({ page, ufRate }: AutomationLandingPageProps) {
  const primaryPlan = page.pricing.plans[0];
  const ufRateLabel = formatUfRateLabel(ufRate);
  const audience = page.slug === "sadt" ? "RRHH y operaciones" : "RRHH, dotación y control interno";
  const audienceText = page.slug === "sadt"
    ? "Equipos con alto volumen de contratos, desvinculaciones y certificados."
    : "Equipos que necesitan revisar personas a volumen con evidencia auditable.";
  const heroSignals = [...page.hero.proofSignals.slice(0, 2), page.hero.trustSignals[0]].filter(Boolean);
  const summaryCards = [
    {
      label: "Qué es",
      value: page.hero.badge,
      text: page.hero.description,
    },
    {
      label: "Para quién",
      value: audience,
      text: audienceText,
    },
    {
      label: "Qué incluye",
      value: page.solution.outputItems[0],
      text: page.solution.outputItems.slice(1, 3).join(" · "),
    },
    {
      label: "Precio desde",
      value: formatUfPrice(primaryPlan.priceUf),
      text: `${primaryPlan.volume} · equivalente hoy ${formatClpFromUf(primaryPlan.priceUf, ufRate)} CLP`,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900">
      <Navbar
        links={page.nav}
        ctaHref="#formulario"
        ctaLabel="Solicitar demo"
        mobileDescription={`${page.hero.badge}: problema, solucion, planes, FAQ y contacto.`}
        homeHref="/"
      />

      <main id="main-content" className="main-premium">
        <section id="inicio" className="relative overflow-hidden pb-14 pt-8 md:pb-20 md:pt-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-7rem] top-[6%] h-[18rem] w-[18rem] rounded-full bg-sky-300/10 blur-[84px]" />
            <div className="absolute right-[-6rem] top-[10%] h-[16rem] w-[16rem] rounded-full bg-white/80 blur-[96px]" />
            <div className="absolute inset-x-[18%] bottom-[-6rem] h-[15rem] rounded-full bg-sky-200/6 blur-[88px]" />
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
                  {page.hero.badge}
                </Badge>
              </div>

              <h1 className="mt-6 max-w-3xl text-balance font-headline text-5xl font-semibold leading-[0.94] text-slate-900 md:text-6xl lg:text-[4.35rem]">
                {page.hero.title}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                {page.hero.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-600">
                {heroSignals.map((item) => (
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
                    {page.hero.primaryCta}
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
                    {page.hero.secondaryCta}
                  </a>
                </Button>

                <a
                  href="#planes"
                  className="inline-flex items-center gap-2 rounded-full px-1 text-sm font-medium text-slate-600 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {page.hero.tertiaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <p className="mt-7 max-w-xl text-sm leading-relaxed text-slate-600">
                {page.hero.trustSignals.slice(1).join(" · ")}
              </p>
            </div>

            <div className="relative lg:justify-self-end">
              <div className="absolute inset-x-10 top-6 h-24 rounded-full bg-sky-300/10 blur-[72px]" aria-hidden="true" />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-1 shadow-[0_30px_100px_rgba(30,58,95,0.14)]">
                <Card className="relative overflow-hidden rounded-[1.75rem] border-slate-900/10 bg-transparent shadow-none">
                  <CardHeader className="pb-5">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-600">
                      <Waypoints className="h-4 w-4 text-sky-700" aria-hidden="true" />
                      Flujo operativo YAGO
                    </div>
                    <CardTitle className="mt-3 text-[1.8rem] leading-none text-slate-900 md:text-[2.15rem]">
                      {page.hero.previewTitle}
                    </CardTitle>
                    <CardDescription className="max-w-md text-sm leading-relaxed text-slate-600">
                      {page.hero.previewDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-5">
                    <div className="grid gap-3 sm:grid-cols-2">
                      {page.hero.previewMetrics.map((metric) => (
                        <div key={metric.label} className="rounded-[1.35rem] border border-slate-900/10 bg-white/[0.04] p-4">
                          <div className="text-xs uppercase tracking-[0.16em] text-slate-600">{metric.label}</div>
                          <div className="mt-2 text-2xl font-semibold text-slate-900">{metric.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[1.45rem] border border-slate-900/10 bg-slate-900/5 p-4">
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-sky-700">
                        <Workflow className="h-4 w-4" aria-hidden="true" />
                        Flujo de ejecución
                      </div>
                      <div className="mt-4 grid gap-3">
                        {page.hero.previewFlow.map((item, index) => (
                          <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-900/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-800">
                            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-sky-200/20 bg-sky-300/10 text-xs text-sky-700">
                              {index + 1}
                            </span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.45rem] border border-slate-900/10 bg-white/[0.04] p-4">
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-600">
                        <FileText className="h-4 w-4 text-sky-700" aria-hidden="true" />
                        Evidencia y control
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {page.solution.outputItems.slice(0, 4).map((target) => (
                          <span key={target} className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-2 text-xs uppercase tracking-[0.12em] text-slate-800">
                            {target}
                          </span>
                        ))}
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
          <Section id="resumen" className="z-10 py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4">
              <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Resumen rápido</p>
                  <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                    Lo esencial antes de entrar al detalle.
                  </h2>
                </div>
                <Button asChild className="w-fit rounded-full border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950">
                  <a href="#formulario">Solicitar demo</a>
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {summaryCards.map((card) => (
                  <div key={card.label} className="rounded-[1.45rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,250,254,1))] p-5">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{card.label}</div>
                    <div className="mt-3 text-xl font-semibold leading-tight text-slate-900">{card.value}</div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </SectionReveal>

        <DividerGlow />

        <SectionReveal as="div" surface="soft">
          <Section id="problema" className="z-10">
            <div className="mx-auto max-w-7xl px-4">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Problema</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">{page.problem.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                  {page.problem.description}
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {page.pains.map((pain) => (
                  <Card key={pain.title} className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]">
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
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">{page.solution.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                  {page.solution.description}
                </p>

                <div className="mt-6 grid gap-3">
                  {page.solution.support.map((item) => (
                    <div key={item} className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-900/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-800">
                      <CheckCircle2 className="h-4 w-4 text-sky-700" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <Card className="overflow-hidden rounded-[2rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] shadow-[0_24px_90px_rgba(30,58,95,0.08)]">
                <CardContent className="grid gap-4 p-6 lg:grid-cols-[0.95fr_auto_1.05fr] lg:items-center">
                  <div className="rounded-[1.45rem] border border-slate-900/10 bg-white/[0.04] p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-600">{page.solution.inputLabel}</div>
                    <div className="mt-4 grid gap-3 text-sm text-slate-800">
                      {page.solution.inputItems.map((item) => (
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
                      Orquestacion
                    </div>
                  </div>

                  <div className="rounded-[1.45rem] border border-slate-900/10 bg-slate-900/5 p-5">
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-600">{page.solution.outputLabel}</div>
                    <div className="mt-4 grid gap-3 text-sm text-slate-800">
                      {page.solution.outputItems.map((item) => (
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
          <Section id="modulos" className="z-10">
            <div className="mx-auto max-w-7xl px-4">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Modulos</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">Qué queda funcionando</h2>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {page.modules.map((module) => (
                  <Card key={module.title} className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]">
                    <CardHeader>
                      <div className="flex size-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/[0.04] text-sky-700">
                        <Building2 className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <CardTitle className="pt-4 text-2xl text-slate-900">{module.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-slate-600">
                        {module.description}
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
          <Section id="como-funciona" className="z-10">
            <div className="mx-auto max-w-7xl px-4">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Como funciona</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">De la necesidad operativa a una salida controlada</h2>
              </div>

              <div className="mt-10 grid gap-4 lg:grid-cols-3">
                {page.steps.map((step, index) => (
                  <Card key={step.name} className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]">
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
                          <span key={output} className="rounded-full border border-slate-900/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.12em] text-slate-800">
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

        <SectionReveal as="div" surface="soft">
          <Section id="casos-de-uso" className="z-10">
            <div className="mx-auto max-w-7xl px-4">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Casos de uso</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">Casos donde genera valor rápido</h2>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {page.useCases.map((useCase) => (
                  <Card key={useCase.title} className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]">
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

        <SectionReveal as="div" surface="strong">
          <Section id="beneficios" className="z-10">
            <div className="mx-auto max-w-7xl px-4">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Beneficios</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">Impacto esperado para la operación</h2>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {page.benefits.map((benefit) => (
                  <Card key={benefit.title} className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]">
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

        <SectionReveal as="div" surface="soft">
          <Section id="planes" className="z-10">
            <div className="mx-auto max-w-7xl px-4">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Planes</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">{page.pricing.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                  {page.pricing.description}
                </p>
              </div>

              <div className={`mt-10 grid gap-4 ${page.slug === "axis" ? "lg:grid-cols-2 2xl:grid-cols-4" : "lg:grid-cols-2"}`}>
                {page.pricing.plans.map((plan) => {
                  const clpEquivalent = formatClpFromUf(plan.priceUf, ufRate);
                  const extraClpEquivalent = plan.extraUf ? formatClpFromUf(plan.extraUf, ufRate) : null;

                  return (
                    <Card
                      key={`${plan.name}-${plan.volume}`}
                      className={`relative overflow-hidden rounded-[1.9rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] ${plan.featured ? "ring-1 ring-sky-200/30" : ""}`}
                    >
                      {plan.featured ? (
                        <div className="absolute right-5 top-5 rounded-full border border-sky-200/20 bg-sky-300/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-sky-700">
                          Recomendado
                        </div>
                      ) : null}
                      <CardHeader className="pb-4">
                        <CardTitle className={`${plan.featured ? "pr-32" : ""} text-2xl text-slate-900`}>{plan.name}</CardTitle>
                        <CardDescription className="text-base text-slate-600">{plan.volume}</CardDescription>
                        <div className="pt-4">
                          <span className="text-4xl font-semibold text-slate-900">{formatUfPrice(plan.priceUf)}</span>
                          <span className="ml-2 text-sm text-slate-600">{plan.period}</span>
                        </div>
                        <div className="text-sm text-sky-700">{formatPlanUnit(plan)}</div>
                        <div className="mt-4 rounded-[1.2rem] border border-slate-900/10 bg-white/[0.04] px-4 py-3">
                          <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Equivalente CLP actualizado</div>
                          <div className="mt-1 text-base font-medium text-slate-900">{clpEquivalent} CLP</div>
                          <div className="mt-1 text-xs text-slate-500">{ufRateLabel}</div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid gap-3 text-sm text-slate-600">
                          {plan.features.map((feature) => (
                            <div key={feature} className="flex gap-3 rounded-2xl border border-slate-900/10 bg-white/[0.04] px-4 py-3">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        {plan.extraUf ? (
                          <div className="mt-4 rounded-2xl border border-slate-900/10 bg-slate-900/5 px-4 py-3 text-sm text-slate-600">
                            <div>Crédito adicional: {formatUfPrice(plan.extraUf)} {plan.extraLabel}</div>
                            {extraClpEquivalent ? <div className="mt-1 text-xs text-slate-500">Equivalente hoy: {extraClpEquivalent} CLP</div> : null}
                          </div>
                        ) : null}
                      </CardContent>
                    </Card>
                  );
                })}
                {page.slug === "axis" ? (
                  <Card className="relative overflow-hidden rounded-[1.9rem] border-sky-200/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] ring-1 ring-sky-200/20">
                    <CardHeader className="pb-4">
                      <div className="w-fit rounded-full border border-sky-200/20 bg-sky-300/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-sky-700">
                        Precio especial
                      </div>
                      <CardTitle className="pt-4 text-2xl text-slate-900">Cotización 6 o 12 meses</CardTitle>
                      <CardDescription className="text-base text-slate-600">
                        Bolsas de créditos personalizadas
                      </CardDescription>
                      <div className="pt-4 text-3xl font-semibold leading-tight text-slate-900">A medida</div>
                      <div className="text-sm text-sky-700">Precios especiales por volumen y duración</div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3 text-sm text-slate-600">
                        {[
                          "Contratos semestrales o anuales",
                          "Bolsa de créditos según operación",
                          "Reunión de 30 minutos para mostrar AXIS",
                          "Cotización especial según volumen",
                        ].map((feature) => (
                          <div key={feature} className="flex gap-3 rounded-2xl border border-slate-900/10 bg-white/[0.04] px-4 py-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild className="mt-5 w-full rounded-full border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 active:scale-[0.98]">
                        <a href={AXIS_PRICING_MEETING_URL} target="_blank" rel="noreferrer">
                          Agendar reunión de 30 min
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ) : null}
              </div>

              <div className="mt-5 rounded-[1.4rem] border border-slate-900/10 bg-white/[0.04] px-5 py-4 text-sm leading-relaxed text-slate-600">
                {page.pricing.note}
              </div>
            </div>
          </Section>
        </SectionReveal>

        <DividerGlow />

        <SectionReveal as="div" surface="strong">
          <Section id="riesgos" className="z-10">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Riesgos</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">{page.riskTitle}</h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {page.risks.map((risk) => (
                  <Card key={risk.title} className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]">
                    <CardHeader>
                      <div className="flex size-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/[0.04] text-sky-700">
                        <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <CardTitle className="pt-4 text-2xl text-slate-900">{risk.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed text-slate-600">
                        {risk.description}
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
          <Section id="diferenciadores" className="z-10">
            <div className="mx-auto max-w-7xl px-4">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Por que YAGO</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">Diferencias que importan al operar</h2>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {page.differentiators.map((item) => (
                  <Card key={item.title} className="rounded-[1.7rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))]">
                    <CardHeader>
                      <CardTitle className="text-2xl text-slate-900">{item.title}</CardTitle>
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
                <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Demo</p>
                <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl">{page.demo.title}</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                  {page.demo.description}
                </p>

                <div className="mt-6 grid gap-3">
                  {page.demo.bullets.map((item) => (
                    <div key={item} className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-900/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-800">
                      <BadgeCheck className="h-4 w-4 text-sky-700" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="rounded-full border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(167,199,255,0.2)] active:scale-[0.98]">
                    <a href="#formulario">{page.demo.primaryCta}</a>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="rounded-full border border-slate-900/10 bg-white/[0.03] px-6 text-slate-900 transition-colors hover:bg-slate-50">
                    <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
                      {page.demo.secondaryCta}
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
                  {page.form.processOptions.slice(0, 4).map((item) => (
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
                  Si el volumen, trazabilidad o dependencia manual ya esta frenando la operacion, podemos revisar el caso y definir el siguiente paso con criterio comercial y tecnico.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a href={`mailto:${COMPANY.email}`} className="hover-lift rounded-[1.5rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-4 text-sm text-slate-600 transition hover:border-slate-900/10">
                    <div className="flex items-center gap-2 text-slate-900">
                      <Mail className="h-4 w-4 text-sky-700" aria-hidden="true" />
                      Correo directo
                    </div>
                    <div className="mt-2 underline underline-offset-4">{COMPANY.email}</div>
                  </a>

                  <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer" className="hover-lift rounded-[1.5rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-4 text-sm text-slate-600 transition hover:border-slate-900/10">
                    <div className="flex items-center gap-2 text-slate-900">
                      <MessageCircle className="h-4 w-4 text-sky-700" aria-hidden="true" />
                      WhatsApp
                    </div>
                    <div className="mt-2 underline underline-offset-4">{COMPANY.whatsapp}</div>
                  </a>

                  <div className="hover-lift rounded-[1.5rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-4 text-sm text-slate-600 sm:col-span-2">
                    <div className="flex items-center gap-2 text-slate-900">
                      <ShieldCheck className="h-4 w-4 text-sky-700" aria-hidden="true" />
                      Enfoque de la demo
                    </div>
                    <div className="mt-2 leading-relaxed">
                      Conversamos sobre volumen, reglas, usuarios, riesgos de operacion y datos disponibles. La meta es decidir rapido si hay fit y cual es el uso recomendado del servicio.
                    </div>
                  </div>
                </div>
              </div>

              <AutomationLeadForm page={page} />
            </div>
          </Section>
        </SectionReveal>

        <DividerGlow />

        <SectionReveal as="div" surface="soft">
          <Section id="faq" className="z-10">
            <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-[0.92fr_1.08fr]">
              <Card className="rounded-[1.8rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6">
                <CardHeader className="px-0 pb-4 pt-0">
                  <CardTitle className="text-3xl text-slate-900">Preguntas frecuentes</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-600">
                    Respuestas simples para resolver dudas comunes antes de una demo.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="rounded-[1.4rem] border border-slate-900/10 bg-slate-900/5 p-5 text-sm leading-relaxed text-slate-600">
                    La demo busca validar volumen, fuentes, usuarios, estados, evidencia requerida y el modelo de operacion mensual.
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[1.8rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-2 md:p-4">
                <Accordion type="single" collapsible className="w-full">
                  {page.faqs.map((item, idx) => (
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
                    <div className="text-3xl font-semibold text-slate-900">{page.finalCta.title}</div>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">{page.finalCta.text}</p>
                  </div>

                  <div className="flex flex-col gap-3 lg:min-w-[22rem]">
                    {page.hero.proofSignals.slice(0, 2).map((item) => (
                      <div key={item} className="rounded-full border border-slate-900/10 bg-white/[0.04] px-4 py-3 text-center text-sm font-medium text-slate-900">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="my-6 h-px bg-white/80" />

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="text-sm text-slate-600">
                    Revisamos el caso y te proponemos un siguiente paso concreto: demo, plan de uso o operación recurrente.
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild className="rounded-full border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(167,199,255,0.2)] active:scale-[0.98]">
                      <a href="#formulario">{page.finalCta.primary}</a>
                    </Button>
                    <Button asChild variant="ghost" className="rounded-full border border-slate-900/10 bg-white/[0.04] text-slate-900 transition-colors hover:bg-slate-50">
                      <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
                        {page.finalCta.secondary}
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
