type SearchParamValue = string | string[] | undefined;

/** BeMob tracker — LPs use direct click URL + LP pixel (no /go/bemob hop). */
export const BEMOB_TRACKING_DOMAIN = "https://39hmh.bemobtrcks.com";
export const BEMOB_LANDING_ID = "007f19d2-b25b-44e2-aca2-3707c3924aa8";
/** BeMob pixel `landing=` index per LP route. */
export const BEMOB_LP_PIXEL = {
  "bonus-estrangeira": 1,
  "migrando-betwinner": 2,
  "erro-copa": 3,
  "copa-pix": 4,
  "copa-bonus-100": 5, // TODO: confirm landing= index from BeMob LP generator
} as const;

/** BeMob click URL `l=` index per LP route (from BeMob offer links). */
export const BEMOB_LP_CTA = {
  "bonus-estrangeira": 1,
  "migrando-betwinner": 3,
  "erro-copa": 4,
  "copa-pix": 5,
  "copa-bonus-100": 6, // TODO: confirm l= index from BeMob offer link — or use BEMOB_COPA_BONUS_100_CTA_URL
} as const;

/**
 * TODO: Paste full BeMob CTA URL from RichAds landing generator for /lp/copa-bonus-100.
 * Replace the placeholder below before sending push traffic.
 */
export const BEMOB_COPA_BONUS_100_CTA_URL =
  "https://39hmh.bemobtrcks.com/click/1?ns=c%3DTODO_PASTE_BEMOB_CTA_NS_FROM_GENERATOR";

/** @deprecated Use BEMOB_LP_PIXEL or BEMOB_LP_CTA. */
export const BEMOB_LP_LANDING = BEMOB_LP_PIXEL;

function buildBemobCtaBaseUrl(landingNumber: number): string {
  const ns = `c=${BEMOB_LANDING_ID}..l=${landingNumber}..a=0..b=0`;
  return `${BEMOB_TRACKING_DOMAIN}/click/1?ns=${encodeURIComponent(ns)}`;
}

/** @deprecated Use buildLpCtaHref(params, landingNumber) instead. */
export const BEMOB_CTA_URL = buildBemobCtaBaseUrl(BEMOB_LP_CTA["migrando-betwinner"]);

/** @deprecated Server redirect — LPs now use BEMOB_CTA_URL directly. */
export const BEMOB_CLICK_URL = `${BEMOB_TRACKING_DOMAIN}/click`;

function toSearchParams(params: Record<string, SearchParamValue>): URLSearchParams {
  const sp = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const v of value) sp.append(key, v);
    } else {
      sp.set(key, value);
    }
  }
  return sp;
}

function buildGoHref(path: string, params: Record<string, SearchParamValue>): string {
  const qs = toSearchParams(params).toString();
  return qs ? `${path}?${qs}` : path;
}

/** Build `/go/betwinner` href preserving all incoming tracking params. */
export function buildBetwinnerGoHref(params: Record<string, SearchParamValue>): string {
  return buildGoHref("/go/betwinner", params);
}

/** Build BeMob CTA href for MGID landing pages — forwards incoming params. */
export function buildLpCtaHref(
  params: Record<string, SearchParamValue>,
  landingNumber: number,
): string {
  return appendAffiliateParams(buildBemobCtaBaseUrl(landingNumber), toSearchParams(params));
}

/** Build BeMob CTA href for /lp/copa-bonus-100 — uses BEMOB_COPA_BONUS_100_CTA_URL placeholder. */
export function buildCopaBonus100CtaHref(params: Record<string, SearchParamValue>): string {
  return appendAffiliateParams(BEMOB_COPA_BONUS_100_CTA_URL, toSearchParams(params));
}

/** Append all incoming query params onto an affiliate tracker URL. */
export function appendAffiliateParams(baseUrl: string, incoming: URLSearchParams): string {
  if ([...incoming.keys()].length === 0) return baseUrl;

  const url = new URL(baseUrl);
  for (const [key, value] of incoming.entries()) {
    url.searchParams.set(key, value);
  }
  return url.toString();
}
