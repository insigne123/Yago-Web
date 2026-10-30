"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Beam = { d: string; duration: number; delay: number };

/** Posición de un elemento relativa al contenedor, sin contar transformaciones (animaciones de entrada). */
function offsetWithin(element: HTMLElement, container: HTMLElement) {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = element;
  while (node && node !== container) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x, y, width: element.offsetWidth, height: element.offsetHeight };
}

function curve(x1: number, y1: number, x2: number, y2: number) {
  const dx = (x2 - x1) * 0.55;
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

/**
 * Dibuja "haces de luz" animados entre nodos marcados con `data-beam="in" | "hub" | "out"`.
 * Los nodos de entrada se conectan al centro y el centro a los de salida.
 * El contenido (nodos) lo renderiza el servidor; este componente solo mide y dibuja el SVG.
 */
export function BeamCanvas({ children, className = "", tone = "dark" }: { children: ReactNode; className?: string; tone?: "dark" | "light" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [beams, setBeams] = useState<Beam[]>([]);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const measure = () => {
      const hub = container.querySelector<HTMLElement>('[data-beam="hub"]');
      if (!hub) return;
      const h = offsetWithin(hub, container);
      const hubLeft = h.x;
      const hubRight = h.x + h.width;
      const hubY = h.y + h.height / 2;
      const next: Beam[] = [];
      let index = 0;
      container.querySelectorAll<HTMLElement>('[data-beam="in"]').forEach((node) => {
        const n = offsetWithin(node, container);
        next.push({ d: curve(n.x + n.width, n.y + n.height / 2, hubLeft, hubY), duration: 2.8 + (index % 3) * 0.45, delay: index * 0.55 });
        index += 1;
      });
      container.querySelectorAll<HTMLElement>('[data-beam="out"]').forEach((node) => {
        const n = offsetWithin(node, container);
        next.push({ d: curve(hubRight, hubY, n.x, n.y + n.height / 2), duration: 2.8 + (index % 3) * 0.45, delay: 1.2 + index * 0.45 });
        index += 1;
      });
      setSize({ width: container.offsetWidth, height: container.offsetHeight });
      setBeams(next);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => observer.disconnect();
  }, []);

  const base = tone === "dark" ? "rgba(125,211,252,0.16)" : "rgba(2,132,199,0.16)";

  return (
    <div ref={ref} className={`relative ${className}`}>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-visible"
        width={size.width}
        height={size.height}
        viewBox={`0 0 ${size.width || 1} ${size.height || 1}`}
      >
        {beams.map((beam, index) => (
          <g key={index}>
            <path d={beam.d} fill="none" stroke={base} strokeWidth={1.5} />
            <path
              d={beam.d}
              pathLength={100}
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
              className={`y-flow-beam ${tone === "light" ? "y-flow-beam--light" : ""}`}
              style={{ animationDuration: `${beam.duration}s`, animationDelay: `${beam.delay}s` }}
            />
          </g>
        ))}
      </svg>
      {children}
    </div>
  );
}
