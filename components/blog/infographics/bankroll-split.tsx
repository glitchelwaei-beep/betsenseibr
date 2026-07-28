type BankrollSplitProps = {
  bankroll?: number;
  stakePercent?: number;
  caption?: string;
};

export function BankrollSplit({
  bankroll = 500,
  stakePercent = 2,
  caption = "Regra prática: reserve a banca e arrisque só uma fração por aposta.",
}: BankrollSplitProps) {
  const stake = Math.round((bankroll * stakePercent) / 100);
  const remainder = Math.max(bankroll - stake, 0);
  const stakeAngle = Math.min(Math.max(stakePercent, 1), 12) * 3.6;
  const r = 54;
  const circ = 2 * Math.PI * r;
  const stakeLen = (stakeAngle / 360) * circ;
  const restLen = circ - stakeLen;

  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="blog-infographic-enter relative shrink-0">
          <svg viewBox="0 0 140 140" className="h-40 w-40 sm:h-44 sm:w-44" aria-hidden>
            <circle
              cx="70"
              cy="70"
              r={r}
              fill="none"
              stroke="var(--color-surface)"
              strokeWidth="18"
            />
            <circle
              cx="70"
              cy="70"
              r={r}
              fill="none"
              stroke="var(--color-border-strong)"
              strokeWidth="18"
              strokeDasharray={`${restLen} ${circ}`}
              strokeDashoffset={0}
              transform="rotate(-90 70 70)"
            />
            <circle
              cx="70"
              cy="70"
              r={r}
              fill="none"
              stroke="var(--color-brand)"
              strokeWidth="18"
              strokeLinecap="round"
              strokeDasharray={`${stakeLen} ${circ}`}
              strokeDashoffset={-restLen}
              transform="rotate(-90 70 70)"
              className="blog-infographic-draw"
            />
            <text
              x="70"
              y="66"
              textAnchor="middle"
              style={{
                fill: "var(--color-text)",
                fontFamily: "var(--font-display)",
                fontSize: "18px",
                fontWeight: 800,
              }}
            >
              {stakePercent}%
            </text>
            <text
              x="70"
              y="86"
              textAnchor="middle"
              style={{
                fill: "var(--color-text-dim)",
                fontSize: "10px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              por aposta
            </text>
          </svg>
        </div>

        <div className="w-full flex-1 space-y-4">
          <p className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
            Split da banca
          </p>
          <dl className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-bg/50 px-4 py-3">
              <dt className="text-xs uppercase tracking-wide text-text-dim">Banca total</dt>
              <dd className="mt-1 font-display text-2xl font-extrabold text-text">
                R$ {bankroll}
              </dd>
            </div>
            <div className="rounded-xl border border-brand/35 bg-brand/10 px-4 py-3">
              <dt className="text-xs uppercase tracking-wide text-brand">Stake sugerida</dt>
              <dd className="mt-1 font-display text-2xl font-extrabold text-brand">
                R$ {stake}
              </dd>
            </div>
          </dl>
          <p className="text-sm text-text-muted">
            Mantém R$ {remainder} intactos para a próxima rodada — a disciplina está no que você{" "}
            <strong className="text-text">não</strong> arrisca.
          </p>
        </div>
      </div>
      <figcaption className="mt-6 border-t border-border pt-4 text-sm text-text-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
