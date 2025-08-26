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
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-4xl font-bold tracking-tight md:text-6xl ${gradientText}`}
          >
            Automatizamos tu empresa con IA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Diseñamos agentes inteligentes, flujos automáticos y aplicaciones web que
            convierten tareas manuales en experiencias rápidas, seguras y medibles.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="group">
              <Link href="#servicios">
                Ver servicios
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="border border-white/15 text-foreground/90 hover:bg-white/5"
            >
              <Link href="#productos">Explorar productos</Link>
            </Button>
          </motion.div>

          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 text-sm text-muted-foreground md:grid-cols-3">
            {["Privacidad by‑design", "SLA claro", "Soporte humano"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className={`${gradientRing} rounded-3xl`}>
            <div className="relative rounded-3xl bg-gradient-to-br from-background/60 to-background/40 p-1">
              <Card className="relative overflow-hidden rounded-3xl">
                <CardHeader>
                  <CardTitle>Tablero de Impacto</CardTitle>
                  <CardDescription>
                    Indicadores típicos al contratar automatizaciones.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-3">
                  {[
                    {
                      k: "Ahorro de tiempo",
                      v: "-60%",
                      d: "Procesos manuales → flujos automáticos",
                    },
                    { k: "SLA cumplidos", v: "98%", d: "Tiempos respuesta estables" },
                    { k: "ROI 6 meses", v: "3.5×", d: "Retorno promedio estimado" },
                  ].map((m) => (
                    <div key={m.k} className="rounded-xl border bg-card p-4">
                      <div className="text-sm text-muted-foreground">{m.k}</div>
                      <div className="mt-1 text-2xl font-semibold">{m.v}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{m.d}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
