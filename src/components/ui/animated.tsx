import * as React from "react";

type SectionRevealProps = {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  className?: string;
  /** Aplica un contenedor de contraste: "soft" | "strong" */
  surface?: "soft" | "strong";
};

export function SectionReveal({
  children,
  as: Tag = "section",
  delay = 0,
  className = "",
  surface,
}: SectionRevealProps) {
  const SurfaceWrap = ({ children }: { children: React.ReactNode }) =>
    surface === "strong" ? (
      <div className="surface-strong">{children}</div>
    ) : surface === "soft" ? (
      <div className="surface">{children}</div>
    ) : (
      <>{children}</>
    );

  return (
    <Tag className={className} data-reveal-delay={Math.min(delay, 0.12)}>
      <SurfaceWrap>{children}</SurfaceWrap>
    </Tag>
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
