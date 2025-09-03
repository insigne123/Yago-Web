"use client";

export function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none bg-fx"
    >
      <div className="absolute inset-0 bg-fx-gradient" />
      <div className="absolute inset-0 bg-fx-grid" />
      <div className="absolute inset-0 bg-fx-noise" />
    </div>
  );
}
