"use client";

import { LpCtaLink } from "@/components/lp/lp-cta-link";
import { useEffect, useState } from "react";
import { BETWINNER } from "@/lib/partner";
import { cn } from "@/lib/cn";

type StickyOfferWidgetProps = {
  href: string;
  /** sessionStorage key — dismiss hides widget for the browser session */
  dismissKey?: string;
  offerLine?: string;
  className?: string;
};

const DEFAULT_OFFER = `Bônus ${BETWINNER.bonusShort} para novos jogadores · PIX em ~5 min · Código ${BETWINNER.promoCode}`;

export function StickyOfferWidget({
  href,
  dismissKey = "lp-sticky-offer-dismissed",
  offerLine = DEFAULT_OFFER,
  className,
}: StickyOfferWidgetProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.sessionStorage.getItem(dismissKey)) {
      setVisible(true);
    }
  }, [dismissKey]);

  const dismiss = () => {
    window.sessionStorage.setItem(dismissKey, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:bottom-4 md:px-4",
        className,
      )}
      role="complementary"
      aria-label="Oferta BetWinner"
    >
      <div className="relative mx-auto w-full max-w-lg md:max-w-md">
        <button
          type="button"
          onClick={dismiss}
          className="absolute -right-1 -top-1 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-zinc-600 bg-zinc-800 text-sm text-zinc-300 shadow-md transition-colors hover:bg-zinc-700 hover:text-white"
          aria-label="Fechar oferta"
        >
          ×
        </button>

        <div className="overflow-hidden rounded-xl border border-white/15 bg-zinc-900/95 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.7)] backdrop-blur-md">
          <div className="p-3.5 sm:p-4">
            <div className="flex items-start gap-3 pr-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-display text-sm font-extrabold text-white shadow-sm"
                style={{ backgroundColor: BETWINNER.brandColor }}
                aria-hidden
              >
                BW
              </div>
              <p className="font-display text-sm font-bold leading-snug text-white sm:text-base">
                {offerLine}
              </p>
            </div>

            <LpCtaLink
              href={href}
              className="mt-3 flex min-h-[48px] w-full items-center justify-center rounded-lg bg-brand px-4 text-sm font-bold text-white no-underline shadow-[0_4px_20px_-4px_rgba(249,115,22,0.6)] transition-colors hover:bg-brand-hover active:scale-[0.98]"
            >
              Ir para BetWinner
            </LpCtaLink>

            <p className="mt-2.5 text-[10px] leading-relaxed text-zinc-500">
              18+ · Jogo responsável · Bônus sujeito a termos da {BETWINNER.name}. Apostas envolvem
              risco financeiro.
            </p>
          </div>

          <div className="border-t border-white/10 bg-zinc-950/50 px-3.5 py-2 text-right sm:px-4">
            <p className="text-[10px] text-zinc-500">
              Recomendado por{" "}
              <span className="font-semibold text-zinc-400">BetSensei BR</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
