import Link from "next/link";
import { COMPANY, footerLinks } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 md:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {COMPANY.name} — IA & Automatización
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-muted-foreground">
          {footerLinks.map(link => (
             <Link key={link.name} href={link.href} className="hover:text-foreground transition-colors">{link.name}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
