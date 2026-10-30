import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SpotlightGroup } from "@/components/home/SpotlightGroup";
import { ActionLink, BOOKING_ACTION, CtaBand, IconTile, PageHero, PageSection, PageShell, SectionHeader } from "@/components/site/PageKit";
import { solutionIcon } from "@/components/solutions/solutionIcons";
import { SEO_PAGES, type SeoPage } from "@/config/seo-pages";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Soluciones de automatización por proceso e industria | YAGO",
  description:
    "Soluciones de YAGO para equipos que buscan automatización de backoffice, finanzas y aprobaciones con foco en menos trabajo manual y más control operativo.",
  path: "/soluciones",
});

const BY_PROCESS = SEO_PAGES.filter((page) => page.eyebrow !== "Industria");
const BY_INDUSTRY = SEO_PAGES.filter((page) => page.eyebrow === "Industria");

const GROUPS = [
  { label: "Por proceso", pages: BY_PROCESS },
  { label: "Por industria", pages: BY_INDUSTRY },
];

function SolutionCard({ page }: { page: SeoPage }) {
  return (
    <Link
      href={`/soluciones/${page.slug}`}
      className="y-spot y-card y-card-hover y-reveal group flex flex-col gap-4 p-7"
    >
      <IconTile icon={solutionIcon(page.slug)} />
      <h3 className="y-h3 mt-1 text-[1.3rem] text-slate-950">{page.name}</h3>
      <p className="text-[15px] leading-relaxed text-slate-600">{page.seoDescription}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[15px] font-semibold text-sky-700">
        Ver solución
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}

export default function SolutionsIndexPage() {
  return (
    <PageShell>
      {/* ---------------- HERO ---------------- */}
      <PageHero
        eyebrow="Soluciones"
        title="Soluciones para problemas operativos"
        highlight="concretos."
        description="Si llegaste buscando una necesidad más específica, aquí reunimos las soluciones con mejor fit para equipos de operaciones, backoffice y finanzas que quieren reducir trabajo manual, errores y tiempos de ciclo."
        actions={
          <>
            <ActionLink action={BOOKING_ACTION} arrow />
            <ActionLink action={{ label: "Cómo trabajamos", href: "/proceso" }} variant="glass" />
          </>
        }
        aside={
          <nav aria-label="Índice de soluciones" className="y-beam">
            <div className="y-beam__inner bg-[#0b1220] p-3 sm:p-4">
              {GROUPS.map((group, groupIndex) => (
                <div key={group.label} className={groupIndex ? "mt-2 border-t border-white/[0.08] pt-2" : ""}>
                  <p className="flex items-center justify-between gap-3 px-3 pb-2 pt-3 font-mono text-[12px] uppercase tracking-[0.12em] text-slate-400">
                    <span>{group.label}</span>
                    <span className="text-slate-300">{group.pages.length}</span>
                  </p>
                  <ul className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-1">
                    {group.pages.map((page) => {
                      const Icon = solutionIcon(page.slug);
                      return (
                        <li key={page.slug} className="min-w-0">
                          <Link
                            href={`/soluciones/${page.slug}`}
                            className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-white/[0.05] focus-visible:bg-white/[0.05]"
                          >
                            <Icon className="h-4 w-4 shrink-0 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
                            <span className="min-w-0 flex-1 text-[15px] font-medium leading-snug text-white">{page.name}</span>
                            <ArrowRight
                              className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-sky-300"
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        }
      />

      {/* ---------------- POR PROCESO ---------------- */}
      <PageSection id="por-proceso" tone="mist">
        <SectionHeader
          eyebrow="Por proceso"
          title="Soluciones por proceso."
          description="Backoffice, finanzas, aprobaciones, carga de datos, documentos y reportes: elige el flujo que hoy depende de más trabajo manual."
        />
        <SpotlightGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {BY_PROCESS.map((page) => (
            <SolutionCard key={page.slug} page={page} />
          ))}
        </SpotlightGroup>
      </PageSection>

      {/* ---------------- POR INDUSTRIA ---------------- */}
      <PageSection id="por-industria" tone="light">
        <SectionHeader
          eyebrow="Por industria"
          title="Soluciones por industria."
          description="Logística, empresas de servicios y RRHH: operaciones donde los documentos, el seguimiento y la coordinación manual pesan más."
        />
        <SpotlightGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {BY_INDUSTRY.map((page) => (
            <SolutionCard key={page.slug} page={page} />
          ))}
        </SpotlightGroup>
      </PageSection>

      {/* ---------------- CIERRE ---------------- */}
      <CtaBand
        eyebrow="A medida"
        title="¿Tu proceso no aparece aquí?"
        text="Revisamos tu flujo y te decimos si conviene partir con un producto listo, con OCR o con una automatización a medida."
      />
    </PageShell>
  );
}
