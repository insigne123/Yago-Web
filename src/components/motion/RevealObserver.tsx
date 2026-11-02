"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { onFirstInteraction } from "@/components/motion/firstInteraction";

/**
 * Entradas escalonadas con Motion para todo el sitio, sin tocar cada página:
 * anima las tarjetas `.y-reveal` y los encabezados de cada sección (eyebrow, título, bajada)
 * cuando entran en pantalla. Los que ya se ven al cargar quedan quietos.
 *
 * Mejora progresiva: el HTML del servidor muestra todo; recién con la primera interacción
 * (cursor, toque, rueda o teclado) se carga Motion y se esconden los elementos que aún están
 * fuera de pantalla (clase `y-motion` en <html>). Mientras tanto, los navegadores con
 * `animation-timeline` usan la entrada en CSS de `.y-reveal`.
 */
const SELECTOR = [
  ".y-reveal",
  ".y-sheet .y-eyebrow",
  ".y-sheet .y-h2",
  ".y-sheet .y-lead",
  "[data-reveal]",
].join(",");

let firstRun = true;

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    let disposed = false;
    let cleanup = () => {};
    const cancelWait = onFirstInteraction(() => void import("motion").then(({ animate, inView, stagger }) => {
      if (disposed) return;

      const root = document.documentElement;
      const viewport = window.innerHeight;
      const pending: HTMLElement[] = [];
      // En la carga inicial lo visible queda quieto; al navegar entre páginas, todo entra animado.
      const skipVisible = firstRun;
      firstRun = false;

      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((element) => {
        if ("revealed" in element.dataset) return;
        const rect = element.getBoundingClientRect();
        // Visible al cargar (o sin tamaño): no se anima.
        if (rect.height === 0 || (skipVisible && rect.top < viewport * 0.94 && rect.bottom > 0)) {
          element.dataset.revealed = "";
        } else {
          pending.push(element);
        }
      });
      root.classList.add("y-motion");
      if (!pending.length) return;

      let batch: HTMLElement[] = [];
      let frame = 0;

      // Lo que entra en el mismo cuadro se anima en cascada.
      const flush = () => {
        frame = 0;
        const elements = batch.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top || a.getBoundingClientRect().left - b.getBoundingClientRect().left);
        batch = [];
        elements.forEach((element) => {
          element.dataset.revealed = "";
        });
        animate(
          elements,
          { opacity: [0, 1], translate: ["0 28px", "0 0"] },
          { duration: 0.85, delay: stagger(0.07, { startDelay: 0.02 }), ease: [0.22, 1, 0.36, 1] }
        );
      };

      const stop = inView(
        pending,
        (element) => {
          batch.push(element as HTMLElement);
          if (!frame) frame = requestAnimationFrame(flush);
        },
        { margin: "0px 0px -8% 0px" }
      );

      cleanup = () => {
        stop();
        if (frame) cancelAnimationFrame(frame);
      };
    }).catch(() => { document.documentElement.classList.remove("y-motion"); }));
    return () => { disposed = true; cancelWait(); cleanup(); };
  }, [pathname]);

  return null;
}
