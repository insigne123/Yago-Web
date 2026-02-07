"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AnimatedBlobs } from "./AnimatedBlobs";
import { Section } from "./Section";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400";

const gradientRing =
  "relative before:absolute before:inset-0 before:rounded-3xl before:p-[1px] before:bg-gradient-to-r before:from-fuchsia-500/70 before:via-cyan-400/70 before:to-emerald-400/70 before:blur-[2px]";

export function Hero() {
  return (
    <Section id="inicio" className="overflow-hidden">
      <AnimatedBlobs />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            Automatizacion con IA para operaciones
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`mt-4 text-4xl font-semibold leading-[1.05] md:text-6xl ${gradientText}`}
          >
            Automatizamos tu empresa con IA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Diseñamos agentes, flujos y aplicaciones web que convierten tareas manuales
            en operaciones rapidas, seguras y medibles.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-white plausible-event-name=CTA+Agendar+Demo plausible-event-location=hero"
            >
              <Link href="#contacto">
                Agendar demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="border border-white/15 text-foreground/90 hover:bg-white/5 plausible-event-name=CTA+Ver+Servicios plausible-event-location=hero"
            >
              <Link href="#servicios">Ver servicios</Link>
            </Button>

            <Link
              href="#productos"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition plausible-event-name=CTA+Explorar+Productos plausible-event-location=hero"
            >
              Explorar productos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2 text-sm text-muted-foreground">
            {["Privacidad by-design", "Human-in-the-loop", "ROI medible"].map((t) => (
              <div
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2"
              >
                <BadgeCheck className="h-4 w-4" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className={`${gradientRing} rounded-3xl`}>
            <div className="relative rounded-3xl bg-gradient-to-br from-background/60 to-background/30 p-1">
              <Card className="relative overflow-hidden rounded-3xl border-white/10 bg-card/60 backdrop-blur">
                <CardHeader className="pb-4">
                  <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden="true" />
                    Ejemplo de tablero
                  </div>
                  <CardTitle className="mt-2 text-2xl md:text-3xl">Impacto operativo</CardTitle>
                  <CardDescription>
                    Visibilidad sobre flujos, errores y ahorro de tiempo (varia segun el caso).
                  </CardDescription>
                </CardHeader>

                <CardContent className="grid gap-3 md:grid-cols-3">
                  {[
                    { k: "Tiempo de ciclo", v: "-40%", d: "Menos espera entre sistemas" },
                    { k: "Errores", v: "-55%", d: "Validaciones + trazabilidad" },
                    { k: "SLA", v: "+", d: "Alertas y reintentos automaticos" },
                  ].map((m) => (
                    <div
                      key={m.k}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-white/15"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="text-sm text-muted-foreground">{m.k}</div>
                        <div className="h-1.5 w-10 rounded-full bg-gradient-to-r from-fuchsia-500/60 via-cyan-400/60 to-emerald-400/60" />
                      </div>
                      <div className="mt-2 text-3xl font-semibold text-white">{m.v}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{m.d}</div>
                    </div>
                  ))}
                </CardContent>

                <div className="px-6 pb-6">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm text-white">Estado de automatizaciones</div>
                      <div className="text-xs text-muted-foreground">Ultimas 24h</div>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                      {[
                        { k: "OK", v: "96%", c: "bg-emerald-400/30 text-emerald-200" },
                        { k: "Reintentos", v: "3%", c: "bg-cyan-400/25 text-cyan-200" },
                        { k: "Fallos", v: "1%", c: "bg-fuchsia-400/25 text-fuchsia-200" },
                      ].map((x) => (
                        <div key={x.k} className={`rounded-xl border border-white/10 px-3 py-2 ${x.c}`}>
                          <div className="text-[11px] opacity-90">{x.k}</div>
                          <div className="mt-1 text-base font-semibold">{x.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
