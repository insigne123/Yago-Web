import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { BLOG_AUTHOR, BLOG_POSTS, getBlogPostBySlug } from "@/config/blog";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return createPageMetadata({
    title: `${post.title} — Blog Yago`,
    description: post.description,
    keywords: post.keywords,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.modifiedDate || post.date,
  });
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
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${base}${post.image}`,
    datePublished: post.date,
    dateModified: post.modifiedDate || post.date,
    keywords: post.keywords.join(", "),
    inLanguage: "es",
    author: { "@type": "Organization", "@id": `${base}/#organization`, name: "YAGO", url: base },
    publisher: { "@id": `${base}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/blog/${post.slug}` },
  };

  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar ctaHref="/#contacto" ctaLabel="Pedir análisis" />
      <main id="main-content" className="main-premium pb-24 pt-28 md:pt-32">
        <article className="mx-auto max-w-3xl px-4">
          <Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-600 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 rounded-full"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver al blog
          </Link>

          <header className="mt-6">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
              <span className="rounded-full border border-cyan-300/20 bg-cyan-400/[0.08] px-3 py-1 font-medium text-cyan-700">
                {post.category}
              </span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.modifiedDate && post.modifiedDate !== post.date ? (
                <span>Revisado el <time dateTime={post.modifiedDate}>{formatDate(post.modifiedDate)}</time></span>
              ) : null}
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {post.readingTime} de lectura
              </span>
            </div>
            <h1 className="mt-4 text-balance font-headline text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 border-l-2 border-sky-500 pl-4 text-sm leading-relaxed text-slate-700">
              <div className="font-semibold text-slate-950">{BLOG_AUTHOR.name}</div>
              <div>{BLOG_AUTHOR.role}</div>
            </div>
          </header>

          <div className="card-glow-border relative mt-8 overflow-hidden rounded-[1.8rem] border border-slate-900/10 shadow-[0_24px_90px_rgba(30,58,95,0.14)]">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={`Ilustración del artículo: ${post.title}`}
              width={960}
              height={540}
              priority
              className="h-auto w-full object-cover"
            />
          </div>

          <p className="mt-8 text-pretty text-lg leading-relaxed text-slate-800">{post.intro}</p>

          {post.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-balance font-headline text-2xl font-semibold text-slate-900 md:text-3xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-pretty leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-4 grid gap-2.5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 leading-relaxed text-slate-600">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-700" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          {post.sources?.length ? (
            <section className="mt-12 border-t border-slate-900/10 pt-8" aria-labelledby="fuentes-articulo">
              <h2 id="fuentes-articulo" className="text-2xl font-semibold text-slate-950">Fuentes y referencias</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                {post.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer" className="font-medium text-sky-800 underline underline-offset-4 hover:text-slate-950">
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="card-glow-border mt-12 rounded-[1.8rem] border border-slate-900/10 bg-[linear-gradient(120deg,rgba(34,211,238,0.08),rgba(139,92,246,0.08))] p-6 md:p-8">
            <h2 className="font-headline text-xl font-semibold text-slate-900 md:text-2xl">En resumen</h2>
            <p className="mt-3 text-pretty leading-relaxed text-slate-800">{post.conclusion}</p>
            <a
              href="/#contacto"
              className="btn-vibrant mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            >
              Pedir análisis gratuito
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </article>

        {/* Artículos relacionados */}
        <aside className="mx-auto mt-20 max-w-7xl px-4" aria-label="Artículos relacionados">
          <h2 className="text-center font-headline text-2xl font-semibold text-slate-900 md:text-3xl">
            Sigue leyendo
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group hover-lift card-glow-border relative flex flex-col overflow-hidden rounded-[1.8rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,250,254,1))] transition hover:border-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label={`Leer artículo: ${rel.title}`}
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={rel.image || "/placeholder.svg"}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-balance text-base font-semibold leading-snug text-slate-900">{rel.title}</h3>
                  <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-medium text-cyan-700">
                    Leer
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
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
