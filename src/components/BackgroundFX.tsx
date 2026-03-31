export function BackgroundFX() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-fx-gradient" />
      <div className="absolute -left-[10rem] top-[4%] h-[22rem] w-[22rem] rounded-full bg-sky-400/8 blur-[96px]" />
      <div className="absolute -right-[8rem] top-[18%] h-[18rem] w-[18rem] rounded-full bg-indigo-300/8 blur-[100px]" />
      <div className="absolute left-[24%] top-[76%] h-[16rem] w-[16rem] rounded-full bg-amber-200/6 blur-[96px]" />

      <div className="absolute inset-0 bg-fx-vignette" />
      <div className="absolute top-0 left-0 right-0 h-px bg-fx-topline" />
    </div>
  );
}
