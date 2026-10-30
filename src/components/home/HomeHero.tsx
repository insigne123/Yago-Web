import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LiveConsole } from "@/components/home/LiveConsole";
import { HeroField } from "@/components/motion/HeroField";
import { CLIENT_LOGOS, HOME_FACTS, HOME_HERO } from "@/config/home";
import { PRIMARY_CTA } from "@/config/site";

export function HomeHero() {
  const external = PRIMARY_CTA.href.startsWith("http");

  return (
    <section id="inicio" className="y-dark y-grain relative overflow-hidden">
      {/* Atmósfera: luz sky detrás de la consola + cuadrícula técnica */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[-10%] h-[42rem] w-[42rem] rounded-full bg-sky-400/[0.13] blur-[120px]" />
        <div className="absolute left-[-12%] top-[-20%] h-[28rem] w-[28rem] rounded-full bg-sky-300/[0.06] blur-[110px]" />
      </div>
      <HeroField />

      <div className="y-container relative grid grid-cols-1 items-center gap-14 pb-10 pt-14 md:pt-20 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)] lg:gap-14 lg:pt-24">
        <div className="flex flex-col items-start gap-7">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-white/[0.04] px-3.5 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.12em] text-slate-300 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
            <span className="h-1.5 w-1.5 animate-y-pulse rounded-full bg-sky-300 shadow-[0_0_10px_rgba(125,211,252,0.9)]" aria-hidden="true" />
            {HOME_HERO.eyebrow}
          </span>

          <h1 className="y-display text-[clamp(2.5rem,5.4vw,4.35rem)] text-white">
            {HOME_HERO.titleStart} <span className="y-gradient-text">{HOME_HERO.titleHighlight}</span>{" "}
            {HOME_HERO.titleEnd}
          </h1>

          <p className="y-lead max-w-[36rem]">{HOME_HERO.description}</p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={PRIMARY_CTA.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="y-btn y-btn-primary plausible-event-name=CTA+Agendar+Sesion plausible-event-location=hero"
            >
              {PRIMARY_CTA.label}
              <ArrowRight className="y-arrow h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a href="#servicios" className="y-btn y-btn-glass plausible-event-name=Hero+Ver+Servicios plausible-event-location=hero">
              {HOME_HERO.secondaryCta}
            </a>
          </div>
          <p className="-mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
            {HOME_HERO.note}{" "}
            <Link href={HOME_HERO.noteLink.href} className="whitespace-nowrap font-medium text-sky-300 underline decoration-sky-300/40 underline-offset-4 transition-colors hover:text-sky-200 plausible-event-name=Hero+Auditoria plausible-event-location=hero">
              {HOME_HERO.noteLink.label}
            </Link>
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-x-7 gap-y-4">
            <span className="text-sm text-slate-400">Ya operan con YAGO</span>
            <span className="hidden h-6 w-px bg-white/15 sm:block" aria-hidden="true" />
            {CLIENT_LOGOS.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noreferrer"
                className="opacity-70 transition-opacity hover:opacity-100"
                aria-label={`Sitio de ${logo.name}`}
              >
                <Image
                  src={logo.src}
                  alt={`Logo de ${logo.name}`}
                  width={logo.width}
                  height={logo.height}
                  className="h-7 w-auto brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <LiveConsole />
        </div>
      </div>

      <div className="y-container relative pb-20 md:pb-24">
        <dl className="grid grid-cols-2 border-t border-white/[0.08] lg:grid-cols-4">
          {HOME_FACTS.map((fact, index) => (
            <div
              key={fact.value}
              className={`flex flex-col gap-2 py-7 pr-6 md:py-9 ${index % 2 === 1 ? "pl-6 lg:pl-0" : ""} ${
                index < 2 ? "border-b border-white/[0.08] lg:border-b-0" : ""
              } ${index % 2 === 0 ? "border-r border-white/[0.08] lg:border-r-0" : ""}`}
            >
              <dt className="order-2 text-sm leading-snug text-slate-400">{fact.label}</dt>
              <dd className="order-1 font-headline text-[clamp(1.75rem,3vw,2.6rem)] font-semibold tracking-[-0.035em] text-white">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
