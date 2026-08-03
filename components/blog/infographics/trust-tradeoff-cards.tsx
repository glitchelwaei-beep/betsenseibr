type TrustTradeoffCardsProps = {
  caption?: string;
};

export function TrustTradeoffCards({
  caption = "Confiável não é “sem risco”. É entender o pacote antes do PIX.",
}: TrustTradeoffCardsProps) {
  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <p className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
        O trade-off que reviews escondem
      </p>
      <p className="mt-2 max-w-xl text-sm text-text-muted">
        O que você ganha com a BetWinner — e o que você aceita ao jogar fora da SPA.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="blog-infographic-step rounded-xl border border-brand/35 bg-brand/10 p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-brand">Você ganha</p>
          <ul className="mt-3 space-y-2 text-sm text-text-muted">
            <li>
              <strong className="text-text">Bônus de boas-vindas</strong> — 100% até R$ 700 (código BETSENSEI26)
            </li>
            <li>
              <strong className="text-text">PIX</strong> — depósito a partir de R$ 10
            </li>
            <li>
              <strong className="text-text">App e site em português</strong> + suporte 24/7
            </li>
            <li>
              <strong className="text-text">Mercados de futebol BR</strong> e cobertura esportiva ampla
            </li>
          </ul>
        </div>
        <div
          className="blog-infographic-step rounded-xl border border-warning/35 bg-warning/10 p-5"
          style={{ animationDelay: "100ms" }}
        >
          <p className="text-xs font-bold uppercase tracking-wide text-warning">Você aceita</p>
          <ul className="mt-3 space-y-2 text-sm text-text-muted">
            <li>
              <strong className="text-text">Fora da lista SPA</strong> — sem supervisão brasileira
            </li>
            <li>
              <strong className="text-text">Jurisdição internacional</strong> — disputas sob Curaçao
            </li>
            <li>
              <strong className="text-text">KYC no 1º saque</strong> — documento antes de sacar
            </li>
            <li>
              <strong className="text-text">Limites de saque</strong> — podem apertar high-rollers
            </li>
          </ul>
        </div>
      </div>

      <figcaption className="mt-6 border-t border-border pt-4 text-sm text-text-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
