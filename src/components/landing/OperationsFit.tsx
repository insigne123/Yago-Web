import { AlertTriangle, CheckCircle2, FileWarning, TimerReset } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";

const pains = [
  {
    title: "Digitacion manual",
    description: "Equipos copiando datos entre correos, PDFs, planillas y sistemas para que el proceso siga avanzando.",
    icon: FileWarning,
  },
  {
    title: "Errores y retrabajo",
    description: "Campos mal cargados, aprobaciones perdidas y mas tiempo corrigiendo que operando.",
    icon: AlertTriangle,
  },
  {
    title: "Procesos lentos",
    description: "Flujos que dependen de seguimiento manual, esperas entre areas y demasiados pasos invisibles.",
    icon: TimerReset,
  },
  {
    title: "Falta de visibilidad",
    description: "No siempre esta claro donde se traba un proceso, quien debe actuar o como medir impacto real.",
    icon: CheckCircle2,
  },
];

const buyers = [
  "Gerencias de operaciones y backoffice",
  "Administracion y finanzas con alto flujo operativo",
  "Equipos que dependen de documentos, aprobaciones o consolidacion de datos",
  "Empresas que quieren automatizar sin reemplazar por completo su stack actual",
];

export function OperationsFit() {
  return (
    <Section className="z-10" id="fit-operacional">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 xl:grid-cols-[0.96fr_1.04fr]">
        <div>
          <Badge variant="outline" className="border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
            Para operaciones
          </Badge>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            Si tu operacion todavia depende de tareas repetitivas, hay una oportunidad clara.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            YAGO esta pensado para equipos que necesitan bajar carga manual, reducir errores y mover
            procesos mas rapido, sin tener que rehacer toda la operacion desde cero.
          </p>

          <div className="mt-6 rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.86),rgba(10,16,25,0.96))] p-6">
            <div className="text-sm font-medium text-white">Donde suele haber mejor fit</div>
            <div className="mt-4 grid gap-3">
              {buyers.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-200" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {pains.map((pain) => {
            const Icon = pain.icon;
            return (
              <div
                key={pain.title}
                className="hover-lift rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.86),rgba(10,16,25,0.96))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sky-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="mt-5 text-2xl font-semibold text-white">{pain.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{pain.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
