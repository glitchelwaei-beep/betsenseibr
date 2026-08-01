type PromoCodeFieldVisualProps = {
  code?: string;
  caption?: string;
};

export function PromoCodeFieldVisual({
  code = "BETSENSEI26",
  caption = "Sem o código no cadastro, o 1º depósito costuma entrar só como saldo — sem o match de 100%.",
}: PromoCodeFieldVisualProps) {
  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <p className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
        Onde colar o código
      </p>
      <p className="mt-2 max-w-xl text-sm text-text-muted">
        No formulário de registro, procure o campo abaixo — <strong className="text-text">antes</strong> de confirmar e depositar.
      </p>

      <div
        className="blog-infographic-step mt-6 rounded-xl border border-brand/40 bg-brand/10 p-5 sm:p-6"
        style={{ animationDelay: "80ms" }}
      >
        <label className="block text-xs font-semibold uppercase tracking-wide text-brand">
          Código de promoção
        </label>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <div className="min-w-0 flex-1 rounded-lg border border-border bg-bg px-4 py-3">
            <p className="font-mono text-xl font-extrabold tracking-wider text-text sm:text-2xl">
              {code}
            </p>
          </div>
          <span className="rounded-lg bg-brand px-3 py-2 text-xs font-bold uppercase tracking-wide text-bg">
            Obrigatório
          </span>
        </div>
        <p className="mt-3 text-sm text-text-muted">
          Digite exatamente: <span className="font-mono font-semibold text-text">{code}</span> — sem espaço, com os números.
        </p>
      </div>

      <figcaption className="mt-6 border-t border-border pt-4 text-sm text-text-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
