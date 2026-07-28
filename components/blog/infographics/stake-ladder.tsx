const DEFAULT_STEPS = [
  { label: "Conservador", percent: "1%", detail: "Aprendizado e longas sequências" },
  { label: "Padrão", percent: "2%", detail: "Equilíbrio entre risco e consistência" },
  { label: "Moderado", percent: "3%", detail: "Só com edge claro e banca estável" },
  { label: "Agressivo", percent: "5%", detail: "Teto — acima disso é tilt, não estratégia" },
];

type StakeLadderProps = {
  caption?: string;
  steps?: { label: string; percent: string; detail: string }[];
};

export function StakeLadder({
  caption = "Suba a unidade só quando a banca e o processo acompanharem — nunca por impulso.",
  steps = DEFAULT_STEPS,
}: StakeLadderProps) {
  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <p className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
        Escada de unidades
      </p>
      <ol className="mt-6 space-y-3">
        {steps.map((step, i) => (
          <li
            key={step.label}
            className="blog-infographic-step flex items-stretch gap-3"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <div
              className="flex w-14 shrink-0 flex-col items-center justify-center rounded-xl font-display text-sm font-extrabold text-bg"
              style={{
                background:
                  i === steps.length - 1
                    ? "var(--color-danger)"
                    : i === 0
                      ? "var(--color-accent)"
                      : "var(--color-brand)",
                opacity: 0.85 + i * 0.04,
              }}
            >
              {step.percent}
            </div>
            <div className="flex-1 rounded-xl border border-border bg-bg/40 px-4 py-3">
              <p className="font-semibold text-text">{step.label}</p>
              <p className="mt-0.5 text-sm text-text-muted">{step.detail}</p>
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
