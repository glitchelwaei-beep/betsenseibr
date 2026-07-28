"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BETWINNER } from "@/lib/partner";
import { cn } from "@/lib/cn";

const DISMISS_KEY = "site-sticky-bw-dismissed";
const CTA_HREF = "/go/betwinner?src=sticky-banner";

export function StickyBetwinnerBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.sessionStorage.getItem(DISMISS_KEY)) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    window.sessionStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Spacer so footer/content aren’t covered by the fixed bar */}
      <div className="h-[4.75rem] sm:h-[5.25rem]" aria-hidden />

      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-4"
        role="complementary"
        aria-label={`Oferta ${BETWINNER.name}`}
      >
        <div
          className={cn(
            "pointer-events-auto relative mx-auto flex w-full max-w-4xl items-center gap-2.5",
            "rounded-full pl-4 pr-12 py-2 sm:gap-4 sm:pl-6 sm:pr-14 sm:py-2.5",
            "shadow-[0_12px_40px_-10px_rgba(0,0,0,0.75)]",
          )}
          style={{
            background:
              "linear-gradient(90deg, #0d5c2e 0%, #0a3d22 28%, #0a0e12 72%, #050607 100%)",
          }}
        >
          <button
            type="button"
            onClick={dismiss}
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:right-2.5"
            aria-label="Fechar"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <p
            className="shrink-0 font-display text-sm font-extrabold italic tracking-tight sm:text-base md:text-lg"
            aria-hidden
          >
            <span style={{ color: BETWINNER.brandColor }}>BET</span>
            <span className="text-white">WINNER</span>
          </p>

          <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-2.5">
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black/45 ring-1 ring-white/15 sm:h-7 sm:w-7"
              aria-hidden
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12.5l5 5L19 7"
                  stroke="#fff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="truncate font-display text-xs font-bold italic leading-tight text-white sm:text-sm md:text-base">
              <span className="sm:hidden">Cadastre-se agora</span>
              <span className="hidden sm:inline">Cadastre-se na BetWinner agora</span>
            </p>
          </div>

          <Link
            href={CTA_HREF}
            className={cn(
              "shrink-0 rounded-full bg-[#eab308] px-3.5 py-2 text-xs font-extrabold text-black no-underline",
              "transition-colors hover:bg-[#facc15] active:scale-[0.98]",
              "sm:px-5 sm:py-2.5 sm:text-sm",
            )}
          >
            Apostar agora
          </Link>
        </div>
      </div>
    </>
  );
}
