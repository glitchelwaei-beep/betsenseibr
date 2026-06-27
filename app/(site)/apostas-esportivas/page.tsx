import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageUpdated } from "@/components/site/page-updated";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { PAGE_UPDATED } from "@/lib/editorial";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Apostas esportivas no Brasil 2026 — guia completo",
  description: "Apostas esportivas e cassino ao vivo na BetWinner: tipos de mercado, esportes cobertos, odds, legislação e estratégias para brasileiros.",
  path: "/apostas-esportivas",
});

const SPORTS = [
  { name: "Futebol", desc: "Brasileirão Série A e B, Copa do Brasil, Libertadores, Sul-Americana, estaduais", href: "/futebol" },
  { name: "UFC / MMA", desc: "Todos os eventos numerados e Fight Nights. Mercados de método de vitória, round e total" },
  { name: "Basquete", desc: "NBA, NBB, Euroliga. Linhas asiáticas e pontos individuais" },
  { name: "Vôlei", desc: "Superliga brasileira, mundial, Champions League. Sets, pontos e jogadores" },
  { name: "Tênis", desc: "Grand Slams, ATP, WTA, Rio Open e Brasil Open" },
  { name: "E-sports", desc: "CS2, Dota 2, League of Legends, Valorant, CBLOL" },
];

const FAQ = [
  {
    question: "As apostas esportivas são legais no Brasil?",
    answer:
      "A Lei 14.790/2023 regulamentou apostas de quota fixa no Brasil desde janeiro de 2025. Operadores precisam de licença da SPA. A BetWinner opera com licença internacional (Curaçao) e não está na lista da SPA — apostadores brasileiros usam a plataforma por conta própria.",
  },
  {
    question: "Quais esportes a BetWinner cobre no Brasil?",
    answer:
      "Futebol (Brasileirão, Libertadores, Copa do Brasil, estaduais), UFC/MMA, basquete (NBA, NBB), vôlei, tênis e e-sports (CS2, LoL, Valorant, CBLOL). Mais de 40 modalidades no total.",
  },
  {
    question: "Qual a diferença entre aposta pré-jogo e ao vivo?",
    answer:
      "Na pré-jogo você aposta antes do início com odds fixas no momento da aposta. No ao vivo (in-play) as odds mudam durante a partida conforme o jogo evolui — gols, cartões e escanteios alteram as linhas em tempo real.",
  },
  {
    question: "Como funciona o bônus de boas-vindas na BetWinner?",
    answer:
      `A BetWinner oferece ${BETWINNER.bonusHeadline.toLowerCase()} (${BETWINNER.bonusContext}). Use o código ${BETWINNER.promoCode} no cadastro. ${BETWINNER.promoCodeNote}`,
  },
];

export default function ApostasEsportivasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Apostas esportivas", url: "/apostas-esportivas" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Apostas esportivas" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-4xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Apostas esportivas no Brasil — guia 2026
          </h1>
          <PageUpdated date={PAGE_UPDATED.apostas} className="mt-2" />
            <p className="mt-4 text-lg text-text-muted">
            Tipos de aposta, esportes cobertos, odds, legislação brasileira e cassino ao vivo na BetWinner.{" "}
            <Link href="/casa-de-apostas" className="text-brand hover:underline">Guia casa de apostas →</Link>
          </p>

          <Link
            href="/copa-do-mundo-2026"
            className="mt-6 flex items-center gap-4 rounded-2xl border border-brand/40 bg-brand/5 p-4 sm:p-5 transition-all hover:border-brand hover:bg-brand/10"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
              <span className="text-2xl" aria-hidden>🏆</span>
            </div>
            <div className="flex-1">
              <div className="text-[10px] uppercase tracking-wide font-bold text-brand">Próximo grande evento</div>
              <div className="font-display text-lg font-bold text-text">Copa do Mundo 2026 — 11 de junho a 19 de julho</div>
              <div className="text-sm text-text-muted">Odds, favoritos, jogos do Brasil e bônus →</div>
            </div>
          </Link>

          <article className="prose-content mt-8">
            <h2>Esportes cobertos pela BetWinner</h2>
          </article>
          <div className="grid gap-3 mt-4 sm:grid-cols-2">
            {SPORTS.map((s) => (
              <div key={s.name} className="rounded-xl border border-border bg-bg-elevated p-4">
                <h3 className="font-display font-bold text-text mb-1">{s.name}</h3>
                <p className="text-sm text-text-muted">{s.desc}</p>
                {s.href && <Link href={s.href} className="text-sm text-brand mt-2 inline-block">Mais →</Link>}
              </div>
            ))}
          </div>

          <article className="prose-content mt-12">
            <h2>Tipos de aposta — glossário</h2>
            <ul>
              <li><strong>Aposta simples (single):</strong> uma única seleção em uma partida</li>
              <li><strong>Múltipla / combinada:</strong> várias seleções, todas precisam acertar</li>
              <li><strong>Sistema:</strong> combinações parciais de múltiplas seleções (mais seguro)</li>
              <li><strong>Handicap (linha):</strong> vantagem ou desvantagem em pontos/gols</li>
              <li><strong>Handicap asiático:</strong> handicap com meio ponto, elimina o empate</li>
              <li><strong>Mais/menos (Over/Under):</strong> total de pontos/gols acima ou abaixo de uma linha</li>
              <li><strong>Ambas marcam:</strong> os dois times marcam pelo menos um gol</li>
              <li><strong>Aposta ao vivo (in-play):</strong> apostar durante a partida com odds atualizadas</li>
              <li><strong>Cash out:</strong> encerrar a aposta antes do fim do jogo, garantindo lucro ou minimizando prejuízo</li>
            </ul>

            <h2>Legislação brasileira (Lei 14.790/2023)</h2>
            <p>
              A Lei 14.790/2023, em vigor desde 1º de janeiro de 2025, regulamentou as apostas de quota fixa no Brasil. Pontos principais:
            </p>
            <ul>
              <li>Operadores autorizados devem ter licença da SPA (Secretaria de Prêmios e Apostas)</li>
              <li>188 casas de apostas autorizadas em maio de 2026</li>
              <li>Apostadores devem ter ao menos 18 anos</li>
              <li>Imposto de Renda de 15% sobre prêmios líquidos acima do limite mensal isento (~R$ 2.259)</li>
              <li>Casas autorizadas não podem oferecer bônus de boas-vindas</li>
              <li>Autoexclusão e limites obrigatórios em casas autorizadas</li>
            </ul>
            <p>
              A BetWinner opera com licença internacional (Curaçao) e não está na lista da SPA. Por isso ainda oferece bônus, mas está fora da regulamentação brasileira.
            </p>

            <h2>Apostas esportivas e cassino ao vivo</h2>
            <p>
              A BetWinner é focada em <strong>apostas esportivas</strong>, com transmissões ao vivo, cash out e mercados in-play. Também oferece <strong>cassino ao vivo</strong> como complemento — roleta, blackjack e mesas com dealers reais. Se seu foco principal é futebol e Copa do Mundo, a plataforma esportiva costuma ser o ponto de partida; o cassino fica disponível na mesma conta.
            </p>

            <h2>Estratégias básicas para iniciantes</h2>
            <ul>
              <li><strong>Gestão de banca:</strong> nunca aposte mais de 2–5% do bankroll em uma única aposta</li>
              <li><strong>Aposte no que você conhece:</strong> futebol brasileiro tem mais informação disponível que ligas estrangeiras</li>
              <li><strong>Valor:</strong> compare odds entre casas antes de apostar (line shopping)</li>
              <li><strong>Evite múltiplas com 10+ seleções:</strong> matematicamente o pior tipo de aposta</li>
              <li><strong>Registre todas as apostas:</strong> planilha simples ajuda a identificar padrões</li>
            </ul>

            <div className="my-8 not-prose rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6">
              <h3 className="font-display text-xl font-bold text-text mb-2">Começar a apostar</h3>
              <p className="text-text-muted mb-4">
                {BETWINNER.bonusHeadline} com código <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span>.
              </p>
              <ButtonLink href="/go/betwinner?src=apostas-page" external size="lg" variant="primary">
                Cadastrar na BetWinner →
              </ButtonLink>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
