"use client";

export type AnalyticsProps = Record<string, string | number | boolean | null | undefined>;

export function track(eventName: string, props?: AnalyticsProps) {
  if (typeof window === "undefined") return;

  const plausible = (window as any).plausible;
  if (typeof plausible !== "function") return;

  if (props && Object.keys(props).length > 0) {
    plausible(eventName, { props });
    return;
  }

  plausible(eventName);
}
