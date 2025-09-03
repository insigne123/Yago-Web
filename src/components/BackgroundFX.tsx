"use client";

export function BackgroundFX() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none">
      {/* Glows radiales intensos y fijos */}
      <div className="absolute inset-0 bg-fx-gradient" />
      {/* Grid sutil con máscara */}
      <div className="absolute inset-0 bg-fx-grid" />
      {/* Textura de ruido muy ligera */}
      <div className="absolute inset-0 bg-fx-noise" />
      {/* Borde superior con degradado (apenas visible) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-fx-topline" />
    </div>
  );
}
