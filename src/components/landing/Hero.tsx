import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  FileJson2,
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

const proofSignals = [
  "Piloto en 2-4 semanas",
  "Integracion API, documentos y canales",
  "Productos y servicios listos para escalar",
];

const explorePaths = [
  {
    title: "Servicios a medida",
    description: "Flujos, apps y automatizacion con ownership real.",
    href: "#servicios",
  },
  {
    title: "Productos listos",
    description: "SOF.IA, LeadFlow, MASSIMO y Procedura.",
    href: "#productos",
  },
  {
    title: "OCR Master",
    description: "API premium para captura documental lista para comercializar.",
    href: "/ocr-master",
  },
];

const canvasModules = [
  {
    title: "Flujos & integracion",
    detail: "Conectamos APIs, documentos y herramientas existentes.",
    icon: Workflow,
  },
  {
    title: "Productos listos",
    detail: "Soluciones empaquetadas para acelerar adopcion real.",
    icon: Boxes,
  },
  {
    title: "OCR & datos",
    detail: "Captura estructurada para onboarding y backoffice.",
    icon: FileJson2,
  },
  {
    title: "Operacion visible",
    detail: "Dashboards, ownership, alertas y seguimiento.",
    icon: BarChart3,
  },
];

const trustSignals = [
  "Privacidad by design",
  "Human-in-the-loop cuando aplica",
  "Impacto medible desde el piloto",
];

const healthMetrics = [
  { k: "Piloto", v: "2-4 sem", c: "border-sky-300/20 bg-sky-400/10 text-sky-100" },
  { k: "OCR Master", v: "99%", c: "border-amber-200/20 bg-amber-200/10 text-amber-50" },
  { k: "Operacion", v: "Trazable", c: "border-emerald-300/20 bg-emerald-400/10 text-emerald-100" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-12 md:pb-24 md:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[8%] h-[18rem] w-[18rem] rounded-full bg-sky-300/10 blur-[88px]" />
        <div className="absolute right-[-7rem] top-[12%] h-[16rem] w-[16rem] rounded-full bg-indigo-300/10 blur-[92px]" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid-overlay" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-300" aria-hidden="true" />
            YAGO · IA aplicada para negocio real
          </div>

          <h1 className="mt-6 max-w-4xl text-balance font-headline text-5xl font-semibold leading-[0.92] text-white md:text-7xl lg:text-[5.6rem]">
            Menos friccion.
            <br />
            Mas velocidad.
            <br />
            <span className="text-sky-100">IA que si entra a operacion.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-[1.18rem]">
            YAGO diseña agentes, automatizacion y productos digitales para convertir procesos
            manuales en sistemas mas rapidos, trazables y listos para escalar.
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
              className="group rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] px-6 text-slate-950 shadow-[0_14px_38px_rgba(167,199,255,0.16)] transition-transform hover:-translate-y-0.5 plausible-event-name=CTA+Agendar+Demo plausible-event-location=hero"
            >
              <Link href="#contacto">
                Agendar Demo
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full border border-white/12 bg-white/[0.03] px-6 text-slate-100 hover:bg-white/[0.06] plausible-event-name=CTA+Ver+Servicios plausible-event-location=hero"
            >
              <Link href="#servicios">Ver Servicios</Link>
            </Button>

            <Link
              href="/ocr-master"
              className="inline-flex items-center gap-2 rounded-full px-1 text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 plausible-event-name=CTA+Ver+OCR+Master plausible-event-location=hero"
            >
              Explorar OCR Master
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {explorePaths.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="hover-lift rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.86),rgba(10,16,25,0.96))] px-4 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <div className="text-sm font-semibold text-white">{item.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</div>
                <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-slate-400">
                  Explorar
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              </Link>
            ))}
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
                  YAGO Operating Preview
                </div>
                <CardTitle className="mt-3 text-[2rem] leading-none text-white md:text-[2.4rem]">
                  Asi se ve una operacion bien pensada.
                </CardTitle>
                <CardDescription className="max-w-md text-sm leading-relaxed text-slate-300">
                  Disenamos sistemas que dejan una experiencia mas clara para el equipo y una propuesta
                  mas facil de entender para quien compra.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid gap-3 md:grid-cols-2">
                  {canvasModules.map((module) => {
                    const Icon = module.icon;

                    return (
                      <div
                        key={module.title}
                        className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sky-100">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div className="mt-4 text-sm font-semibold text-white">{module.title}</div>
                        <div className="mt-2 text-sm leading-relaxed text-slate-300">{module.detail}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-white">
                        <ShieldCheck className="h-4 w-4 text-sky-200" aria-hidden="true" />
                        Señales de una implementacion madura
                      </div>
                      <div className="mt-1 text-sm text-slate-400">
                        Producto, integracion y operacion pensados como una sola experiencia.
                      </div>
                    </div>
                    <Link
                      href="/ocr-master"
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                    >
                      Ver OCR Master
                    </Link>
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
