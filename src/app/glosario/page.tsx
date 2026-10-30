import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBand, PageHero, PageSection, PageShell } from "@/components/site/PageKit";
import { ENTITY, formatUpdated } from "@/config/entity";
import { GLOSSARY, GLOSSARY_TERMS } from "@/config/glossary";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Glosario de IA, automatización, aplicaciones y OCR | YAGO",
  description:
    "Integración de IA, desarrollo asistido, aplicaciones, OCR, RAG y automatización explicados en simple. Incluye términos laborales de Chile con fuentes oficiales.",
  path: "/glosario",
  keywords: ["qué es el F30-1", "qué es Mi DT", "registro electrónico laboral", "qué es OCR", "qué es RAG", "glosario automatización"],
});

const BASE = "https://yago.cl";

export default function GlossaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${BASE}/glosario#glosario`,
    name: "Glosario de YAGO",
    description: "Términos de integración de IA, desarrollo de aplicaciones, automatización y documentos, además de trámites laborales en Chile.",
    url: `${BASE}/glosario`,
    inLanguage: "es-CL",
    dateModified: ENTITY.contentUpdated,
    publisher: { "@id": `${BASE}/#organization` },
    hasDefinedTerm: GLOSSARY_TERMS.map((term) => ({
      "@type": "DefinedTerm",
      "@id": `${BASE}/glosario#${term.id}`,
      name: term.term,
      ...(term.aka?.length ? { alternateName: term.aka } : {}),
      description: [term.definition, term.detail].filter(Boolean).join(" "),
      url: `${BASE}/glosario#${term.id}`,
      inDefinedTermSet: `${BASE}/glosario#glosario`,
    })),
  };

  return (
    <PageShell>
      <JsonLd id="jsonld-glosario" data={jsonLd} />
      <PageHero
        top={
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Glosario", href: "/glosario" },
            ]}
          />
        }
        eyebrow="Glosario"
        title="Los términos de tu operación,"
        highlight="explicados en simple."
        description="Integración de IA, aplicaciones, desarrollo asistido, OCR y automatización. Incluye conceptos de trámites laborales en Chile, con fuentes oficiales cuando el término es regulatorio."
      >
        <p className="font-mono text-[12.5px] uppercase tracking-[0.1em] text-slate-400">
          {GLOSSARY_TERMS.length} términos <span aria-hidden="true">·</span> actualizado en{" "}
          <time dateTime={ENTITY.contentUpdated}>{formatUpdated()}</time>
        </p>
      </PageHero>

      <PageSection id="terminos" tone="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <nav aria-label="Categorías del glosario" className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28 flex flex-col gap-5 rounded-[1.5rem] bg-mist p-6 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)]">
              {GLOSSARY.map((group) => (
                <div key={group.id} className="flex flex-col gap-2">
                  <a href={`#${group.id}`} className="font-semibold text-slate-950 hover:text-sky-800">
                    {group.title}
                  </a>
                  <ul className="flex flex-col gap-1 border-l border-slate-200">
                    {group.terms.map((term) => (
                      <li key={term.id}>
                        <a
                          href={`#${term.id}`}
                          className="-ml-px block border-l-2 border-transparent py-0.5 pl-3 text-[14px] text-slate-700 hover:border-sky-500 hover:text-slate-950"
                        >
                          {term.term}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          <div className="flex min-w-0 flex-col gap-16 lg:col-span-9">
            {GLOSSARY.map((group) => (
              <section key={group.id} id={group.id} aria-labelledby={`${group.id}-titulo`} className="scroll-mt-28">
                <div className="flex max-w-2xl flex-col gap-3">
                  <h2 id={`${group.id}-titulo`} className="y-h2 text-slate-950">
                    {group.title}
                  </h2>
                  <p className="text-[16.5px] leading-relaxed text-slate-600">{group.description}</p>
                </div>
                <dl className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {group.terms.map((term) => (
                    <div key={term.id} id={term.id} className="y-card flex scroll-mt-28 flex-col gap-3 p-6 sm:p-7">
                      <dt className="flex flex-col gap-1">
                        <span className="font-headline text-[1.2rem] font-semibold tracking-[-0.01em] text-slate-950">{term.term}</span>
                        {term.aka?.length ? <span className="text-[13.5px] text-slate-600">También: {term.aka.join(" · ")}</span> : null}
                      </dt>
                      <dd className="flex flex-1 flex-col gap-3">
                        <p className="text-[15.5px] leading-relaxed text-slate-700">{term.definition}</p>
                        {term.detail ? <p className="text-[14.5px] leading-relaxed text-slate-600">{term.detail}</p> : null}
                        {term.related?.length || term.source ? (
                          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-4 text-[14px]">
                            {term.related?.map((link) => (
                              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1.5 font-medium text-sky-700 hover:text-sky-900">
                                {link.label}
                                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                              </Link>
                            ))}
                            {term.source ? (
                              <a
                                href={term.source.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-slate-900"
                              >
                                Fuente: {term.source.label}
                                <ExternalLink className="h-3 w-3" aria-hidden="true" />
                                <span className="sr-only">(se abre en una pestaña nueva)</span>
                              </a>
                            ) : null}
                          </div>
                        ) : null}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ))}
            <p className="text-[13.5px] leading-relaxed text-slate-600">
              Definiciones informativas. YAGO es un proveedor independiente y no representa a la Dirección del Trabajo ni al Poder Judicial;
              para requisitos y plazos vigentes consulta siempre la fuente oficial.
            </p>
          </div>
        </div>
      </PageSection>

      <CtaBand
        title="¿Quieres aplicar IA o automatización en tu empresa?"
        text="Revisamos tu necesidad, datos y sistemas para definir una implementación, aplicación o primer flujo."
      />
    </PageShell>
  );
}
