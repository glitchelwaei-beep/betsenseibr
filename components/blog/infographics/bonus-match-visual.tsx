type BonusMatchVisualProps = {
  deposit?: number;
  matchPercent?: number;
  /** Cap on bonus amount in BRL (e.g. 700) */
  maxBonus?: number;
  caption?: string;
};

export function BonusMatchVisual({
  deposit = 700,
  matchPercent = 100,
  maxBonus = 700,
  caption = "Match de 100% até R$ 700 no 1º depósito — não é saque imediato em dinheiro livre.",
}: BonusMatchVisualProps) {
  const rawBonus = Math.round((deposit * matchPercent) / 100);
  const bonus = Math.min(rawBonus, maxBonus);
  const total = deposit + bonus;

  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <p className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
        Match de {matchPercent}% até R$ {maxBonus}
      </p>
      <p className="mt-2 max-w-xl text-sm text-text-muted">
        Exemplo no teto: depósito de R$ {deposit} → bônus de R$ {bonus} (máximo da promoção).
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="blog-infographic-step rounded-xl border border-border bg-bg/50 px-4 py-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">Você deposita</p>
          <p className="mt-2 font-display text-3xl font-extrabold text-text">R$ {deposit}</p>
          <p className="mt-1 text-sm text-text-muted">Saldo real</p>
        </div>
        <div
          className="blog-infographic-step rounded-xl border border-brand/35 bg-brand/10 px-4 py-5 text-center"
          style={{ animationDelay: "80ms" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-brand">Casa adiciona</p>
          <p className="mt-2 font-display text-3xl font-extrabold text-brand">R$ {bonus}</p>
          <p className="mt-1 text-sm text-text-muted">Bônus (teto R$ {maxBonus})</p>
        </div>
        <div
          className="blog-infographic-step rounded-xl border border-accent/35 bg-accent/10 px-4 py-5 text-center"
          style={{ animationDelay: "160ms" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Para apostar</p>
          <p className="mt-2 font-display text-3xl font-extrabold text-accent">R$ {total}</p>
          <p className="mt-1 text-sm text-text-muted">Até cumprir o rollover</p>
        </div>
      </div>

      <figcaption className="mt-6 border-t border-border pt-4 text-sm text-text-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
