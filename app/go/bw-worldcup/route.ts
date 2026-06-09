import { NextResponse } from "next/server";
import { BETWINNER } from "@/lib/partner";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.redirect(BETWINNER.affiliateUrl, {
    status: 302,
    headers: {
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
    },
  });
}
