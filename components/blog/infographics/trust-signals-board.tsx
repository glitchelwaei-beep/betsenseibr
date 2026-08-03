const DEFAULT_SIGNALS = [
  { label: "PIX", detail: "Depósito e saque com o método mais usado no Brasil" },
  { label: "Saque", detail: "Janela editorial típica: 5 minutos a 1 hora (após regras da conta)" },
  { label: "Português", detail: "Interface e suporte pensados para apostador BR" },
  { label: "Suporte 24/7", detail: "Chat e e-mail — canal ativo, não “fantasma”" },
  { label: "Desde 2018", detail: "Operação internacional com histórico público de anos" },
  { label: "Curaçao", detail: "Licença internacional — explícito: não é selo SPA" },
];

type TrustSignalsBoardProps = {
  caption?: string;
  signals?: { label: string; detail: string }[];
};

export function TrustSignalsBoard({
  caption = "Sinais testáveis — não “selo mágico” de governo brasileiro.",
  signals = DEFAULT_SIGNALS,
}: TrustSignalsBoardProps) {
  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <p className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
        Sinais de confiança (olhos abertos)
      </p>
      <p className="mt-2 max-w-xl text-sm text-text-muted">
        Seis pontos que importam na prática — incluindo o que a BetWinner não é.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {signals.map((signal, i) => (
          <li
            key={signal.label}
            className="blog-infographic-step rounded-xl border border-border bg-bg/50 p-4"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-xs font-extrabold text-brand">
                ✓
              </span>
              <p className="font-semibold text-text">{signal.label}</p>
            </div>
            <p className="mt-2 text-sm leading-snug text-text-muted">{signal.detail}</p>
          </li>
        ))}
      </ul>
      <figcaption className="mt-6 border-t border-border pt-4 text-sm text-text-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
