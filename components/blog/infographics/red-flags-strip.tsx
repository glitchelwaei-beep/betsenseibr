const DEFAULT_FLAGS = [
  {
    title: "Bônus sem rollover claro",
    detail: "Se não dá para ler o requisito em 30 segundos, trate como armadilha.",
  },
  {
    title: "Saque “em breve” eterno",
    detail: "Promessa vaga + prazo que nunca fecha = teste com valor pequeno primeiro.",
  },
  {
    title: "Site clone / domínio suspeito",
    detail: "URL errada, visual copiado, domínio novo demais — feche a aba.",
  },
  {
    title: "“Recupere agora” o dia inteiro",
    detail: "Pressão emocional constante é design de tilt, não de produto sério.",
  },
];

type RedFlagsStripProps = {
  caption?: string;
  flags?: { title: string; detail: string }[];
};

export function RedFlagsStrip({
  caption = "Se dois ou mais sinais aparecerem juntos, pule a casa — independente do bônus.",
  flags = DEFAULT_FLAGS,
}: RedFlagsStripProps) {
  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <p className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
        Bandeiras vermelhas
      </p>
      <p className="mt-2 max-w-xl text-sm text-text-muted">
        Quatro armadilhas que ainda pegam quem escolhe casa só pelo anúncio.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {flags.map((flag, i) => (
          <li
            key={flag.title}
            className="blog-infographic-step rounded-xl border border-danger/30 bg-danger/10 p-4"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start gap-3">
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-danger/90 font-display text-xs font-extrabold text-white"
                aria-hidden
              >
                !
              </span>
              <div>
                <p className="font-semibold text-text">{flag.title}</p>
                <p className="mt-1 text-sm text-text-muted leading-snug">{flag.detail}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <figcaption className="mt-6 border-t border-border pt-4 text-sm text-text-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
