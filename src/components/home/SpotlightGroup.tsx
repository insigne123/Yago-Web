"use client";

import type { ReactNode, PointerEvent } from "react";

/** Mueve un foco de luz suave dentro de cada tarjeta `.y-spot` según la posición del cursor. */
export function SpotlightGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const card = (event.target as HTMLElement).closest<HTMLElement>(".y-spot");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div className={className} onPointerMove={onPointerMove}>
      {children}
    </div>
  );
}
