import Link from "next/link";
import { COMPANY, footerLinks } from "@/config/site";
import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-lg font-semibold text-white">{COMPANY.name}</div>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Automatizacion con IA: agentes, flujos y datos para acelerar tu operacion.
            </p>
            <div className="mt-4 text-xs text-muted-foreground">{COMPANY.location}</div>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm font-medium text-white">Secciones</div>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-medium text-white">Contacto</div>
            <div className="mt-3 grid gap-2 text-sm">
              <a
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
                href={`mailto:${COMPANY.email}`}
              >
                <Mail className="h-4 w-4" />
                {COMPANY.email}
              </a>
              <a
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                {COMPANY.whatsapp}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} {COMPANY.name} — IA & Automatizacion</div>
          <div>Hecho en Chile · Remoto</div>
        </div>
      </div>
    </footer>
  );
}
