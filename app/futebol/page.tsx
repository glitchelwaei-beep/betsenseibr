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
  title: "Apostas em futebol no Brasil — Brasileirão, Libertadores e estaduais 2026",
  description: "Como apostar em futebol no Brasil em 2026: Campeonato Brasileiro, Libertadores, Copa do Brasil, estaduais. Mercados, odds e dicas com BetWinner.",
  path: "/futebol",
});

const FAQ = [
  {
    question: "Quais campeonatos de futebol a BetWinner cobre?",
    answer:
      "Campeonato Brasileiro Série A e B, Copa do Brasil, Libertadores, Sul-Americana, estaduais (Paulista, Carioca, Mineiro, Gaúcho), ligas europeias (Champions, Premier League, La Liga) e jogos da Seleção Brasileira, incluindo Copa do Mundo 2026.",
  },
  {
    question: "Quais são os principais mercados para apostar em futebol?",
    answer:
      "1X2 (resultado final), dupla chance, mais/menos gols, ambas marcam, handicap asiático, resultado exato, escanteios, cartões e apostas combinadas (bet builder) na mesma partida.",
  },
  {
    question: "A BetWinner transmite jogos ao vivo?",
    answer:
      "Sim. A BetWinner oferece live streaming integrado para a maioria das partidas do Brasileirão e Libertadores, com estatísticas em tempo real, cash out e apostas in-play.",
  },
  {
    question: "Como apostar na Copa do Mundo 2026 pela BetWinner?",
    answer:
      `Cadastre-se com PIX (mínimo ${BETWINNER.minDeposit}), use o código ${BETWINNER.promoCode} para ${BETWINNER.bonusHeadline.toLowerCase()} e acesse Esportes → Futebol → Copa do Mundo 2026. Veja nosso guia completo com jogos do Brasil no Grupo C.`,
  },
];

export default function FutebolPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Futebol", url: "/futebol" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Futebol" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Apostas em futebol no Brasil
          </h1>
          <PageUpdated date={PAGE_UPDATED.futebol} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            O esporte mais apostado no país. Cobertura completa de Brasileirão, Libertadores, Copa do Brasil e estaduais na BetWinner.
          </p>

          <Link
            href="/copa-do-mundo-2026"
            className="mt-6 flex items-center gap-4 rounded-2xl border border-brand/40 bg-brand/5 p-4 sm:p-5 transition-all hover:border-brand hover:bg-brand/10"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
              <span className="text-2xl" aria-hidden>🏆</span>
            </div>
            <div className="flex-1">
              <div className="text-[10px] uppercase tracking-wide font-bold text-brand">Especial</div>
              <div className="font-display text-lg font-bold text-text">Copa do Mundo 2026 — Brasil estreia 13/jun</div>
              <div className="text-sm text-text-muted">Jogos do Grupo C, odds atualizadas, bônus de {BETWINNER.bonusShort} →</div>
            </div>
          </Link>

          <article className="prose-content mt-8">
            <h2>Competições cobertas pela BetWinner</h2>
            <ul>
              <li><strong>Campeonato Brasileiro Série A</strong> — 20 clubes, 38 rodadas</li>
              <li><strong>Série B</strong> — segunda divisão</li>
              <li><strong>Copa do Brasil</strong> — eliminatórias do mata-mata</li>
              <li><strong>Copa Libertadores</strong> — clubes sul-americanos</li>
              <li><strong>Copa Sul-Americana</strong></li>
              <li><strong>Estaduais:</strong> Paulista, Carioca, Mineiro, Gaúcho, Baiano, Pernambucano</li>
              <li><strong>Internacionais:</strong> Champions League, Europa League, Premier League, La Liga, Serie A italiana</li>
              <li><strong>Seleção Brasileira:</strong> Eliminatórias, amistosos, Copa América, <Link href="/copa-do-mundo-2026" className="text-brand hover:underline">Copa do Mundo 2026</Link></li>
            </ul>

            <h2>Principais mercados de futebol</h2>
            <ul>
              <li><strong>1X2 (Resultado final):</strong> casa, empate ou visitante</li>
              <li><strong>Dupla chance:</strong> duas das três opções (1X, X2, 12)</li>
              <li><strong>Mais/menos gols:</strong> total de gols acima/abaixo de uma linha (geralmente 2.5)</li>
              <li><strong>Ambas marcam:</strong> sim ou não</li>
              <li><strong>Handicap asiático:</strong> -1.5, -1, -0.5, 0, +0.5, +1, +1.5</li>
              <li><strong>Resultado exato:</strong> placar exato (alta odd, baixa probabilidade)</li>
              <li><strong>Primeiro a marcar / Próximo a marcar</strong></li>
              <li><strong>Escanteios:</strong> total, ambos times, handicap</li>
              <li><strong>Cartões:</strong> total, primeiro cartão, jogador específico</li>
              <li><strong>Apostas combinadas (criar aposta / bet builder):</strong> múltiplos mercados na mesma partida</li>
            </ul>

            <h2>Dicas para apostar em Brasileirão Série A</h2>
            <ul>
              <li><strong>Atenção ao calendário:</strong> times brasileiros jogam quarta e domingo. Cansaço afeta odds</li>
              <li><strong>Mando de campo conta:</strong> Maracanã, Mineirão e Morumbi são fatores reais</li>
              <li><strong>Veja a escalação 1h antes:</strong> ausências de jogadores-chave mudam linhas drasticamente</li>
              <li><strong>Cuide do Vasco vs. flamengo:</strong> clássicos têm odds infladas e linhas malucas</li>
              <li><strong>Estaduais primeiros meses:</strong> times grandes usam jovens, valor escondido em zebras</li>
            </ul>

            <h2>Aposta ao vivo no futebol</h2>
            <p>
              A BetWinner tem live streaming integrado para a maioria das partidas do Brasileirão e Libertadores. Você pode apostar com odds que mudam a cada lance, usar cash out e seguir estatísticas em tempo real.
            </p>

            <div className="my-8 not-prose rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6">
              <h3 className="font-display text-xl font-bold text-text mb-2">Apostar nos próximos jogos</h3>
              <p className="text-text-muted mb-4">
                Use o código <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span> e ganhe bônus para sua primeira aposta.
              </p>
              <ButtonLink href="/go/betwinner?src=futebol-page" external size="lg" variant="primary">
                Apostar na BetWinner →
              </ButtonLink>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
