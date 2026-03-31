import Script from "next/script";

const BEACON_SRC = "https://static.cloudflareinsights.com/beacon.min.js";

export function CloudflareWebAnalytics() {
  const token =
    process.env.NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN ||
    process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

  if (!token) return null;

  return (
    <Script
      id="cloudflare-web-analytics"
      strategy="afterInteractive"
      src={BEACON_SRC}
      data-cf-beacon={JSON.stringify({ token })}
    />
  );
}
