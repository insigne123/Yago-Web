import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Gavel, Landmark } from "lucide-react";
import { AUTOMATION_PAGES } from "@/config/automation-pages";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatUfPrice } from "@/lib/uf";
import { Section } from "./Section";

const icons = {
  sadt: Landmark,
  axis: Gavel,
};

export function AutomationPagesPreview() {
  return (
    <Section className="z-10" id="automatizaciones-home">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,22,35,0.94),rgba(8,14,23,1))] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.18)] md:p-8">
          <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
            <div>
              <Badge variant="outline" className="border-sky-200/20 bg-sky-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-sky-100">
                Automatizaciones listas para evaluar
              </Badge>
              <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
                Dos flujos críticos con precio, alcance y demo claros.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
                SADT y AXIS están pensadas para equipos que necesitan bajar carga manual, ordenar evidencia y operar con trazabilidad desde el primer uso.
              </p>

              <div className="mt-8 grid gap-3 text-sm text-slate-300">
                {[
                  "Precios publicados por volumen",
                  "Formulario específico por servicio",
                  "Demo orientada a validar fit operativo",
                ].map((item) => (
                  <div key={item} className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-200" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {AUTOMATION_PAGES.map((page) => {
                const Icon = icons[page.slug] ?? Building2;
                const featuredPlan = page.pricing.plans.find((plan) => plan.featured) ?? page.pricing.plans[0];

                return (
                  <article key={page.slug} className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-sky-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="mt-4 text-2xl font-semibold text-white">{page.hero.badge}</div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{page.hero.description}</p>

                    <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                      <div className="text-xs uppercase tracking-[0.16em] text-slate-400">Desde</div>
                      <div className="mt-2 text-2xl font-semibold text-white">{formatUfPrice(featuredPlan.priceUf)}</div>
                      <div className="mt-1 text-sm text-slate-400">{featuredPlan.volume}</div>
                    </div>

                    <Button asChild className="mt-5 w-full rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950">
                      <Link href={`/${page.slug}`}>
                        Ver landing
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
