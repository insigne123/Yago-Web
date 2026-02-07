"use client";

import * as React from "react";

type Touch = {
  ts: string; // ISO
  landing: string;
  referrer: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  msclkid?: string;
};

type StoredAttribution = {
  first: Touch;
  last: Touch;
};

const STORAGE_KEY = "yago_attribution_v1";

function nowISO() {
  return new Date().toISOString();
}

function safeString(v: string | null | undefined) {
  return (v || "").trim();
}

function parseTouchFromLocation(): Touch {
  const url = new URL(window.location.href);
  const p = url.searchParams;

  const touch: Touch = {
    ts: nowISO(),
    landing: url.pathname,
    referrer: safeString(document.referrer),
  };

  const utm_source = safeString(p.get("utm_source"));
  const utm_medium = safeString(p.get("utm_medium"));
  const utm_campaign = safeString(p.get("utm_campaign"));
  const utm_term = safeString(p.get("utm_term"));
  const utm_content = safeString(p.get("utm_content"));

  const gclid = safeString(p.get("gclid"));
  const fbclid = safeString(p.get("fbclid"));
  const msclkid = safeString(p.get("msclkid"));

  if (utm_source) touch.utm_source = utm_source;
  if (utm_medium) touch.utm_medium = utm_medium;
  if (utm_campaign) touch.utm_campaign = utm_campaign;
  if (utm_term) touch.utm_term = utm_term;
  if (utm_content) touch.utm_content = utm_content;

  if (gclid) touch.gclid = gclid;
  if (fbclid) touch.fbclid = fbclid;
  if (msclkid) touch.msclkid = msclkid;

  return touch;
}

function isCampaignTouch(touch: Touch) {
  return !!(
    touch.utm_source ||
    touch.utm_medium ||
    touch.utm_campaign ||
    touch.utm_term ||
    touch.utm_content ||
    touch.gclid ||
    touch.fbclid ||
    touch.msclkid
  );
}

function readStored(): StoredAttribution | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredAttribution;
  } catch {
    return null;
  }
}

function writeStored(value: StoredAttribution) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // ignore
  }
}

function mergeLast(prev: Touch, current: Touch): Touch {
  // Always update last seen + landing.
  const next: Touch = {
    ...prev,
    ts: current.ts,
    landing: current.landing,
  };

  // Referrer is only reliable on the entry page, but keep the freshest non-empty.
  if (current.referrer) next.referrer = current.referrer;

  // Only overwrite campaign fields when a campaign is present.
  if (isCampaignTouch(current)) {
    next.utm_source = current.utm_source;
    next.utm_medium = current.utm_medium;
    next.utm_campaign = current.utm_campaign;
    next.utm_term = current.utm_term;
    next.utm_content = current.utm_content;
    next.gclid = current.gclid;
    next.fbclid = current.fbclid;
    next.msclkid = current.msclkid;
  }

  return next;
}

export function updateAttribution(): StoredAttribution | null {
  if (typeof window === "undefined") return null;

  const current = parseTouchFromLocation();
  const stored = readStored();

  const next: StoredAttribution = stored
    ? { first: stored.first, last: mergeLast(stored.last, current) }
    : { first: current, last: current };

  writeStored(next);
  return next;
}

export function useAttribution() {
  const [attr, setAttr] = React.useState<StoredAttribution | null>(null);

  React.useEffect(() => {
    const next = updateAttribution();
    if (next) setAttr(next);
  }, []);

  return attr;
}
