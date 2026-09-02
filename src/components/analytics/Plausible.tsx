import Script from "next/script";

const DEFAULT_SRC = "https://plausible.io/js/script.manual.js";

export function Plausible() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;

  const src = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC || DEFAULT_SRC;
  const api = process.env.NEXT_PUBLIC_PLAUSIBLE_API;

  return (
    <>
      {/* Queue calls until the Plausible script loads */}
      <Script id="plausible-queue" strategy="beforeInteractive">
        {`window.plausible = window.plausible || function(){(window.plausible.q = window.plausible.q || []).push(arguments)}`}
      </Script>

      <Script
        id="plausible-script"
        strategy="afterInteractive"
        data-domain={domain}
        data-api={api}
        src={src}
      />
    </>
  );
}
