const DEFAULT_CRITERIA = [
  { label: "Licença", weight: "Alta", detail: "SPA ou internacional — saiba o que muda em bônus e supervisão" },
  { label: "PIX", weight: "Alta", detail: "Depósito e saque rápidos, limites claros, sem taxa escondida" },
  { label: "Mercados", weight: "Média", detail: "Futebol BR, Copa, ao vivo — cobertura que você realmente usa" },
  { label: "Bônus", weight: "Média", detail: "Oferta legível + rollover transparente (quando existir)" },
  { label: "App / UX", weight: "Média", detail: "Português, estável, cadastro e apostas sem fricção" },
  { label: "Suporte / saque", weight: "Alta", detail: "Chat 24/7 e prazo de saque testável na prática" },
];

type CriteriaChecklistProps = {
  caption?: string;
  criteria?: { label: string; weight: string; detail: string }[];
};

export function CriteriaChecklist({
  caption = "Priorize licença, PIX e saque antes de se empolgar com bônus colorido.",
  criteria = DEFAULT_CRITERIA,
}: CriteriaChecklistProps) {
  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <p className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
        Scoreboard de critérios
      </p>
      <p className="mt-2 max-w-xl text-sm text-text-muted">
        Seis filtros. Peso alto = não negociável. Peso médio = decide o desempate.
      </p>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2">
        {criteria.map((item, i) => (
          <li
            key={item.label}
            className="blog-infographic-step flex gap-3 rounded-xl border border-border bg-bg/40 p-4"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-display text-sm font-extrabold text-bg"
              style={{
                background:
                  item.weight === "Alta" ? "var(--color-brand)" : "var(--color-accent)",
              }}
            >
              {i + 1}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <p className="font-semibold text-text">{item.label}</p>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wide ${
                    item.weight === "Alta" ? "text-brand" : "text-accent"
                  }`}
                >
                  {item.weight}
                </span>
              </div>
              <p className="mt-1 text-sm text-text-muted leading-snug">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <figcaption className="mt-6 border-t border-border pt-4 text-sm text-text-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
