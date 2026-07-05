import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`relative isolate scroll-mt-28 py-14 md:scroll-mt-32 md:py-24 ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-6 -z-10 h-[76%] section-atmosphere"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[16%] top-0 -z-10 h-px bg-gradient-to-r from-transparent via-slate-900/10 to-transparent"
      />
      <div className="relative z-[1]">{children}</div>
    </section>
  );
}
