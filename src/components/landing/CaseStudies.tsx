import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/config/site";
import { Section } from "./Section";

export function CaseStudies() {
  return (
    <Section id="casos" className="z-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <Badge variant="outline" className="border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
              Casos de uso
            </Badge>
            <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
              Procesos que solemos automatizar primero cuando la operacion esta frenada.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            No se trata de poner IA en todo. Se trata de detectar donde el trabajo manual, la espera
            y el error operativo generan mas friccion y atacarlo con criterio.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <div
              key={item.title}
              className="hover-lift rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.88),rgba(10,16,25,0.98))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.company}</div>
              <div className="mt-3 text-2xl font-semibold text-white">{item.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>

              <div className="mt-6 grid gap-3">
                {item.stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.text} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-200">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-sky-200" aria-hidden="true" />
                      <span>{stat.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.86),rgba(10,16,25,0.96))] px-5 py-5 text-sm text-slate-300 max-md:flex-col max-md:items-start">
          <div>
            <div className="font-medium text-white">Si reconoces uno de estos patrones, hay una oportunidad real de automatizacion.</div>
            <div className="mt-1">Podemos revisar tu caso y decirte rapido por donde conviene empezar.</div>
          </div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 font-medium text-white transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Revisar mi caso
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </Section>
  );
}
