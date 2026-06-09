import { ButtonLink } from "@/components/ui/button";
import { PromoCodeCopy } from "@/components/site/promo-code-copy";
import { BETWINNER } from "@/lib/partner";
import { cn } from "@/lib/cn";

type AffiliateOfferCardProps = {
  affiliateSrc: string;
  headline?: string;
  subline?: string;
  className?: string;
};

export function AffiliateOfferCard({
  affiliateSrc,
  headline = `Novo cadastro? ${BETWINNER.bonusHeadline} — ${BETWINNER.bonusContext}`,
  subline = `${BETWINNER.bonusHeadline} · Depósito via PIX em 5 min · ${BETWINNER.promoCodeNote}`,
  className,
}: AffiliateOfferCardProps) {
  return (
    <div
      className={cn(
        "mt-8 overflow-hidden rounded-2xl border border-border-strong bg-bg-elevated/95 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)] backdrop-blur-md",
        className,
      )}
    >
      <div className="grid md:grid-cols-[minmax(0,240px)_1fr]">
        {/* Trust panel */}
        <div className="flex flex-col items-center justify-center gap-3 border-b border-border bg-white px-6 py-8 text-center md:border-b-0 md:border-r md:border-zinc-200">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-bold text-white">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {BETWINNER.rating}/10
            </span>
            <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600">
              Recomendada · Copa 2026
            </span>
          </div>

          <div
            className="flex h-20 w-20 items-center justify-center rounded-2xl font-display text-xl font-extrabold text-white shadow-md"
            style={{ backgroundColor: BETWINNER.brandColor }}
            aria-hidden
          >
            BW
          </div>

          <div>
            <p className="text-sm text-zinc-600">Oferece</p>
            <p className="font-display text-2xl font-extrabold text-brand">bônus {BETWINNER.bonusShort}</p>
            <p className="mt-1 text-xs text-zinc-500">para novos jogadores</p>
          </div>
        </div>

        {/* Conversion panel */}
        <div className="flex flex-col justify-center gap-5 bg-[#0f1729] px-6 py-8 sm:px-8">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold leading-snug text-white">
              {headline}
            </h2>
            <p className="mt-2 text-sm text-zinc-400">{subline}</p>
          </div>

          <PromoCodeCopy code={BETWINNER.promoCode} />

          <ButtonLink
            href={`/go/bw-worldcup?src=${affiliateSrc}`}
            external
            size="lg"
            variant="primary"
            className="w-full rounded-full text-base uppercase tracking-wide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M14 3h7v7M10 14L21 3M21 14v7h-7M3 10V3h7M3 21l7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Resgatar bônus na BetWinner
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
