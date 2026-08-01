const DEFAULT_STEPS = [
  { n: "1", title: "Link BetSensei", detail: "Abra o cadastro pelo fluxo afiliado — assim a oferta chega certa." },
  { n: "2", title: "Registrar", detail: "Brasil + BRL, telefone, e-mail, CPF e senha." },
  { n: "3", title: "Código", detail: "No campo “Código de promoção”, digite BETSENSEI26." },
  { n: "4", title: "SMS", detail: "Confirme o telefone com o código de 6 dígitos." },
  { n: "5", title: "PIX", detail: "1º depósito qualificado (mín. R$ 10; teto do bônus R$ 700)." },
  { n: "6", title: "Crédito", detail: "Bônus de 100% entra conforme os termos da promoção." },
];

type ActivationStepsVisualProps = {
  caption?: string;
  steps?: { n: string; title: string; detail: string }[];
};

export function ActivationStepsVisual({
  caption = "Ordem importa: código no cadastro, confirmação por SMS, depois o PIX — não o contrário.",
  steps = DEFAULT_STEPS,
}: ActivationStepsVisualProps) {
  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <p className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
        Ativar o bônus em 6 passos
      </p>
      <p className="mt-2 max-w-xl text-sm text-text-muted">
        Do link ao crédito — o caminho que evita “depositei e o bônus não caiu”.
      </p>

      <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.n}
            className="blog-infographic-step relative rounded-xl border border-border bg-bg/50 p-4"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand font-display text-sm font-extrabold text-bg">
              {step.n}
            </span>
            <p className="mt-3 font-semibold text-text">{step.title}</p>
            <p className="mt-1 text-sm leading-snug text-text-muted">{step.detail}</p>
          </li>
        ))}
      </ol>

      <figcaption className="mt-6 border-t border-border pt-4 text-sm text-text-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
