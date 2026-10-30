import type { ComponentProps, ReactNode } from "react";
import { Mail } from "lucide-react";
import { ARTICLE_PROSE } from "@/components/blog/articleProse";
import { PageHero, PageSection, PageShell, TextLink } from "@/components/site/PageKit";
import { COMPANY } from "@/config/site";

/* ---------------------------------------------------------------------------
   Plantilla de lectura para documentos legales (privacidad, términos):
   hero oscuro corto + hoja clara con secciones numeradas y un índice fijo en escritorio.
   --------------------------------------------------------------------------- */

export type LegalSection = { id: string; title: string; content: ReactNode };

/** "2026-09-01" → "1 de septiembre de 2026" */
export function formatLegalDate(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return new Intl.DateTimeFormat("es-CL", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(date);
}

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function LegalPage({
  title,
  description,
  updatedAt,
  intro,
  sections,
  navbar,
}: {
  title: string;
  description?: string;
  /** Fecha ISO (AAAA-MM-DD) de la última actualización. */
  updatedAt?: string;
  intro?: ReactNode;
  sections: LegalSection[];
  navbar?: ComponentProps<typeof PageShell>["navbar"];
}) {
  return (
    <PageShell navbar={navbar}>
      <PageHero eyebrow="Información legal" title={title} description={description}>
        {updatedAt ? (
          <p className="font-mono text-[13px] text-slate-400">
            Última actualización: <time dateTime={updatedAt}>{formatLegalDate(updatedAt)}</time>
          </p>
        ) : null}
      </PageHero>

      <PageSection id="documento" tone="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Índice fijo (solo escritorio) */}
          <div className="hidden lg:col-span-3 lg:block">
            <nav aria-label="Índice del documento" className="sticky top-28 flex flex-col gap-4">
              <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-slate-600">En esta página</p>
              <ol className="flex flex-col border-l border-slate-200">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="-ml-px flex gap-3 border-l-2 border-transparent py-1.5 pl-4 text-[14.5px] leading-snug text-slate-600 transition-colors hover:border-sky-500 hover:text-slate-950 focus-visible:border-sky-500 focus-visible:text-slate-950"
                    >
                      <span className="font-mono text-[12px] leading-[1.6] text-sky-700">{pad(index)}</span>
                      <span className="min-w-0">{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <article className="min-w-0 lg:col-span-8 lg:col-start-5">
            <div className="max-w-[72ch]">
              {intro ? <div className={ARTICLE_PROSE}>{intro}</div> : null}

              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-titulo`}
                  className={`scroll-mt-28 ${index || intro ? "mt-12 border-t border-slate-200 pt-10" : ""}`}
                >
                  <h2
                    id={`${section.id}-titulo`}
                    className="flex items-baseline gap-4 font-headline text-[clamp(1.35rem,2vw,1.6rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-slate-950"
                  >
                    <span className="font-mono text-[13px] font-medium tracking-normal text-sky-700">{pad(index)}</span>
                    <span className="min-w-0">{section.title}</span>
                  </h2>
                  <div className={`${ARTICLE_PROSE} mt-4`}>{section.content}</div>
                </section>
              ))}

              <div className="mt-14 flex flex-col gap-5 rounded-[1.5rem] bg-mist p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <p className="flex min-w-0 items-start gap-3 text-[15.5px] leading-relaxed text-slate-700">
                  <Mail className="mt-1 h-[18px] w-[18px] shrink-0 text-sky-700" strokeWidth={1.8} aria-hidden="true" />
                  <span className="min-w-0">
                    ¿Dudas sobre este documento? Escríbenos a{" "}
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="break-words font-medium text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900"
                    >
                      {COMPANY.email}
                    </a>
                    .
                  </span>
                </p>
                <div className="shrink-0">
                  <TextLink href="/">Volver al inicio</TextLink>
                </div>
              </div>
            </div>
          </article>
        </div>
      </PageSection>
    </PageShell>
  );
}
