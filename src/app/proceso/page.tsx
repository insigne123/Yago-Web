import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CalendarClock,
  ClipboardCheck,
  Layers,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Section } from "@/components/landing/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PRIMARY_CTA } from "@/config/site";

export const metadata: Metadata = {
  title: "Proceso — Yago | Cómo implementamos tu automatización",
  description:
    "Del descubrimiento al go-live en 4 etapas: qué pasa en cada una, qué entregables recibes y cuánto demora. Conoce el método de trabajo de Yago.",
  alternates: { canonical: "/proceso" },
};

const etapas = [
  {
    icon: Layers,
    numero: "01",
    nombre: "Descubrimiento",
    quePasa: "Relevamos tu proceso, cuellos de botella y KPIs en una sesión de trabajo.",
    entregable: "Backlog priorizado con quick wins y estimación de ROI",
    duracion: "1 semana",
  },
  {
    icon: Workflow,
    numero: "02",
    nombre: "Blueprint",
    quePasa: "Diseñamos el flujo, la arquitectura y los accesos necesarios.",
    entregable: "Diagrama del flujo + plan de integraciones y seguridad",
    duracion: "1–2 semanas",
  },
  {
    icon: Bot,
    numero: "03",
    nombre: "Build",
    quePasa: "Construimos en iteraciones quincenales, con QA y pruebas con tus datos reales.",
    entregable: "MVP funcional con control de errores y métricas",
    duracion: "2–4 semanas",
  },
  {
    icon: Rocket,
    numero: "04",
    nombre: "Go-Live",
    quePasa: "Desplegamos, capacitamos al equipo y monitoreamos la operación.",
    entregable: "Runbook, monitoreo con alertas y soporte post-lanzamiento",
    duracion: "1 semana + acompañamiento",
  },
];

const expectativas = [
  {
    icon: Users,
    titulo: "Un referente del proceso",
    detalle: "Alguien de tu equipo que conozca el flujo y pueda validar decisiones.",
  },
  {
    icon: ShieldCheck,
    titulo: "Accesos y permisos",
    detalle: "Credenciales a los sistemas que se integran, según tus políticas de seguridad.",
  },
  {
    icon: ClipboardCheck,
    titulo: "Feedback en cada iteración",
    detalle: "Revisiones cortas para ajustar temprano y evitar retrabajo.",
  },
];

const faqProceso = [
  {
    q: "¿Cuánto demora un proyecto típico?",
    a: "Un MVP funcional suele estar en 1 a 2 semanas y la versión productiva entre 3 y 6 semanas, dependiendo de las integraciones necesarias. En la sesión de descubrimiento te damos una estimación concreta para tu caso.",
  },
  {
    q: "¿Necesito tener el proceso documentado antes de partir?",
    a: "No. Parte del descubrimiento es justamente mapear el proceso contigo. Si hoy hay correos, planillas o aprobaciones manuales, ya hay suficiente para empezar.",
  },
  {
    q: "¿Qué pasa si el flujo cambia después del go-live?",
    a: "Los flujos quedan documentados y con monitoreo, y ofrecemos acompañamiento posterior para ajustes y evolución por sprints.",
  },
  {
    q: "¿Trabajan con nuestras herramientas actuales?",
    a: "Sí. Integramos sobre tu stack actual (ERP, CRM, Google/Microsoft 365, WhatsApp, bases de datos y más) sin necesidad de reemplazarlo.",
  },
];

export default function ProcesoPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-white">
      <Navbar ctaHref={PRIMARY_CTA.href} ctaLabel={PRIMARY_CTA.label} />
      <main id="main-content" className="main-premium pb-0 pt-28 md:pt-32">
        {/* Hero */}
        <div className="mx-auto max-w-7xl px-4 pb-16 md:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <span className="chip-dark">Nuestro proceso</span>
              <h1 className="mt-5 text-balance font-headline text-4xl font-semibold leading-[1.02] text-white md:text-6xl">
                Del descubrimiento al go-live, sin sorpresas.
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-300">
                Un método de 4 etapas con entregables claros en cada una, para que sepas
                qué recibes y cuándo.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={PRIMARY_CTA.href}
                  className="btn-vibrant inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
                >
                  {PRIMARY_CTA.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/[0.06]"
                >
                  Ver servicios
                </Link>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-x-10 top-4 h-36 rounded-full bg-cyan-400/15 blur-[85px]"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/12 shadow-[0_30px_90px_rgba(0,0,0,0.3)]">
                <Image
                  src="/images/proceso-hero.png"
                  alt="Ilustración del proceso de implementación de YAGO en 4 etapas"
                  width={680}
                  height={540}
                  priority
                  className="h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 44vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline de etapas (light) */}
        <Section tone="light" id="etapas">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="chip-light">Las 4 etapas</span>
              <h2 className="mt-4 text-balance text-3xl font-semibold md:text-5xl">
                Qué pasa en cada etapa y qué recibes.
              </h2>
            </div>

            <div className="relative mt-14">
              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent lg:block"
              />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {etapas.map((etapa) => {
                  const Icon = etapa.icon;
                  return (
                    <div key={etapa.nombre} className="card-light flex flex-col p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <span className="font-headline text-3xl font-semibold text-slate-200">
                          {etapa.numero}
                        </span>
                      </div>

                      <h3 className="mt-5 text-xl font-semibold text-slate-900">{etapa.nombre}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{etapa.quePasa}</p>

                      <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Recibes
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-slate-700">{etapa.entregable}</p>
                      </div>

                      <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-cyan-700">
                        <CalendarClock className="h-4 w-4" aria-hidden="true" />
                        {etapa.duracion}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>

        {/* Qué necesitamos de ti (dark) */}
        <Section id="expectativas">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <span className="chip-dark">De tu lado</span>
                <h2 className="mt-4 text-balance text-3xl font-semibold text-white md:text-4xl">
                  Qué necesitamos de ti.
                </h2>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-slate-300">
                  El proceso es liviano para tu equipo: pedimos lo mínimo para avanzar rápido y con seguridad.
                </p>
              </div>

              <div className="grid gap-4">
                {expectativas.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.titulo}
                      className="flex items-start gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5"
                    >
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.08] text-cyan-100">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{item.titulo}</div>
                        <p className="mt-1 text-sm leading-relaxed text-slate-300">{item.detalle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ + CTA (dark) */}
        <Section id="faq-proceso" className="pb-24">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center">
              <span className="chip-dark">Dudas frecuentes</span>
              <h2 className="mt-4 text-balance text-3xl font-semibold text-white md:text-4xl">
                Preguntas sobre el proceso.
              </h2>
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.84),rgba(10,16,25,0.96))] p-2 md:p-4">
              <Accordion type="single" collapsible className="w-full">
                {faqProceso.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-white/10">
                    <AccordionTrigger className="text-left text-white hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300">{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="card-glow-border mt-12 flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(120deg,rgba(34,211,238,0.08),rgba(139,92,246,0.08))] p-8 text-center md:p-10">
              <h2 className="text-balance text-2xl font-semibold text-white md:text-3xl">
                Empecemos por el descubrimiento.
              </h2>
              <p className="max-w-xl text-pretty text-sm leading-relaxed text-slate-300">
                Cuéntanos el proceso que quieres destrabar y coordinamos la primera sesión.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={PRIMARY_CTA.href}
                  className="btn-vibrant inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
                >
                  {PRIMARY_CTA.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="/#contacto"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/[0.06]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Escribir por el formulario
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
