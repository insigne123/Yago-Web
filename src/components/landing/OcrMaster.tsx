import Link from "next/link";
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  DatabaseZap,
  FileJson2,
  Layers3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { Section } from "./Section";

const benefitIcons = {
  sky: Braces,
  amber: CheckCircle2,
  mint: Layers3,
};

const toneClasses = {
  sky: {
    accent: "bg-sky-300",
    border: "border-sky-200/20",
    panel: "bg-sky-400/10 text-sky-100",
  },
  amber: {
    accent: "bg-amber-200",
    border: "border-amber-200/20",
    panel: "bg-amber-200/10 text-amber-50",
  },
  mint: {
    accent: "bg-emerald-200",
    border: "border-emerald-200/20",
    panel: "bg-emerald-300/10 text-emerald-50",
  },
};

export function OcrMaster() {
  return (
    <Section id="ocr-master" className="z-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 md:gap-6">
        <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr] xl:gap-6">
          <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-[linear-gradient(180deg,rgba(12,22,35,0.94),rgba(8,14,23,1))] shadow-[0_28px_100px_rgba(0,0,0,0.18)]">
              <CardHeader className="pb-4 md:pb-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Badge variant="outline" className="border-amber-200/20 bg-amber-100/8 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-amber-100">
                    {OCR_MASTER.badge}
                  </Badge>
                  <div className="flex items-center gap-3">
                    <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.05] px-4 py-3 text-right">
                      <div className="text-xs uppercase tracking-[0.16em] text-slate-400">{OCR_MASTER.footerTitle}</div>
                      <div className="mt-1 text-sm text-slate-200">Version premium comercial</div>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="rounded-full border border-white/10 bg-white/[0.04] text-slate-100 hover:bg-white/[0.08]"
                    >
                      <Link href="/ocr-master">Ver pagina completa</Link>
                    </Button>
                  </div>
                </div>
                <CardTitle className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white md:mt-8 md:text-6xl">
                  {OCR_MASTER.title}
                </CardTitle>
                <CardDescription className="mt-3 text-xl leading-tight text-slate-100 md:text-3xl">
                  {OCR_MASTER.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5 md:space-y-6">
                <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
                  {OCR_MASTER.description}
                </p>
                <p className="text-sm uppercase tracking-[0.14em] text-slate-400">
                  {OCR_MASTER.supportingText}
                </p>

                <div className="flex flex-wrap gap-3">
                  {OCR_MASTER.featurePills.map((pill) => (
                    <div
                      key={pill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-100"
                    >
                      {pill}
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-black/20 p-4 md:p-5">
                  <div className="text-sm font-semibold text-sky-200">{OCR_MASTER.proposalTitle}</div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                    {OCR_MASTER.proposalDescription}
                  </p>
                  <Link
                    href="/ocr-master"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-sky-100"
                  >
                    Explorar el detalle completo
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </CardContent>
            </Card>

          <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-[linear-gradient(180deg,rgba(11,18,30,0.94),rgba(9,14,22,1))] shadow-[0_28px_100px_rgba(0,0,0,0.18)]">
              <CardHeader className="pb-4 md:pb-5">
                <Badge variant="outline" className="w-fit border-sky-200/20 bg-sky-200/8 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-sky-100">
                  {OCR_MASTER.apiBadge}
                </Badge>
                <CardTitle className="mt-4 text-3xl text-white">{OCR_MASTER.apiTitle}</CardTitle>
                <CardDescription className="max-w-lg text-base leading-relaxed text-slate-300">
                  {OCR_MASTER.apiDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {OCR_MASTER.apiDetails.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-2 rounded-[1.2rem] border border-white/10 bg-white/[0.05] px-4 py-4 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="text-xs uppercase tracking-[0.16em] text-slate-400">{item.label}</div>
                    <div className="text-base font-semibold text-white">{item.value}</div>
                  </div>
                ))}

                <div className="rounded-[1.4rem] border border-amber-200/20 bg-amber-100/8 px-4 py-5">
                  <div className="text-xs uppercase tracking-[0.16em] text-amber-100">{OCR_MASTER.metaTitle}</div>
                  <div className="mt-2 text-3xl font-semibold text-white">{OCR_MASTER.metaValue}</div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-300">{OCR_MASTER.metaDescription}</div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                  <FileJson2 className="h-4 w-4 text-sky-200" aria-hidden="true" />
                  Integracion lista para portales, backoffice y automatizacion documental.
                </div>
              </CardFooter>
          </Card>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {OCR_MASTER.benefits.map((benefit) => {
            const Icon = benefitIcons[benefit.tone];
            const tone = toneClasses[benefit.tone];

            return (
              <Card
                key={benefit.title}
                className={`rounded-[1.7rem] border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.88),rgba(10,16,25,0.98))] ${tone.border}`}
              >
                <CardHeader>
                  <div className={`flex size-12 items-center justify-center rounded-2xl border border-white/10 ${tone.panel}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="pt-4 text-2xl text-white">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-slate-300">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,20,31,0.94),rgba(8,13,22,1))] px-5 py-7 shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-8 md:py-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge variant="outline" className="border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                OCR Master Pricing
              </Badge>
              <h3 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
                {OCR_MASTER.pricingTitle}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-300">
                {OCR_MASTER.pricingDescription}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-100/8 px-4 py-2 text-sm text-amber-50">
              <DatabaseZap className="h-4 w-4 text-amber-100" aria-hidden="true" />
              {OCR_MASTER.metaValue}
            </div>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-3 md:mt-8">
            {OCR_MASTER.plans.map((plan) => {
              const tone = toneClasses[plan.tone];

              return (
                <Card
                  key={plan.name}
                  className={`overflow-hidden rounded-[1.8rem] border-white/10 bg-[linear-gradient(180deg,rgba(18,25,39,0.94),rgba(10,16,25,1))] ${tone.border}`}
                >
                    <div className={`h-1.5 w-full ${tone.accent}`} />
                    <CardHeader className="pb-4 md:pb-5">
                      <Badge variant="outline" className="w-fit border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                        Plan
                      </Badge>
                      <CardTitle className="mt-4 text-3xl font-semibold text-white md:text-4xl">{plan.name}</CardTitle>
                      <div className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                        {plan.documentsPerMonth}
                      </div>
                      <CardDescription className="text-base text-slate-400">documentos / mes</CardDescription>
                      <p className="pt-4 text-sm leading-relaxed text-slate-300">{plan.summary}</p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
                        <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.05] px-4 py-4">
                          <div className="text-xs uppercase tracking-[0.16em] text-slate-400">Pago anual</div>
                          <div className="mt-2 text-3xl font-semibold text-white">{plan.annualPrice}</div>
                          <div className="mt-1 text-xs text-slate-400">por mes con pago anual</div>
                        </div>
                        <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.05] px-4 py-4">
                          <div className="text-xs uppercase tracking-[0.16em] text-slate-400">Pago mensual</div>
                          <div className="mt-2 text-3xl font-semibold text-white">{plan.monthlyPrice}</div>
                          <div className="mt-1 text-xs text-slate-400">por mes con pago mensual</div>
                        </div>
                      </div>

                      <div className="rounded-[1.35rem] border border-white/10 bg-black/20 px-4 py-4 text-sm font-medium text-slate-100">
                        {plan.extraDocPrice}
                      </div>

                      <div className="grid gap-2 text-sm text-slate-300">
                        <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                          Uso comercial vía API
                        </div>
                        <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                          Meta operativa: hasta 99% de confianza
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button
                        asChild
                        className="w-full rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950"
                      >
                        <Link href="#contacto">
                          {plan.cta}
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,25,39,0.94),rgba(10,16,25,1))] px-6 py-6 md:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="text-3xl font-semibold text-white">{OCR_MASTER.footerTitle}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{OCR_MASTER.footerDescription}</p>
              </div>

              <div className="flex flex-col gap-3 lg:min-w-[22rem]">
                {OCR_MASTER.footerHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm font-medium text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-6 bg-white/10" />

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-slate-300">
                ¿Quieres integrarlo en un portal, flujo interno o servicio comercial de YAGO?
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950"
                >
                  <Link href="#contacto">Agendar Demo</Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="rounded-full border border-white/10 bg-white/[0.04] text-slate-100 hover:bg-white/[0.08]"
                >
                  <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
                    Solicitar Propuesta
                  </a>
                </Button>
              </div>
            </div>
        </div>
      </div>
    </Section>
  );
}
