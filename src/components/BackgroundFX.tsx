"use client";

export function BackgroundFX() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-fx-gradient fx-bg-float-a" />
      <div className="absolute -left-[14rem] top-[10%] h-[30rem] w-[30rem] rounded-full bg-sky-400/12 blur-[120px] fx-bg-float-c" />
      <div className="absolute -right-[12rem] top-[18%] h-[28rem] w-[28rem] rounded-full bg-indigo-300/12 blur-[130px] fx-bg-float-d" />
      <div className="absolute left-1/3 top-[70%] h-[24rem] w-[24rem] rounded-full bg-amber-200/8 blur-[130px] fx-bg-float-b" />

      <div className="absolute inset-0 bg-fx-vignette" />
      <div className="absolute inset-0 bg-fx-noise" />
      <div className="absolute top-0 left-0 right-0 h-px bg-fx-topline" />
    </div>
  );
}
