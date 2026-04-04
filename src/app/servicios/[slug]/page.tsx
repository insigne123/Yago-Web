import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICES } from "@/config/services";

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
  const secondaryLabel = svc.ctaSecondary || "Ver etapas";
  const secondaryTarget = svc.results ? "impacto" : "como-funciona";
  const quickLinks = [
    svc.results?.length ? { id: "impacto", label: "Impacto" } : null,
    svc.buyerBlocks?.length ? { id: "perfiles", label: "Perfiles" } : null,
    { id: "como-funciona", label: "Cómo funciona" },
    { id: "entregables", label: "Entregables" },
    svc.pricingPlans?.length ? { id: "planes", label: "Planes" } : null,
    svc.faq?.length ? { id: "faq", label: "FAQ" } : null,
  ].filter(Boolean) as { id: string; label: string }[];

  return (
    <main className="py-24">
      <div className="mx-auto max-w-6xl space-y-8 px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.22em] text-muted-foreground">SERVICIO</p>
            <h1 className="mt-3 text-4xl font-semibold bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text md:text-5xl">
              {heading}
            </h1>
          </div>

          <Link
            href="/#servicios"
            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
            aria-label="Volver a servicios"
          >
            ← Volver
          </Link>
        </div>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur space-y-5">
          <p className="text-foreground/90 text-base md:text-lg">{subtitle}</p>

          <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:gap-6">
            <div>
              <span className="text-foreground/85 font-medium">Tiempo típico:</span> {svc.duration}
            </div>
            {svc.stack && svc.stack.length > 0 && (
              <div>
                <span className="text-foreground/85 font-medium">Capacidades:</span> {svc.stack.join(", ")}
              </div>
            )}
          </div>

          {quickLinks.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {quickLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-xs text-foreground/85 transition hover:bg-black/30"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <a
              href={mailHref}
              className={`inline-flex items-center rounded-xl px-4 py-2 bg-white text-black hover:opacity-90 transition plausible-event-name=Service+CTA+Primary plausible-event-service=${svc.slug} plausible-event-location=service_page`}
            >
              {primaryLabel}
            </a>
            <a
              href={`#${secondaryTarget}`}
              className={`inline-flex items-center rounded-xl px-4 py-2 border border-white/15 bg-black/20 text-white hover:bg-black/30 transition plausible-event-name=Service+CTA+Secondary plausible-event-service=${svc.slug} plausible-event-location=service_page`}
            >
              {secondaryLabel}
            </a>
          </div>

          {svc.supportPoints && svc.supportPoints.length > 0 && (
            <ul className="flex flex-wrap gap-2 text-xs text-foreground/85">
              {svc.supportPoints.map((point) => (
                <li key={point} className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </section>

        {svc.results && svc.results.length > 0 && (
          <section id="impacto" className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Impacto directo en tu operación de calidad
            </h2>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {svc.results.map((result) => (
                <li key={result.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="text-white font-medium">{result.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {result.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {svc.buyerBlocks && svc.buyerBlocks.length > 0 && (
          <section id="perfiles" className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Funcionalidades por perfil comprador
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {svc.buyerBlocks.map((block) => (
                <article key={block.buyer} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="text-white font-semibold">{block.buyer}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{block.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        )}

        <section id="como-funciona" className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Cómo funciona</h2>
          <ol className="space-y-4">
            {svc.stages.map((st, i) => (
              <li key={st.name} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="text-white font-medium">
                  Paso {i + 1} - {st.name}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{st.description}</div>
                {st.outputs && st.outputs.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {st.outputs.map((o) => (
                      <li
                        key={o}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-foreground/80"
                      >
                        {o}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section id="entregables" className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Entregables</h2>
          <ul className="grid grid-cols-1 gap-3 text-sm text-muted-foreground md:grid-cols-2">
            {svc.deliverables.map((d) => (
              <li key={d} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                {d}
              </li>
            ))}
          </ul>
          {svc.notes && svc.notes.length > 0 && (
            <div className="mt-4 text-sm text-muted-foreground">
              {svc.notes.map((n) => (
                <p key={n} className="mt-1">
                  • {n}
                </p>
              ))}
            </div>
          )}
        </section>

        {svc.pricingPlans && svc.pricingPlans.length > 0 && (
          <section id="planes" className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
              Planes que crecen con tu sistema de calidad
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              Empieza con control documental sólido y escala a gobernanza avanzada conforme madura tu
              operación.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {svc.pricingPlans.map((plan) => (
                <article key={plan.name} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h3 className="text-white font-semibold text-lg">{plan.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {plan.audience}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{plan.includes}</p>
                  <p className="mt-4 text-sm text-foreground/85">{plan.priceHint}</p>
                  {(() => {
                    const planMsg = `Hola YAGO, me interesa ${svc.title} en el plan ${plan.name}. ¿Podemos revisarlo?`;
                    const planMailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                      `Interés en ${svc.title} - Plan ${plan.name}`
                    )}&body=${encodeURIComponent(planMsg)}`;
                    const planWaHref = WHATSAPP_PHONE
                      ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(planMsg)}`
                      : undefined;

                    return planWaHref ? (
                      <a
                        href={planWaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex rounded-xl border border-emerald-400/30 bg-emerald-500/20 px-3 py-1.5 text-xs text-emerald-100 transition hover:bg-emerald-500/30"
                      >
                        {plan.cta}
                      </a>
                    ) : (
                      <a
                        href={planMailHref}
                        className="mt-4 inline-flex rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white transition hover:bg-white/15"
                      >
                        {plan.cta}
                      </a>
                    );
                  })()}
                </article>
              ))}
            </div>
          </section>
        )}

        {svc.faq && svc.faq.length > 0 && (
          <section id="faq" className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Preguntas frecuentes</h2>
            <div className="space-y-3">
              {svc.faq.map((item) => (
                <article key={item.question} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <h3 className="text-sm font-medium text-white">{item.question}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="text-muted-foreground max-w-3xl">
            <div className="text-white font-semibold">
              {svc.closeCta?.title || `Listo para conversar sobre ${svc.title}?`}
            </div>
            <p className="mt-2">{svc.closeCta?.text || "Te ayudamos a evaluar el mejor plan para tu contexto."}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={mailHref}
              className={`inline-flex items-center rounded-xl px-4 py-2 bg-white text-black hover:opacity-90 transition plausible-event-name=Service+Contact plausible-event-method=email plausible-event-service=${svc.slug} plausible-event-location=service_page`}
            >
              {svc.closeCta?.primary || "Contactar por Email"}
            </a>
            {waHref ? (
              <a
                href={waHref}
                className={`inline-flex items-center rounded-xl px-4 py-2 bg-emerald-500/90 hover:bg-emerald-500 transition text-white plausible-event-name=Service+Contact plausible-event-method=whatsapp plausible-event-service=${svc.slug} plausible-event-location=service_page`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {svc.closeCta?.secondary || "WhatsApp"}
              </a>
            ) : (
              <span
                className="inline-flex items-center rounded-xl px-4 py-2 bg-neutral-700 text-neutral-300 cursor-not-allowed"
                title="Configura NEXT_PUBLIC_WHATSAPP_PHONE"
              >
                {svc.closeCta?.secondary || "WhatsApp"}
              </span>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
