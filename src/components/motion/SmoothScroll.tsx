"use client";

import { useEffect } from "react";
import type Lenis from "lenis";
import { onFirstInteraction } from "@/components/motion/firstInteraction";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Scroll suave con Lenis.
 * - Se desactiva si la persona pidió reducir el movimiento.
 * - En pantallas táctiles se mantiene el scroll nativo (comportamiento por defecto de Lenis).
 * - Se detiene mientras un modal bloquea el scroll (menú móvil, diálogos de Radix).
 * - Los enlaces a anclas (#formulario, #planes…) se desplazan con el mismo suavizado.
 * - Se carga con la primera interacción, no durante la carga de la página.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    let disposed = false;
    let cleanup = () => {};
    const cancelWait = onFirstInteraction(() => void import("lenis").then(({ default: LenisConstructor }) => {
      if (disposed) return;
      const headerOffset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 104;

      const lenis = new LenisConstructor({
        autoRaf: true,
        lerp: 0.11,
        wheelMultiplier: 1,
        anchors: { offset: -headerOffset },
        allowNestedScroll: true,
        stopInertiaOnNavigate: true,
        prevent: (node) => node.hasAttribute?.("data-lenis-prevent") || node.getAttribute?.("role") === "dialog",
      });
      window.__lenis = lenis;

    // Radix (react-remove-scroll) marca el body mientras hay un modal abierto.
      const syncLock = () => {
        if (document.body.hasAttribute("data-scroll-locked")) lenis.stop();
        else lenis.start();
      };
      const observer = new MutationObserver(syncLock);
      observer.observe(document.body, { attributes: true, attributeFilter: ["data-scroll-locked", "style"] });
      syncLock();

      cleanup = () => {
        observer.disconnect();
        lenis.destroy();
        if (window.__lenis === lenis) delete window.__lenis;
      };
    }).catch(() => { /* El scroll nativo sigue disponible si falla la mejora opcional. */ }));

    return () => { disposed = true; cancelWait(); cleanup(); };
  }, []);

  return null;
}
