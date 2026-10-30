import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ActionLink, BOOKING_ACTION, PageShell } from "@/components/site/PageKit";

const SUGGESTED = [
  { label: "OCR", href: "/ocr" },
  { label: "SADT", href: "/sadt" },
  { label: "AXIS", href: "/axis" },
  { label: "Precios", href: "/precios" },
  { label: "Blog", href: "/blog" },
];

export default function NotFound() {
  return (
    <PageShell>
      <section id="inicio" className="y-dark y-grain relative flex min-h-[72vh] items-center overflow-hidden py-24 md:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-25%] h-[36rem] w-[56rem] -translate-x-1/2 rounded-full bg-sky-400/[0.12] blur-[120px]" />
          <div className="y-grid-bg" />
        </div>

        {/* 404 gigante y tenue detrás del mensaje */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none bg-gradient-to-b from-white/[0.09] via-white/[0.04] to-transparent bg-clip-text font-mono text-[clamp(9rem,36vw,28rem)] font-semibold leading-none tracking-[-0.06em] text-transparent"
        >
          404
        </span>

        <div className="y-container relative flex flex-col items-center gap-6 text-center">
          <span className="y-eyebrow">Error 404</span>
          <h1 className="y-display max-w-3xl text-[clamp(2.4rem,5.6vw,4.4rem)] text-white">
            Esta página <span className="y-gradient-text">no está disponible.</span>
          </h1>
          <p className="y-lead max-w-xl">
            La dirección puede haber cambiado. Vuelve al inicio o revisa los productos para encontrar la ruta correcta.
          </p>

          <div className="mt-2 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link href="/" className="y-btn y-btn-primary">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver al inicio
            </Link>
            <ActionLink action={{ label: "Ver productos", href: "/productos" }} variant="glass" />
            <ActionLink action={BOOKING_ACTION} variant="glass" arrow />
          </div>

          <nav aria-label="Páginas sugeridas" className="mt-6 flex flex-col items-center gap-3">
            <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-slate-400">También puedes ir a</p>
            <ul className="flex flex-wrap justify-center gap-2">
              {SUGGESTED.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full px-3.5 py-1.5 text-[14px] text-slate-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14)] transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </PageShell>
  );
}
