"use client";

import { useEffect, useRef } from "react";
import { onFirstInteraction } from "@/components/motion/firstInteraction";

type MotionModule = typeof import("motion");

const format = (value: number, decimals: number) =>
  value.toLocaleString("es-CL", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

/** "8.000" -> 8000 · "3,5" -> 3.5 · "1.142" -> 1142 (formato chileno). */
function parseChilean(raw: string) {
  const [intPart, decPart = ""] = raw.split(",");
  return { value: Number(intPart.replace(/\./g, "") + (decPart ? `.${decPart}` : "")), decimals: decPart.length };
}

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(hover: none) and (pointer: coarse)").matches;
}

/**
 * Número que sube desde 0 cuando aparece en pantalla.
 * El servidor entrega el valor final (SEO y sin JS); solo se anima si está fuera de pantalla al cargar.
 * Textos sin número útil ("24/7", "~1 min") se muestran tal cual.
 */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/^([^\d]*)(\d[\d.,]*)(.*)$/);
  const parsed = match ? parseChilean(match[2]) : null;
  const animatable = Boolean(match && parsed && parsed.value >= 10 && !match[3].trim().startsWith("/"));

  useEffect(() => {
    const element = ref.current;
    if (!element || !animatable || !match || !parsed || reducedMotion()) return;
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;
    let disposed = false;
    let cleanup = () => {};
    void import("motion").then(({ animate, inView }) => {
      if (disposed) return;

      const [, prefix, , suffix] = match;
      element.textContent = `${prefix}${format(0, parsed.decimals)}${suffix}`;
      let controls: ReturnType<MotionModule["animate"]> | undefined;
      const stop = inView(element, () => {
        controls = animate(0, parsed.value, {
          duration: 1.4,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (latest) => {
            element.textContent = `${prefix}${format(latest, parsed.decimals)}${suffix}`;
          },
        });
      });
      cleanup = () => {
        stop();
        controls?.stop();
        element.textContent = value;
      };
    }).catch(() => { element.textContent = value; });
    return () => { disposed = true; cleanup(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {value}
    </span>
  );
}

/**
 * Contador "en vivo" para las maquetas de producto: parte en el valor dado y
 * suma de a poco mientras está en pantalla, con un pequeño destello al cambiar.
 * Es ilustrativo (los paneles son datos de ejemplo) y arranca con la primera interacción.
 */
export function LiveNumber({
  value,
  step = [1, 3],
  every = [2200, 4200],
  className,
}: {
  value: string;
  step?: [number, number];
  every?: [number, number];
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion()) return;
    let disposed = false;
    let cleanup = () => {};
    const cancelWait = onFirstInteraction(() => void import("motion").then(({ animate, inView }) => {
      if (disposed) return;
      let current = parseChilean(value).value;
      let timer = 0;
      let visible = false;

      const tick = () => {
        if (visible && document.visibilityState === "visible") {
          const increment = step[0] + Math.floor(Math.random() * (step[1] - step[0] + 1));
          const from = current;
          current += increment;
          animate(from, current, {
            duration: 0.6,
            ease: "easeOut",
            onUpdate: (latest) => {
              element.textContent = format(Math.round(latest), 0);
            },
          });
          element.animate(
            [{ color: "#0284c7", textShadow: "0 0 12px rgba(56,189,248,0.55)" }, { color: "inherit", textShadow: "none" }],
            { duration: 900, easing: "ease-out" }
          );
        }
        timer = window.setTimeout(tick, every[0] + Math.random() * (every[1] - every[0]));
      };

      const stop = inView(element, () => {
        visible = true;
        return () => {
          visible = false;
        };
      });
      timer = window.setTimeout(tick, 1200 + Math.random() * 1500);

      cleanup = () => {
        stop();
        window.clearTimeout(timer);
        element.textContent = value;
      };
    }).catch(() => { element.textContent = value; }));
    return () => { disposed = true; cancelWait(); cleanup(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {value}
    </span>
  );
}
