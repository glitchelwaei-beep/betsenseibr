type RiskMeterProps = {
  caption?: string;
};

export function RiskMeter({
  caption = "Pare na zona verde. Stop-loss diário existe para proteger a banca do seu pior momento.",
}: RiskMeterProps) {
  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <p className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
        Medidor de sessão
      </p>
      <p className="mt-2 max-w-xl text-sm text-text-muted">
        Três zonas para decidir se continua, reduz ou encerra o dia — sem depender do “próximo
        jogo recupera”.
      </p>

      <div className="mt-8">
        <div
          className="blog-infographic-meter relative h-4 overflow-hidden rounded-full"
          role="img"
          aria-label="Espectro de risco: sessão ok, stop-loss, tilt"
        >
          <div className="absolute inset-0 flex">
            <div className="w-[45%] bg-success/80" />
            <div className="w-[30%] bg-warning/85" />
            <div className="w-[25%] bg-danger/85" />
          </div>
          <div className="blog-infographic-needle absolute top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-text shadow-[0_0_12px_rgba(245,247,251,0.5)]" />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-success/30 bg-success/10 px-3 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-success">Sessão ok</p>
            <p className="mt-1 text-sm text-text-muted">
              Dentro do plano, stake fixa, emoção estável.
            </p>
          </div>
          <div className="rounded-xl border border-warning/30 bg-warning/10 px-3 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-warning">Stop-loss</p>
            <p className="mt-1 text-sm text-text-muted">
              Perdeu 3–5 unidades no dia? Encerra. Sem exceção.
            </p>
          </div>
          <div className="rounded-xl border border-danger/30 bg-danger/10 px-3 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-danger">Tilt</p>
            <p className="mt-1 text-sm text-text-muted">
              Aumentar stake para “recuperar” — sinal para parar agora.
            </p>
          </div>
        </div>
      </div>

      <figcaption className="mt-6 border-t border-border pt-4 text-sm text-text-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
