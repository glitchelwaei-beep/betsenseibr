import { NextRequest, NextResponse } from "next/server";

const TRACKER =
  "https://tgr2iihnlrzq.top/copa-libertadores-2024/?s1=betsensei&p=%2Fregistration%2F&lang=pt&id=2Wwf";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const src = request.nextUrl.searchParams.get("src");
  const target = src ? `${TRACKER}&s2=${encodeURIComponent(src)}` : TRACKER;

  return NextResponse.redirect(target, {
    status: 302,
    headers: {
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
    },
  });
}
