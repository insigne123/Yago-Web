export function BackgroundFX() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-fx-gradient" />
      <div className="absolute inset-0 bg-fx-soft-orbs" />
      <div className="absolute inset-0 bg-fx-vignette" />
      <div className="absolute top-0 left-0 right-0 h-px bg-fx-topline" />
    </div>
  );
}
