import { processSteps } from "@/config/site";
import { Section } from "./Section";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400";

export function Proceso() {
  const deliverables = [
    "Backlog priorizado + KPIs",
    "Arquitectura + plan de accesos",
    "MVP funcional + QA",
    "Monitoreo + runbook",
  ];

  return (
    <Section className="z-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.22em] text-muted-foreground">METODO</p>
          <h2 className={`mt-3 text-3xl font-semibold md:text-5xl ${gradientText}`}>
            De proceso a produccion, con KPIs
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trabajamos por etapas cortas para entregar valor temprano y operar con confianza.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, idx) => {
            const Icon = s.icon;
            const d = deliverables[idx] || "Entrega por etapa";
            return (
              <div
                key={s.title}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-fuchsia-500/60 via-cyan-400/60 to-emerald-400/60 opacity-60" />

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/25">
                    <Icon className="h-5 w-5 text-foreground/90" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">{s.title}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{s.desc}</div>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-muted-foreground">
                  Entregable: <span className="text-foreground/90">{d}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
