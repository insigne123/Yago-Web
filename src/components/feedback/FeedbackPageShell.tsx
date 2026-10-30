import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/config/site";

export function FeedbackPageShell({ title, badge, description, help, children }: { title: string; badge: string; description: string; help?: string; children: ReactNode }) {
  return <div className="min-h-screen bg-[#070b13] text-white">
    <header className="mx-auto flex max-w-3xl items-center justify-between gap-5 border-b border-white/10 px-5 py-6 sm:px-8">
      <Link href="/" aria-label="YAGO, ir al inicio"><Image src={COMPANY.logo} alt="YAGO" width={108} height={40} className="h-10 w-auto object-contain" priority /></Link>
      <span className="max-w-[60%] text-right font-mono text-xs uppercase leading-relaxed tracking-[0.1em] text-slate-400">{badge}</span>
    </header>
    <main id="main-content" className="mx-auto max-w-3xl px-5 pb-12 pt-10 sm:px-8 sm:pt-14">
      <div className="mb-10">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-sky-300">Tu experiencia nos ayuda a mejorar</p>
        <h1 className="mt-4 font-headline text-[clamp(2rem,6vw,3.1rem)] font-semibold leading-tight tracking-tight">{title}</h1>
        <p className="mt-5 text-base leading-relaxed text-slate-300">{description}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">Todas las preguntas son opcionales; responde al menos una y deja en blanco lo que no aplique. No necesitas iniciar sesión ni indicar presupuesto.</p>
        {help ? <p className="mt-3 text-sm leading-relaxed text-slate-400">{help}</p> : null}
      </div>
      {children}
      <noscript><p className="mt-6 text-slate-300">Activa JavaScript para enviar el cuestionario, o comparte tu opinión por correo a {COMPANY.email}.</p></noscript>
    </main>
    <footer className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-5 py-6 text-xs text-slate-400 sm:px-8">
      <span>YAGO · Yago SpA</span><a href={`mailto:${COMPANY.email}`} className="text-sky-300 hover:text-white">{COMPANY.email}</a>
    </footer>
  </div>;
}
