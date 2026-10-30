import { Check } from "lucide-react";
import Link from "next/link";
import { PageSection, SectionHeader } from "@/components/site/PageKit";
import type { ServiceWorkflow } from "@/config/services";

export function ServiceFlowExample({ workflow }: { workflow: ServiceWorkflow }) {
  return (
    <PageSection id="ejemplo-de-flujo" tone="dark">
      <SectionHeader dark eyebrow="Ejemplo de alcance" title={workflow.title} description={workflow.description} />
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-400">
        Flujo de referencia para definir un proyecto. Las conexiones, campos y acciones se confirman en el diagnóstico.
      </p>

      <dl className="mt-10 grid gap-5 md:grid-cols-2">
        {[{ label: "Entrada", value: workflow.input }, { label: "Resultado", value: workflow.output }].map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <dt className="font-mono text-xs uppercase tracking-wider text-sky-300">{item.label}</dt>
            <dd className="mt-3 text-base leading-relaxed text-slate-200">{item.value}</dd>
          </div>
        ))}
      </dl>

      <ol className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {workflow.steps.map((step, index) => (
          <li key={step.title} className="border-t border-white/15 pt-6">
            <span className="font-mono text-sm text-sky-300" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 font-headline text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-300">{step.description}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-2">
        <div>
          <h3 className="font-headline text-xl font-semibold text-white">Cómo comprobamos que funciona</h3>
          <ul className="mt-5 space-y-3">
            {workflow.acceptance.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-slate-300">
                <Check className="mt-1 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-headline text-xl font-semibold text-white">Conexiones y opciones relacionadas</h3>
          <p className="mt-5 text-[15px] leading-relaxed text-slate-300">{workflow.connections}</p>
          <ul className="mt-5 space-y-3">
            {workflow.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[15px] leading-relaxed text-sky-300 underline decoration-sky-300/40 underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageSection>
  );
}
