const DEFAULT_TRAPS = [
  {
    title: "“Bônus sem depósito” milagroso",
    detail: "Promessas de freebet garantido sem depósito costumam ser isca. Confirme na casa real.",
  },
  {
    title: "Rollover impossível de ler",
    detail: "Se em 30 segundos você não entende o requisito, trate como risco — não como pechincha.",
  },
  {
    title: "Código que “sempre funciona”",
    detail: "Código errado, expirado ou sem campo no cadastro = oferta que não ativa. Use o código certo.",
  },
  {
    title: "Pressa de depositar já",
    detail: "Urgência artificial existe para você pular os termos. Leia antes do PIX.",
  },
];

type BonusTrapCardsProps = {
  caption?: string;
  traps?: { title: string; detail: string }[];
};

export function BonusTrapCards({
  caption = "Bônus bom é o que você entende antes de depositar — não o que grita mais no anúncio.",
  traps = DEFAULT_TRAPS,
}: BonusTrapCardsProps) {
  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <p className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
        Armadilhas do bônus de boas-vindas
      </p>
      <p className="mt-2 max-w-xl text-sm text-text-muted">
        Quatro sinais que novos apostadores ainda caem com frequência.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {traps.map((trap, i) => (
          <li
            key={trap.title}
            className="blog-infographic-step rounded-xl border border-warning/30 bg-warning/10 p-4"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <p className="font-semibold text-text">{trap.title}</p>
            <p className="mt-1 text-sm text-text-muted leading-snug">{trap.detail}</p>
          </li>
        ))}
      </ul>
      <figcaption className="mt-6 border-t border-border pt-4 text-sm text-text-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
