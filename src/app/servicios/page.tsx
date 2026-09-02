import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/config/services";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Servicios de automatización de procesos con IA | YAGO",
  description:
    "Automatización de procesos, apps de gestión, páginas web y capacitación en IA. Conoce los servicios de Yago para reducir trabajo manual y errores.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900">
      <Navbar ctaHref="/#contacto" ctaLabel="Pedir analisis" />
      <main id="main-content" className="main-premium pb-24 pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-700/80">Servicios</p>
            <h1 className="mt-4 text-balance font-headline text-4xl font-semibold text-slate-900 md:text-6xl">
              Soluciones para operar con <span className="text-shimmer">menos trabajo manual</span>
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-600">
              Desde flujos automatizados hasta capacitación de equipos: elegimos el camino con mejor
              retorno para tu operación.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group hover-lift card-glow-border relative overflow-hidden rounded-[1.8rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,250,254,1))] shadow-[0_18px_50px_rgba(30,58,95,0.08)] transition hover:border-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`Abrir detalle de ${s.title}`}
              >
                <div className="relative h-48 overflow-hidden md:h-56">
                  <Image
                    src={s.image || "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                </div>

                <div className="p-6 pt-4">
                  <h2 className="text-2xl font-semibold text-slate-900">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.short}</p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-slate-900/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-600">
                      {s.duration.split(";")[0]}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-700">
                      Ver detalle
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="card-glow-border mt-16 flex flex-col items-center gap-4 rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(120deg,rgba(34,211,238,0.08),rgba(139,92,246,0.08))] p-8 text-center md:p-10">
            <h2 className="text-balance text-2xl font-semibold text-slate-900 md:text-3xl">
              ¿No sabes por dónde partir?
            </h2>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-slate-600">
              Cuéntanos tu proceso más lento y te respondemos con el quick win recomendado en 48 horas.
            </p>
            <a
              href="/#contacto"
              className="btn-vibrant inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            >
              Pedir análisis gratuito
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
