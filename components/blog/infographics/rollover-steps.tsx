const DEFAULT_STEPS = [
  {
    n: "1",
    title: "Recebe o bônus",
    detail: "Após o 1º depósito qualificado, o valor extra entra na conta conforme a promoção.",
  },
  {
    n: "2",
    title: "Aposta com regras",
    detail: "Cumpre o rollover: tipos de aposta, odds mínimas e prazo definidos nos termos.",
  },
  {
    n: "3",
    title: "Desbloqueia",
    detail: "Quando o requisito é cumprido, o saldo do bônus deixa de ser “preso” à promoção.",
  },
  {
    n: "4",
    title: "Pode sacar",
    detail: "Lucros e saldo liberado seguem as regras de saque e verificação da conta.",
  },
];

type RolloverStepsProps = {
  caption?: string;
  steps?: { n: string; title: string; detail: string }[];
};

export function RolloverSteps({
  caption = "Rollover não é “taxa escondida” — é a condição para transformar bônus em saldo sacável.",
  steps = DEFAULT_STEPS,
}: RolloverStepsProps) {
  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <p className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
        Rollover em 4 passos
      </p>
      <p className="mt-2 max-w-xl text-sm text-text-muted">
        Pense assim: a casa te empresta fôlego para apostar; você devolve o requisito apostando, não pagando.
      </p>
      <ol className="mt-6 space-y-3">
        {steps.map((step, i) => (
          <li
            key={step.n}
            className="blog-infographic-step flex items-stretch gap-3"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex w-12 shrink-0 items-center justify-center rounded-xl bg-brand font-display text-lg font-extrabold text-bg">
              {step.n}
            </div>
            <div className="flex-1 rounded-xl border border-border bg-bg/40 px-4 py-3">
              <p className="font-semibold text-text">{step.title}</p>
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
