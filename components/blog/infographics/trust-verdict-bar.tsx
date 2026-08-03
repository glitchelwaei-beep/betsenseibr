type TrustVerdictBarProps = {
  caption?: string;
};

export function TrustVerdictBar({
  caption = "Veredito BetSensei: útil para quem quer PIX + bônus — transparente sobre não ser SPA.",
}: TrustVerdictBarProps) {
  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <p className="blog-infographic-step font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
        Veredito editorial
      </p>
      <p className="mt-2 max-w-xl text-sm text-text-muted">
        Não é “selo governo”. É a nossa leitura após testar cadastro, PIX e comunicação da oferta.
      </p>

      <div
        className="blog-infographic-step mt-6 rounded-xl border border-brand/40 bg-gradient-to-br from-brand/15 to-transparent p-5 sm:p-6"
        style={{ animationDelay: "80ms" }}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-brand px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-bg">
            Recomendada
          </span>
          <span className="rounded-full border border-border bg-bg/60 px-3 py-1 text-xs font-semibold text-text-muted">
            com ressalvas
          </span>
          <span className="font-mono text-sm font-bold text-brand">9.1/10</span>
        </div>
        <p className="mt-4 text-lg font-semibold text-text">
          Sim para muitos brasileiros — desde que você aceite licença internacional.
        </p>
        <ul className="mt-4 grid gap-2 text-sm text-text-muted sm:grid-cols-2">
          <li className="rounded-lg border border-border/80 bg-bg/40 px-3 py-2">
            Fit: quer bônus + PIX + português
          </li>
          <li className="rounded-lg border border-border/80 bg-bg/40 px-3 py-2">
            Não fit: exige exclusivamente casa SPA
          </li>
          <li className="rounded-lg border border-border/80 bg-bg/40 px-3 py-2">
            Use código BETSENSEI26 no cadastro
          </li>
          <li className="rounded-lg border border-border/80 bg-bg/40 px-3 py-2">
            Comece com depósito baixo e KYC cedo
          </li>
        </ul>
      </div>

      <figcaption className="mt-6 border-t border-border pt-4 text-sm text-text-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
