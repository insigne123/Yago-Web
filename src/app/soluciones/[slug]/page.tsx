import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BrandStamp } from "@/components/BrandStamp";
import { COMPANY, PRIMARY_CTA } from "@/config/site";
import { getSeoPageBySlug, SEO_PAGES } from "@/config/seo-pages";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SEO_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);

  if (!page) return {};

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    keywords: page.keywords,
    alternates: {
      canonical: `/soluciones/${page.slug}`,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: `/soluciones/${page.slug}`,
      siteName: COMPANY.name,
      type: "article",
    },
  };
}

export default async function SeoSolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPageBySlug(slug);

  if (!page) notFound();

  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900">
      <Navbar ctaHref={PRIMARY_CTA.href} ctaLabel={PRIMARY_CTA.label} />

      <main id="main-content" className="main-premium py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <section className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-600">{page.eyebrow}</p>
              <h1 className="mt-4 text-balance font-headline text-4xl font-semibold text-slate-900 md:text-6xl">
                {page.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                {page.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-600">
                {page.proof.map((item) => (
                  <span key={item} className="rounded-full border border-slate-900/10 bg-white/[0.04] px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={PRIMARY_CTA.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,247,255,0.94))] px-6 py-3 text-sm font-medium text-slate-950 shadow-[0_14px_34px_rgba(5,11,19,0.24)] transition hover:-translate-y-0.5"
                >
                  {PRIMARY_CTA.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6 shadow-[0_20px_60px_rgba(30,58,95,0.08)]">
              <div className="text-xs uppercase tracking-[0.16em] text-slate-600">Donde tiene mejor fit</div>
              <div className="mt-4 grid gap-3">
                {page.fitItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-900/10 bg-slate-900/5 px-4 py-4 text-sm text-slate-800">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-700" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-12 grid gap-5 lg:grid-cols-[0.94fr_1.06fr]">
            <div className="rounded-[1.9rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6 shadow-[0_18px_50px_rgba(30,58,95,0.08)]">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-600">{page.problemTitle}</div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">{page.problemDescription}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {page.painPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-5 shadow-[0_18px_50px_rgba(30,58,95,0.08)]"
                >
                  <div className="text-sm font-medium text-slate-900">{item}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6 shadow-[0_18px_50px_rgba(30,58,95,0.08)] md:p-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">{page.startingTitle}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                La mejor primera automatizacion no siempre es la mas grande. Normalmente es la que mueve un cuello de botella real con poco riesgo y mucho aprendizaje.
              </p>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {page.startingItems.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-slate-900/10 bg-slate-900/5 p-4 text-sm leading-relaxed text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">{page.outcomesTitle}</h2>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {page.outcomes.map((item) => (
                <div key={item.title} className="rounded-[1.7rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6 shadow-[0_18px_50px_rgba(30,58,95,0.08)]">
                  <div className="inline-flex size-10 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/[0.04] text-sky-700">
                    <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="mt-4 text-xl font-semibold text-slate-900">{item.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6 shadow-[0_18px_50px_rgba(30,58,95,0.08)] md:p-8">
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">{page.processTitle}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {page.processSteps.map((step, index) => (
                <div key={step.title} className="rounded-[1.6rem] border border-slate-900/10 bg-slate-900/5 p-5">
                  <div className="text-xs uppercase tracking-[0.16em] text-slate-600">Paso {index + 1}</div>
                  <div className="mt-3 text-lg font-semibold text-slate-900">{step.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6 shadow-[0_18px_50px_rgba(30,58,95,0.08)] md:p-8">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">Preguntas frecuentes</h2>
              <div className="mt-6 space-y-3">
                {page.faq.map((item) => (
                  <article key={item.question} className="rounded-[1.4rem] border border-slate-900/10 bg-slate-900/5 p-4">
                    <h3 className="text-sm font-medium text-slate-900">{item.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6 shadow-[0_18px_50px_rgba(30,58,95,0.08)] md:p-8">
              <div className="text-sm font-medium text-slate-900">Links relacionados</div>
              <div className="mt-5 grid gap-3">
                {page.relatedLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center justify-between gap-3 rounded-[1.3rem] border border-slate-900/10 bg-slate-900/5 px-4 py-4 text-sm text-slate-800 transition hover:bg-slate-50 hover:text-slate-900"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <BrandStamp />
      <Footer />
    </div>
  );
}
