import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SITE } from "@/lib/site";

const FOOTER_GROUPS = [
  {
    title: "BetWinner",
    links: [
      { href: "/betwinner", label: "Análise completa" },
      { href: "/bonus", label: "Bônus BetWinner" },
      { href: "/codigo-promocional", label: "Código promocional BETSENSEI26" },
      { href: "/cadastro", label: "Cadastro" },
      { href: "/aplicativo", label: "App / APK" },
      { href: "/pix", label: "Depósito via PIX" },
    ],
  },
  {
    title: "Guias",
    links: [
      { href: "/apostas-esportivas", label: "Apostas esportivas" },
      { href: "/futebol", label: "Apostas em futebol" },
      { href: "/aposta-ao-vivo", label: "Aposta ao vivo" },
      { href: "/como-apostar", label: "Como apostar (iniciantes)" },
      { href: "/imposto", label: "Imposto sobre prêmios (IR 15%)" },
    ],
  },
  {
    title: "Sobre",
    links: [
      { href: "/sobre", label: "Sobre o projeto" },
      { href: "/divulgacao-de-afiliacao", label: "Divulgação de afiliação" },
      { href: "/jogo-responsavel", label: "Jogo responsável" },
      { href: "/contato", label: "Contato" },
      { href: "/politica-de-privacidade", label: "Política de privacidade" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-bg-elevated/40">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="font-display text-xl font-extrabold tracking-tight">
              <span className="text-brand">BET</span>
              <span className="text-text">SENSEI</span>
              <span className="text-text-muted text-sm ml-1">brasil</span>
            </div>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              Análise independente da BetWinner para apostadores brasileiros. Cadastro, PIX, app, saques — testado por nós.
            </p>
            <div className="mt-4 flex gap-3">
              <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-brand text-sm">Telegram</a>
              <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-brand text-sm">YouTube</a>
            </div>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-text mb-3 text-sm">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-text-muted hover:text-text">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border space-y-4">
          <div className="rounded-lg border border-warning/30 bg-warning/5 p-4 text-xs text-text-muted leading-relaxed">
            <strong className="text-warning">18+ Jogue com responsabilidade.</strong>{" "}
            O vício em jogo é uma doença reconhecida. Se você ou alguém próximo apresenta sinais de dependência,
            procure ajuda profissional.{" "}
            <Link href="/jogo-responsavel" className="underline hover:text-text">
              Saiba mais sobre jogo responsável →
            </Link>
          </div>

          <div className="rounded-lg border border-border bg-bg/40 p-4 text-xs text-text-dim leading-relaxed">
            <strong className="text-text-muted">Divulgação de afiliação.</strong>{" "}
            {SITE.name} participa do programa de afiliados da BetWinner. Quando você se cadastra através dos nossos links
            e faz um depósito, recebemos uma comissão. Isso não influencia nossa análise nem suas condições.
            <Link href="/divulgacao-de-afiliacao" className="underline ml-1 hover:text-text-muted">
              Divulgação completa →
            </Link>
          </div>

          <div className="rounded-lg border border-border bg-bg/40 p-4 text-xs text-text-dim leading-relaxed">
            <strong className="text-text-muted">Importante:</strong>{" "}
            A BetWinner opera sob licença internacional (Curaçao) e <strong>não está autorizada</strong> pela Secretaria
            de Prêmios e Apostas (SPA) do Brasil. Apostadores brasileiros utilizam a plataforma por conta e risco próprio.
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-text-dim">
            <div>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</div>
            <div>Conteúdo destinado a maiores de {SITE.ageRestriction} anos.</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
