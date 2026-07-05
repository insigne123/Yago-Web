import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SEO_PAGES, type SeoPage } from "@/config/seo-pages";
import { Section } from "./Section";

const featuredSlugs = [
  "automatizacion-backoffice",
  "automatizacion-finanzas",
  "automatizacion-documental",
];

const featuredPages = featuredSlugs
  .map((slug) => SEO_PAGES.find((page) => page.slug === slug))
  .filter((page): page is SeoPage => Boolean(page));

export function SolutionsPreview() {
  return (
    <Section id="soluciones" className="z-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="border-slate-900/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-600"
            >
              Rutas de solucion
            </Badge>
            <h2 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
              Si ya reconoces el problema, entra por la ruta mas parecida a tu operacion.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600">
            Estas son tres entradas frecuentes para equipos que quieren ordenar backoffice,
            finanzas o procesos documentales sin abrir un proyecto gigante antes de ver valor.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredPages.map((page) => (
            <Link
              key={page.slug}
              href={`/soluciones/${page.slug}`}
              className="group rounded-[1.8rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6 shadow-[0_18px_50px_rgba(30,58,95,0.08)] transition hover:-translate-y-0.5 hover:border-slate-900/10"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-sky-700">{page.eyebrow}</div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">{page.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{page.seoDescription}</p>

              <div className="mt-5 space-y-2">
                {page.proof.slice(0, 2).map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-900/10 bg-slate-900/5 px-4 py-3 text-sm text-slate-800"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                Ver solucion
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 rounded-[1.7rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] px-5 py-5 text-sm text-slate-600 max-md:flex-col max-md:items-start">
          <div>
            <div className="font-medium text-slate-900">Tambien tenemos rutas para logistica, empresas de servicios, RRHH, reportes, carga de datos y aprobaciones.</div>
            <div className="mt-1">Si tu caso es mas especifico, entra por la biblioteca completa de soluciones y elige la que mejor calce con tu realidad.</div>
          </div>
          <Link
            href="/soluciones"
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/[0.05] px-4 py-2 font-medium text-slate-900 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Ver todas las soluciones
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
