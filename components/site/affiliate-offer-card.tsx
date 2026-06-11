import { ButtonLink } from "@/components/ui/button";
import { PromoCodeCopy } from "@/components/site/promo-code-copy";
import { BETWINNER } from "@/lib/partner";
import { cn } from "@/lib/cn";

type OfferVariant = "full" | "compact" | "banner" | "hero" | "terms";

export type OfferTermsOverride = {
  minDeposit: string;
  maxBonus: string;
  moneyLine?: string;
  moneyExample?: string;
};

type AffiliateOfferCardProps = {
  /** Legacy: builds `/go/bw-worldcup?src=` for site pages */
  affiliateSrc?: string;
  /** Direct CTA href — used on LP pages with tracking passthrough */
  href?: string;
  headline?: string;
  subline?: string;
  /** full = original 2-panel; compact = single-panel; banner = horizontal strip; hero = push LP above-fold; terms = post-compliance CTA */
  variant?: OfferVariant;
  /** Override CTA button label (hero / terms variants) */
  ctaLabel?: string;
  /** LP-specific deposit/bonus limits (e.g. copa-bonus-100) */
  offerTerms?: OfferTermsOverride;
  className?: string;
};

function RatingBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-2 py-0.5 text-[11px] font-bold text-white sm:px-2.5 sm:py-1 sm:text-xs">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        {BETWINNER.rating}/10
      </span>
      <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-semibold text-zinc-600 sm:px-2.5 sm:py-1 sm:text-xs">
        Recomendada · Copa 2026
      </span>
    </div>
  );
}

function BwLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "h-10 w-10 rounded-xl text-sm",
    md: "h-12 w-12 rounded-xl text-base",
    lg: "h-20 w-20 rounded-2xl text-xl",
  };
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center font-display font-extrabold text-white shadow-md",
        sizes[size],
      )}
      style={{ backgroundColor: BETWINNER.brandColor }}
      aria-hidden
    >
      BW
    </div>
  );
}

function PixTrustLine({ className }: { className?: string }) {
  return (
    <p className={cn("text-[11px] text-zinc-400 sm:text-xs", className)}>
      PIX em ~5 min · Mín. {BETWINNER.minDeposit} · Sem taxas · Cadastro ~2 min
    </p>
  );
}

function OfferCta({
  href,
  isInternal,
  label = "Resgatar bônus na BetWinner",
  compact = false,
  className,
}: {
  href: string;
  isInternal: boolean;
  label?: string;
  compact?: boolean;
  className?: string;
}) {
  return (
    <ButtonLink
      href={href}
      external={!isInternal}
      openInNewTab={false}
      size={compact ? "md" : "lg"}
      variant="primary"
      className={cn(
        "w-full rounded-full uppercase tracking-wide shadow-[0_6px_24px_-8px_rgba(249,115,22,0.55)]",
        compact ? "min-h-[44px] text-xs sm:text-sm" : "min-h-[48px] text-sm sm:text-base",
        className,
      )}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
        <path
          d="M14 3h7v7M10 14L21 3M21 14v7h-7M3 10V3h7M3 21l7-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={compact ? "truncate" : undefined}>{label}</span>
    </ButtonLink>
  );
}

function FullOfferCard({
  ctaHref,
  isInternal,
  headline,
  subline,
  className,
}: {
  ctaHref: string;
  isInternal: boolean;
  headline: string;
  subline: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border-strong bg-bg-elevated/95 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)] backdrop-blur-md",
        className,
      )}
    >
      <div className="grid md:grid-cols-[minmax(0,240px)_1fr]">
        <div className="flex flex-col items-center justify-center gap-3 border-b border-border bg-white px-6 py-8 text-center md:border-b-0 md:border-r md:border-zinc-200">
          <RatingBadges className="justify-center" />
          <BwLogo size="lg" />
          <div>
            <p className="text-sm text-zinc-600">Oferece</p>
            <p className="font-display text-2xl font-extrabold text-brand">bônus {BETWINNER.bonusShort}</p>
            <p className="mt-1 text-xs text-zinc-500">para novos jogadores</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 bg-[#0f1729] px-5 py-6 sm:px-8 sm:py-7">
          <div>
            <h2 className="font-display text-lg sm:text-2xl font-extrabold leading-snug text-white">{headline}</h2>
            <p className="mt-2 text-sm text-zinc-400">{subline}</p>
          </div>
          <PromoCodeCopy code={BETWINNER.promoCode} />
          <PixTrustLine />
          <OfferCta href={ctaHref} isInternal={isInternal} />
        </div>
      </div>
    </div>
  );
}

function CompactRatingBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-500 px-2 py-0.5 text-[11px] font-bold text-white">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
      {BETWINNER.rating}/10
    </span>
  );
}

function CompactOfferCard({
  ctaHref,
  isInternal,
  offerTerms,
  className,
}: {
  ctaHref: string;
  isInternal: boolean;
  offerTerms?: OfferTermsOverride;
  className?: string;
}) {
  const minDeposit = offerTerms?.minDeposit ?? BETWINNER.minDeposit;
  const maxBonus = offerTerms?.maxBonus;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border-strong bg-[#0f1729] p-4 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] sm:p-4",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <BwLogo size="sm" />
          <p className="font-display text-lg font-extrabold tracking-tight text-white">{BETWINNER.name}</p>
        </div>
        <CompactRatingBadge />
      </div>

      <p className="mt-3 font-display text-base font-bold leading-snug text-white sm:text-lg">
        Bônus {BETWINNER.bonusShort} no 1º depósito via PIX
      </p>
      <p className="mt-1 text-sm text-zinc-400">
        Mín. {minDeposit}
        {maxBonus ? ` · Até ${maxBonus} de bônus` : null} · Código{" "}
        <span className="font-mono font-bold text-white">{BETWINNER.promoCode}</span>
      </p>

      <OfferCta href={ctaHref} isInternal={isInternal} className="mt-3" />
      <p className="mt-2 text-center text-[10px] leading-relaxed text-zinc-500">
        18+ · PIX ~5 min · Termos aplicam · Jogo responsável
      </p>
    </div>
  );
}

function HeroOfferCard({
  ctaHref,
  isInternal,
  ctaLabel,
  offerTerms,
  className,
}: {
  ctaHref: string;
  isInternal: boolean;
  ctaLabel?: string;
  offerTerms?: OfferTermsOverride;
  className?: string;
}) {
  const minDeposit = offerTerms?.minDeposit ?? BETWINNER.minDeposit;
  const moneyLine =
    offerTerms?.moneyLine ?? "Deposite R$100 → aposte com R$200";
  const moneyExample = offerTerms?.moneyExample;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border-strong bg-[#0f1729] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] ring-1 ring-brand/20",
        className,
      )}
    >
      <div
        className="h-1 bg-gradient-to-r from-[#009739] via-[#FFDF00] to-[#009739]"
        aria-hidden
      />
      <div className="p-4 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <BwLogo size="sm" />
            <p className="font-display text-lg font-extrabold tracking-tight text-white">{BETWINNER.name}</p>
          </div>
          <CompactRatingBadge />
        </div>

        <p className="mt-3 font-display text-base font-bold leading-snug text-white sm:text-lg">
          Bônus {BETWINNER.bonusShort} · Copa 2026
        </p>
        <p className="mt-1.5 text-sm font-medium text-[#FFDF00]">{moneyLine}</p>
        {moneyExample ? (
          <p className="mt-1 text-xs text-zinc-400">{moneyExample}</p>
        ) : null}
        <p className="mt-2 text-sm text-zinc-400">
          Código{" "}
          <span className="rounded bg-[#009739]/25 px-1.5 py-0.5 font-mono font-bold text-[#FFDF00]">
            {BETWINNER.promoCode}
          </span>
          {" · "}
          Mín. {minDeposit}
          {offerTerms?.maxBonus ? ` · Até ${offerTerms.maxBonus} de bônus` : null}
        </p>

        <OfferCta
          href={ctaHref}
          isInternal={isInternal}
          label={ctaLabel ?? `Ativar bônus de ${BETWINNER.bonusShort} →`}
          className="mt-3 min-h-[56px] text-base shadow-[0_8px_32px_-8px_rgba(249,115,22,0.65)]"
        />
        <p className="mt-2 text-center text-[10px] leading-relaxed text-zinc-500">
          18+ · PIX ~5 min · Termos aplicam · Jogo responsável
        </p>
      </div>
    </div>
  );
}

function TermsOfferCard({
  ctaHref,
  isInternal,
  ctaLabel,
  offerTerms,
  className,
}: {
  ctaHref: string;
  isInternal: boolean;
  ctaLabel?: string;
  offerTerms?: OfferTermsOverride;
  className?: string;
}) {
  const minDeposit = offerTerms?.minDeposit ?? BETWINNER.minDeposit;
  const maxBonus = offerTerms?.maxBonus;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border-strong border-l-[3px] border-l-[#009739] bg-[#0f1729] p-4 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      <p className="flex items-center gap-2 text-sm font-medium text-emerald-400">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Oferta disponível após cadastro
      </p>

      <p className="mt-3 font-display text-base font-bold leading-snug text-white">
        {BETWINNER.bonusShort} no 1º depósito
        {maxBonus ? ` · até ${maxBonus}` : null}
      </p>
      <p className="mt-1 text-sm text-zinc-400">
        Mín. {minDeposit} via PIX · Código{" "}
        <span className="font-mono font-bold text-white">{BETWINNER.promoCode}</span>
      </p>

      <OfferCta
        href={ctaHref}
        isInternal={isInternal}
        label={ctaLabel ?? `Garantir meu bônus de ${BETWINNER.bonusShort} →`}
        className="mt-3 min-h-[52px]"
      />
      <p className="mt-2 text-center text-[10px] leading-relaxed text-zinc-500">
        18+ · PIX ~5 min · Jogo responsável
      </p>
    </div>
  );
}

function BannerOfferCard({
  ctaHref,
  isInternal,
  className,
}: {
  ctaHref: string;
  isInternal: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border-strong bg-[#0f1729] shadow-md",
        className,
      )}
    >
      <div className="flex flex-col gap-3 p-4 md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-x-5">
        <div className="flex shrink-0 items-center gap-3">
          <div className="shrink-0">
            <p className="font-display text-2xl font-extrabold leading-none text-brand">{BETWINNER.bonusShort}</p>
            <p className="text-[11px] font-semibold text-zinc-300">bônus</p>
          </div>
          <BwLogo size="sm" />
        </div>

        <p className="min-w-0 text-xs leading-relaxed text-zinc-400 md:px-1">
          PIX em ~5 min · Mín. {BETWINNER.minDeposit} · Código{" "}
          <span className="font-mono font-bold text-white">{BETWINNER.promoCode}</span>
        </p>

        <OfferCta
          href={ctaHref}
          isInternal={isInternal}
          label="Resgatar bônus →"
          compact
          className="md:w-auto md:shrink-0 md:whitespace-nowrap"
        />
      </div>
    </div>
  );
}

export function AffiliateOfferCard({
  affiliateSrc,
  href,
  headline = `Novo cadastro? ${BETWINNER.bonusHeadline} — ${BETWINNER.bonusContext}`,
  subline = `${BETWINNER.bonusHeadline} · Depósito via PIX em 5 min · ${BETWINNER.promoCodeNote}`,
  variant = "full",
  ctaLabel,
  offerTerms,
  className,
}: AffiliateOfferCardProps) {
  const ctaHref =
    href ?? `/go/bw-worldcup?src=${encodeURIComponent(affiliateSrc ?? "site")}`;
  const isInternal = ctaHref.startsWith("/");

  if (variant === "hero") {
    return (
      <HeroOfferCard
        ctaHref={ctaHref}
        isInternal={isInternal}
        ctaLabel={ctaLabel}
        offerTerms={offerTerms}
        className={className}
      />
    );
  }

  if (variant === "compact") {
    return (
      <CompactOfferCard
        ctaHref={ctaHref}
        isInternal={isInternal}
        offerTerms={offerTerms}
        className={className}
      />
    );
  }

  if (variant === "terms") {
    return (
      <TermsOfferCard
        ctaHref={ctaHref}
        isInternal={isInternal}
        ctaLabel={ctaLabel}
        offerTerms={offerTerms}
        className={className}
      />
    );
  }

  if (variant === "banner") {
    return <BannerOfferCard ctaHref={ctaHref} isInternal={isInternal} className={className} />;
  }

  return (
    <FullOfferCard
      ctaHref={ctaHref}
      isInternal={isInternal}
      headline={headline}
      subline={subline}
      className={className}
    />
  );
}
