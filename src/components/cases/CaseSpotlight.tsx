import { Quote } from "lucide-react";
import { FEATURED_CASE } from "@/config/home";

type CaseData = typeof FEATURED_CASE;

/**
 * Tarjeta oscura de caso (cita + métricas), con el mismo aspecto que el caso destacado del home.
 * El formato pendiente no se publica; requiere datos reales y autorización.
 */
export function CaseSpotlight({ item = FEATURED_CASE }: { item?: CaseData }) {
  if (item.placeholder) return null;
  const ph = item.placeholder ? "text-sky-300" : "";

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#0b1220] text-white shadow-[0_40px_80px_-40px_rgba(11,18,32,0.7)]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky-400/[0.14] blur-[90px]" />
        <div className="y-grid-bg opacity-60" />
      </div>
      <div className="relative grid grid-cols-1 gap-12 p-7 sm:p-10 lg:grid-cols-12 lg:p-14">
        <figure className="flex min-w-0 flex-col gap-8 lg:col-span-7 lg:pr-6">
          <span className="flex w-fit flex-wrap items-center gap-x-2 gap-y-1 rounded-full bg-white/[0.06] px-3 py-1.5 text-[13px] text-slate-300 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
            {item.placeholder ? "Formato de referencia" : "Caso destacado"}
            <span aria-hidden="true">·</span>
            <span className={ph}>{item.client}</span>
          </span>
          <Quote className="h-8 w-8 text-sky-300/70" aria-hidden="true" />
          <blockquote className={`-mt-4 font-headline text-[clamp(1.35rem,2.4vw,2rem)] font-medium leading-[1.3] tracking-[-0.015em] ${ph}`}>
            {item.quote}
          </blockquote>
          <figcaption className="flex items-center gap-4">
            <span aria-hidden="true" className="h-12 w-12 shrink-0 rounded-full bg-white/[0.06] shadow-[inset_0_0_0_1px_rgba(125,211,252,0.4)]" />
            <span className="flex min-w-0 flex-col">
              <span className="font-semibold">{item.person}</span>
              <span className="text-sm text-slate-400">{item.role}</span>
            </span>
          </figcaption>
        </figure>
        <dl className="flex flex-col lg:col-span-5">
          {item.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col gap-1 py-6 ${index ? "border-t border-white/10" : "pt-0"} ${
                index === item.metrics.length - 1 ? "pb-0" : ""
              }`}
            >
              <dt className="order-2 text-[15px] text-slate-400">{metric.label}</dt>
              <dd className="order-1 font-headline text-[clamp(2rem,3.4vw,2.9rem)] font-semibold tracking-[-0.035em] text-sky-300">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
