import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/config/blog";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Blog — Yago | Automatización de procesos e IA aplicada",
  description:
    "Guías prácticas sobre automatización de procesos, OCR, agentes de IA y ROI. Aprende a eliminar trabajo manual en tu empresa con casos y ejemplos reales.",
  alternates: { canonical: "/blog" },
};

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
    <div className="relative min-h-screen overflow-x-clip text-white">
      <Navbar ctaHref="/#contacto" ctaLabel="Pedir analisis" />
      <main id="main-content" className="main-premium pb-24 pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">Blog</p>
            <h1 className="mt-4 text-balance font-headline text-4xl font-semibold text-white md:text-6xl">
              Ideas para operar con <span className="text-shimmer">menos trabajo manual</span>
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-300">
              Guías prácticas sobre automatización, IA y operaciones, escritas desde proyectos reales.
            </p>
          </div>

          {/* Artículo destacado */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group hover-lift card-glow-border relative mt-14 grid overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.84),rgba(10,16,25,0.96))] shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition hover:border-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 lg:grid-cols-2"
          >
            <div className="relative h-56 overflow-hidden lg:h-auto lg:min-h-[320px]">
              <Image
                src={featured.image || "/placeholder.svg"}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1019]/70 via-transparent to-transparent lg:bg-gradient-to-r" />
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="rounded-full border border-cyan-300/25 bg-cyan-400/[0.08] px-3 py-1 text-cyan-100">
                  {featured.category}
                </span>
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {`${featured.readingMinutes} min`}
                </span>
              </div>
              <h2 className="text-balance text-2xl font-semibold text-white md:text-3xl">
                {featured.title}
              </h2>
              <p className="text-pretty text-sm leading-relaxed text-slate-300">
                {featured.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
                Leer artículo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>

          {/* Grid de artículos */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group hover-lift relative flex flex-col overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.84),rgba(10,16,25,0.96))] shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition hover:border-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1019] via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6 pt-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="rounded-full border border-cyan-300/25 bg-cyan-400/[0.08] px-3 py-1 text-cyan-100">
                      {post.category}
                    </span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <h2 className="text-balance text-lg font-semibold leading-snug text-white">
                    {post.title}
                  </h2>
                  <p className="line-clamp-3 text-sm leading-relaxed text-slate-300">
                    {post.description}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-cyan-200">
                    Leer artículo
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="card-glow-border mt-16 flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(120deg,rgba(34,211,238,0.08),rgba(139,92,246,0.08))] p-8 text-center md:p-10">
            <h2 className="text-balance text-2xl font-semibold text-white md:text-3xl">
              ¿Quieres aplicar esto en tu empresa?
            </h2>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-slate-300">
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
