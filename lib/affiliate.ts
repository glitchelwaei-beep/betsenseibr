type SearchParamValue = string | string[] | undefined;

/** Build `/go/betwinner` href preserving all incoming tracking params. */
export function buildBetwinnerGoHref(params: Record<string, SearchParamValue>): string {
  const sp = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const v of value) sp.append(key, v);
    } else {
      sp.set(key, value);
    }
  }
  const qs = sp.toString();
  return qs ? `/go/betwinner?${qs}` : "/go/betwinner";
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
