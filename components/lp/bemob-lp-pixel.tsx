"use client";

import Script from "next/script";
import { BEMOB_LANDING_ID, BEMOB_TRACKING_DOMAIN } from "@/lib/affiliate";

const BEMOB_CB = `
function bemobCb(params) {
  var t = params.trackingDomain+'/click/';
  var re = new RegExp(t+'?(\\\\d*)');
  var e = document.querySelectorAll('a[href*="'+t+'"]');
  for (var i = 0; i < e.length; i++) {
    var ex = re.exec(e[i].href);
    if (ex) {
      e[i].href = params.ctaSecureUrl.replace('%%OFFER_NUMBER%%', ex[1] || 1);
    }
  }
}
`;

type BemobLpPixelProps = {
  /** BeMob landing index — unique per LP route (1–4). */
  landingNumber: number;
};

export function BemobLpPixel({ landingNumber }: BemobLpPixelProps) {
  const landingPixelSrc = `${BEMOB_TRACKING_DOMAIN}/landing/${BEMOB_LANDING_ID}?rule=1&path=1&landing=${landingNumber}`;

  return (
    <>
      <Script id="bemob-callback" strategy="beforeInteractive">
        {BEMOB_CB}
      </Script>
      <Script id="bemob-landing-loader" strategy="afterInteractive">
        {`(function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="${BEMOB_TRACKING_DOMAIN}/landing/${BEMOB_LANDING_ID}?callback=bemobCb&rule=1&path=1&landing=${landingNumber}&"+window.location.search.substring(1);var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={landingPixelSrc} alt="" />
      </noscript>
    </>
  );
}
