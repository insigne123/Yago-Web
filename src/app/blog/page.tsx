import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/config/blog";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Blog de automatización de procesos e IA | YAGO",
  description:
    "Guías prácticas sobre automatización de procesos, IA para empresas, OCR, agentes inteligentes y ROI. Contenido sin humo para equipos de operaciones y backoffice.",
  path: "/blog",
});

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900">
      <Navbar ctaHref="/#contacto" ctaLabel="Pedir análisis" />
      <main id="main-content" className="main-premium pb-24 pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-700/80">Blog</p>
            <h1 className="mt-4 text-balance font-headline text-4xl font-semibold text-slate-900 md:text-6xl">
              Automatización, <span className="text-shimmer">sin humo</span>
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-600">
              Guías prácticas sobre IA, procesos y retorno real, escritas para equipos de operaciones,
              backoffice y finanzas.
            </p>
          </div>

          {/* Artículo destacado */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group hover-lift card-glow-border mt-14 grid overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,250,254,1))] shadow-[0_18px_50px_rgba(30,58,95,0.08)] transition hover:border-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background md:grid-cols-2"
            aria-label={`Leer artículo: ${featured.title}`}
          >
            <div className="relative h-56 overflow-hidden md:h-full md:min-h-[20rem]">
              <Image
                src={featured.image || "/placeholder.svg"}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent md:bg-gradient-to-r" />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-400/[0.08] px-3 py-1 font-medium text-cyan-700">
                  {featured.category}
                </span>
                <span>{formatDate(featured.date)}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {featured.readingTime}
                </span>
              </div>
              <h2 className="mt-4 text-balance text-2xl font-semibold text-slate-900 md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-slate-600 md:text-base">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-700">
                Leer artículo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>

          {/* Resto de artículos */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group hover-lift card-glow-border relative flex flex-col overflow-hidden rounded-[1.8rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,250,254,1))] shadow-[0_18px_50px_rgba(30,58,95,0.08)] transition hover:border-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`Leer artículo: ${post.title}`}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6 pt-4">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-400/[0.08] px-2.5 py-0.5 font-medium text-cyan-700">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="mt-3 text-balance text-lg font-semibold leading-snug text-slate-900">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-medium text-cyan-700">
                    Leer artículo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="card-glow-border mt-16 flex flex-col items-center gap-4 rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(120deg,rgba(34,211,238,0.08),rgba(139,92,246,0.08))] p-8 text-center md:p-10">
            <h2 className="text-balance text-2xl font-semibold text-slate-900 md:text-3xl">
              ¿Quieres aplicar esto en tu operación?
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
