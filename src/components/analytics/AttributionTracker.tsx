"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { updateAttribution } from "@/lib/attribution";

export function AttributionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    updateAttribution();
  }, [pathname]);

  return null;
}
