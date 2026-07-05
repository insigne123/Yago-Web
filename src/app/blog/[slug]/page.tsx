import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from "@/config/blog";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { COMPANY } from "@/config/site";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Yago Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [{ url: `${SITE_URL}${post.image}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.date,
    inLanguage: "es",
    author: { "@type": "Organization", name: COMPANY.name, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: { "@type": "ImageObject", url: `${SITE_URL}${COMPANY.logo}` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  return (
    <div className="relative min-h-screen overflow-x-clip text-white">
      <Script
        id={`jsonld-article-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar ctaHref="/#contacto" ctaLabel="Pedir analisis" />
      <main id="main-content" className="main-premium pb-24 pt-28 md:pt-32">
        <article className="mx-auto max-w-3xl px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-200"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al blog
          </Link>

          <header className="mt-6">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-cyan-300/25 bg-cyan-400/[0.08] px-3 py-1 text-cyan-100">
                {post.category}
              </span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {`${post.readingMinutes} min de lectura`}
              </span>
            </div>
            <h1 className="mt-4 text-balance font-headline text-3xl font-semibold leading-tight text-white md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-slate-300">
              {post.description}
            </p>
          </header>

          <div className="card-glow-border relative mt-8 overflow-hidden rounded-[1.8rem] border border-white/10">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={`Portada del artículo: ${post.title}`}
              width={960}
              height={540}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-10 flex flex-col gap-8">
            {post.sections.map((section, i) => (
              <section key={section.heading ?? `intro-${i}`}>
                {section.heading ? (
                  <h2 className="text-balance text-2xl font-semibold text-white">
                    {section.heading}
                  </h2>
                ) : null}
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-pretty leading-relaxed text-slate-300">
                    {p}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-4 flex flex-col gap-2">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 leading-relaxed text-slate-300">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cyan-300"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          {/* CTA final */}
          <div className="card-glow-border mt-14 flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(120deg,rgba(34,211,238,0.08),rgba(139,92,246,0.08))] p-8 text-center">
            <h2 className="text-balance text-2xl font-semibold text-white">
              ¿Quieres aplicar esto en tu operación?
            </h2>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-slate-300">
              Te ayudamos a identificar el proceso con mejor retorno y armamos un plan concreto.
            </p>
            <a
              href="/#contacto"
              className="btn-vibrant inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            >
              Pedir análisis gratuito
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </article>

        {/* Relacionados */}
        <aside className="mx-auto mt-16 max-w-7xl px-4" aria-label="Artículos relacionados">
          <h2 className="text-xl font-semibold text-white">Sigue leyendo</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group hover-lift relative flex flex-col overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.84),rgba(10,16,25,0.96))] transition hover:border-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={rp.image || "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1019] via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <span className="text-xs text-cyan-200/80">{rp.category}</span>
                  <h3 className="text-balance text-base font-semibold leading-snug text-white">
                    {rp.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}
