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
  "Gerencias de operaciones y backoffice que todavia empujan procesos por correo y planillas",
  "Administracion y finanzas con carga manual, validaciones y aprobaciones repetitivas",
  "Empresas medianas con datos dispersos, muchos responsables y poco ownership visible",
  "Empresas que quieren automatizar sin reemplazar por completo su stack actual",
];

export function OperationsFit() {
  return (
    <Section className="z-10" id="fit-operacional">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 xl:grid-cols-[0.96fr_1.04fr]">
        <div>
          <Badge variant="outline" className="border-slate-900/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-600">
            Donde mejor encaja
          </Badge>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
            Si operaciones, backoffice o finanzas siguen persiguiendo tareas manuales, hay una oportunidad clara.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            YAGO esta pensado para equipos que necesitan bajar carga manual, reducir errores y mover
            procesos mas rapido, sin rehacer toda la operacion desde cero ni abrir un proyecto enorme
            antes de ver valor.
          </p>

          <div className="mt-6 rounded-[1.7rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6">
            <div className="text-sm font-medium text-slate-900">Donde suele haber mejor fit</div>
            <div className="mt-4 grid gap-3">
              {buyers.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-900/10 bg-slate-900/5 px-4 py-4 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />
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
                className="hover-lift rounded-[1.7rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6 shadow-[0_18px_50px_rgba(30,58,95,0.08)]"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/[0.04] text-sky-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="mt-5 text-2xl font-semibold text-slate-900">{pain.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{pain.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
