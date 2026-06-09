import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { AffiliateOfferCard } from "@/components/site/affiliate-offer-card";
import { Countdown } from "@/components/site/countdown";
import { BETWINNER } from "@/lib/partner";
import { WORLD_CUP } from "@/lib/worldcup";

type WorldCupHeroProps = {
  affiliateSrc: string;
  showBackground?: boolean;
};

export function WorldCupHero({ affiliateSrc, showBackground = false }: WorldCupHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {showBackground ? (
        <Image
          src={WORLD_CUP.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden
        />
      ) : null}
      <div className={`absolute inset-0 ${showBackground ? "bg-gradient-to-b from-bg/70 via-bg/60 to-bg/85" : "bg-gradient-to-b from-bg via-bg/95 to-bg"}`} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.12),transparent_55%)]" />
      {showBackground ? (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.08),transparent_50%)]" />
      ) : null}
      <Container className="relative py-16 sm:py-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
            BetWinner Brasil · Análise 2026
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            BetWinner Brasil — <span className="text-brand">bônus de {BETWINNER.bonusShort}</span>, PIX e cadastro rápido
          </h1>
          <p className="mt-5 text-lg text-text-muted leading-relaxed max-w-2xl">
            Análise independente da BetWinner para apostadores brasileiros: depósito via PIX em 5 minutos, app em português
            e código{" "}
            <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span>.
            Especial{" "}
            <Link href={WORLD_CUP.pagePath} className="text-brand font-semibold hover:underline">
              Copa do Mundo 2026
            </Link>
            : Brasil estreia {WORLD_CUP.brasilDebut} vs Marrocos.
          </p>

          <Countdown targetIso={WORLD_CUP.kickoffIso} label={WORLD_CUP.countdownLabel} />

          <AffiliateOfferCard affiliateSrc={affiliateSrc} />

          <div className="mt-4">
            <ButtonLink href={WORLD_CUP.pagePath} size="md" variant="ghost" className="text-text-muted hover:text-text">
              Ver jogos e odds do Brasil →
            </ButtonLink>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
            <Stat value={WORLD_CUP.brasilOdds} label="odds Brasil campeão" />
            <Stat value={WORLD_CUP.brasilDebut} label="estreia da Seleção" />
            <Stat value="PIX" label="depósito em 5 min" />
          </div>

          <p className="mt-8 text-xs text-text-dim">
            <strong className="text-text-muted">Publicidade · 18+ ·</strong>{" "}
            <Link href="/jogo-responsavel" className="underline hover:text-text">
              Jogue com responsabilidade
            </Link>
            . Apostas envolvem risco financeiro. Bônus sujeito a termos da BetWinner.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl sm:text-3xl font-extrabold text-text">{value}</div>
      <div className="text-xs text-text-dim mt-1">{label}</div>
    </div>
  );
}
