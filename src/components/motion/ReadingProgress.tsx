"use client";

import { useEffect, useRef } from "react";

/**
 * Barra fina arriba de la pantalla que avanza mientras se lee el artículo.
 * Va de 0 (el artículo toca el borde superior) a 1 (su final llega al borde inferior).
 * Un listener pasivo con requestAnimationFrame basta: no hace falta cargar una librería de animación.
 */
export function ReadingProgress({ targetId }: { targetId: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = ref.current;
    const target = document.getElementById(targetId);
    if (!bar || !target) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = target.getBoundingClientRect();
      const distance = rect.height - window.innerHeight;
      const progress = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : Number(rect.top <= 0);
      bar.style.transform = `scaleX(${progress})`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Primera medición en el siguiente cuadro: no fuerza el layout del artículo durante la hidratación.
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [targetId]);

  return <div ref={ref} className="y-progress" aria-hidden="true" />;
}
