"use client";

import Link from "next/link";
import { SectionReveal } from "@/components/ui/animated";
import { SERVICES } from "@/config/services";
import { Section } from "./Section";
import {
  ArrowRight,
  Bot,
  Globe,
  GraduationCap,
  LayoutGrid,
  Workflow,
} from "lucide-react";

const ICON_BY_SLUG: Record<string, any> = {
  "automatizacion-procesos": Workflow,
  "apps-automatizacion": LayoutGrid,
  "paginas-web": Globe,
  "capacitacion-ia": GraduationCap,
};

function ServiciosComponent() {
  return (
    <Section id="servicios" className="z-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionReveal>
          <p className="text-xs tracking-[0.22em] text-muted-foreground">SERVICIOS</p>
          <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-semibold text-white md:text-5xl">
              Diseño, integración y operación para sistemas IA que sí llegan a producción.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300">
              Definimos KPI, construimos MVPs y dejamos ownership operativo. Todo queda medible:
              ahorro, tiempos, errores y adopción.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {SERVICES.map((s) => {
              const Icon = ICON_BY_SLUG[s.slug] || Bot;
              const stack = (s.stack || []).slice(0, 4);

              return (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className={`group hover-lift relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.72),rgba(10,16,25,0.9))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl transition hover:border-white/14 plausible-event-name=Service+Card+Click plausible-event-service=${s.slug} plausible-event-location=servicios_section focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950`}
                  aria-label={`Abrir detalle de ${s.title}`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/55 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <Icon className="h-5 w-5 text-sky-100" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-[0.14em] text-slate-400">Tiempo típico</div>
                      <div className="mt-1 text-xs font-medium text-slate-100">{s.duration}</div>
                    </div>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.short}</p>

                  {stack.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-100">
                    Ver detalle
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </Section>
  );
}

export default ServiciosComponent;
export { ServiciosComponent as Servicios };
