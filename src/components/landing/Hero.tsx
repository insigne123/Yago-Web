import Image from "next/image";
import { ArrowRight, BadgeCheck, ShieldCheck, Workflow, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRIMARY_CTA } from "@/config/site";

const trustSignals = [
  "PSOL y GrupoExpro ya trabajan con YAGO",
  "Sin romper tu stack actual",
];

const floatingChips = [
  { icon: Workflow, label: "Flujos automatizados", position: "left-4 top-6 md:left-6 md:top-10" },
  { icon: Zap, label: "Menos digitación", position: "right-4 top-1/3 md:right-6" },
  { icon: ShieldCheck, label: "Trazabilidad total", position: "bottom-6 left-8 md:bottom-10 md:left-12" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24 lg:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[8%] h-[20rem] w-[20rem] rounded-full bg-cyan-400/15 blur-[90px]" />
        <div className="absolute right-[-7rem] top-[12%] h-[18rem] w-[18rem] rounded-full bg-violet-500/15 blur-[95px]" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid-overlay" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <div className="max-w-2xl">
          <div className="chip-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
            YAGO · Automatización con IA
          </div>

          <h1 className="mt-6 max-w-4xl text-balance font-headline text-5xl font-semibold leading-[0.94] text-white md:text-6xl lg:text-[5.15rem]">
            Automatiza operaciones sin perder control.
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-300 md:text-[1.14rem]">
            IA, OCR e integraciones para que backoffice, finanzas y operaciones reduzcan
            trabajo manual desde el primer flujo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="group btn-vibrant rounded-full px-6 font-medium plausible-event-name=CTA+Agendar+Sesion plausible-event-location=hero"
            >
              <a href={PRIMARY_CTA.href}>
                {PRIMARY_CTA.label}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full border border-white/12 bg-white/[0.03] px-6 text-slate-100 hover:bg-white/[0.06] plausible-event-name=CTA+Ver+Casos plausible-event-location=hero"
            >
              <a href="#que-hacemos">Qué hacemos</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-300">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2"
              >
                <BadgeCheck className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:justify-self-end">
          <div
            className="absolute inset-x-10 top-4 h-40 rounded-full bg-cyan-400/20 blur-[90px]"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/hero-automation.png"
              alt="Visualización de flujos de automatización con IA de YAGO"
              width={720}
              height={720}
              priority
              className="h-auto w-full object-cover"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(4,7,15,0.55))]"
            />

            {floatingChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <div
                  key={chip.label}
                  className={`absolute ${chip.position} inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md`}
                >
                  <Icon className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" />
                  {chip.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
