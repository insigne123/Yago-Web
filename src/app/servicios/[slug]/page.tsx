import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { getServiceBySlug, SERVICES } from "@/config/services";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@yago.cl";
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};

  return {
    title: svc.seoTitle || `${svc.title} — Yago`,
    description: svc.seoDescription || svc.pageSubtitle || svc.short,
    alternates: { canonical: `/servicios/${svc.slug}` },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  const baseMsg = `Hola YAGO, me interesa el servicio: ${svc.title}. ¿Podemos agendar una conversación?`;
  const waHref = WHATSAPP_PHONE
    ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(baseMsg)}`
    : undefined;
  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Interés en ${svc.title}`
  )}&body=${encodeURIComponent(baseMsg)}`;

  const heading = svc.pageTitle || svc.title;
  const subtitle = svc.pageSubtitle || svc.short;
  const primaryLabel = svc.ctaPrimary || "Solicitar demo";

  return (
    <div className="relative min-h-screen overflow-x-clip text-white">
      <Navbar ctaHref="/#contacto" ctaLabel="Pedir analisis" />
      <main id="main-content" className="main-premium pb-24 pt-28 md:pt-32">
        <div className="mx-auto max-w-6xl space-y-14 px-4">
          {/* Hero */}
          <section className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Todos los servicios
              </Link>

              <h1 className="mt-5 text-balance font-headline text-4xl font-semibold text-white md:text-5xl">
                {heading}
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-slate-300">
                {subtitle}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
                <Clock className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                {svc.duration}
              </div>

              {svc.stack && svc.stack.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {svc.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={mailHref}
                  className={`btn-vibrant inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium plausible-event-name=Service+CTA+Primary plausible-event-service=${svc.slug} plausible-event-location=service_page`}
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm text-slate-100 transition hover:bg-white/[0.06]"
                >
                  Ver etapas
                </a>
              </div>
            </div>

            <div className="card-glow-border relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
              <Image
                src={svc.image || "/placeholder.svg"}
                alt={`Ilustración del servicio ${svc.title}`}
                width={720}
                height={540}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </section>

          {/* Timeline de etapas */}
          <section id="como-funciona">
            <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">
              Cómo funciona
            </h2>
            <div className="relative mt-10 space-y-8 border-l border-white/10 pl-8 md:pl-10">
              {svc.stages.map((st, i) => (
                <div key={st.name} className="relative">
                  <span
                    className="absolute -left-[2.55rem] flex size-9 items-center justify-center rounded-full border border-cyan-300/30 bg-[#0a1019] text-sm font-semibold text-cyan-200 md:-left-[3.05rem]"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div className="hover-lift rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.84),rgba(10,16,25,0.96))] p-6">
                    <h3 className="text-xl font-semibold text-white">{st.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{st.description}</p>
                    {st.outputs && st.outputs.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {st.outputs.map((o) => (
                          <li
                            key={o}
                            className="rounded-full border border-cyan-300/20 bg-cyan-400/[0.06] px-3 py-1 text-xs text-cyan-100"
                          >
                            {o}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Entregables */}
          <section id="entregables">
            <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">
              Qué te llevas
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {svc.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-slate-200">{d}</span>
                </li>
              ))}
            </ul>
            {svc.notes && svc.notes.length > 0 && (
              <div className="mt-5 space-y-1 text-sm text-slate-400">
                {svc.notes.map((n) => (
                  <p key={n}>{n}</p>
                ))}
              </div>
            )}
          </section>

          {/* FAQ opcional */}
          {svc.faq && svc.faq.length > 0 && (
            <section id="faq">
              <h2 className="text-balance text-3xl font-semibold text-white md:text-4xl">
                Preguntas frecuentes
              </h2>
              <div className="mt-8 space-y-3">
                {svc.faq.map((item) => (
                  <article
                    key={item.question}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <h3 className="text-sm font-medium text-white">{item.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* CTA final */}
          <section className="card-glow-border flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-[linear-gradient(120deg,rgba(34,211,238,0.1),rgba(139,92,246,0.1))] p-8 text-center md:p-12">
            <h2 className="text-balance text-2xl font-semibold text-white md:text-3xl">
              {svc.closeCta?.title || `¿Listo para conversar sobre ${svc.title}?`}
            </h2>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-slate-300">
              {svc.closeCta?.text || "Te ayudamos a evaluar el mejor plan para tu contexto."}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={mailHref}
                className={`btn-vibrant inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium plausible-event-name=Service+Contact plausible-event-method=email plausible-event-service=${svc.slug} plausible-event-location=service_page`}
              >
                {svc.closeCta?.primary || "Contactar por Email"}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              {waHref && (
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/20 px-6 py-3 text-sm text-emerald-100 transition hover:bg-emerald-500/30 plausible-event-name=Service+Contact plausible-event-method=whatsapp plausible-event-service=${svc.slug} plausible-event-location=service_page`}
                >
                  {svc.closeCta?.secondary || "WhatsApp"}
                </a>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
