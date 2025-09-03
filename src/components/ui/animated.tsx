"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

type SectionRevealProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  className?: string;
};

export function SectionReveal({
  children,
  as: Tag = "section",
  delay = 0,
  className = "",
}: SectionRevealProps) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {React.createElement(Tag, {}, children)}
    </motion.div>
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
