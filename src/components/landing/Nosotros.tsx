"use client";

import { COMPANY, about as aboutCfg } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Workflow,
  Gauge,
  Lightbulb,
  Sparkles,
  Database,
} from "lucide-react";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400";

export function Nosotros() {
  const about = aboutCfg ?? {
    id: "nosotros",
    title: "Nosotros",
    description:
      "En Yago automatizamos procesos empresariales con IA para liberar tiempo operativo y potenciar a las personas. La tecnología asiste; las decisiones siguen siendo humanas.",
    whatWeDo:
      "Diseñamos, construimos y operamos automatizaciones y agentes de IA que eliminan tareas repetitivas, integran sistemas y aportan sugerencias basadas en datos.",
    principles: [
      "Automatización como mecanismo de colaboración humano-máquina.",
      "Ahorro de tiempo en procesos repetitivos y tediosos.",
      "Potenciar habilidades con datos y sugerencias de IA.",
      "Medir por el ahorro en recursos (HH/administrativos), no solo por el costo.",
    ],
    ctaLabel: "Conversemos por WhatsApp",
  };

  const whatsappHref =
    COMPANY?.whatsappLink && COMPANY.whatsappLink.trim().length > 0
      ? COMPANY.whatsappLink
      : "#contacto";

  return (
    <section
      id={about.id || "nosotros"}
      aria-labelledby="nosotros-title"
      className="relative w-full scroll-mt-20 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Columna texto */}
          <div className="md:col-span-7">
            <h2
              id="nosotros-title"
              className={`text-3xl md:text-4xl font-bold tracking-tight ${gradientText}`}
            >
              {about.title}
            </h2>

            <p className="mt-4 text-base text-foreground/80 leading-relaxed">
              {about.description}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Nuestra ideología</h3>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm md:text-base text-foreground/80">
                {(about.principles || []).map((p: string, i: number) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm md:text-base text-foreground/70">
                En Yago creemos que las automatizaciones deben pensarse no por
                su costo, sino por el ahorro que generan en recursos humanos y
                administrativos, además del impacto en calidad y velocidad para
                decidir mejor.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-white">
                  <a
                    href={whatsappHref}
                    target={whatsappHref.startsWith("#") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                  >
                    {about.ctaLabel}
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a href="#contacto">Contáctanos</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Columna tarjetas */}
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">A qué nos dedicamos</h3>
              <p className="mt-3 text-sm md:text-base text-foreground/75">
                {about.whatWeDo}
              </p>

              <div className="mt-5 grid grid-cols-1 gap-3">
                <FeatureCard
                  icon={<Workflow className="h-4 w-4" />}
                  title="Eliminamos fricción operativa"
                  desc="Orquestamos flujos e integraciones para quitar trabajo manual y cuellos de botella."
                />
                <FeatureCard
                  icon={<Bot className="h-4 w-4" />}
                  title="IA como copiloto"
                  desc="Sugerencias, resúmenes y priorización para acelerar tareas y decisiones."
                />
                <FeatureCard
                  icon={<Database className="h-4 w-4" />}
                  title="Más y mejores datos"
                  desc="Centralizamos conocimiento y habilitamos búsqueda semántica (RAG)."
                />
                <FeatureCard
                  icon={<Gauge className="h-4 w-4" />}
                  title="Valor medible"
                  desc="Hablamos en ahorro de HH, costos administrativos y SLA mejorados."
                />
                <FeatureCard
                  icon={<Lightbulb className="h-4 w-4" />}
                  title="Iteración rápida"
                  desc="Blueprint, builds quincenales y UAT para entregar valor temprano."
                />
                <FeatureCard
                  icon={<Sparkles className="h-4 w-4" />}
                  title="Enfoque en impacto"
                  desc="Priorizamos automatizaciones por retorno, no solo por viabilidad técnica."
                />
              </div>

              <a
                href="#servicios"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
          {icon}
        </span>
        <p className="text-sm font-medium">{title}</p>
      </div>
      <p className="mt-1 text-xs text-foreground/70">{desc}</p>
    </div>
  );
}
