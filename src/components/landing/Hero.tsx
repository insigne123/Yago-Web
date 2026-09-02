import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { PRIMARY_CTA } from "@/config/site";

const proofSignals = [
  "Sesion de descubrimiento",
  "Quick wins operativos",
];

const flowSteps = [
  {
    label: "Hoy",
    title: "Trabajo manual",
    detail: "Correos, PDFs y planillas dispersas.",
    icon: Workflow,
  },
  {
    label: "YAGO",
    title: "Flujo automatizado",
    detail: "Reglas e integraciones en un solo recorrido.",
    icon: Boxes,
  },
  {
    label: "Resultado",
    title: "Control visible",
    detail: "Estados, evidencia y responsables claros.",
    icon: ShieldCheck,
  },
];

const trustSignals = [
  "PSOL y GrupoExpro ya trabajan con YAGO",
  "Sin romper tu stack actual",
];

export function Hero() {
  return (
    <section id="inicio" className="relative px-4 pb-16 pt-8 md:pb-20 md:pt-10">
      <div className="relative mx-auto max-w-[90rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#070b13] px-5 py-14 shadow-[0_32px_100px_rgba(7,11,19,0.28)] md:rounded-[2.75rem] md:px-9 md:py-20 lg:px-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[8%] h-[18rem] w-[18rem] rounded-full bg-sky-300/10 blur-[88px]" />
        <div className="absolute right-[-7rem] top-[12%] h-[16rem] w-[16rem] rounded-full bg-sky-200/10 blur-[92px]" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid-overlay" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-300" aria-hidden="true" />
            YAGO · Operaciones, backoffice y finanzas
          </div>

          <h1 className="mt-6 max-w-4xl text-balance font-headline text-5xl font-semibold leading-[0.94] text-white md:text-6xl lg:text-[5.15rem]">
            Automatiza operaciones sin perder control.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300 md:text-[1.14rem]">
            Implementamos IA, OCR e integraciones para que backoffice, finanzas y operaciones reduzcan trabajo manual con trazabilidad desde el primer flujo.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-200">
            {proofSignals.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="group rounded-full border border-white bg-white px-6 text-slate-950 shadow-[0_14px_38px_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-0.5 hover:bg-sky-50 plausible-event-name=CTA+Agendar+Sesion plausible-event-location=hero"
            >
              <a href={PRIMARY_CTA.href}>
                {PRIMARY_CTA.label}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full border border-white/20 bg-white/[0.04] px-6 text-white hover:bg-white/10 hover:text-white plausible-event-name=CTA+Ver+Casos plausible-event-location=hero"
            >
              <a href="#elige-ruta">Ver rutas</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-300">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2"
              >
                <BadgeCheck className="h-4 w-4 text-sky-200" aria-hidden="true" />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:justify-self-end">
          <div
            className="absolute inset-x-10 top-4 h-32 rounded-full bg-cyan-400/15 blur-[80px]"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-1 shadow-[0_30px_100px_rgba(30,58,95,0.14)]">
            <Card className="relative overflow-hidden rounded-[1.75rem] border-slate-900/10 bg-transparent shadow-none">
              <CardHeader className="pb-5">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300" aria-hidden="true" />
                  Vista simple del cambio
                </div>
                <h2 className="mt-3 text-[2rem] font-semibold leading-none text-slate-900 md:text-[2.4rem]">
                  De tarea manual a operación visible.
                </h2>
                <CardDescription className="max-w-md text-sm leading-relaxed text-slate-600">
                  Un recorrido claro: entrada, automatización y evidencia para decidir mejor.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                <div className="grid gap-3">
                  {flowSteps.map((module, index) => {
                    const Icon = module.icon;

                    return (
                      <div
                        key={module.title}
                        className="relative rounded-[1.35rem] border border-slate-900/10 bg-white/[0.04] p-4"
                      >
                        {index < flowSteps.length - 1 ? (
                          <div className="absolute bottom-[-0.85rem] left-9 h-4 w-px bg-gradient-to-b from-sky-200/40 to-transparent" aria-hidden="true" />
                        ) : null}

                        <div className="flex items-center gap-4">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/[0.04] text-sky-700">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500">{module.label}</div>
                            <div className="mt-1 text-sm font-semibold text-slate-900">{module.title}</div>
                            <div className="mt-1 text-sm leading-relaxed text-slate-600">{module.detail}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-[1.5rem] border border-slate-900/10 bg-slate-900/5 p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                        <ShieldCheck className="h-4 w-4 text-sky-700" aria-hidden="true" />
                        Próximo paso claro
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        Detectamos el cuello de botella y definimos si conviene una app lista, OCR o automatización a medida.
                      </div>
                    </div>
                    <a
                      href="#contacto"
                      className="rounded-full border border-slate-900/10 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                    >
                      Conversar
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
