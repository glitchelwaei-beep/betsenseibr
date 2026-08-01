import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageUpdated } from "@/components/site/page-updated";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema, sportsEventSchema, articleSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { EDITORIAL, PAGE_UPDATED } from "@/lib/editorial";
import { buildMetadata } from "@/lib/seo";
import { WORLD_CUP } from "@/lib/worldcup";

const PAGE_PATH = WORLD_CUP.pagePath;
const PAGE_TITLE = `Copa do Mundo 2026: resultados, Espanha campeã e apostas pós-Mundial`;
const PAGE_DESCRIPTION =
  `Copa do Mundo 2026 encerrada: Espanha campeã, Brasil nas oitavas, Mbappé artilheiro. Veja o resumo e continue apostando na BetWinner com bônus ${BETWINNER.bonusShort} e PIX.`;
const PUBLISHED_AT = "2026-05-26";
const MODIFIED_AT = "2026-08-01";

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

const FAQ_ITEMS = [
  {
    question: "Quem ganhou a Copa do Mundo 2026?",
    answer:
      "A Espanha conquistou o bicampeonato mundial ao vencer a Argentina por 1 a 0 na prorrogação, em 19 de julho de 2026, no MetLife Stadium (Nova Jersey). O gol do título foi de Ferran Torres.",
  },
  {
    question: "Até onde o Brasil chegou na Copa do Mundo 2026?",
    answer:
      "O Brasil caiu nas oitavas de final, em 5 de julho de 2026, ao perder por 2 a 1 para a Noruega no MetLife Stadium. Na classificação geral do Mundial, a seleção terminou em 11º lugar.",
  },
  {
    question: "Como foi a campanha do Brasil na Copa 2026?",
    answer:
      "No Grupo C, o Brasil empatou com Marrocos, venceu Haiti e Escócia, depois eliminou o Japão na primeira fase do mata-mata e caiu para a Noruega nas oitavas. Técnico: Carlo Ancelotti.",
  },
  {
    question: "Quem foi o artilheiro da Copa do Mundo 2026?",
    answer:
      "Kylian Mbappé (França) conquistou a Chuteira de Ouro com 10 gols no torneio.",
  },
  {
    question: "Quando foi a Copa do Mundo 2026?",
    answer:
      "De 11 de junho a 19 de julho de 2026, nos Estados Unidos, Canadá e México — primeira edição tri-sede e com 48 seleções (104 jogos).",
  },
  {
    question: "Ainda dá para usar o bônus BetWinner depois da Copa?",
    answer: `Sim. A oferta de ${BETWINNER.bonusHeadline.toLowerCase()} com o código ${BETWINNER.promoCode} continua disponível para novos jogadores via link BetSensei — útil para Brasileirão, Libertadores e futebol europeu. Depósito mínimo ${BETWINNER.minDeposit} via PIX.`,
  },
  {
    question: "O que apostar agora que a Copa acabou?",
    answer:
      "Mercados diários de Brasileirão, Copa do Brasil, Libertadores, Champions e ligas europeias na BetWinner. Use PIX, odds ao vivo e o app em português — a cobertura não depende do Mundial.",
  },
  {
    question: "A BetWinner ainda cobre jogos da seleção brasileira?",
    answer:
      "Sim. Amistosos e próximas competições da Seleção costumam aparecer em Esportes → Futebol. Confira a agenda atualizada no app ou site da casa.",
  },
];

const PODIUM = [
  { place: "1º", team: "Espanha", note: "Campeã — 1–0 ARG na prorrogação" },
  { place: "2º", team: "Argentina", note: "Vice — final no MetLife Stadium" },
  { place: "3º", team: "Inglaterra", note: "Bronze no Mundial de 48 times" },
  { place: "4º", team: "França", note: "Mbappé com a Chuteira de Ouro" },
];

const BRASIL_RESULTS = [
  {
    date: "13/jun",
    matchup: "Brasil × Marrocos",
    result: "Empate",
    phase: "Grupo C",
  },
  {
    date: "19/jun",
    matchup: "Brasil × Haiti",
    result: "Vitória",
    phase: "Grupo C",
  },
  {
    date: "24/jun",
    matchup: "Escócia × Brasil",
    result: "Vitória",
    phase: "Grupo C",
  },
  {
    date: "Mata-mata",
    matchup: "Brasil × Japão",
    result: "Vitória",
    phase: "32 avos",
  },
  {
    date: "05/jul",
    matchup: "Brasil × Noruega",
    result: "1–2 — eliminado",
    phase: "Oitavas",
    highlight: true,
  },
];

export default function CopaDoMundoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Copa do Mundo 2026", url: PAGE_PATH },
        ])}
      />
      <JsonLd data={faqSchema(FAQ_ITEMS)} />
      <JsonLd
        data={sportsEventSchema({
          name: "Copa do Mundo FIFA 2026",
          startDate: WORLD_CUP.startDate,
          endDate: WORLD_CUP.endDate,
          locationName: "Estados Unidos, Canadá e México",
          countryCodes: ["US", "CA", "MX"],
          organizerName: "FIFA",
          organizerUrl: "https://www.fifa.com",
          url: PAGE_PATH,
          description: PAGE_DESCRIPTION,
          eventStatus: "https://schema.org/EventCompleted",
        })}
      />
      <JsonLd
        data={articleSchema({
          headline: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          url: PAGE_PATH,
          datePublished: PUBLISHED_AT,
          dateModified: MODIFIED_AT,
          authorName: EDITORIAL.authorName,
        })}
      />

      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Copa do Mundo 2026" },
          ]}
        />
      </Container>

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/95 to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.10),transparent_55%)]" />
        <Container className="relative py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs font-semibold text-text-muted">
              Encerrada · 11/jun – 19/jul/2026
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Copa do Mundo 2026 —{" "}
              <span className="text-brand">resultados, Brasil e o que apostar agora</span>
            </h1>
            <p className="mt-5 text-lg text-text-muted leading-relaxed max-w-2xl">
              O Mundial acabou: <strong className="text-text">{WORLD_CUP.champion}</strong> campeã,
              Brasil nas {WORLD_CUP.brasilExit.toLowerCase()}, {WORLD_CUP.goldenBoot} com a Chuteira de Ouro.
              Este guia resume o torneio e aponta o próximo passo nas apostas — BetWinner com PIX e{" "}
              {BETWINNER.bonusHeadline.toLowerCase()}.
            </p>
            <PageUpdated date={PAGE_UPDATED.copa} className="mt-3" />

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <MiniStat label="Campeã" value={WORLD_CUP.champion} />
              <MiniStat label="Brasil" value={WORLD_CUP.brasilExit} sub={WORLD_CUP.brasilFinalRank} />
              <MiniStat label="Artilheiro" value="Mbappé" sub={`${WORLD_CUP.goldenBootGoals} gols`} />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <ButtonLink href="/go/bw-worldcup?src=copa-hero" external size="lg" variant="primary">
                Ativar bônus de {BETWINNER.bonusShort} →
              </ButtonLink>
              <ButtonLink href="/futebol" size="lg" variant="outline">
                Apostas de futebol agora
              </ButtonLink>
            </div>

            <div className="mt-8 text-xs text-text-dim">
              <strong>Publicidade · 18+ ·</strong>{" "}
              <Link href="/jogo-responsavel" className="underline hover:text-text">
                Jogue com responsabilidade
              </Link>
              . Apostas envolvem risco financeiro. Bônus sujeito a termos da BetWinner.
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Como terminou a Copa do Mundo 2026
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card
              label="Final · 19/jul"
              value={`${WORLD_CUP.champion} ${WORLD_CUP.finalScore} ${WORLD_CUP.runnerUp}`}
              sub={`Gol: ${WORLD_CUP.finalScorer} · ${WORLD_CUP.finalVenue}`}
            />
            <Card
              label="Chuteira de Ouro"
              value={WORLD_CUP.goldenBoot}
              sub={`${WORLD_CUP.goldenBootGoals} gols no torneio`}
            />
            <Card
              label="Sedes"
              value="EUA · Canadá · México"
              sub="Primeira Copa tri-sede · 48 seleções · 104 jogos"
            />
            <Card
              label="Brasil"
              value={`${WORLD_CUP.brasilExit} · ${WORLD_CUP.brasilFinalRank}`}
              sub={`Derrota ${WORLD_CUP.brasilExitScore} para ${WORLD_CUP.brasilExitOpponent} · ${WORLD_CUP.brasilExitDate}`}
            />
          </div>

          <h3 className="mt-10 font-display text-xl font-bold text-text">Pódio e top 4</h3>
          <div className="mt-4 rounded-2xl border border-border bg-bg-elevated overflow-hidden">
            {PODIUM.map((row, i) => (
              <div
                key={row.team}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-4 sm:p-5 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-bold text-brand w-8">{row.place}</span>
                  <span className="font-semibold text-text">{row.team}</span>
                </div>
                <span className="text-sm text-text-muted sm:pl-12">{row.note}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 border-t border-border bg-bg-elevated/20">
        <Container className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="rounded-full bg-success/15 text-success px-2.5 py-1 text-xs font-semibold">
              {WORLD_CUP.brasilGroup}
            </span>
            <span className="rounded-full bg-warning/15 text-warning px-2.5 py-1 text-xs font-semibold">
              Eliminado nas oitavas
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Brasil na Copa do Mundo 2026
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            A Seleção, sob Carlo Ancelotti, saiu do {WORLD_CUP.brasilGroup} e avançou no mata-mata até as oitavas,
            onde perdeu para a <strong className="text-text">{WORLD_CUP.brasilExitOpponent}</strong> (
            {WORLD_CUP.brasilExitScore}) em {WORLD_CUP.brasilExitDate}. Na tabela final do Mundial,
            o Brasil ficou em <strong className="text-text">{WORLD_CUP.brasilFinalRank}</strong> — campanha abaixo
            do esperado para a busca do hexa.
          </p>

          <h3 className="mt-8 font-display text-xl font-bold text-text">Caminho da Seleção</h3>
          <div className="mt-4 rounded-2xl border border-border bg-bg-elevated overflow-hidden">
            {BRASIL_RESULTS.map((f, i) => (
              <div
                key={`${f.matchup}-${f.phase}`}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 sm:p-5 ${i > 0 ? "border-t border-border" : ""} ${f.highlight ? "bg-warning/5" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-xs uppercase tracking-wide font-semibold text-text-dim w-20">{f.date}</div>
                  <div>
                    <div className="font-semibold text-text">{f.matchup}</div>
                    <div className="text-xs text-text-dim">{f.phase}</div>
                  </div>
                </div>
                <div className={`text-sm font-semibold ${f.highlight ? "text-warning" : "text-brand"}`}>
                  {f.result}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <ButtonLink href="/go/bw-worldcup?src=copa-brasil" external size="lg" variant="primary">
              Apostar futebol na BetWinner →
            </ButtonLink>
            <ButtonLink href="/apostas-brasileirao" size="lg" variant="outline">
              Apostas no Brasileirão
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            O que apostar agora que a Copa acabou
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            O calendário não para. Na BetWinner você segue com Brasileirão, Libertadores, Copa do Brasil,
            Champions e ligas europeias — depósito via PIX, app em português e odds ao vivo.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="rounded-xl border border-border bg-bg-elevated p-4">
              <Link href="/apostas-brasileirao" className="font-semibold text-brand hover:underline">
                Brasileirão
              </Link>
              <p className="mt-1 text-sm text-text-muted">Rodadas semanais, handicap e mercados de gols.</p>
            </li>
            <li className="rounded-xl border border-border bg-bg-elevated p-4">
              <Link href="/apostas-copa-do-brasil" className="font-semibold text-brand hover:underline">
                Copa do Brasil
              </Link>
              <p className="mt-1 text-sm text-text-muted">Mata-mata nacional com odds e ao vivo.</p>
            </li>
            <li className="rounded-xl border border-border bg-bg-elevated p-4">
              <Link href="/futebol" className="font-semibold text-brand hover:underline">
                Futebol na BetWinner
              </Link>
              <p className="mt-1 text-sm text-text-muted">Libertadores, Europeus e Seleção nos próximos amistosos.</p>
            </li>
            <li className="rounded-xl border border-border bg-bg-elevated p-4">
              <Link href="/palpites-futebol" className="font-semibold text-brand hover:underline">
                Palpites de futebol
              </Link>
              <p className="mt-1 text-sm text-text-muted">Análises editoriais — sem garantia de resultado.</p>
            </li>
          </ul>
        </Container>
      </section>

      <section className="py-12 sm:py-16 border-t border-border bg-bg-elevated/20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Como continuar apostando pela BetWinner
          </h2>
          <ol className="mt-6 space-y-4">
            <Step n={1} title={`Cadastre-se com o código ${BETWINNER.promoCode}`}>
              Acesse pelo nosso link, preencha telefone (+55), CPF e o código{" "}
              <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span>.{" "}
              <Link href="/cadastro" className="text-brand hover:underline">
                Tutorial de cadastro
              </Link>
              .
            </Step>
            <Step n={2} title={`Deposite via PIX (mínimo ${BETWINNER.minDeposit})`}>
              Crédito em minutos. {BETWINNER.bonusHeadline} no 1º depósito qualificado, até R$ 700.{" "}
              <Link href="/pix" className="text-brand hover:underline">
                Guia PIX
              </Link>
              .
            </Step>
            <Step n={3} title="Escolha o mercado">
              Em <strong>Esportes → Futebol</strong> você acha Brasileirão, Libertadores, Champions e mais.{" "}
              <Link href="/aposta-ao-vivo" className="text-brand hover:underline">
                Aposta ao vivo
              </Link>
              .
            </Step>
            <Step n={4} title="Saque via PIX">
              Após verificação da conta, saques em até cerca de 1 hora — sem taxa da casa no fluxo PIX.
            </Step>
          </ol>

          <div className="mt-8 rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6">
            <p className="text-text-muted">
              Mundo pós-Copa: mesma casa, mesmos mercados de futebol — com bônus de boas-vindas ainda ativo para novos cadastros.
            </p>
            <div className="mt-4">
              <ButtonLink href="/go/bw-worldcup?src=copa-como-apostar" external size="lg" variant="primary">
                Cadastrar na BetWinner agora →
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Bônus BetWinner depois do Mundial
          </h2>
          <p className="mt-3 text-text-muted leading-relaxed">
            A oferta de novos jogadores segue válida pelo link BetSensei — independente do calendário da Copa.
            Ideal para montar banca no Brasileirão e no futebol europeu.
          </p>

          <div className="mt-6 rounded-2xl border border-brand/40 bg-gradient-to-br from-brand/10 to-transparent p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="rounded-full border border-brand/40 bg-brand/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand">
                Novos jogadores · 2026
              </span>
            </div>
            <h3 className="font-display text-2xl font-extrabold text-text">
              {BETWINNER.bonusHeadline}
            </h3>
            <p className="mt-3 text-text-muted">
              Até <strong className="text-text">R$ 700</strong> de bônus no 1º depósito · mín.{" "}
              {BETWINNER.minDeposit} via PIX · código{" "}
              <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span>.{" "}
              <Link href="/bonus" className="text-brand hover:underline">
                Detalhes da oferta
              </Link>
              .
            </p>
            <div className="mt-5">
              <ButtonLink href="/go/bw-worldcup?src=copa-promo" external size="lg" variant="primary">
                Resgatar bônus de {BETWINNER.bonusShort} →
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 border-t border-border">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-8 text-center">
            Perguntas frequentes — Copa 2026 e apostas
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-border bg-bg-elevated p-5 open:border-border-strong"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-text">{item.question}</h3>
                  <span className="text-brand text-xl leading-none transition-transform group-open:rotate-45 flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-text-muted leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 border-t border-border bg-bg-elevated/40">
        <Container className="max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            Pós-Copa · futebol continua
          </div>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Pronto para a próxima rodada?
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Cadastre-se na BetWinner, ative {BETWINNER.bonusHeadline.toLowerCase()} com{" "}
            <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span> e aposte no calendário
            que vem depois do Mundial.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink href="/go/bw-worldcup?src=copa-final" external size="lg" variant="primary">
              Cadastrar com {BETWINNER.promoCode} →
            </ButtonLink>
            <ButtonLink href="/betwinner" size="lg" variant="outline">
              Ler análise da BetWinner
            </ButtonLink>
          </div>
          <div className="mt-8 text-xs text-text-dim max-w-xl mx-auto">
            <strong>Publicidade / conteúdo de afiliado.</strong> A BetSensei BR recebe comissão da BetWinner em
            cadastros e depósitos pelos links desta página. Maiores de 18 anos.{" "}
            <Link href="/jogo-responsavel" className="text-brand hover:underline">
              Jogue com responsabilidade
            </Link>
            .{" "}
            <Link href="/divulgacao-de-afiliacao" className="text-brand hover:underline">
              Divulgação de afiliação
            </Link>
            .
          </div>
        </Container>
      </section>
    </>
  );
}

function MiniStat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl border border-border bg-bg-elevated/80 px-4 py-3">
      <div className="text-[10px] uppercase tracking-wide font-semibold text-text-dim">{label}</div>
      <div className="mt-0.5 font-display text-lg font-extrabold text-text">{value}</div>
      {sub ? <div className="text-xs text-text-muted">{sub}</div> : null}
    </div>
  );
}

function Card({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-border bg-bg-elevated p-5">
      <div className="text-[10px] uppercase tracking-wide font-semibold text-text-dim">{label}</div>
      <div className="mt-1 font-display text-xl sm:text-2xl font-extrabold text-text">{value}</div>
      <div className="mt-1 text-sm text-text-muted">{sub}</div>
    </div>
  );
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4 rounded-xl border border-border bg-bg-elevated p-5">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand text-white font-display font-extrabold">
        {n}
      </div>
      <div>
        <h3 className="font-semibold text-text">{title}</h3>
        <p className="mt-1 text-text-muted leading-relaxed">{children}</p>
      </div>
    </li>
  );
}
