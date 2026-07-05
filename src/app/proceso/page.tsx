import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Workflow, Bot, Rocket, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Proceso — Yago | Del diagnóstico al go-live en 4 etapas",
  description:
    "Conoce el método de trabajo de Yago: Descubrimiento, Blueprint, Build y Go-Live. Un proceso claro para automatizar tu operación con IA sin fricción.",
  alternates: { canonical: "/proceso" },
};

const STAGES = [
  {
    icon: Layers,
    name: "Descubrimiento",
    duration: "Semana 1",
    description:
      "Relevamos tus procesos, identificamos cuellos de botella y definimos los KPIs que vamos a mover.",
    deliverables: ["Mapa de procesos as-is", "Backlog priorizado por ROI", "Quick wins identificados"],
    youNeed: "1–2 reuniones con quienes conocen la operación día a día.",
  },
  {
    icon: Workflow,
    name: "Blueprint",
    duration: "Semana 1–2",
    description:
      "Diseñamos el flujo to-be: arquitectura, integraciones, permisos y puntos de validación humana.",
    deliverables: ["Diagrama del flujo automatizado", "Plan de accesos y seguridad", "Estimación de ahorro (HH)"],
    youNeed: "Accesos de lectura a los sistemas involucrados.",
  },
  {
    icon: Bot,
    name: "Build",
    duration: "Semana 2–5",
    description:
      "Construimos en iteraciones cortas con datos reales. Tú validas cada avance antes de seguir.",
    deliverables: ["MVP funcional con control de errores", "Demos quincenales", "QA y pruebas de usuario (UAT)"],
    youNeed: "Feedback rápido en cada iteración (30 min por demo).",
  },
  {
    icon: Rocket,
    name: "Go-Live",
    duration: "Semana 5–6",
    description:
      "Desplegamos a producción con monitoreo, documentación y acompañamiento al equipo.",
    deliverables: ["Runbook de operación", "Monitoreo y alertas", "Soporte post-lanzamiento"],
    youNeed: "Definir responsables internos del proceso automatizado.",
  },
];

export default function ProcesoPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-white">
      <Navbar ctaHref="/#contacto" ctaLabel="Pedir analisis" />
      <main id="main-content" className="main-premium pb-24 pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-4">
          {/* Hero */}
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">Nuestro método</p>
              <h1 className="mt-4 text-balance font-headline text-4xl font-semibold text-white md:text-6xl">
                De la idea al <span className="text-shimmer">go-live</span> en 4 etapas
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-300">
                Un proceso probado que reduce el riesgo: validamos con datos reales antes de escalar y
                tú ves avances concretos cada dos semanas.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/#contacto"
                  className="btn-vibrant inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
                >
                  Empezar con un análisis gratuito
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.07]"
                >
                  Ver servicios
                </Link>
              </div>
            </div>
            <div className="card-glow-border relative overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="/images/proceso-hero.png"
                alt="Ilustración del proceso de automatización de Yago"
                width={720}
                height={520}
                priority
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1019]/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Timeline de etapas */}
          <div className="relative mt-20">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-6 top-8 hidden w-px bg-gradient-to-b from-cyan-300/50 via-violet-400/40 to-transparent md:block"
            />
            <ol className="flex flex-col gap-8">
              {STAGES.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <li key={stage.name} className="relative md:pl-20">
                    <div
                      aria-hidden="true"
                      className="absolute left-0 top-6 hidden size-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-[#0a1019] text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.18)] md:flex"
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="hover-lift card-glow-border rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.84),rgba(10,16,25,0.96))] p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                          {`Etapa ${index + 1}`}
                        </span>
                        <span className="rounded-full border border-violet-300/25 bg-violet-400/[0.08] px-3 py-1 text-xs text-violet-100">
                          {stage.duration}
                        </span>
                      </div>
                      <h2 className="mt-3 text-2xl font-semibold text-white">{stage.name}</h2>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                        {stage.description}
                      </p>

                      <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div>
                          <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-cyan-200/80">
                            Entregables
                          </h3>
                          <ul className="mt-3 flex flex-col gap-2">
                            {stage.deliverables.map((d) => (
                              <li key={d} className="flex items-start gap-2 text-sm text-slate-300">
                                <CheckCircle2
                                  className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                                  aria-hidden="true"
                                />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-violet-200/80">
                            Qué necesitamos de ti
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-slate-300">{stage.youNeed}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* CTA final */}
          <div className="card-glow-border mt-16 flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(120deg,rgba(34,211,238,0.08),rgba(139,92,246,0.08))] p-8 text-center md:p-10">
            <h2 className="text-balance text-2xl font-semibold text-white md:text-3xl">
              ¿Listo para la etapa 1?
            </h2>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-slate-300">
              El descubrimiento es gratuito: te decimos qué automatizar primero y cuánto podrías ahorrar.
            </p>
            <a
              href="/#contacto"
              className="btn-vibrant inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            >
              Agendar descubrimiento
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
