"use client";

import * as React from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

type SectionRevealProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  className?: string;
  /** Aplica un contenedor de contraste: "soft" | "strong" */
  surface?: "soft" | "strong";
};

/**
 * Evita hydration mismatch:
 * - SSR y primer render del cliente devuelven **markup estático** (sin estilos inline de Motion).
 * - Tras mount (useEffect), se habilita Motion y se anima al entrar en viewport.
 */
export function SectionReveal({
  children,
  as: Tag = "section",
  delay = 0,
  className = "",
  surface,
}: SectionRevealProps) {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const SurfaceWrap = ({ children }: { children: React.ReactNode }) =>
    surface === "strong" ? (
      <div className="surface-strong">{children}</div>
    ) : surface === "soft" ? (
      <div className="surface">{children}</div>
    ) : (
      <>{children}</>
    );

  if (!mounted || prefersReduced) {
    return (
      <Tag className={className}>
        <SurfaceWrap>{children}</SurfaceWrap>
      </Tag>
    );
  }

  const variants = {
    hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
        <Tag className={className}>
          <SurfaceWrap>
            <m.div variants={variants}>{children}</m.div>
          </SurfaceWrap>
        </Tag>
      </m.div>
    </LazyMotion>
  );
}

export function DividerGlow() {
  return (
    <div className="my-10 md:my-16">
      <div className="h-px w-full bg-fx-divider" />
    </div>
  );
}

/** Contenedor con borde degradado reutilizable */
export function GradientCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`gradient-border rounded-2xl p-[1px] ${className}`}>
      <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5">
        {children}
      </div>
    </div>
  );
}
