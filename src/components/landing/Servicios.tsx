"use client";

import Link from "next/link";
import { SectionReveal } from "@/components/ui/animated";
import { SERVICES } from "@/config/services";
import { Section } from "./Section";
import { ArrowRight, Bot, Globe, GraduationCap, LayoutGrid, Workflow } from "lucide-react";

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
              De idea a produccion, sin humo
            </h2>
            <p className="max-w-xl text-sm text-muted-foreground">
              Definimos KPIs, construimos MVPs y operamos con monitoreo. Todo queda medible: ahorro, tiempos, errores y adopcion.
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
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/15 hover:bg-white/[0.06] plausible-event-name=Service+Card+Click plausible-event-service=${s.slug} plausible-event-location=servicios_section`}
                  aria-label={`Abrir detalle de ${s.title}`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-fuchsia-500/60 via-cyan-400/60 to-emerald-400/60 opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/25">
                      <Icon className="h-5 w-5 text-cyan-200" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground">Tiempo tipico</div>
                      <div className="mt-1 text-xs font-medium text-white/90">{s.duration}</div>
                    </div>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>

                  {stack.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-foreground/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/90">
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
