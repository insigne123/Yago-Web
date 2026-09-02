"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function PlausibleClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>("[class*='plausible-event-name=']")
        : null;
      if (!target) return;

      const tokens = Array.from(target.classList);
      const nameToken = tokens.find((token) => token.startsWith("plausible-event-name="));
      if (!nameToken) return;

      const props: Record<string, string> = {};
      for (const token of tokens) {
        if (!token.startsWith("plausible-event-") || token === nameToken) continue;
        const [key, ...valueParts] = token.replace("plausible-event-", "").split("=");
        if (key && valueParts.length) props[key] = valueParts.join("=").replaceAll("+", " ");
      }

      track(nameToken.replace("plausible-event-name=", "").replaceAll("+", " "), props);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
