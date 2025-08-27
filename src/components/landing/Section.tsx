import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className = "", children }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}
