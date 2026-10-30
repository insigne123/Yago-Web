import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ActionLink, BOOKING_ACTION, CtaBand, PageHero, PageSection, PageShell, SectionHeader, TextLink } from "@/components/site/PageKit";
import { getEvidenceServiceLink, getPublishedCaseBySlug, getPublishedCaseStudies, getPublishedTestimonials } from "@/config/evidence";
import { createPageMetadata, SITE_URL } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPublishedCaseStudies().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = getPublishedCaseBySlug((await params).slug);
  if (!item) return {};
  return createPageMetadata({ title: `${item.title} | Caso ${item.client} | YAGO`, description: item.summary, path: `/casos/${item.slug}`, type: "article", publishedTime: item.publishedDate, modifiedTime: item.modifiedDate || item.publishedDate });
}

export default async function CasePage({ params }: Props) {
  const item = getPublishedCaseBySlug((await params).slug);
  if (!item) notFound();
  const testimonial = getPublishedTestimonials().find((quote) => quote.id === item.testimonialId);
  const sections = [
    { title: "Situación inicial", text: item.before },
    { title: "Qué implementamos", text: item.implemented },
    { title: "Resultado observado", text: item.result },
    { title: "Cómo se midió", text: item.measurement },
  ];
  const jsonLd = {
    "@context": "https://schema.org", "@type": "Article", headline: item.title, description: item.summary,
    datePublished: item.publishedDate, dateModified: item.modifiedDate || item.publishedDate, inLanguage: "es-CL",
    author: { "@id": `${SITE_URL}/#organization`, "@type": "Organization", name: "YAGO", url: `${SITE_URL}/nosotros` },
    publisher: { "@id": `${SITE_URL}/#organization` }, mainEntityOfPage: { "@id": `${SITE_URL}/casos/${item.slug}` },
    about: item.services.map((slug) => { const service = getEvidenceServiceLink(slug); return { "@type": "Service", name: service.name, url: `${SITE_URL}${service.href}` }; }),
    ...(item.source ? { citation: { "@type": "CreativeWork", name: item.source.label, url: item.source.href } } : {}),
  };

  return (
    <PageShell>
      <JsonLd id={`jsonld-case-${item.slug}`} data={jsonLd} />
      <PageHero top={<Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Casos", href: "/casos" }, { name: item.client, href: `/casos/${item.slug}` }]} />} eyebrow={`Caso documentado · ${item.client}`} title={item.title} description={item.summary} actions={<ActionLink action={BOOKING_ACTION} arrow />}>
        <p className="text-sm text-slate-400">Publicado el <time dateTime={item.publishedDate}>{new Date(`${item.publishedDate}T12:00:00`).toLocaleDateString("es-CL")}</time></p>
      </PageHero>
      <PageSection tone="light">
        <article className="mx-auto max-w-3xl space-y-12">
          {sections.map((section) => <section key={section.title}><h2 className="y-h3 text-slate-950">{section.title}</h2>{section.text.split(/\n{2,}/).map((paragraph) => <p key={paragraph} className="mt-4 text-[16.5px] leading-relaxed text-slate-700">{paragraph}</p>)}</section>)}
          {item.source ? <TextLink href={item.source.href}>{item.source.label}</TextLink> : null}
        </article>
      </PageSection>
      {item.metrics.length ? (
        <PageSection id="metricas" tone="mist">
          <SectionHeader eyebrow="Medición" title="Resultados con período y método." />
          <dl className="mt-10 grid gap-5 md:grid-cols-3">{item.metrics.map((metric) => <div key={metric.label} className="y-card p-7"><dt className="font-medium text-slate-950">{metric.label}</dt><dd className="mt-3 text-3xl font-semibold text-slate-950">{metric.value}</dd><dd className="mt-3 text-sm text-sky-700">{metric.basis === "estimated" ? "Estimación" : "Medición"} · {metric.period}</dd><dd className="mt-3 text-sm leading-relaxed text-slate-600">{metric.method}</dd></div>)}</dl>
        </PageSection>
      ) : null}
      {testimonial ? (
        <PageSection id="experiencia" tone="light"><figure className="mx-auto max-w-3xl"><blockquote className="font-headline text-2xl leading-relaxed text-slate-950">{testimonial.quote}</blockquote><figcaption className="mt-5 text-slate-600">{testimonial.person} · {testimonial.role} · {testimonial.company}{testimonial.source ? <div className="mt-4"><TextLink href={testimonial.source.href}>{testimonial.source.label}</TextLink></div> : null}</figcaption></figure></PageSection>
      ) : null}
      <PageSection id="servicios" tone="light"><SectionHeader eyebrow="Capacidades aplicadas" title="Servicios relacionados con este caso." /><ul className="mt-8 space-y-4">{item.services.map((slug) => { const service = getEvidenceServiceLink(slug); return <li key={slug}><TextLink href={service.href}>{service.name}</TextLink></li>; })}</ul></PageSection>
      <CtaBand title="Evaluemos un proyecto para tu empresa." text="Revisamos tu contexto y definimos alcance y medición para tu operación." />
    </PageShell>
  );
}
