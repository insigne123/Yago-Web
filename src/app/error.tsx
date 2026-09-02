"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content" className="flex min-h-screen items-center bg-slate-950 px-4 py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Error inesperado</p>
        <h1 className="mt-4 text-balance font-headline text-4xl font-semibold md:text-6xl">
          No pudimos cargar esta página.
        </h1>
        <p className="mt-5 leading-relaxed text-slate-300">
          Intenta nuevamente. Si el problema continúa, vuelve al inicio para retomar la navegación.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={reset} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">
            Intentar de nuevo
          </button>
          <Link href="/" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
