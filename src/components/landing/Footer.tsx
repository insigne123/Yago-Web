import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { YagoLogo } from "@/components/brand/YagoLogo";
import { COMPANY, PRIMARY_CTA, footerGroups } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="y-dark relative overflow-hidden border-t border-white/[0.08]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/40 to-transparent"
      />
      <div className="y-container relative pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Link href="/" aria-label={`${COMPANY.name}, ir al inicio`} className="w-fit text-white">
              <YagoLogo size={32} />
            </Link>
            <p className="max-w-sm text-[15px] leading-relaxed text-slate-400">
              Automatización, integración de IA y desarrollo de aplicaciones para empresas en Chile.
              Software a medida, agentes y documentos convertidos en datos útiles.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={PRIMARY_CTA.href}
                target={PRIMARY_CTA.href.startsWith("http") ? "_blank" : undefined}
                rel={PRIMARY_CTA.href.startsWith("http") ? "noreferrer" : undefined}
                className="y-btn y-btn-primary y-btn-sm plausible-event-name=CTA+Agendar+Sesion plausible-event-location=footer"
              >
                {PRIMARY_CTA.label}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            {footerGroups.map((group) => (
              <nav key={group.title} aria-label={group.title} className="flex flex-col gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-slate-400">{group.title}</span>
                {group.links.map((link) => (
                  <Link
                    key={link.href + link.name}
                    href={link.href}
                    className="w-fit text-[15px] text-slate-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            ))}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-slate-400">Contacto</span>
              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center gap-2 text-[15px] text-slate-300 transition-colors hover:text-white plausible-event-name=CTA+WhatsApp plausible-event-location=footer"
              >
                <MessageCircle className="h-4 w-4 text-sky-300" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex w-fit items-center gap-2 text-[15px] text-slate-300 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-sky-300" aria-hidden="true" />
                Email
              </a>
              <span className="inline-flex items-center gap-2 text-[15px] text-slate-400">
                <MapPin className="h-4 w-4 text-sky-300" aria-hidden="true" />
                {COMPANY.location}
              </span>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none mt-16 select-none bg-gradient-to-b from-white/[0.09] to-transparent bg-clip-text text-center font-headline text-[clamp(5rem,22vw,20rem)] font-bold leading-[0.8] tracking-[-0.06em] text-transparent"
        >
          YAGO
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-[13px] text-slate-400 md:flex-row md:items-center md:justify-between">
          <span>
            © {year} {COMPANY.name} · IA, integraciones y automatización · Hecho en Chile
          </span>
          <span className="flex flex-wrap gap-5">
            <Link href="/privacidad" className="transition-colors hover:text-white">
              Privacidad
            </Link>
            <Link href="/terminos" className="transition-colors hover:text-white">
              Términos
            </Link>
            <a href="/llms.txt" className="inline-flex items-center gap-1 transition-colors hover:text-white">
              llms.txt
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
