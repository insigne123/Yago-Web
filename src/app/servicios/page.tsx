import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { SERVICES } from "@/config/services";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Section } from "@/components/landing/Section";

export const metadata: Metadata = {
  title: "Servicios — Yago | Automatización de procesos con IA",
  description:
    "Automatización de procesos, apps de gestión, páginas web y capacitación en IA. Conoce los servicios de Yago para reducir trabajo manual y errores.",
  alternates: { canonical: "/servicios" },
};

const serviceHighlights: Record<string, string[]> = {
  "automatizacion-procesos": ["Menos digitación", "Menos errores", "ROI medible"],
  "apps-automatizacion": ["Panel central", "Roles y auditoría", "Logs en un lugar"],
  "paginas-web": ["SEO técnico", "Core Web Vitals", "Captura de demanda"],
  "capacitacion-ia": ["Talleres prácticos", "Playbooks por rol", "Adopción medida"],
};

export default function ServiciosPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-white">
      <Navbar ctaHref="/#contacto" ctaLabel="Pedir análisis" />
      <main id="main-content" className="main-premium pb-0 pt-28 md:pt-32">
        {/* Hero */}
        <div className="mx-auto max-w-7xl px-4 pb-16 md:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <span className="chip-dark">Servicios</span>
              <h1 className="mt-5 text-balance font-headline text-4xl font-semibold leading-[1.02] text-white md:text-6xl">
                Soluciones para operar con <span className="text-shimmer">menos trabajo manual</span>.
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-300">
                Desde flujos automatizados hasta capacitación de equipos: elegimos el camino con
                mejor retorno para tu operación.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#contacto"
                  className="btn-vibrant inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
                >
                  Pedir análisis gratuito
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/proceso"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/[0.06]"
                >
                  Conocer el proceso
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
                  src="/images/servicios-hero.png"
                  alt="Ilustración de los servicios de automatización con IA de YAGO"
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

        {/* Servicios en layout alternado (light) */}
        <Section tone="light" id="lista-servicios">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8">
              {SERVICES.map((s, index) => {
                const highlights = serviceHighlights[s.slug] ?? [];
                const reversed = index % 2 === 1;

                return (
                  <article
                    key={s.slug}
                    className="card-light grid overflow-hidden md:grid-cols-2"
                  >
                    <div className={`relative aspect-[16/10] md:aspect-auto md:min-h-[20rem] ${reversed ? "md:order-last" : ""}`}>
                      <Image
                        src={s.image || "/placeholder.svg"}
                        alt={`Ilustración del servicio ${s.title}`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>

                    <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
                      <h2 className="text-balance text-2xl font-semibold text-slate-900 md:text-3xl">
                        {s.title}
                      </h2>
                      <p className="text-pretty leading-relaxed text-slate-600">{s.short}</p>

                      <div className="flex flex-wrap gap-2">
                        {highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700"
                          >
                            {h}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        <span className="inline-flex items-center gap-2 text-xs text-slate-500">
                          <Clock className="h-4 w-4" aria-hidden="true" />
                          {s.duration.split(";")[0]}
                        </span>
                      </div>

                      <div>
                        <Link
                          href={`/servicios/${s.slug}`}
                          className="btn-vibrant-light inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
                          aria-label={`Ver detalle de ${s.title}`}
                        >
                          Ver detalle
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Section>

        {/* CTA final (dark) */}
        <Section className="pb-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="card-glow-border flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(120deg,rgba(34,211,238,0.08),rgba(139,92,246,0.08))] p-8 text-center md:p-10">
              <h2 className="text-balance text-2xl font-semibold text-white md:text-3xl">
                ¿No sabes por dónde partir?
              </h2>
              <p className="max-w-xl text-pretty text-sm leading-relaxed text-slate-300">
                Cuéntanos tu proceso más lento y te respondemos con el quick win recomendado en 48 horas.
              </p>
              <a
                href="/#contacto"
                className="btn-vibrant inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                Pedir análisis gratuito
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
