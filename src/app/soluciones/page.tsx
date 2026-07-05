import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BrandStamp } from "@/components/BrandStamp";
import { PRIMARY_CTA } from "@/config/site";
import { SEO_PAGES } from "@/config/seo-pages";

export const metadata: Metadata = {
  title: "Soluciones de automatizacion para operaciones, backoffice y finanzas | YAGO",
  description:
    "Soluciones de YAGO para equipos que buscan automatizacion de backoffice, finanzas y aprobaciones con foco en menos trabajo manual y mas control operativo.",
  alternates: {
    canonical: "/soluciones",
  },
};

export default function SolutionsIndexPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-white">
      <Navbar ctaHref={PRIMARY_CTA.href} ctaLabel={PRIMARY_CTA.label} />

      <main id="main-content" className="main-premium py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <section className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Soluciones</p>
            <h1 className="mt-4 text-balance font-headline text-4xl font-semibold text-white md:text-6xl">
              Paginas pensadas para problemas operativos concretos.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
              Si llegaste buscando una necesidad mas especifica, aqui reunimos las soluciones con mejor fit
              para equipos de operaciones, backoffice y finanzas que quieren reducir trabajo manual,
              errores y tiempos de ciclo.
            </p>
          </section>

          <section className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SEO_PAGES.map((page) => (
              <Link
                key={page.slug}
                href={`/soluciones/${page.slug}`}
                className="group rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.9),rgba(10,16,25,0.98))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:border-white/14"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-sky-100">{page.eyebrow}</div>
                <h2 className="mt-4 text-2xl font-semibold text-white">{page.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{page.seoDescription}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {page.proof.slice(0, 2).map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
                  Ver pagina
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </section>
        </div>
      </main>

      <BrandStamp />
      <Footer />
    </div>
  );
}
