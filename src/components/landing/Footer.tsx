import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { COMPANY, footerLinks } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative pb-12 pt-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,23,35,0.94),rgba(10,15,24,1))] shadow-[0_24px_90px_rgba(0,0,0,0.2)]">
          <div className="grid gap-8 px-6 py-8 md:grid-cols-12 md:px-8 md:py-10">
            <div className="md:col-span-4">
              <div className="font-headline text-2xl font-semibold text-white">{COMPANY.name}</div>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
                Automatización con IA, productos digitales e integraciones para equipos que necesitan
                operar mejor sin perder control.
              </p>
              <div className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-400">{COMPANY.location}</div>
            </div>

            <div className="md:col-span-4">
              <div className="text-sm font-medium text-white">Secciones</div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="rounded-xl px-2 py-1 transition hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="text-sm font-medium text-white">Contacto Directo</div>
              <div className="mt-4 grid gap-3 text-sm">
                <a
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-300 transition hover:border-white/14 hover:bg-white/[0.06] hover:text-white"
                  href={`mailto:${COMPANY.email}`}
                >
                  <Mail className="h-4 w-4 text-sky-200" aria-hidden="true" />
                  <span className="min-w-0 truncate">{COMPANY.email}</span>
                </a>
                <a
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-300 transition hover:border-white/14 hover:bg-white/[0.06] hover:text-white"
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-200" aria-hidden="true" />
                  <span>{COMPANY.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/10 px-6 py-4 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
            <div>© {new Date().getFullYear()} {COMPANY.name} · IA, Integraciones & Automatización</div>
            <div>Hecho en Chile · Remoto para LATAM</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
