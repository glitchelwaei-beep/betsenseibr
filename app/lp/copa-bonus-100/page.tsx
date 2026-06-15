import Image from "next/image";
import { StickyMobileCta } from "@/components/lp/advertorial-blocks";
import { isExternalLpCta } from "@/components/lp/lp-cta-link";
import { AffiliateOfferCard } from "@/components/site/affiliate-offer-card";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LP_COPA_BONUS_100, LP_COPA_BONUS_100_OFFER, LP_COPA_BONUS_100_PATH } from "@/lib/lp-copa-bonus-100";
import { BETWINNER } from "@/lib/partner";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

const META_DESCRIPTION =
  `Bônus de ${BETWINNER.bonusShort} no 1º depósito via PIX na BetWinner — mínimo ${LP_COPA_BONUS_100_OFFER.minDeposit}, até ${LP_COPA_BONUS_100_OFFER.maxBonus} de bônus, código promocional e Copa 2026.`;

export const metadata = {
  ...buildMetadata({
    title: `Bônus de ${BETWINNER.bonusShort} para a Copa 2026`,
    description: META_DESCRIPTION,
    path: LP_COPA_BONUS_100_PATH,
    noindex: true,
    image: `${SITE.url}${LP_COPA_BONUS_100.heroImage}`,
  }),
  title: {
    absolute: `Bônus de ${BETWINNER.bonusShort} para apostar na Copa 2026`,
  },
};

const CTA_HREF = "https://39hmh.bemobtrcks.com/click/1";

const STEPS = [
  `Cadastre-se com o código ${BETWINNER.promoCode}`,
  `Deposite via PIX (mínimo ${LP_COPA_BONUS_100_OFFER.minDeposit}, cai em minutos)`,
  `Aposte na Copa e ative seu bônus de ${BETWINNER.bonusShort} (até ${LP_COPA_BONUS_100_OFFER.maxBonus})`,
] as const;

function PushSecondaryCta({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-full bg-gradient-to-r from-[#009739] via-[#FFDF00] to-[#009739] p-px shadow-[0_4px_20px_-6px_rgba(249,115,22,0.45)]",
        className,
      )}
    >
      <ButtonLink
        href={href}
        external={isExternalLpCta(href)}
        openInNewTab={false}
        size="lg"
        className="w-full min-h-[52px] rounded-full text-sm uppercase tracking-wide shadow-none"
      >
        {children}
      </ButtonLink>
    </div>
  );
}

export default function CopaBonus100Page() {
  return (
    <main className="min-h-screen bg-bg pb-28">
      {/* Hero — above the fold, bonus-first */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src={LP_COPA_BONUS_100.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/95 to-bg" />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#009739] via-[#FFDF00] to-[#009739]" />
        </div>

        <Container className="relative max-w-lg py-6 sm:py-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#FFDF00]">
            Copa do Mundo 2026
            {/* "2026 World Cup" */}
          </p>

          <div className="mx-auto mt-4 flex h-36 w-36 items-center justify-center rounded-full border-4 border-brand bg-brand/10 shadow-[0_0_60px_-10px_rgba(249,115,22,0.7)] sm:h-40 sm:w-40">
            <span className="font-display font-extrabold leading-none text-brand">
              <span className="text-5xl sm:text-6xl">{BETWINNER.bonusShort.replace("%", "")}</span>
              <span className="text-2xl sm:text-3xl align-top">%</span>
            </span>
          </div>

          <h1 className="mt-5 text-center font-display text-[1.65rem] font-extrabold leading-tight tracking-tight text-text sm:text-3xl">
            Bônus de {BETWINNER.bonusShort} para apostar na Copa 2026
            {/* "100% bonus to bet on the 2026 World Cup" */}
          </h1>

          <AffiliateOfferCard
            href={CTA_HREF}
            variant="hero"
            ctaLabel={`Ativar bônus de ${BETWINNER.bonusShort} →`}
            offerTerms={LP_COPA_BONUS_100_OFFER}
            className="mt-5 shadow-xl"
          />
        </Container>
      </section>

      {/* 3 steps — big tap targets */}
      <section className="border-b border-border bg-bg-elevated py-8">
        <Container className="max-w-lg space-y-3">
          {/* Step 1: "Sign up with code BETSENSEI26" */}
          {/* Step 2: "Deposit via PIX (min R$60, arrives in minutes)" */}
          {/* Step 3: "Bet on the World Cup and activate your 100% bonus (up to R$700)" */}
          {STEPS.map((step, i) => (
            <div
              key={step}
              className="flex items-start gap-4 rounded-xl border border-border bg-bg p-4 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-display text-lg font-extrabold text-white">
                {i + 1}
              </span>
              <p className="pt-1.5 text-[15px] font-semibold leading-snug text-text">{step}</p>
            </div>
          ))}
          <AffiliateOfferCard
            href={CTA_HREF}
            variant="compact"
            offerTerms={LP_COPA_BONUS_100_OFFER}
            className="mt-6 shadow-xl"
          />
        </Container>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border py-4">
        <Container className="max-w-lg">
          <p className="text-center text-xs leading-relaxed text-text-dim">
            Nota {BETWINNER.rating} · PIX 24/7 · 100% em português · Licença internacional · 18+
            {/* "Rating 9.1 · PIX 24/7 · 100% in Portuguese · International license · 18+" */}
          </p>
        </Container>
      </section>

      {/* World Cup visual — lazy-loaded below the fold */}
      <section className="border-b border-border py-6">
        <Container className="max-w-lg">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border">
            <Image
              src={LP_COPA_BONUS_100.heroImage}
              alt={LP_COPA_BONUS_100.heroImageAlt}
              fill
              loading="lazy"
              sizes="(max-width: 512px) 100vw, 512px"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent px-4 py-3">
              <p className="text-xs text-text-muted">
                {BETWINNER.name} · {BETWINNER.bonusContext}
                {/* "BetWinner · World Cup 2026 special" */}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Bonus terms — required for ad-network approval */}
      <section className="border-b border-border bg-bg-elevated py-8">
        <Container className="max-w-lg">
          <h2 className="font-display text-xl font-extrabold text-text">
            Termos do bônus
            {/* "Bonus terms" */}
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-muted">
            <li>
              <strong className="text-text">Bônus:</strong> {BETWINNER.bonusShort} no 1º depósito
              qualificado via PIX
              {/* "Bonus: 100% on 1st qualifying PIX deposit" */}
            </li>
            <li>
              <strong className="text-text">Depósito mínimo:</strong> {LP_COPA_BONUS_100_OFFER.minDeposit}
              {/* "Minimum deposit: R$60" */}
            </li>
            <li>
              <strong className="text-text">Bônus máximo:</strong> até {LP_COPA_BONUS_100_OFFER.maxBonus}
              {/* "Maximum bonus: up to R$700" */}
            </li>
            <li>
              <strong className="text-text">Rollover e prazo:</strong> conforme os termos da promoção na{" "}
              {BETWINNER.name}
              {/* "Wagering requirement and time limit: per BetWinner promotion terms" */}
            </li>
            <li>
              Bônus sujeito aos termos e condições da {BETWINNER.name}. Apostas envolvem risco
              financeiro.
              {/* "Bonus subject to BetWinner T&Cs. Betting involves financial risk." */}
            </li>
          </ul>

          <AffiliateOfferCard
            href={CTA_HREF}
            variant="terms"
            ctaLabel={`Garantir meu bônus de ${BETWINNER.bonusShort} →`}
            offerTerms={LP_COPA_BONUS_100_OFFER}
            className="mt-6"
          />
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-8">
        <Container className="max-w-lg text-center">
          <p className="text-sm text-text-dim">
            Cadastro em ~2 min · PIX em minutos · Suporte em português
            {/* "Sign-up in ~2 min · PIX in minutes · Portuguese support" */}
          </p>
          <PushSecondaryCta href={CTA_HREF} className="mt-4">
            Começar agora →
            {/* "Start now" */}
          </PushSecondaryCta>
        </Container>
      </section>

      {/* Slim footer — no nav */}
      <footer className="border-t border-border py-5 text-center text-xs leading-relaxed text-text-dim">
        <p>
          <strong className="text-text-muted">18+</strong> · Jogo responsável · Apostas envolvem risco
          financeiro.
          {/* "18+ · Responsible gambling · Betting involves financial risk." */}
        </p>
        <p className="mt-2 px-4">
          Publicidade. Conteúdo informativo — não constitui aconselhamento financeiro.
          {/* "Advertising. Informational content — not financial advice." */}
        </p>
      </footer>

      <StickyMobileCta href={CTA_HREF} label="Ativar bônus →" />
    </main>
  );
}
