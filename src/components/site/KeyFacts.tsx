import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { LinkRef, ProductKeyFacts } from "@/config/key-facts";
import { ENTITY, formatUpdated } from "@/config/entity";

/**
 * "En resumen": definición directa del producto + datos clave en una lista de definiciones.
 * Es el bloque que buscadores y asistentes de IA citan cuando alguien pregunta "qué es X" o "cuánto cuesta X".
 */
export function KeyFactsSection({ data, id = "resumen", updated = ENTITY.contentUpdated }: { data: ProductKeyFacts; id?: string; updated?: string }) {
  return (
    <section id={id} className="y-light y-sheet" aria-labelledby={`${id}-titulo`}>
      <div className="y-container grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start gap-5 lg:col-span-5">
          <span className="y-eyebrow">En resumen</span>
          <h2 id={`${id}-titulo`} className="y-h2 text-slate-950">
            {data.question}
          </h2>
          <p className="text-[17.5px] leading-relaxed text-slate-700">{data.definition}</p>
          <p className="font-mono text-[12.5px] text-slate-600">
            Actualizado: <time dateTime={updated}>{formatUpdated(updated)}</time>
          </p>
        </div>

        <div className="lg:col-span-7">
          <dl className="y-card y-reveal grid grid-cols-1 overflow-hidden sm:grid-cols-2">
            {data.facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`flex flex-col gap-1.5 px-6 py-5 sm:px-7 sm:py-6 ${index > 0 ? "border-t border-slate-100" : ""} ${
                  index === 1 ? "sm:border-t-0" : ""
                } ${index % 2 === 1 ? "sm:border-l sm:border-slate-100" : ""}`}
              >
                <dt className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-slate-600">{fact.label}</dt>
                <dd className="text-[16px] font-medium leading-snug text-slate-950">{fact.value}</dd>
              </div>
            ))}
          </dl>
          {data.sources?.length ? <SourceList sources={data.sources} className="mt-5" /> : null}
        </div>
      </div>
    </section>
  );
}

export function SourceList({ sources, className = "" }: { sources: LinkRef[]; className?: string }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13.5px] text-slate-600 ${className}`}>
      <span>Fuentes oficiales:</span>
      {sources.map((source) => (
        <a
          key={source.href}
          href={source.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-medium text-sky-700 underline decoration-sky-300 underline-offset-2 hover:text-sky-900"
        >
          {source.label}
          <ExternalLink className="h-3 w-3" aria-hidden="true" />
          <span className="sr-only">(se abre en una pestaña nueva)</span>
        </a>
      ))}
    </p>
  );
}

/** Lista de guías relacionadas (enlaces internos) para el costado del FAQ. */
export function RelatedGuides({ guides, title = "Guías relacionadas" }: { guides: LinkRef[]; title?: string }) {
  if (!guides.length) return null;
  return (
    <nav aria-label={title} className="mt-2 flex w-full flex-col gap-3 rounded-2xl bg-mist p-5">
      <p className="font-semibold text-slate-900">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {guides.map((guide) => (
          <li key={guide.href}>
            <Link href={guide.href} className="group inline-flex items-start gap-2 text-[14.5px] leading-snug text-sky-700 hover:text-sky-900">
              <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              <span className="underline decoration-sky-300 underline-offset-2">{guide.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
