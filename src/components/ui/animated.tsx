"use client";

import * as React from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

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
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 98%", "start 30%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 72,
    damping: 32,
    mass: 0.95,
  });

  const entranceStart = Math.min(delay * 0.24, 0.14);

  const opacity = useTransform(progress, [entranceStart, 1], [0.84, 1]);
  const y = useTransform(progress, [entranceStart, 1], [14, 0]);
  const scale = useTransform(progress, [entranceStart, 1], [0.996, 1]);

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

  return (
    <LazyMotion features={domAnimation}>
      <m.div ref={sectionRef} style={{ opacity, y, scale }}>
        <Tag className={className}>
          <SurfaceWrap>
            {children}
          </SurfaceWrap>
        </Tag>
      </m.div>
    </LazyMotion>
  );
}

export function DividerGlow() {
  return (
    <div className="relative my-4 h-6 md:my-8 md:h-10">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-fx-divider" />
      <div className="absolute inset-x-0 top-1/2 h-6 -translate-y-1/2 bg-fx-divider-fade md:h-10" />
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
