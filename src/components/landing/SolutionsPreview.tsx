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
              className="border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300"
            >
              Rutas de solucion
            </Badge>
            <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
              Si ya reconoces el problema, entra por la ruta mas parecida a tu operacion.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300">
            Estas son tres entradas frecuentes para equipos que quieren ordenar backoffice,
            finanzas o procesos documentales sin abrir un proyecto gigante antes de ver valor.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredPages.map((page) => (
            <Link
              key={page.slug}
              href={`/soluciones/${page.slug}`}
              className="group rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.88),rgba(10,16,25,0.98))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:border-white/14"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-sky-100">{page.eyebrow}</div>
              <h3 className="mt-4 text-2xl font-semibold text-white">{page.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{page.seoDescription}</p>

              <div className="mt-5 space-y-2">
                {page.proof.slice(0, 2).map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
                Ver solucion
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.86),rgba(10,16,25,0.96))] px-5 py-5 text-sm text-slate-300 max-md:flex-col max-md:items-start">
          <div>
            <div className="font-medium text-white">Tambien tenemos rutas para logistica, empresas de servicios, RRHH, reportes, carga de datos y aprobaciones.</div>
            <div className="mt-1">Si tu caso es mas especifico, entra por la biblioteca completa de soluciones y elige la que mejor calce con tu realidad.</div>
          </div>
          <Link
            href="/soluciones"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 font-medium text-white transition hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Ver todas las soluciones
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
