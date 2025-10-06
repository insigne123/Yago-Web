import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICES } from "@/config/services";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@yago.cl";
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ""; // e.g., "56912345678"

type PageProps = { params: { slug: string } };

export function generateStaticParams() {
  // Opcional: pre-generar rutas si usas SSG
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const svc = getServiceBySlug(params.slug);
  if (!svc) return {};
  return {
    title: `${svc.title} — Yago`,
    description: svc.short,
  };
}

export default function ServicePage({ params }: PageProps) {
  const svc = getServiceBySlug(params.slug);
  if (!svc) notFound();

  const baseMsg = `Hola YAGO, me interesa el servicio: ${svc!.title}. ¿Podemos agendar una conversación?`;
  const waHref = WHATSAPP_PHONE
    ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(baseMsg)}`
    : undefined;
  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Interés en ${svc!.title}`
  )}&body=${encodeURIComponent(baseMsg)}`;

  return (
    <main className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
            {svc!.title}
          </h1>
          <Link
            href="/#servicios"
            className="text-sm text-gray-300 hover:text-white underline underline-offset-4"
            aria-label="Volver a servicios"
          >
            ← Volver
          </Link>
        </div>

        {/* Resumen / duración */}
        <section className="bg-surface backdrop-blur-md rounded-3xl ring-1 ring-white/10 p-6 space-y-3">
          <p className="text-gray-200">{svc!.short}</p>
          <p className="text-sm text-gray-400">
            <span className="text-gray-300 font-medium">Tiempo típico:</span> {svc!.duration}
          </p>
          {svc!.stack && svc!.stack.length > 0 && (
            <p className="text-sm text-gray-400">
              <span className="text-gray-300 font-medium">Tecnologías:</span> {svc!.stack.join(", ")}
            </p>
          )}
        </section>

        {/* Etapas */}
        <section className="bg-surface backdrop-blur-md rounded-3xl ring-1 ring-white/10 p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Etapas del proyecto</h2>
          <ol className="space-y-5">
            {svc!.stages.map((st, i) => (
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

        {/* Entregables */}
        <section className="bg-surface backdrop-blur-md rounded-3xl ring-1 ring-white/10 p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Entregables</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
            {svc!.deliverables.map((d) => (
              <li key={d} className="rounded-xl p-3 bg-white/5 ring-1 ring-white/10">{d}</li>
            ))}
          </ul>
          {svc!.notes && svc!.notes.length > 0 && (
            <div className="mt-4 text-sm text-gray-400">
              {svc!.notes.map((n) => <p key={n} className="mt-1">• {n}</p>)}
            </div>
          )}
        </section>

        {/* CTA contacto */}
        <section className="bg-surface backdrop-blur-md rounded-3xl ring-1 ring-white/10 p-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="text-gray-300">
            ¿Listo para conversar sobre <span className="text-white font-medium">{svc!.title}</span>?
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
                className="inline-flex items-center rounded-xl px-4 py-2 bg-emerald-500/90 hover:bg-emerald-500 transition text-white"
                target="_blank" rel="noopener noreferrer"
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
