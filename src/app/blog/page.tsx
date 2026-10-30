import Link from "next/link";
import { BLOG_AUTHOR, BLOG_POSTS, getBlogCollections } from "@/config/blog";
import { FeaturedPostCard, PostCard } from "@/components/blog/PostCard";
import { CtaBand, PageHero, PageSection, PageShell } from "@/components/site/PageKit";
import { createCollectionJsonLd, createPageMetadata, SITE_URL } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPersonJsonLd } from "@/config/team";
import { CATALOG_UPDATED } from "@/config/catalog-guidance";

export const metadata = createPageMetadata({
  title: "Guías de automatización, integración de IA y OCR | YAGO",
  description:
    "Guías para empresas en Chile sobre automatización, integración de IA, aplicaciones, desarrollo asistido y OCR. Criterios para evaluar proyectos y proveedores.",
  path: "/blog",
  image: "/blog/opengraph-image",
  authors: [{ name: BLOG_AUTHOR.name, url: new URL(BLOG_AUTHOR.url, SITE_URL).toString() }],
});

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;
  const categories = Array.from(new Set(BLOG_POSTS.map((post) => post.category)));
  const collections = getBlogCollections(rest);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://yago.cl/blog#blog",
    name: "Blog de YAGO",
    description: "Guías de automatización, integración de IA, desarrollo de aplicaciones y OCR para empresas en Chile.",
    url: "https://yago.cl/blog",
    inLanguage: "es-CL",
    publisher: { "@id": "https://yago.cl/#organization" },
    author: getPersonJsonLd(BLOG_AUTHOR, SITE_URL),
    blogPost: BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://yago.cl/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.modifiedDate || post.date,
    })),
  };

  return (
    <PageShell>
      <JsonLd id="jsonld-blog" data={blogJsonLd} />
      <JsonLd id="jsonld-blog-collection" data={createCollectionJsonLd({ name: "Guías de YAGO por necesidad", description: "Guías de automatización, integración, aplicaciones, agentes, OCR y procesos laborales.", path: "/blog", modifiedDate: CATALOG_UPDATED, items: BLOG_POSTS.map((post) => ({ name: post.title, href: `/blog/${post.slug}`, description: post.excerpt })) })} />
      <PageHero
        eyebrow="Blog"
        title="IA y automatización,"
        highlight="con criterios para decidir."
        description="Guías de integración, desarrollo y documentos para elegir un primer proyecto y evaluar cómo implementarlo en tu empresa."
      >
        <p className="font-mono text-[12.5px] uppercase tracking-[0.1em] text-slate-400">
          {BLOG_POSTS.length} artículos <span aria-hidden="true">·</span> {categories.join(", ")}
        </p>
        <p className="text-sm text-slate-300">Guías firmadas por <Link href={BLOG_AUTHOR.url} className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-sky-300">{BLOG_AUTHOR.name}</Link>.</p>
        <nav aria-label="Guías por necesidad" className="mt-2 flex flex-wrap gap-2">{collections.map((collection) => <a key={collection.id} href={`#guias-${collection.id}`} className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10">{collection.title}</a>)}</nav>
      </PageHero>

      <PageSection id="articulos" tone="light">
        <FeaturedPostCard post={featured} />

        {collections.map((collection) => <section key={collection.id} id={`guias-${collection.id}`} aria-labelledby={`guias-${collection.id}-titulo`} className="mt-16 scroll-mt-32 md:mt-20"><div className="flex flex-col gap-3 border-b border-slate-200 pb-6"><h2 id={`guias-${collection.id}-titulo`} className="y-h3 text-[1.6rem] text-slate-950">{collection.title}</h2><p className="text-[15px] leading-relaxed text-slate-600">{collection.description}</p></div><div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{collection.posts.map((post) => <PostCard key={post.slug} post={post} />)}</div></section>)}
      </PageSection>

      <CtaBand
        title="¿Quieres aplicar esto en tu operación?"
        text="Cuéntanos el proceso que necesitas mejorar y revisemos un primer alcance con datos, conexiones y criterios de aceptación."
        secondary={{ label: "Pedir análisis gratuito", href: "/#contacto" }}
      />
    </PageShell>
  );
}
