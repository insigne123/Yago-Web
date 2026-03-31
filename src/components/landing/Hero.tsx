"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ShieldCheck, Waypoints } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const trustSignals = [
  "Privacidad by design",
  "Integración API & automatización",
  "Impacto medible desde el piloto",
];

const heroHighlights = [
  { k: "Tiempo típico", v: "Piloto en 2-4 semanas" },
  { k: "Modelo", v: "Servicios + productos aplicados" },
  { k: "Operación", v: "Roles, trazabilidad y monitoreo" },
];

const impactMetrics = [
  {
    title: "Diseño claro",
    detail: "Mapeamos procesos, KPI y riesgos antes de construir.",
  },
  {
    title: "Integración real",
    detail: "Conectamos APIs, documentos, canales y sistemas internos.",
  },
  {
    title: "Operación sostenible",
    detail: "Dejamos dashboards, alertas y ownership para escalar con confianza.",
  },
];

const healthMetrics = [
  { k: "Flujos activos", v: "12", c: "border-sky-300/20 bg-sky-400/10 text-sky-100" },
  { k: "SLAs cubiertos", v: "96%", c: "border-emerald-300/20 bg-emerald-400/10 text-emerald-100" },
  { k: "Trazabilidad", v: "Alta", c: "border-amber-200/20 bg-amber-200/10 text-amber-50" },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-12 md:pb-24 md:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-[-10rem] top-[8%] h-[22rem] w-[22rem] rounded-full bg-sky-300/12 blur-[120px]"
          animate={prefersReducedMotion ? undefined : { x: [0, 18, 0], y: [0, -12, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[-8rem] top-[10%] h-[20rem] w-[20rem] rounded-full bg-indigo-300/14 blur-[110px]"
          animate={prefersReducedMotion ? undefined : { x: [0, -16, 0], y: [0, 10, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid-overlay" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h1 className="max-w-3xl text-balance font-headline text-4xl font-semibold leading-[0.98] text-white md:text-6xl lg:text-[4.7rem]">
            Automatización, agentes y productos IA para operar con más claridad.
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            YAGO diseña sistemas que reducen fricción operativa, integran herramientas existentes y
            convierten procesos manuales en operaciones trazables, rápidas y medibles.
          </p>

          <div className="mt-6 grid max-w-2xl grid-cols-1 gap-3 md:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item.k}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm"
              >
                <div className="text-[11px] uppercase tracking-[0.14em] text-slate-400">{item.k}</div>
                <div className="mt-1 text-sm font-medium text-white">{item.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
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
              href="#ocr-master"
              className="inline-flex items-center gap-2 rounded-full px-1 text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 plausible-event-name=CTA+Ver+OCR+Master plausible-event-location=hero"
            >
              Explorar OCR Master
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 text-sm text-slate-300">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:justify-self-end"
        >
          <div className="absolute inset-x-10 top-4 h-28 rounded-full bg-sky-300/10 blur-[90px]" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.8),rgba(12,18,30,0.94))] p-1 shadow-[0_30px_100px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <Card className="relative overflow-hidden rounded-[1.75rem] border-white/8 bg-transparent shadow-none">
              <CardHeader className="pb-5">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-slate-400">
                  <Waypoints className="h-4 w-4 text-sky-200" aria-hidden="true" />
                  YAGO Operating Canvas
                </div>
                <CardTitle className="mt-3 text-[2rem] leading-none text-white md:text-[2.4rem]">
                  De brief a operación.
                </CardTitle>
                <CardDescription className="max-w-md text-sm leading-relaxed text-slate-300">
                  Unimos diseño de flujo, producto e integración técnica para que el sistema quede listo
                  para operar, no solo para verse bien en una demo.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid gap-3 md:grid-cols-3">
                  {impactMetrics.map((metric) => (
                    <div
                      key={metric.title}
                      className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="text-sm font-semibold text-white">{metric.title}</div>
                      <div className="mt-2 text-sm leading-relaxed text-slate-300">{metric.detail}</div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-white">
                        <ShieldCheck className="h-4 w-4 text-sky-200" aria-hidden="true" />
                        Señales de una implementación madura
                      </div>
                      <div className="mt-1 text-sm text-slate-400">Productos, servicios y operación documentada.</div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-300">
                      Últimos 30 días
                    </div>
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
        </motion.div>
      </div>
    </section>
  );
}
