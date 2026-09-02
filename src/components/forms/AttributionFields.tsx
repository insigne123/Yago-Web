"use client";

import { useAttribution } from "@/lib/attribution";

export function AttributionFields() {
  const attribution = useAttribution();
  const first = attribution?.first;
  const last = attribution?.last;
  const fields = {
    ft_utm_source: first?.utm_source,
    ft_utm_medium: first?.utm_medium,
    ft_utm_campaign: first?.utm_campaign,
    ft_utm_term: first?.utm_term,
    ft_utm_content: first?.utm_content,
    ft_gclid: first?.gclid,
    ft_fbclid: first?.fbclid,
    ft_msclkid: first?.msclkid,
    ft_referrer: first?.referrer,
    ft_landing: first?.landing,
    ft_ts: first?.ts,
    lt_utm_source: last?.utm_source,
    lt_utm_medium: last?.utm_medium,
    lt_utm_campaign: last?.utm_campaign,
    lt_utm_term: last?.utm_term,
    lt_utm_content: last?.utm_content,
    lt_gclid: last?.gclid,
    lt_fbclid: last?.fbclid,
    lt_msclkid: last?.msclkid,
    lt_referrer: last?.referrer,
    lt_landing: last?.landing,
    lt_ts: last?.ts,
  };

  return (
    <>
      {Object.entries(fields).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={value || ""} />
      ))}
    </>
  );
}
