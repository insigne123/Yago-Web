"use client";

import { useEffect, useRef } from "react";
import { scroll } from "motion";

/** Barra fina arriba de la pantalla que avanza mientras se lee el artículo. */
export function ReadingProgress({ targetId }: { targetId: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = ref.current;
    const target = document.getElementById(targetId);
    if (!bar || !target) return;
    return scroll(
      (progress: number) => {
        bar.style.transform = `scaleX(${progress})`;
      },
      { target, offset: ["start start", "end end"] }
    );
  }, [targetId]);

  return <div ref={ref} className="y-progress" aria-hidden="true" />;
}
