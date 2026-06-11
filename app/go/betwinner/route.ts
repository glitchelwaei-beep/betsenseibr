import { NextRequest, NextResponse } from "next/server";
import { appendAffiliateParams } from "@/lib/affiliate";
import { BETWINNER } from "@/lib/partner";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const target = appendAffiliateParams(BETWINNER.affiliateUrl, request.nextUrl.searchParams);

  return NextResponse.redirect(target, {
    status: 302,
    headers: {
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
    },
  });
}
