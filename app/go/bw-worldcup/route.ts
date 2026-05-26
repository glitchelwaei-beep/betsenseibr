import { NextRequest, NextResponse } from "next/server";
import { BETWINNER } from "@/lib/partner";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get("src");
  const url = new URL(BETWINNER.affiliateUrl);
  if (src) url.searchParams.set("s1", src);

  return NextResponse.redirect(url.toString(), {
    status: 302,
    headers: {
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
    },
  });
}
