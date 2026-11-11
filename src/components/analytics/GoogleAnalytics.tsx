import Script from "next/script";
import { GOOGLE_ANALYTICS_ID, GOOGLE_ANALYTICS_OPT_OUT_KEY } from "@/config/analytics";

export function GoogleAnalytics() {
  if (!GOOGLE_ANALYTICS_ID) return null;

  return (
    <>
      <Script id="google-analytics-init" strategy="beforeInteractive">
        {`window.dataLayer=window.dataLayer||[];
window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};
try{window['ga-disable-${GOOGLE_ANALYTICS_ID}']=window.localStorage.getItem('${GOOGLE_ANALYTICS_OPT_OUT_KEY}')==='1'}catch(e){}
gtag('js',new Date());
gtag('config','${GOOGLE_ANALYTICS_ID}',{send_page_view:true,allow_google_signals:false,allow_ad_personalization_signals:false,linker:{domains:['yago.cl','axis-legal.cl']}});`}
      </Script>
      <Script id="google-analytics-script" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} />
    </>
  );
}
