import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  ShieldCheck,
  Waypoints,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const proofSignals = ["Analisis inicial en 48h", "Piloto operativo en 2-4 semanas"];

const canvasModules = [
  {
    title: "Entradas dispersas",
    detail: "Correos, PDFs, formularios, planillas y tareas que hoy frenan la operacion.",
    icon: Workflow,
  },
  {
    title: "Reglas e integraciones",
    detail: "Definimos aprobaciones, validacion humana e integraciones para que el flujo avance solo donde corresponde.",
    icon: Boxes,
  },
  {
    title: "Operacion visible",
    detail: "Alertas, ownership, trazabilidad y puntos claros de control para el equipo.",
    icon: BarChart3,
  },
];

const trustSignals = ["Sin romper tu stack actual", "Impacto medible desde el primer quick win"];

const healthMetrics = [
  { k: "Analisis", v: "48h", c: "border-sky-300/20 bg-sky-400/10 text-sky-100" },
  { k: "Piloto", v: "2-4 sem", c: "border-amber-200/20 bg-amber-200/10 text-amber-50" },
  { k: "Operacion", v: "Trazable", c: "border-emerald-300/20 bg-emerald-400/10 text-emerald-100" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-20 md:pb-24 md:pt-24 lg:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[8%] h-[18rem] w-[18rem] rounded-full bg-sky-300/10 blur-[88px]" />
        <div className="absolute right-[-7rem] top-[12%] h-[16rem] w-[16rem] rounded-full bg-indigo-300/10 blur-[92px]" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid-overlay" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-300" aria-hidden="true" />
            YAGO · Automatizacion para operaciones
          </div>

          <h1 className="mt-6 max-w-4xl text-balance font-headline text-5xl font-semibold leading-[0.94] text-white md:text-6xl lg:text-[5rem]">
            Menos trabajo manual.
            <br />
            Menos espera.
            <br />
            <span className="text-sky-100">Mas control operativo.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-[1.18rem]">
            En YAGO diseniamos e implementamos automatizacion con IA para equipos que todavia dependen
            de correos, planillas, documentos y tareas manuales. Partimos por quick wins medibles y
            dejamos una operacion mas clara, trazable y lista para escalar.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-300">
            {proofSignals.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="group rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] px-6 text-slate-950 shadow-[0_14px_38px_rgba(167,199,255,0.16)] transition-transform hover:-translate-y-0.5 plausible-event-name=CTA+Analisis plausible-event-location=hero"
            >
              <a href="#contacto">
                Pedir analisis
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full border border-white/12 bg-white/[0.03] px-6 text-slate-100 hover:bg-white/[0.06] plausible-event-name=CTA+Ver+Casos plausible-event-location=hero"
            >
              <a href="#casos">Ver casos de uso</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-300">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2"
              >
                <BadgeCheck className="h-4 w-4 text-sky-200" aria-hidden="true" />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:justify-self-end">
          <div className="absolute inset-x-10 top-4 h-24 rounded-full bg-sky-300/10 blur-[72px]" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.92),rgba(12,18,30,0.98))] p-1 shadow-[0_30px_100px_rgba(0,0,0,0.22)]">
            <Card className="relative overflow-hidden rounded-[1.75rem] border-white/8 bg-transparent shadow-none">
              <CardHeader className="pb-5">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-400">
                  <Waypoints className="h-4 w-4 text-sky-200" aria-hidden="true" />
                  Mapa de automatizacion operativa
                </div>
                <CardTitle className="mt-3 text-[2rem] leading-none text-white md:text-[2.4rem]">
                  Asi se ve una operacion menos manual.
                </CardTitle>
                <CardDescription className="max-w-md text-sm leading-relaxed text-slate-300">
                  Entradas dispersas, reglas de negocio, integraciones y seguimiento quedan orquestados
                  como un solo sistema visible para el equipo.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  {canvasModules.map((module) => {
                    const Icon = module.icon;

                    return (
                      <div
                        key={module.title}
                        className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sky-100">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-white">{module.title}</div>
                            <div className="mt-2 text-sm leading-relaxed text-slate-300">{module.detail}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-white">
                        <ShieldCheck className="h-4 w-4 text-sky-200" aria-hidden="true" />
                        Senales de una operacion mejor diseniada
                      </div>
                      <div className="mt-1 text-sm text-slate-400">
                        Menos copias manuales, mas visibilidad y mas capacidad real para el equipo.
                      </div>
                    </div>
                    <a
                      href="#casos"
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                    >
                      Ver casos
                    </a>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                    {healthMetrics.map((metric) => (
                      <div key={metric.k} className={`rounded-2xl border px-3 py-3 ${metric.c}`}>
                        <div className="text-[11px] uppercase tracking-[0.12em] opacity-80">{metric.k}</div>
                        <div className="mt-2 text-lg font-semibold">{metric.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
