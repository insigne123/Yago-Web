import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/config/productos";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@yago.cl";
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ""; // ej: 56912345678

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = PRODUCTS.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.name} — Yago`, description: p.tagline };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = PRODUCTS.find((x) => x.slug === slug);
  if (!p) notFound();

  const baseMsg = `Hola YAGO, quiero más información sobre el producto: ${p!.name}. ¿Podemos agendar una conversación?`;
  const waHref = WHATSAPP_PHONE ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(baseMsg)}` : undefined;
  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Interés en ${p!.name}`)}&body=${encodeURIComponent(baseMsg)}`;

  return (
    <main className="py-24">
      <div className="mx-auto max-w-5xl space-y-8 px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.22em] text-muted-foreground">PRODUCTO</p>
            <h1 className="mt-3 text-4xl font-semibold bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text md:text-5xl">
              {p!.name}
            </h1>
          </div>

          <Link
            href="/#productos"
            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
            aria-label="Volver a productos"
          >
            ← Volver
          </Link>
        </div>

        {/* Resumen */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur space-y-3">
          <p className="text-foreground/90">{p!.tagline}</p>
          <p className="text-muted-foreground">{p!.details.description}</p>
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground/85 font-medium">Tiempo de puesta en marcha:</span> {p!.details.timeToValue}
          </p>
        </section>

        {/* Módulos */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Modulos</h2>
          <ul className="grid grid-cols-1 gap-3 text-sm text-muted-foreground md:grid-cols-2">
            {p!.details.modules.map((m) => (
              <li key={m} className="rounded-2xl border border-white/10 bg-black/20 p-4">{m}</li>
            ))}
          </ul>
        </section>

        {/* Integraciones */}
        {p!.details.integrations && p!.details.integrations.length > 0 && (
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Integraciones</h2>
            <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              {p!.details.integrations.map((i) => (
                <li key={i} className="rounded-full border border-white/10 bg-black/20 px-4 py-2">{i}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Etapas */}
        {p!.details.stages && p!.details.stages.length > 0 && (
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Etapas del proyecto</h2>
            <ol className="space-y-4">
              {p!.details.stages.map((st, i) => (
                <li key={st.name} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="text-white font-medium">{i + 1}. {st.name}</div>
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
        )}

        {/* Notas */}
        {p!.details.notes && p!.details.notes.length > 0 && (
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Notas</h2>
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              {p!.details.notes.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </section>
        )}

        {/* CTA contacto */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-muted-foreground">
            ¿Quieres ver cómo <span className="text-white font-medium">{p!.name}</span> encaja en tu operación?
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={mailHref}
              className={`inline-flex items-center rounded-xl px-4 py-2 bg-white text-black hover:opacity-90 transition plausible-event-name=Product+Contact plausible-event-method=email plausible-event-product=${p!.slug} plausible-event-location=product_page`}
            >
              Contactar por Email
            </a>
            {waHref ? (
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center rounded-xl px-4 py-2 bg-emerald-500/90 hover:bg-emerald-500 transition text-white plausible-event-name=Product+Contact plausible-event-method=whatsapp plausible-event-product=${p!.slug} plausible-event-location=product_page`}
              >
                WhatsApp
              </a>
            ) : (
              <span className="inline-flex items-center rounded-xl px-4 py-2 bg-neutral-700 text-neutral-300 cursor-not-allowed" title="Configura NEXT_PUBLIC_WHATSAPP_PHONE">
                WhatsApp
              </span>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
