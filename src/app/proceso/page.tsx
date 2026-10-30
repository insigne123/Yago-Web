import { Bot, ClipboardList, Clock3, Layers, PackageCheck, Rocket, ShieldCheck, Timer, Workflow } from "lucide-react";
import { ColumnHeader, FramedImage } from "@/components/catalog/CatalogKit";
import {
  ActionLink,
  BOOKING_ACTION,
  CheckList,
  CtaBand,
  IconTile,
  PageHero,
  PageSection,
  PageShell,
  SectionHeader,
} from "@/components/site/PageKit";
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
      "Construimos en iteraciones cortas con datos reales. Ves avances funcionando en cada iteración, no un informe al final.",
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
    title: "Go-live",
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
    <PageShell>
      {/* ---------------- HERO ---------------- */}
      <PageHero
        eyebrow="Cómo trabajamos"
        title="De la idea al go&#8209;live"
        highlight="sin sorpresas."
        description="Un proceso probado de 4 etapas que reduce el riesgo de implementación: validamos el retorno antes de construir y ves avances funcionando en cada iteración."
        actions={
          <>
            <ActionLink action={BOOKING_ACTION} arrow />
            <ActionLink action={{ label: "Ver servicios", href: "/servicios" }} variant="glass" />
          </>
        }
        aside={
          <div className="y-beam">
            <div className="y-beam__inner bg-[#0b1220] p-3 sm:p-4">
              <p className="flex items-center justify-between gap-3 px-3 pb-3 pt-2 font-mono text-[12px] uppercase tracking-[0.12em] text-slate-400">
                <span>Plan de trabajo</span>
                <span className="text-slate-300">{STAGES.length} etapas</span>
              </p>
              <ol className="flex flex-col">
                {STAGES.map((stage, index) => (
                  <li key={stage.title} className="relative flex items-start gap-4 px-3 py-3.5">
                    {index < STAGES.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-3.5 left-[1.75rem] top-[2.875rem] w-px bg-gradient-to-b from-sky-300/45 to-sky-300/15"
                      />
                    ) : null}
                    <span className="relative z-[1] grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#0b1220] font-mono text-[12px] font-medium text-sky-300 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.45),0_0_16px_rgba(56,189,248,0.22)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1">
                      <span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                        <span className="font-headline text-[1.05rem] font-semibold text-white">{stage.title}</span>
                        <span className="font-mono text-[12.5px] text-sky-300">{stage.duration}</span>
                      </span>
                      <span className="text-[13.5px] leading-snug text-slate-400">{stage.deliverable}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        }
      />

      {/* ---------------- ETAPAS ---------------- */}
      <PageSection id="etapas" tone="light">
        <SectionHeader
          eyebrow="Las etapas"
          title="Las 4 etapas, en detalle."
          description="Cada etapa tiene entregables concretos. Sabes exactamente qué recibes y cuándo."
        />

        <ol className="mt-14 flex flex-col gap-5 md:gap-6">
          {STAGES.map((stage, index) => (
            <li key={stage.title} className="relative grid grid-cols-1 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-8">
              {index < STAGES.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-14 left-6 top-20 hidden w-px bg-gradient-to-b from-sky-300 to-sky-200 md:block"
                />
              ) : null}
              <div className="relative z-[1] hidden pt-8 md:block">
                <IconTile icon={stage.icon} size="lg" />
              </div>
              <article className="y-card y-reveal min-w-0 p-7 sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="md:hidden">
                      <IconTile icon={stage.icon} />
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-sky-700">{stage.step}</span>
                      <h3 className="y-h3 text-[1.5rem] text-slate-950 md:text-[1.75rem]">{stage.title}</h3>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-mist px-3 py-1.5 font-mono text-xs text-slate-700 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)]">
                    <Clock3 className="h-3.5 w-3.5 text-sky-700" aria-hidden="true" />
                    {stage.duration}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-[16.5px] leading-relaxed text-slate-600">{stage.summary}</p>

                <div className="mt-7 grid grid-cols-1 gap-6 border-t border-slate-200/80 pt-7 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-8">
                  <div>
                    <p className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-slate-600">Qué hacemos</p>
                    <CheckList items={stage.activities} className="mt-4" />
                  </div>
                  <div className="flex flex-col gap-3 rounded-2xl bg-sky-50 p-5 shadow-[inset_0_0_0_1px_rgba(14,165,233,0.18)] sm:p-6">
                    <p className="flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.12em] text-sky-800">
                      <PackageCheck className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                      Qué recibes
                    </p>
                    <p className="text-[16.5px] font-semibold leading-snug text-slate-950">{stage.deliverable}</p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </PageSection>

      {/* ---------------- PRINCIPIOS ---------------- */}
      <PageSection id="principios" tone="mist">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <FramedImage
              src="/images/proceso-hero.png"
              alt="Ilustración del recorrido en cuatro etapas: descubrimiento, blueprint, construcción y puesta en marcha"
              sizes="(min-width: 1024px) 40vw, 100vw"
              aspect="aspect-square"
            />
          </div>
          <div className="flex flex-col gap-10 lg:col-span-6 lg:col-start-7">
            <ColumnHeader
              eyebrow="Principios"
              title="Lo que se mantiene en todas las etapas."
              description="Partimos por el cuello de botella con más impacto y lo dejamos funcionando antes de pasar al siguiente."
            />
            <ul className="flex flex-col gap-3.5">
              {GUARANTEES.map((item) => (
                <li key={item.title} className="y-card y-reveal flex items-start gap-4 p-5 sm:gap-5 sm:p-6">
                  <IconTile icon={item.icon} />
                  <div className="flex min-w-0 flex-col gap-1">
                    <h3 className="y-h3 text-[1.2rem] text-slate-950">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>

      {/* ---------------- CIERRE ---------------- */}
      <CtaBand
        eyebrow="Primer paso"
        title="¿Listo para la Etapa 1?"
        text="El descubrimiento inicial es gratuito: cuéntanos tu proceso más lento y te respondemos con el quick win recomendado en 48 horas."
        primary={{ ...BOOKING_ACTION, label: "Comenzar el descubrimiento" }}
      />
    </PageShell>
  );
}
