"use client";

import { useEffect } from "react";
import { BEMOB_TRACKING_DOMAIN } from "@/lib/affiliate";
import {
  RICHADS_CLICK_ID_COOKIE,
  RICHADS_CLICK_ID_PARAM,
  RICHADS_CONVERSION_LOG_URL,
} from "@/lib/richads-push";

const COOKIE_MAX_AGE_DAYS = 30;

function getRichAdsClickIdFromCookie(): string | undefined {
  const part = (`; ${document.cookie}`).split(`; ${RICHADS_CLICK_ID_COOKIE}=`).pop();
  if (!part) return undefined;
  const value = part.split(";").shift();
  return value || undefined;
}

function storeRichAdsClickId(clickId: string) {
  const expires = new Date();
  expires.setTime(expires.getTime() + COOKIE_MAX_AGE_DAYS * 24 * 60 * 60 * 1000);
  document.cookie = `${RICHADS_CLICK_ID_COOKIE}=${clickId}; expires=${expires.toUTCString()}; path=/`;
}

/** Fire RichAds conversion ping — call on CTA click when cookie is set. */
export function fireRichAdsConversion() {
  const clickId = getRichAdsClickIdFromCookie();
  if (!clickId) return;

  const url = `${RICHADS_CONVERSION_LOG_URL}?action=conversion&key=${encodeURIComponent(clickId)}`;
  fetch(url, { keepalive: true, mode: "no-cors" }).catch(() => {});
}

/** Captures utm_ra_click_id on land; fires conversion on BeMob CTA clicks. */
export function RichAdsPushTracking() {
  useEffect(() => {
    const clickId = new URL(window.location.href).searchParams.get(RICHADS_CLICK_ID_PARAM);
    if (clickId) storeRichAdsClickId(clickId);

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor?.href.includes(BEMOB_TRACKING_DOMAIN)) return;
      fireRichAdsConversion();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
