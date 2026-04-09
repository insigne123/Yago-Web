import { Badge } from "@/components/ui/badge";
import { processSteps } from "@/config/site";
import { Section } from "./Section";

const deliverables = [
  "Backlog priorizado + KPI",
  "Arquitectura + plan de accesos",
  "MVP funcional + QA",
  "Monitoreo + runbook",
];

export function Proceso() {
  return (
    <Section className="z-10" id="proceso">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
            Método
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            Un proceso corto, claro y visible para automatizar sin frenar la operacion.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Trabajamos por etapas cortas para encontrar quick wins, ordenar integraciones y dejar el
            sistema listo para operar con ownership claro desde el inicio.
          </p>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-sky-200/35 to-transparent lg:block"
          />

          <div className="grid gap-6 lg:grid-cols-4 lg:gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="hover-lift relative rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,24,37,0.88),rgba(10,16,25,0.96))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                        Paso {index + 1}
                      </div>
                      <div className="mt-1 text-xl font-semibold text-white">{step.title}</div>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-slate-300">{step.desc}</p>

                  <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-black/20 px-4 py-4">
                    <div className="text-[11px] uppercase tracking-[0.16em] text-slate-400">Entregable</div>
                    <div className="mt-2 text-sm font-medium text-slate-100">{deliverables[index]}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
