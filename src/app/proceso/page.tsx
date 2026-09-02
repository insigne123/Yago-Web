import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardList,
  Layers,
  Rocket,
  ShieldCheck,
  Timer,
  Workflow,
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Proceso YAGO | Cómo implementamos automatización con IA",
  description:
    "Nuestro método de 4 etapas para automatizar procesos con IA: descubrimiento, blueprint, build y go-live. Sin riesgos, con quick wins desde la primera semana.",
  path: "/proceso",
});

const STAGES = [
  {
    icon: Layers,
    step: "Etapa 1",
    title: "Descubrimiento",
    duration: "3–5 días",
    summary:
      "Mapeamos tu proceso actual, identificamos cuellos de botella y calculamos el retorno esperado antes de escribir una línea de código.",
    activities: [
      "Sesión de relevamiento con los responsables del proceso",
      "Mapeo as-is: pasos, sistemas, tiempos y errores frecuentes",
      "Definición de KPIs y cálculo de ROI estimado",
    ],
    deliverable: "Backlog priorizado con quick wins y estimación de retorno",
  },
  {
    icon: Workflow,
    step: "Etapa 2",
    title: "Blueprint",
    duration: "3–5 días",
    summary:
      "Diseñamos el flujo objetivo, la arquitectura y los conectores necesarios. Todo queda documentado y validado contigo antes de construir.",
    activities: [
      "Diseño del flujo to-be con puntos de validación humana",
      "Arquitectura de integraciones, permisos y seguridad",
      "Plan de accesos a tus sistemas (ERP, CRM, correo, planillas)",
    ],
    deliverable: "Blueprint del flujo + diagrama de arquitectura aprobado",
  },
  {
    icon: Bot,
    step: "Etapa 3",
    title: "Build",
    duration: "1–4 semanas",
    summary:
      "Construimos en iteraciones cortas con datos reales. Ves avances funcionando cada semana, no un informe al final.",
    activities: [
      "MVP funcionando con datos reales de tu operación",
      "Control de errores, logs y alertas desde el día uno",
      "Pruebas con usuarios (UAT) y ajustes sobre feedback real",
    ],
    deliverable: "Automatización operativa con métricas iniciales",
  },
  {
    icon: Rocket,
    step: "Etapa 4",
    title: "Go-Live",
    duration: "Continuo",
    summary:
      "Desplegamos a producción con monitoreo, documentación y acompañamiento. El equipo queda capacitado para operar con autonomía.",
    activities: [
      "Despliegue con monitoreo y alertas configuradas",
      "Runbook operativo y capacitación del equipo",
      "Soporte y evolución continua por sprints",
    ],
    deliverable: "Sistema en producción + runbook + soporte activo",
  },
];

const GUARANTEES = [
  {
    icon: Timer,
    title: "Quick wins primero",
    desc: "Partimos por lo que genera retorno más rápido. Resultados visibles desde las primeras semanas.",
  },
  {
    icon: ShieldCheck,
    title: "Validación humana",
    desc: "Los procesos críticos mantienen puntos de control humano. La IA propone, tu equipo decide.",
  },
  {
    icon: ClipboardList,
    title: "Todo documentado",
    desc: "Blueprint, runbook y manual de operación. Tu equipo nunca depende de una caja negra.",
  },
];

export default function ProcesoPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900">
      <Navbar ctaHref="/#contacto" ctaLabel="Pedir análisis" />
      <main id="main-content" className="main-premium pb-24 pt-28 md:pt-32">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-700/80">Nuestro método</p>
              <h1 className="mt-4 text-balance font-headline text-4xl font-semibold text-slate-900 md:text-6xl">
                De la idea al go-live <span className="text-shimmer">sin sorpresas</span>
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
                Un proceso probado de 4 etapas que reduce el riesgo de implementación: validamos el
                retorno antes de construir y entregas funcionando cada semana.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/#contacto"
                  className="btn-vibrant inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
                >
                  Pedir análisis gratuito
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-900/10 hover:bg-slate-50 hover:text-slate-900"
                >
                  Ver servicios
                </Link>
              </div>
            </div>
            <div className="card-glow-border relative overflow-hidden rounded-[2rem] border border-slate-900/10 shadow-[0_24px_90px_rgba(30,58,95,0.14)]">
              <Image
                src="/images/proceso-hero.png"
                alt="Equipo de Yago diseñando un flujo de automatización"
                width={720}
                height={520}
                priority
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* Timeline de etapas */}
        <section className="mx-auto mt-20 max-w-7xl px-4 md:mt-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance font-headline text-3xl font-semibold text-slate-900 md:text-5xl">
              Las 4 etapas, en detalle
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-slate-600">
              Cada etapa tiene entregables concretos. Sabes exactamente qué recibes y cuándo.
            </p>
          </div>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-6 top-8 hidden w-px bg-gradient-to-b from-cyan-300/40 via-indigo-300/30 to-transparent md:block"
            />
            <div className="grid gap-6">
              {STAGES.map((stage) => {
                const Icon = stage.icon;
                return (
                  <article
                    key={stage.title}
                    className="hover-lift card-glow-border relative rounded-[1.8rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6 shadow-[0_18px_50px_rgba(30,58,95,0.08)] md:ml-16 md:p-8"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute -left-16 top-8 hidden size-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-white text-cyan-700 shadow-[0_0_24px_rgba(94,198,255,0.18)] md:flex"
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex size-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.08] text-cyan-700 md:hidden">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-600">
                            {stage.step}
                          </div>
                          <h3 className="mt-0.5 text-xl font-semibold text-slate-900 md:text-2xl">{stage.title}</h3>
                        </div>
                      </div>
                      <span className="rounded-full border border-slate-900/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-600">
                        {stage.duration}
                      </span>
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                      {stage.summary}
                    </p>

                    <div className="mt-5 grid gap-5 md:grid-cols-[1.4fr_1fr]">
                      <ul className="grid gap-2.5">
                        {stage.activities.map((activity) => (
                          <li key={activity} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                      <div className="rounded-2xl border border-amber-300/15 bg-amber-400/[0.05] p-4">
                        <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-amber-700/90">
                          Entregable
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate-800">{stage.deliverable}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Garantías */}
        <section className="mx-auto mt-20 max-w-7xl px-4 md:mt-28">
          <div className="grid gap-5 md:grid-cols-3">
            {GUARANTEES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="hover-lift rounded-[1.8rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.08] text-cyan-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto mt-20 max-w-7xl px-4 md:mt-28">
          <div className="card-glow-border flex flex-col items-center gap-4 rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(120deg,rgba(34,211,238,0.08),rgba(139,92,246,0.08))] p-8 text-center md:p-12">
            <h2 className="text-balance font-headline text-2xl font-semibold text-slate-900 md:text-4xl">
              ¿Listo para la Etapa 1?
            </h2>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-slate-600 md:text-base">
              El descubrimiento inicial es gratuito: cuéntanos tu proceso más lento y te respondemos con
              el quick win recomendado en 48 horas.
            </p>
            <a
              href="/#contacto"
              className="btn-vibrant inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
            >
              Comenzar el descubrimiento
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
