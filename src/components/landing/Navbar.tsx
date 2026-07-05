"use client";

import { useMemo, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
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
  eyebrow?: string;
  description?: string;
  detail?: string;
  children?: NavbarLink[];
};

type NavbarProps = {
  links?: NavbarLink[];
  ctaHref?: string;
  ctaLabel?: string;
  mobileDescription?: string;
  homeHref?: string;
};

function isExternalHref(href: string) {
  return /^https?:\/\//.test(href);
}

function NavHref({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  if (isExternalHref(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
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
  mobileDescription = "Elige entre apps listas, soluciones por problema, casos y contacto.",
  homeHref = "/#inicio",
}: NavbarProps = {}) {
  const nav = useMemo(() => links ?? navLinks, [links]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 md:pt-4">
      <div className="relative mx-auto max-w-7xl overflow-visible rounded-[1.6rem] border border-white/12 bg-[linear-gradient(180deg,rgba(8,12,20,0.97),rgba(8,12,20,0.94))] shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
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

          <nav className="hidden min-w-0 items-center gap-1 rounded-full border border-white/10 bg-black/35 px-2 py-2 lg:flex">
            {nav.map((item) => {
              const section = item.href.replace(/^\/?#/, "");
              return (
                <div key={item.href} className="group relative">
                  <NavHref
                    href={item.href}
                    className={`navlink-gradient inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 xl:px-4 plausible-event-name=Nav+Click plausible-event-location=navbar plausible-event-section=${section}`}
                  >
                    {item.name}
                    {item.children?.length ? <ChevronDown className="h-3.5 w-3.5 text-slate-500 transition group-hover:text-sky-100" aria-hidden="true" /> : null}
                  </NavHref>

                  {item.children?.length ? (
                    <div className="pointer-events-none absolute left-1/2 top-full z-[60] mt-3 w-[24rem] -translate-x-1/2 translate-y-2 rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,29,0.98),rgba(7,11,19,0.98))] p-3 text-left opacity-0 shadow-[0_22px_70px_rgba(0,0,0,0.34)] ring-1 ring-sky-200/10 transition-[opacity,transform] duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="absolute left-1/2 top-[-0.35rem] h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-white/10 bg-[#0c121d]" aria-hidden="true" />
                      <div className="px-2 pb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-sky-100">
                        Apps listas
                      </div>
                      <div className="grid gap-2">
                        {item.children.map((child) => (
                          <NavHref
                            key={child.href}
                            href={child.href}
                            className="rounded-[1.05rem] border border-white/10 bg-white/[0.035] px-4 py-3 transition-colors hover:border-sky-200/20 hover:bg-sky-300/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70"
                          >
                            <span className="block text-sm font-semibold text-white">{child.name}</span>
                            {child.description ? (
                              <span className="mt-1 block text-xs leading-relaxed text-slate-400">{child.description}</span>
                            ) : null}
                          </NavHref>
                        ))}
                      </div>
                    </div>
                  ) : item.description ? (
                    <div className="pointer-events-none absolute left-1/2 top-full z-[60] mt-3 w-[19rem] -translate-x-1/2 translate-y-2 rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,29,0.98),rgba(7,11,19,0.98))] p-4 text-left opacity-0 shadow-[0_22px_70px_rgba(0,0,0,0.34)] ring-1 ring-sky-200/10 transition-[opacity,transform] duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <div className="absolute left-1/2 top-[-0.35rem] h-3 w-3 -translate-x-1/2 rotate-45 border-l border-t border-white/10 bg-[#0c121d]" aria-hidden="true" />
                      <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-sky-100">
                        {item.eyebrow ?? item.name}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-200">
                        {item.description}
                      </p>
                      {item.detail ? (
                        <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs leading-relaxed text-slate-400">
                          {item.detail}
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            {ctaHref.startsWith("#") ? (
              <a
                href={ctaHref}
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,247,255,0.94))] px-5 text-sm font-medium text-slate-950 shadow-[0_12px_30px_rgba(5,11,19,0.24)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(5,11,19,0.28)] plausible-event-name=CTA+Agendar+Sesion plausible-event-location=navbar"
              >
                {ctaLabel}
              </a>
            ) : isExternalHref(ctaHref) ? (
              <a
                href={ctaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,247,255,0.94))] px-5 text-sm font-medium text-slate-950 shadow-[0_12px_30px_rgba(5,11,19,0.24)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(5,11,19,0.28)] plausible-event-name=CTA+Agendar+Sesion plausible-event-location=navbar"
              >
                {ctaLabel}
              </a>
            ) : (
              <Link
                href={ctaHref}
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,247,255,0.94))] px-5 text-sm font-medium text-slate-950 shadow-[0_12px_30px_rgba(5,11,19,0.24)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(5,11,19,0.28)] plausible-event-name=CTA+Agendar+Sesion plausible-event-location=navbar"
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
               className="rounded-full border border-white/10 bg-white/[0.045] text-white hover:bg-white/[0.08] focus-visible:ring-sky-200/70 lg:hidden"
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

                  if (item.children?.length) {
                    return (
                      <div key={item.href} className="rounded-[1.2rem] border border-white/10 bg-white/[0.025] p-1">
                        <SheetTrigger asChild>
                          {item.href.startsWith("#") ? (
                            <a
                              href={item.href}
                              className={`block rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 plausible-event-name=Nav+Click plausible-event-location=navbar_mobile plausible-event-section=${section}`}
                            >
                              <span className="block font-medium text-white">{item.name}</span>
                              {item.description ? <span className="mt-1 block text-xs leading-relaxed text-slate-400">{item.description}</span> : null}
                            </a>
                          ) : (
                            <Link
                              href={item.href}
                              className={`block rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 plausible-event-name=Nav+Click plausible-event-location=navbar_mobile plausible-event-section=${section}`}
                            >
                              <span className="block font-medium text-white">{item.name}</span>
                              {item.description ? <span className="mt-1 block text-xs leading-relaxed text-slate-400">{item.description}</span> : null}
                            </Link>
                          )}
                        </SheetTrigger>

                        <div className="grid gap-1 px-2 pb-2">
                          {item.children.map((child) => {
                            const childSection = child.href.replace(/^\/?#/, "");
                            return (
                              <SheetTrigger asChild key={child.href}>
                                <Link
                                  href={child.href}
                                  className={`rounded-2xl border border-white/10 bg-black/15 px-3 py-2.5 text-sm text-slate-200 transition hover:bg-white/[0.05] hover:text-white plausible-event-name=Nav+Click plausible-event-location=navbar_mobile plausible-event-section=${childSection}`}
                                >
                                  <span className="block font-medium text-white">{child.name}</span>
                                  {child.description ? <span className="mt-1 block text-xs leading-relaxed text-slate-400">{child.description}</span> : null}
                                </Link>
                              </SheetTrigger>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <SheetTrigger asChild key={item.href}>
                      {item.href.startsWith("#") ? (
                        <a
                          href={item.href}
                          className={`rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 plausible-event-name=Nav+Click plausible-event-location=navbar_mobile plausible-event-section=${section}`}
                        >
                          <span className="block font-medium text-white">{item.name}</span>
                          {item.description ? (
                            <span className="mt-1 block text-xs leading-relaxed text-slate-400">{item.description}</span>
                          ) : null}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className={`rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 plausible-event-name=Nav+Click plausible-event-location=navbar_mobile plausible-event-section=${section}`}
                        >
                          <span className="block font-medium text-white">{item.name}</span>
                          {item.description ? (
                            <span className="mt-1 block text-xs leading-relaxed text-slate-400">{item.description}</span>
                          ) : null}
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
                    className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,247,255,0.94))] text-sm font-medium text-slate-950 plausible-event-name=CTA+Agendar+Sesion plausible-event-location=navbar_mobile"
                  >
                    {ctaLabel}
                  </a>
                ) : isExternalHref(ctaHref) ? (
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,247,255,0.94))] text-sm font-medium text-slate-950 plausible-event-name=CTA+Agendar+Sesion plausible-event-location=navbar_mobile"
                  >
                    {ctaLabel}
                  </a>
                ) : (
                  <Link
                    href={ctaHref}
                    className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,247,255,0.94))] text-sm font-medium text-slate-950 plausible-event-name=CTA+Agendar+Sesion plausible-event-location=navbar_mobile"
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
