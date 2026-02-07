"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function PlausiblePageview() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const plausible = (window as any).plausible;
    if (typeof plausible !== "function") return;

    // Needed when using script.manual.js (SPA + App Router navigation)
    plausible("pageview");
  }, [pathname]);

  return null;
}
