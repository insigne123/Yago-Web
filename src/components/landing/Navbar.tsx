"use client";

import { useMemo, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { COMPANY, navLinks } from "@/config/site";

type NavbarLink = {
  name: string;
  href: string;
};

type NavbarProps = {
  links?: NavbarLink[];
  ctaHref?: string;
  ctaLabel?: string;
  mobileDescription?: string;
  homeHref?: string;
};

function NavHref({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Navbar({
  links,
  ctaHref = "/#contacto",
  ctaLabel = "Contacto",
  mobileDescription = "Accede a casos, proceso, servicios, OCR y contacto.",
  homeHref = "/#inicio",
}: NavbarProps = {}) {
  const nav = useMemo(() => links ?? navLinks, [links]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 md:pt-4">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.6rem] border border-white/12 bg-[linear-gradient(180deg,rgba(8,12,20,0.97),rgba(8,12,20,0.94))] shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/35 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.028),transparent_36%)]"
        />

        <div className="mx-auto flex h-[4.35rem] max-w-7xl items-center justify-between gap-4 px-4 md:px-5">
          <NavHref
            href={homeHref}
            className="min-w-0 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-white/8 bg-white/[0.03] px-3 py-2" aria-label={`Ir al inicio de ${COMPANY.name}`}>
              <Image
                src={COMPANY.logo || "/logo-yago.png"}
                alt={`${COMPANY.name} logo`}
                width={28}
                height={28}
                priority
                className="rounded-md ring-1 ring-white/10"
              />
              <span className="truncate font-headline text-lg font-semibold tracking-[-0.02em] text-white md:text-xl">
                {COMPANY.name}
              </span>
            </span>
          </NavHref>

          <nav className="hidden min-w-0 items-center gap-1 rounded-full border border-white/10 bg-black/35 px-2 py-2 md:flex">
            {nav.map((item) => {
              const section = item.href.replace(/^\/?#/, "");
              return (
                <NavHref
                  key={item.href}
                  href={item.href}
                  className={`navlink-gradient rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 plausible-event-name=Nav+Click plausible-event-location=navbar plausible-event-section=${section}`}
                >
                  {item.name}
                </NavHref>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {ctaHref.startsWith("#") ? (
              <a
                href={ctaHref}
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(223,234,255,0.94))] px-5 text-sm font-medium text-slate-950 shadow-[0_12px_30px_rgba(167,199,255,0.18)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(167,199,255,0.2)] plausible-event-name=CTA+Agendar+Demo plausible-event-location=navbar"
              >
                {ctaLabel}
              </a>
            ) : (
              <Link
                href={ctaHref}
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(223,234,255,0.94))] px-5 text-sm font-medium text-slate-950 shadow-[0_12px_30px_rgba(167,199,255,0.18)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(167,199,255,0.2)] plausible-event-name=CTA+Agendar+Demo plausible-event-location=navbar"
              >
                {ctaLabel}
              </Link>
            )}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Abrir menú"
              className="rounded-full border border-white/10 bg-white/[0.045] text-white hover:bg-white/[0.08] focus-visible:ring-sky-200/70 md:hidden"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] border-white/10 bg-[linear-gradient(180deg,rgba(8,12,20,0.98),rgba(8,12,20,0.96))] p-0 text-white"
            >
              <SheetHeader className="border-b border-white/10 px-6 py-5 text-left">
                <SheetTitle className="text-white">Navegacion</SheetTitle>
                <SheetDescription className="text-slate-400">
                  {mobileDescription}
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-4 py-4">
                {nav.map((item) => {
                  const section = item.href.replace(/^\/?#/, "");
                  return (
                    <SheetTrigger asChild key={item.href}>
                      {item.href.startsWith("#") ? (
                        <a
                          href={item.href}
                          className={`rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 plausible-event-name=Nav+Click plausible-event-location=navbar_mobile plausible-event-section=${section}`}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className={`rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 plausible-event-name=Nav+Click plausible-event-location=navbar_mobile plausible-event-section=${section}`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </SheetTrigger>
                  );
                })}
              </nav>

              <div className="px-4 pb-4 pt-2">
                {ctaHref.startsWith("#") ? (
                  <a
                    href={ctaHref}
                    className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(223,234,255,0.92))] text-sm font-medium text-slate-950 plausible-event-name=CTA+Agendar+Demo plausible-event-location=navbar_mobile"
                  >
                    {ctaLabel}
                  </a>
                ) : (
                  <Link
                    href={ctaHref}
                    className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(223,234,255,0.92))] text-sm font-medium text-slate-950 plausible-event-name=CTA+Agendar+Demo plausible-event-location=navbar_mobile"
                  >
                    {ctaLabel}
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
