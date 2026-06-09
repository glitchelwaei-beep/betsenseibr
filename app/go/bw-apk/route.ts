import { NextRequest, NextResponse } from "next/server";
import { BETWINNER } from "@/lib/partner";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get("src");
  const target = src
    ? `${BETWINNER.affiliateApkUrl}&s2=${encodeURIComponent(src)}`
    : BETWINNER.affiliateApkUrl;

  return NextResponse.redirect(target, {
    status: 302,
    headers: {
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
    },
  });
}
