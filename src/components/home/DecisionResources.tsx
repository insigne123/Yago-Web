import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DECISION_RESOURCES } from "@/config/discovery";

export function DecisionResources() {
  return (
    <section id="recursos-para-decidir" aria-labelledby="decision-resources-title" className="y-dark y-sheet">
      <div className="y-container">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="y-eyebrow">Antes de implementar</span>
          <h2 id="decision-resources-title" className="y-h2 text-white">Herramientas para decidir el siguiente paso.</h2>
          <p className="y-lead">Guías y criterios para evaluar tu proceso, preparar una prueba y conocer a quien lo implementa.</p>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {DECISION_RESOURCES.map((resource) => (
            <li key={resource.href} className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
              <h3 className="y-h3 text-xl text-white">{resource.title}</h3>
              <p className="text-[15px] leading-relaxed text-slate-300">{resource.description}</p>
              <Link href={resource.href} className="y-link mt-auto min-h-11 text-sm plausible-event-name=Decision+Resource+Click plausible-event-location=home_resources">
                {resource.label}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="y-link mt-7 min-h-11 text-sm">Ver todas las guías por necesidad<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
