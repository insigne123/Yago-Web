import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, ExternalLink, RefreshCw } from "lucide-react";
import { BLOG_AUTHOR, BLOG_POSTS, getBlogPostBySlug, type BlogSection } from "@/config/blog";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PostCard, formatPostDate } from "@/components/blog/PostCard";
import { ARTICLE_PROSE, headingId } from "@/components/blog/articleProse";
import { ActionLink, BOOKING_ACTION, CtaBand, PageHero, PageSection, PageShell } from "@/components/site/PageKit";
import { createPageMetadata, SITE_URL } from "@/lib/seo";
import { ReadingProgress } from "@/components/motion/ReadingProgress";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPersonJsonLd } from "@/config/team";
import { YagoMark } from "@/components/brand/YagoLogo";
import { keepCodesTogether } from "@/lib/typography";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.seoTitle || `${post.title} | YAGO`,
    description: post.description,
    keywords: post.keywords,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.modifiedDate || post.date,
    authors: [{ name: BLOG_AUTHOR.name, url: new URL(BLOG_AUTHOR.url, SITE_URL).toString() }],
  });
}

const SUMMARY_ID = "en-resumen";
const SOURCES_ID = "fuentes-articulo";

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(post.relatedSlugs?.includes(b.slug) || b.category === post.category) - Number(post.relatedSlugs?.includes(a.slug) || a.category === post.category))
    .slice(0, 3);
  const offering = post.service || post.product;
  const revised = post.modifiedDate && post.modifiedDate !== post.date ? post.modifiedDate : null;

  const toc = [
    ...post.sections.map((section) => ({ id: headingId(section.heading), label: section.heading })),
    { id: SUMMARY_ID, label: "En resumen" },
    ...(post.sources?.length ? [{ id: SOURCES_ID, label: "Fuentes y referencias" }] : []),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${base}${post.image}`,
    datePublished: post.date,
    dateModified: post.modifiedDate || post.date,
    keywords: post.keywords.join(", "),
    inLanguage: "es-CL",
    author: getPersonJsonLd(BLOG_AUTHOR, base),
    publisher: { "@id": `${base}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/blog/${post.slug}` },
    articleSection: post.category,
    wordCount: [post.intro, ...post.sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? []), ...(section.table?.columns ?? []), ...(section.table?.rows.flat() ?? []), ...(section.links?.map((link) => link.label) ?? [])]), post.conclusion]
      .join(" ")
      .split(/\s+/).length,
    abstract: post.conclusion,
    ...(post.resource ? { associatedMedia: { "@type": "DigitalDocument", name: post.resource.label, description: post.resource.description, url: `${base}${post.resource.href}`, encodingFormat: "text/csv" } } : {}),
    ...(post.sources?.length
      ? { citation: post.sources.map((source) => ({ "@type": "CreativeWork", name: source.title, url: source.url })) }
      : {}),
    ...(offering ? { mentions: [{ "@type": post.service ? "Service" : "SoftwareApplication", name: offering.name, url: `${base}${offering.href}` }] } : {}),
  };

  return (
    <PageShell>
      <ReadingProgress targetId="articulo" />
      <JsonLd id={`jsonld-article-${post.slug}`} data={jsonLd} />

      {/* ---------------- HERO ---------------- */}
      <PageHero
        top={
          <Breadcrumbs
            items={[
              { name: "Inicio", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />
        }
        eyebrow={post.category}
        title={post.title}
      >
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[14.5px] text-slate-300">
          <li className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
            <span>
              Publicado el <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </span>
          </li>
          {revised ? (
            <li className="inline-flex items-center gap-2">
              <RefreshCw className="h-4 w-4 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
              <span>
                Revisado el <time dateTime={revised}>{formatPostDate(revised)}</time>
              </span>
            </li>
          ) : null}
          <li className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
            {post.readingTime} de lectura
          </li>
        </ul>
        <div className="flex items-center gap-3 border-t border-white/[0.08] pt-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/[0.06] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
            <YagoMark size={24} />
          </span>
          <span className="flex flex-col text-[14.5px] leading-snug">
            <Link href={BLOG_AUTHOR.url} className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-sky-300">{BLOG_AUTHOR.name}</Link>
            <span className="text-slate-400">{BLOG_AUTHOR.role}</span>
          </span>
        </div>
      </PageHero>

      {/* ---------------- ARTÍCULO ---------------- */}
      <PageSection id="articulo" tone="light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-10">
          <article className="min-w-0 lg:col-span-7">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-mist shadow-[0_0_0_1px_rgba(15,23,42,0.07),0_24px_50px_-30px_rgba(15,23,42,0.35)]">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={`Ilustración del artículo: ${post.title}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover"
              />
            </div>

            <div className={`mt-12 max-w-[68ch] ${ARTICLE_PROSE}`}>
              <p className="font-headline text-[1.2rem] leading-[1.6] tracking-[-0.01em] text-slate-900 sm:text-[1.3rem]">{post.intro}</p>
              {post.resource ? <aside aria-label="Recurso para la evaluación" className="not-prose my-8 rounded-2xl bg-mist p-6"><p className="font-semibold text-slate-950">Plantilla editable</p><p className="mt-2 text-[15px] leading-relaxed text-slate-600">{post.resource.description}</p><a href={post.resource.href} download className={`y-link mt-4 min-h-11 plausible-event-name=Resource+Download plausible-event-service=${post.resource.service} plausible-event-location=article`}>{post.resource.label}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></a></aside> : null}

              {post.sections.map((section) => (
                <SectionBody key={section.heading} {...section} />
              ))}
            </div>

            <section
              aria-labelledby={SUMMARY_ID}
              className="mt-14 max-w-[68ch] rounded-[1.5rem] bg-mist p-7 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)] sm:p-9"
            >
              <h2 id={SUMMARY_ID} className="y-eyebrow scroll-mt-28">
                En resumen
              </h2>
              <p className="mt-4 text-pretty font-headline text-[1.15rem] leading-[1.6] tracking-[-0.01em] text-slate-900 sm:text-[1.25rem]">
                {post.conclusion}
              </p>
            </section>

            {post.sources?.length ? (
              <section aria-labelledby={SOURCES_ID} className="mt-12 max-w-[68ch] border-t border-slate-200 pt-10">
                <h2 id={SOURCES_ID} className="y-h3 scroll-mt-28 text-[1.35rem] text-slate-950">
                  Fuentes y referencias
                </h2>
                <ol className="mt-5 flex flex-col gap-3">
                  {post.sources.map((source, index) => (
                    <li key={source.url} className="flex gap-4 text-[15.5px] leading-relaxed">
                      <span className="pt-0.5 font-mono text-[12.5px] text-slate-600">{String(index + 1).padStart(2, "0")}</span>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-w-0 items-start gap-1.5 font-medium text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-900 hover:decoration-sky-600"
                      >
                        <span className="min-w-0 break-words">{source.title}</span>
                        <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span className="sr-only">(se abre en una pestaña nueva)</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}

            <aside id="sobre-el-autor" aria-labelledby="autor-titulo" className="mt-12 max-w-[68ch] rounded-[1.5rem] bg-mist p-7 sm:p-8">
              <span className="y-eyebrow" data-revealed="">Sobre el autor</span>
              <h2 id="autor-titulo" className="mt-4 font-headline text-[1.35rem] font-semibold text-slate-950">{BLOG_AUTHOR.name}</h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-slate-700">{BLOG_AUTHOR.bio}</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                <Link href={BLOG_AUTHOR.url} className="y-link">Perfil en YAGO<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
                {BLOG_AUTHOR.profileUrl ? <a href={BLOG_AUTHOR.profileUrl} target="_blank" rel="noreferrer" className="y-link">LinkedIn profesional<ExternalLink className="h-4 w-4" aria-hidden="true" /><span className="sr-only">(se abre en una pestaña nueva)</span></a> : null}
              </div>
            </aside>

            {offering ? (
              <aside
                aria-label={`${post.service ? "Servicio" : "Producto"} relacionado: ${offering.name}`}
                className="y-dark relative mt-12 max-w-[68ch] overflow-hidden rounded-[1.5rem] bg-[#0b1220] p-7 shadow-[0_30px_60px_-30px_rgba(11,18,32,0.7)] sm:p-8"
              >
                <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-400/[0.18] blur-[60px]" />
                <div className="relative flex flex-col items-start gap-3">
                  <span className="y-eyebrow">{post.service ? "Implementación con YAGO" : "Si lo haces a volumen"}</span>
                  <p className="text-[16.5px] leading-relaxed text-slate-200">{offering.text}</p>
                  <Link href={offering.href} className="y-btn y-btn-primary y-btn-sm mt-2">
                    Conocer {offering.name}
                    <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            ) : null}

            <div className="mt-12 flex max-w-[68ch] flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8">
              <Link href="/blog" className="y-link">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Volver al blog
              </Link>
              <p className="font-mono text-[12.5px] text-slate-600">
                {post.category} <span aria-hidden="true">·</span> {post.readingTime}
              </p>
            </div>
          </article>

          {/* Índice y llamado a la acción (escritorio) */}
          <aside className="hidden lg:col-span-4 lg:col-start-9 lg:block xl:col-span-3 xl:col-start-10" aria-label="Índice y contacto">
            <div className="sticky top-28 flex flex-col gap-6">
              <nav aria-label="Contenido del artículo" className="rounded-[1.5rem] bg-mist p-6 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.06)]">
                <p className="font-mono text-[11.5px] font-medium uppercase tracking-[0.12em] text-slate-600">En este artículo</p>
                <ol className="mt-4 flex flex-col border-l border-slate-200">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[14.5px] leading-snug text-slate-700 transition-colors hover:border-sky-500 hover:text-slate-950"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="y-dark relative overflow-hidden rounded-[1.5rem] bg-[#0b1220] p-6 shadow-[0_30px_60px_-30px_rgba(11,18,32,0.7)]">
                <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-400/[0.16] blur-[60px]" />
                <div className="relative flex flex-col items-start gap-4">
                  <span className="y-eyebrow">Diagnóstico</span>
                  <p className="font-headline text-[1.2rem] font-semibold leading-snug tracking-[-0.015em] text-white">
                    ¿Quieres aplicar esto en tu operación?
                  </p>
                  <p className="text-[14.5px] leading-relaxed text-slate-300">
                    Revisamos tu necesidad, datos y sistemas para proponer un primer alcance.
                  </p>
                  <ActionLink action={BOOKING_ACTION} size="sm" arrow className="w-full" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </PageSection>

      {/* ---------------- RELACIONADOS ---------------- */}
      <PageSection id="sigue-leyendo" tone="mist">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-3xl flex-col gap-5">
            <span className="y-eyebrow">Sigue leyendo</span>
            <h2 className="y-h2 text-slate-950">Más guías del blog.</h2>
          </div>
          <Link href="/blog" className="y-link shrink-0">
            Ver todos los artículos
            <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {related.map((rel) => (
            <PostCard key={rel.slug} post={rel} />
          ))}
        </div>
      </PageSection>

      <CtaBand
        title="¿Quieres aplicar esto en tu operación?"
        text="Cuéntanos qué necesitas automatizar, integrar o desarrollar y revisemos un primer alcance para tu empresa."
        secondary={{ label: "Pedir análisis gratuito", href: "/#contacto" }}
      />
    </PageShell>
  );
}

function SectionBody({ heading, paragraphs, bullets, table, links }: BlogSection) {
  return (
    <>
      <h2 id={headingId(heading)}>{keepCodesTogether(heading)}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {bullets?.length ? (
        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {table ? (
        <div role="region" aria-labelledby={headingId(heading)} tabIndex={0} className="not-prose my-8 max-w-full overflow-x-auto rounded-2xl border border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2">
          <table className="w-full min-w-[32rem] border-collapse text-left text-[14.5px] leading-relaxed text-slate-700">
            <caption className="sr-only">{heading}</caption>
            <thead className="bg-mist text-slate-950"><tr>{table.columns.map((column) => <th key={column} scope="col" className="px-5 py-4 font-semibold">{column}</th>)}</tr></thead>
            <tbody>{table.rows.map((row) => <tr key={row[0]} className="border-t border-slate-200">{row.map((cell, index) => index === 0 ? <th key={index} scope="row" className="px-5 py-4 font-medium text-slate-950">{cell}</th> : <td key={index} className="px-5 py-4">{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      ) : null}
      {links?.length ? <ul>{links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul> : null}
    </>
  );
}
