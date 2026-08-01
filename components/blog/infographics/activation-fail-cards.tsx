const DEFAULT_FAILS = [
  {
    title: "Cadastrou sem o código",
    detail: "Esqueceu BETSENSEI26 no campo? O match pode não ativar. Tente suporte antes do 1º depósito.",
  },
  {
    title: "Depositou antes de confirmar",
    detail: "Conta sem SMS/confirmação + PIX apressado = caminho torto. Confirme o telefone primeiro.",
  },
  {
    title: "País ou moeda errados",
    detail: "Brasil + BRL. Conta em outra moeda/país bagunça a oferta para apostador BR.",
  },
  {
    title: "Esperava 200% ou freebet",
    detail: "A oferta real é 100% até R$ 700 no 1º depósito. Não é bônus sem depósito.",
  },
];

type ActivationFailCardsProps = {
  caption?: string;
  fails?: { title: string; detail: string }[];
};

export function ActivationFailCards({
  caption = "Quase todo “bônus não caiu” começa em um desses quatro erros — não na “casa bugada”.",
  fails = DEFAULT_FAILS,
}: ActivationFailCardsProps) {
  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <p className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
        Erros que matam a ativação
      </p>
      <p className="mt-2 max-w-xl text-sm text-text-muted">
        Quatro falhas comuns — evite antes do PIX, não depois.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {fails.map((fail, i) => (
          <li
            key={fail.title}
            className="blog-infographic-step rounded-xl border border-warning/30 bg-warning/10 p-4"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <p className="font-semibold text-text">{fail.title}</p>
            <p className="mt-1 text-sm leading-snug text-text-muted">{fail.detail}</p>
          </li>
        ))}
      </ul>
      <figcaption className="mt-6 border-t border-border pt-4 text-sm text-text-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
