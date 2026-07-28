type LicenseForkProps = {
  caption?: string;
};

export function LicenseFork({
  caption = "Não existe caminho “certo” universal — existe o que combina com o seu perfil e risco aceito.",
}: LicenseForkProps) {
  return (
    <figure className="blog-infographic not-prose my-10 overflow-hidden rounded-2xl border border-border bg-bg-elevated/80 p-6 sm:p-8">
      <p className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
        SPA vs internacional
      </p>
      <p className="mt-2 max-w-xl text-sm text-text-muted">
        Duas rotas. Escolha com olhos abertos — não por anúncio.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
        <div className="blog-infographic-step rounded-xl border border-accent/35 bg-accent/10 p-5">
          <p className="text-xs font-bold uppercase tracking-wide text-accent">Rota A</p>
          <p className="mt-1 font-display text-lg font-extrabold text-text">SPA (Brasil)</p>
          <ul className="mt-3 space-y-2 text-sm text-text-muted">
            <li>Supervisão local (Secretaria de Prêmios e Apostas)</li>
            <li>Welcome bonus tipicamente restrito</li>
            <li>Mais previsibilidade regulatória no ecossistema BR</li>
          </ul>
        </div>

        <div className="hidden flex-col items-center justify-center md:flex" aria-hidden>
          <div className="h-full w-px bg-border" />
          <span className="my-2 rounded-full border border-border bg-bg px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-text-dim">
            ou
          </span>
          <div className="h-full w-px bg-border" />
        </div>

        <div
          className="blog-infographic-step rounded-xl border border-brand/35 bg-brand/10 p-5"
          style={{ animationDelay: "100ms" }}
        >
          <p className="text-xs font-bold uppercase tracking-wide text-brand">Rota B</p>
          <p className="mt-1 font-display text-lg font-extrabold text-text">Internacional</p>
          <ul className="mt-3 space-y-2 text-sm text-text-muted">
            <li>Licença offshore (ex.: Curaçao) — fora da lista SPA</li>
            <li>Pode oferecer bônus de boas-vindas</li>
            <li>Você assume o modelo regulatório da casa</li>
          </ul>
        </div>
      </div>

      <figcaption className="mt-6 border-t border-border pt-4 text-sm text-text-dim">
        {caption}
      </figcaption>
    </figure>
  );
}
