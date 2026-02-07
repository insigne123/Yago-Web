import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, SERVICES } from "@/config/services";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@yago.cl";
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ""; // e.g., "56912345678"

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  // Opcional: pre-generar rutas si usas SSG
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};
  return {
    title: `${svc.title} — Yago`,
    description: svc.short,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  const baseMsg = `Hola YAGO, me interesa el servicio: ${svc!.title}. ¿Podemos agendar una conversación?`;
  const waHref = WHATSAPP_PHONE
    ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(baseMsg)}`
    : undefined;
  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Interés en ${svc!.title}`
  )}&body=${encodeURIComponent(baseMsg)}`;

  return (
    <main className="py-24">
      <div className="mx-auto max-w-5xl space-y-8 px-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs tracking-[0.22em] text-muted-foreground">SERVICIO</p>
            <h1 className="mt-3 text-4xl font-semibold bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text md:text-5xl">
              {svc!.title}
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

        {/* Resumen / duración */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur space-y-3">
          <p className="text-foreground/90">{svc!.short}</p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:items-center md:gap-6">
            <div>
              <span className="text-foreground/85 font-medium">Tiempo tipico:</span> {svc!.duration}
            </div>
            {svc!.stack && svc!.stack.length > 0 && (
              <div>
                <span className="text-foreground/85 font-medium">Tecnologias:</span> {svc!.stack.join(", ")}
              </div>
            )}
          </div>
        </section>

        {/* Etapas */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Etapas del proyecto</h2>
          <ol className="space-y-4">
            {svc!.stages.map((st, i) => (
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

        {/* Entregables */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Entregables</h2>
          <ul className="grid grid-cols-1 gap-3 text-sm text-muted-foreground md:grid-cols-2">
            {svc!.deliverables.map((d) => (
              <li key={d} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                {d}
              </li>
            ))}
          </ul>
          {svc!.notes && svc!.notes.length > 0 && (
            <div className="mt-4 text-sm text-muted-foreground">
              {svc!.notes.map((n) => (
                <p key={n} className="mt-1">• {n}</p>
              ))}
            </div>
          )}
        </section>

        {/* CTA contacto */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-muted-foreground">
            Listo para conversar sobre <span className="text-white font-medium">{svc!.title}</span>?
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={mailHref}
              className={`inline-flex items-center rounded-xl px-4 py-2 bg-white text-black hover:opacity-90 transition plausible-event-name=Service+Contact plausible-event-method=email plausible-event-service=${svc!.slug} plausible-event-location=service_page`}
            >
              Contactar por Email
            </a>
            {waHref ? (
              <a
                href={waHref}
                className={`inline-flex items-center rounded-xl px-4 py-2 bg-emerald-500/90 hover:bg-emerald-500 transition text-white plausible-event-name=Service+Contact plausible-event-method=whatsapp plausible-event-service=${svc!.slug} plausible-event-location=service_page`}
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
