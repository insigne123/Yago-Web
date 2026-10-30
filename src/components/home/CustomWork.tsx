import Link from "next/link";
import { ArrowRight, Bot, LayoutDashboard, PlugZap, ScanText, SearchCheck, Workflow, type LucideIcon } from "lucide-react";
import { HOME_AGENTS, HOME_SERVICES } from "@/config/home";
import { SpotlightGroup } from "@/components/home/SpotlightGroup";

const SERVICE_ICONS: Record<(typeof HOME_SERVICES)[number]["icon"], LucideIcon> = {
  audit: SearchCheck,
  flow: Workflow,
  apps: LayoutDashboard,
  integration: PlugZap,
  bot: Bot,
  ocr: ScanText,
};

export function CustomWork() {
  return (
    <section id="servicios" className="y-light y-sheet scroll-mt-24">
      <span id="a-medida" className="absolute -top-24" aria-hidden="true" />
      <div className="y-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col items-start gap-5 lg:col-span-5 lg:pr-6">
            <span className="y-eyebrow">Servicios para empresas en Chile</span>
            <h2 className="y-h2 text-slate-950">Integra IA, automatiza procesos y construye lo que tu empresa necesita.</h2>
            <p className="y-lead">
              Partimos por el problema y sus datos. Diseñamos flujos, integraciones y aplicaciones con un alcance
              claro, y validamos su funcionamiento junto a tu equipo.
            </p>
            <Link href="/servicios" className="y-btn y-btn-outline mt-2">
              Comparar servicios
              <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <SpotlightGroup className="flex flex-col gap-3.5 lg:col-span-7">
            {HOME_SERVICES.map((service) => {
              const Icon = SERVICE_ICONS[service.icon];
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`y-spot y-card y-card-hover y-reveal group flex items-start gap-4 p-5 sm:items-center sm:gap-5 sm:p-6 plausible-event-name=Home+Servicio plausible-event-service=${service.href.split("/").pop()} plausible-event-location=home_services`}
                >
                  <span className="grid grid-cols-1 h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-b from-sky-50 to-sky-100 text-sky-700 shadow-[inset_0_0_0_1px_rgba(14,165,233,0.18)]">
                    <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="y-h3 text-[1.2rem] text-slate-950">{service.title}</span>
                    <span className="text-[15px] leading-relaxed text-slate-600">{service.description}</span>
                    <span className="mt-2 w-fit rounded-full bg-mist px-3 py-1.5 font-mono text-xs text-slate-700 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)] sm:hidden">
                      {service.time}
                    </span>
                  </span>
                  <span className="hidden shrink-0 rounded-full bg-mist px-3 py-1.5 font-mono text-xs text-slate-700 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)] xl:inline-flex">
                    {service.time}
                  </span>
                </Link>
              );
            })}
          </SpotlightGroup>
        </div>

        <div className="mt-24 flex flex-col gap-3">
          <h3 className="y-h3 text-[1.75rem] text-slate-950">Agentes IA listos para adaptar</h3>
          <p className="text-base text-slate-600">
            Acortan el camino entre la idea y la puesta en marcha cuando el problema se repite.
          </p>
        </div>
        <SpotlightGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {HOME_AGENTS.map((agent) => (
            <Link
              key={agent.name}
              href={agent.href}
              className="y-spot y-reveal group flex flex-col gap-3 rounded-3xl bg-mist p-6 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)] transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-[inset_0_0_0_1px_rgba(14,165,233,0.3),0_24px_48px_-28px_rgba(15,23,42,0.35)]"
            >
              <span className="text-xl font-semibold tracking-[-0.01em] text-slate-950">{agent.name}</span>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-sky-700">{agent.tag}</span>
              <span className="text-[15px] leading-relaxed text-slate-600">{agent.description}</span>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-sky-700">
                Ver agente
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </SpotlightGroup>
      </div>
    </section>
  );
}
