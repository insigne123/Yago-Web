"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/ui/animated";
import { COLABORADORES } from "@/config/colaboradores";
import { Section } from "./Section";
import { BadgeCheck } from "lucide-react";

function NosotrosComponent() {
  return (
    <Section id="nosotros" className="z-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionReveal>
          <p className="text-xs tracking-[0.22em] text-muted-foreground">NOSOTROS</p>
          <h2 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
            Construimos automatizacion que tu equipo quiere usar
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Diseñamos, construimos y operamos automatizaciones y agentes de IA que integran sistemas,
            reducen tareas repetitivas y entregan visibilidad real (logs, metricas y control).
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <SectionReveal as="div" className="md:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                IA como copiloto, no como reemplazo
              </h3>
              <p className="mt-3 text-muted-foreground">
                En YAGO creemos que la inteligencia artificial no reemplaza a las personas: amplifica su potencial.
                Por eso diseniamos con validacion humana cuando hace falta y con trazabilidad desde el primer dia.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { t: "Human-in-the-loop", d: "Validacion cuando el caso es ambiguo" },
                  { t: "Seguridad by-design", d: "Accesos, roles y auditoria" },
                  { t: "Entrega rapida", d: "Iteraciones quincenales con quick wins" },
                  { t: "Operacion real", d: "Monitoreo, alertas y runbooks" },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl border border-white/10 bg-black/25 p-4"
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                      <BadgeCheck className="h-4 w-4 text-emerald-300" />
                      {x.t}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">{x.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <div className="md:col-span-5 space-y-6">
            <SectionReveal as="div">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-xl font-semibold text-white">Nuestra ideologia</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {
                    [
                      "Automatizacion como colaboracion humano-maquina.",
                      "Ahorro de tiempo en procesos repetitivos y tediosos.",
                      "Potenciar habilidades con datos y sugerencias de IA.",
                      "Medir por ahorro en recursos (HH/administrativos), no solo costo.",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400"
                          aria-hidden="true"
                        />
                        <span>{t}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal as="div">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-end justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">Colaboradores</h3>
                  <div className="text-xs text-muted-foreground">Algunos partners</div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3">
                  {COLABORADORES.slice(0, 2).map((colab) => {
                    const Card = (
                      <div
                        className="flex items-center justify-center rounded-2xl border border-black/5 bg-white/90 p-4 shadow-sm transition hover:shadow-md"
                      >
                        <Image
                          src={colab.logo}
                          alt={`Logo de ${colab.name}`}
                          title={colab.name}
                          width={220}
                          height={110}
                          className="object-contain"
                          priority={false}
                          sizes="(min-width: 768px) 220px, 50vw"
                        />
                      </div>
                    );

                    return colab.url ? (
                      <a
                        key={colab.name}
                        href={colab.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir sitio de ${colab.name} en nueva pestaña`}
                      >
                        {Card}
                      </a>
                    ) : (
                      <div key={colab.name}>{Card}</div>
                    );
                  })}
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default NosotrosComponent;
export { NosotrosComponent as Nosotros };
