import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/config/productos";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@yago.cl";
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ""; // ej: 56912345678

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = PRODUCTS.find((x) => x.slug === params.slug);
  if (!p) return {};
  return { title: `${p.name} — Yago`, description: p.tagline };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = PRODUCTS.find((x) => x.slug === params.slug);
  if (!p) notFound();

  const baseMsg = `Hola YAGO, quiero más información sobre el producto: ${p!.name}. ¿Podemos agendar una conversación?`;
  const waHref = WHATSAPP_PHONE ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(baseMsg)}` : undefined;
  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Interés en ${p!.name}`)}&body=${encodeURIComponent(baseMsg)}`;

  return (
    <main className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
            {p!.name}
          </h1>
          <Link
            href="/#productos"
            className="text-sm text-gray-300 hover:text-white underline underline-offset-4"
            aria-label="Volver a productos"
          >
            ← Volver
          </Link>
        </div>

        {/* Resumen */}
        <section className="bg-surface backdrop-blur-md rounded-3xl ring-1 ring-white/10 p-6 space-y-3">
          <p className="text-gray-200">{p!.tagline}</p>
          <p className="text-gray-300">{p!.details.description}</p>
          <p className="text-sm text-gray-400">
            <span className="text-gray-300 font-medium">Tiempo de puesta en marcha:</span> {p!.details.timeToValue}
          </p>
        </section>

        {/* Módulos */}
        <section className="bg-surface backdrop-blur-md rounded-3xl ring-1 ring-white/10 p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Módulos</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
            {p!.details.modules.map((m) => (
              <li key={m} className="rounded-xl p-3 bg-white/5 ring-1 ring-white/10">{m}</li>
            ))}
          </ul>
        </section>

        {/* Integraciones */}
        {p!.details.integrations && p!.details.integrations.length > 0 && (
          <section className="bg-surface backdrop-blur-md rounded-3xl ring-1 ring-white/10 p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Integraciones</h2>
            <ul className="flex flex-wrap gap-2 text-gray-300">
              {p!.details.integrations.map((i) => (
                <li key={i} className="rounded-xl px-3 py-2 bg-white/5 ring-1 ring-white/10">{i}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Etapas */}
        {p!.details.stages && p!.details.stages.length > 0 && (
          <section className="bg-surface backdrop-blur-md rounded-3xl ring-1 ring-white/10 p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Etapas del proyecto</h2>
            <ol className="space-y-5">
              {p!.details.stages.map((st, i) => (
                <li key={st.name} className="rounded-2xl p-4 bg-white/5 ring-1 ring-white/10">
                  <div className="text-white font-medium">{i + 1}. {st.name}</div>
                  <div className="text-gray-300">{st.description}</div>
                  {st.outputs && st.outputs.length > 0 && (
                    <ul className="mt-2 list-disc pl-5 text-gray-400">
                      {st.outputs.map((o) => <li key={o}>{o}</li>)}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Notas */}
        {p!.details.notes && p!.details.notes.length > 0 && (
          <section className="bg-surface backdrop-blur-md rounded-3xl ring-1 ring-white/10 p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Notas</h2>
            <ul className="list-disc pl-5 text-gray-400">
              {p!.details.notes.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </section>
        )}

        {/* CTA contacto */}
        <section className="bg-surface backdrop-blur-md rounded-3xl ring-1 ring-white/10 p-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="text-gray-300">
            ¿Quieres ver cómo <span className="text-white font-medium">{p!.name}</span> encaja en tu operación?
          </div>
          <div className="flex gap-3">
            <a
              href={mailHref}
              className="inline-flex items-center rounded-xl px-4 py-2 bg-white text-black hover:opacity-90 transition"
            >
              Contactar por Email
            </a>
            {waHref ? (
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl px-4 py-2 bg-emerald-500/90 hover:bg-emerald-500 transition text-white"
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
