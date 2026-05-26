import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema, sportsEventSchema, articleSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { Countdown } from "./countdown";

const PAGE_PATH = "/copa-do-mundo-2026";
const PAGE_TITLE = "Copa do Mundo 2026 — Apostas, Odds e Bônus de R$ 1.500 na BetWinner";
const PAGE_DESCRIPTION =
  "Copa do Mundo FIFA 2026: jogos do Brasil no Grupo C, odds atualizadas, favoritos, artilheiro e bônus de R$ 1.500 na BetWinner. Tudo em português, deposite com PIX.";
const PUBLISHED_AT = "2026-05-26";
const KICKOFF_ISO = "2026-06-11T19:00:00Z"; // 16:00 BRT — México x África do Sul, Estadio Azteca

export const metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
});

const FAQ_ITEMS = [
  {
    question: "Quando começa a Copa do Mundo 2026?",
    answer:
      "A Copa do Mundo FIFA 2026 começa em quinta-feira, 11 de junho de 2026, às 16h (horário de Brasília), com México x África do Sul no Estadio Azteca, na Cidade do México. A final será em 19 de julho de 2026, no MetLife Stadium (Nova Jersey/Nova York).",
  },
  {
    question: "Onde será a Copa do Mundo 2026?",
    answer:
      "Esta edição é a primeira tri-sede da história: Estados Unidos, Canadá e México. Serão 16 cidades-sede no total — 11 nos EUA, 3 no México e 2 no Canadá. Também é a primeira Copa com 48 seleções, em 12 grupos de 4, totalizando 104 partidas.",
  },
  {
    question: "Em que grupo está o Brasil na Copa do Mundo 2026?",
    answer:
      "O Brasil caiu no Grupo C, ao lado de Marrocos, Escócia e Haiti. O sorteio foi realizado em 5 de dezembro de 2025 e o grupo é considerado um dos 'grupos da morte' do Mundial — Marrocos foi semifinalista em 2022 e a Escócia é um adversário aguerrido.",
  },
  {
    question: "Quais são os jogos do Brasil na fase de grupos?",
    answer:
      "O Brasil tem três jogos na primeira fase, todos em horário acessível para o torcedor brasileiro: 13/jun (sábado) 19h00 contra Marrocos no MetLife Stadium (NY/NJ); 19/jun (sexta) 21h30 contra Haiti em Filadélfia; e 24/jun (quarta) 19h00 contra Escócia em Miami. Todos os horários em horário de Brasília.",
  },
  {
    question: "Quem é o técnico da seleção brasileira na Copa 2026?",
    answer:
      "Carlo Ancelotti, contratado em maio de 2025, é o primeiro técnico estrangeiro a comandar a seleção brasileira em Copa do Mundo. A convocação final dos 26 jogadores foi anunciada em 18 de maio de 2026.",
  },
  {
    question: "Quais são os favoritos para vencer a Copa do Mundo 2026?",
    answer:
      "Pelas odds atualizadas das principais casas brasileiras (Superbet, bet365, Novibet), os favoritos são: Espanha (5.50), França (6.00), Inglaterra (7.00–8.00), Brasil e Argentina (9.00), Portugal (12.00) e Alemanha (13.00–14.00). Brasil é apontado como favorito para vencer o Grupo C, com odds entre 1.15 e 1.25.",
  },
  {
    question: "Qual a melhor casa de apostas para a Copa do Mundo 2026?",
    answer:
      "A BetWinner é a nossa recomendação para apostadores brasileiros: aceita PIX (depósito mínimo R$ 10), tem cobertura completa da Copa em português, oferece o bônus de boas-vindas de R$ 1.500 + 150 giros grátis com o código BETBRMAX e licença internacional desde 2018. Leia nossa análise completa antes de cadastrar.",
  },
  {
    question: "A BetWinner aceita PIX para apostas da Copa do Mundo?",
    answer:
      "Sim. Depósitos via PIX são creditados em até 5 minutos e os saques saem em até 1 hora após a verificação da conta. Sem taxas da casa. É o método mais usado por apostadores brasileiros tanto na Copa quanto no dia a dia.",
  },
  {
    question: "A BetWinner vai lançar um bônus específico para a Copa do Mundo?",
    answer:
      "Até a publicação desta página (26 de maio de 2026), a BetWinner ainda não anunciou um bônus dedicado à Copa do Mundo. O bônus padrão de boas-vindas de R$ 1.500 + 150 giros grátis (código BETBRMAX) continua válido e pode ser usado em qualquer mercado, incluindo jogos da Copa. Operadores normalmente lançam promoções temáticas 7 a 10 dias antes do apito inicial — esta página será atualizada assim que houver novidade.",
  },
  {
    question: "Quais mercados estão disponíveis para apostar na Copa 2026?",
    answer:
      "Os principais: campeão (outright), vencedor de grupo, classificação para as oitavas, artilheiro/chuteira de ouro, próxima seleção eliminada, jogador da Copa, resultado final (1X2), total de gols, ambas marcam, handicap asiático, resultado exato, escanteios, cartões e apostas combinadas (criar aposta).",
  },
];

const FAVORITES = [
  { team: "Espanha", odds: "5.50", note: "Atual campeã da Euro" },
  { team: "França", odds: "6.00", note: "Mbappé em alta" },
  { team: "Inglaterra", odds: "7.00 – 8.00", note: "Geração madura, Kane no comando" },
  { team: "Brasil", odds: "9.00", note: "Era Ancelotti — busca pelo hexa", highlight: true },
  { team: "Argentina", odds: "9.00 – 9.50", note: "Defende o título de 2022" },
  { team: "Portugal", odds: "12.00", note: "Geração talentosa pós-CR7" },
  { team: "Alemanha", odds: "13.00 – 14.00", note: "Reconstrução em andamento" },
];

const BRASIL_FIXTURES = [
  {
    date: "Sáb 13/jun",
    matchup: "Brasil × Marrocos",
    time: "19h00 BRT",
    venue: "MetLife Stadium · Nova Jersey/NY",
  },
  {
    date: "Sex 19/jun",
    matchup: "Brasil × Haiti",
    time: "21h30 BRT",
    venue: "Lincoln Financial Field · Filadélfia",
  },
  {
    date: "Qua 24/jun",
    matchup: "Escócia × Brasil",
    time: "19h00 BRT",
    venue: "Hard Rock Stadium · Miami",
  },
];

const TOP_SCORER_ODDS = [
  { player: "Kylian Mbappé (FRA)", odds: "7.00 – 9.00", favorite: true },
  { player: "Harry Kane (ING)", odds: "8.00 – 10.00" },
  { player: "Vinícius Júnior (BRA)", odds: "23.00 – 26.00", highlight: true },
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
          startDate: "2026-06-11",
          endDate: "2026-07-19",
          locationName: "Estados Unidos, Canadá e México",
          countryCodes: ["US", "CA", "MX"],
          organizerName: "FIFA",
          organizerUrl: "https://www.fifa.com",
          url: PAGE_PATH,
          description: PAGE_DESCRIPTION,
        })}
      />
      <JsonLd
        data={articleSchema({
          headline: PAGE_TITLE,
          description: PAGE_DESCRIPTION,
          url: PAGE_PATH,
          datePublished: PUBLISHED_AT,
          dateModified: PUBLISHED_AT,
          authorName: "Redação BetSensei BR",
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

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/95 to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.10),transparent_55%)]" />
        <Container className="relative py-14 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              Especial · Copa do Mundo FIFA 2026
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Copa do Mundo 2026 — <span className="text-brand">apostas, odds e bônus</span> para o hexa
            </h1>
            <p className="mt-5 text-lg text-text-muted leading-relaxed max-w-2xl">
              Brasil estreia contra Marrocos em 13 de junho. Aqui você encontra os jogos do Grupo C,
              odds atualizadas dos favoritos, mercados de artilheiro, como apostar pela BetWinner
              com PIX e o bônus de boas-vindas de{" "}
              <span className="font-mono font-bold text-brand">R$ {BETWINNER.bonusHeadline.includes("1.500") ? "1.500" : ""}</span>{" "}
              + 150 giros grátis. Tudo em português, atualizado em 26/05/2026.
            </p>

            <Countdown targetIso={KICKOFF_ISO} label="Falta para o apito inicial (11/jun 16h BRT)" />

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <ButtonLink href="/go/bw-worldcup?src=copa-hero" external size="lg" variant="primary">
                Garantir bônus para a Copa →
              </ButtonLink>
              <ButtonLink href="/betwinner" size="lg" variant="outline">
                Análise da BetWinner
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

      {/* QUANDO E ONDE */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Quando e onde será a Copa do Mundo 2026
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card label="Abertura" value="11 de junho, 16h BRT" sub="México × África do Sul · Estadio Azteca, Cidade do México" />
            <Card label="Final" value="19 de julho, 2026" sub="MetLife Stadium · Nova Jersey/NY" />
            <Card label="Países-sede" value="EUA · Canadá · México" sub="Primeira Copa tri-sede da história" />
            <Card label="Formato" value="48 seleções · 12 grupos de 4" sub="104 partidas · 8 melhores 3º colocados também avançam" />
          </div>
          <p className="mt-6 text-text-muted leading-relaxed">
            Esta é a primeira Copa do Mundo com 48 seleções (antes eram 32) e a primeira disputada por três países simultaneamente.
            São 16 cidades-sede no total: 11 nos Estados Unidos, 3 no México e 2 no Canadá. Avançam para a fase de mata-mata
            os dois primeiros de cada grupo, mais os 8 melhores terceiros colocados — totalizando uma rodada de 32 antes das oitavas.
          </p>
        </Container>
      </section>

      {/* BRASIL NA COPA */}
      <section className="py-12 sm:py-16 border-t border-border bg-bg-elevated/20">
        <Container className="max-w-4xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="rounded-full bg-success/15 text-success px-2.5 py-1 text-xs font-semibold">
              Grupo C
            </span>
            <span className="rounded-full bg-brand/15 text-brand px-2.5 py-1 text-xs font-semibold">
              Era Ancelotti
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Brasil na Copa do Mundo 2026
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            A seleção brasileira caiu no <strong>Grupo C</strong>, considerado um dos "grupos da morte" do Mundial,
            ao lado de <strong>Marrocos</strong> (semifinalista em 2022), <strong>Escócia</strong> e <strong>Haiti</strong>.
            Carlo Ancelotti — primeiro técnico estrangeiro a comandar o Brasil em Copa — anunciou a lista final dos
            26 convocados em 18 de maio de 2026.
          </p>

          <h3 className="mt-8 font-display text-xl font-bold text-text">Jogos do Brasil na fase de grupos</h3>
          <div className="mt-4 rounded-2xl border border-border bg-bg-elevated overflow-hidden">
            {BRASIL_FIXTURES.map((f, i) => (
              <div
                key={f.matchup}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 sm:p-5 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-xs uppercase tracking-wide font-semibold text-text-dim w-20">{f.date}</div>
                  <div className="font-semibold text-text">{f.matchup}</div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-text-muted">
                  <span className="font-mono font-bold text-brand">{f.time}</span>
                  <span>{f.venue}</span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-display text-xl font-bold text-text">Quem o Brasil leva para a Copa</h3>
          <p className="mt-3 text-text-muted leading-relaxed">
            Convocação anunciada por Ancelotti em 18/05/2026. Destaques do ataque: <strong>Vinícius Júnior</strong> (Real Madrid),{" "}
            <strong>Raphinha</strong> (Barcelona) e <strong>Neymar</strong> — que retorna após 2 anos e 7 meses fora.
            No meio: <strong>Casemiro</strong>, Bruno Guimarães e Lucas Paquetá. Defesa com Marquinhos, Gabriel Magalhães,
            Danilo e Alex Sandro. <strong>Alisson</strong> segue como titular do gol. Endrick e Matheus Cunha completam o
            setor ofensivo, mesclando experiência e força nova.
          </p>

          <div className="mt-6 rounded-xl border border-border bg-bg p-4 text-sm text-text-muted">
            <strong className="text-text">Antes da Copa:</strong> amistoso contra <strong>Panamá no Maracanã em 31/05</strong>,{" "}
            viagem aos EUA em 01/06 e amistoso contra <strong>Egito em Cleveland em 06/06</strong> — último teste antes da estreia.
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <ButtonLink href="/go/bw-worldcup?src=copa-brasil" external size="lg" variant="primary">
              Apostar no Brasil pela BetWinner →
            </ButtonLink>
            <ButtonLink href="/futebol" size="lg" variant="outline">
              Cobertura permanente de futebol brasileiro
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* ODDS */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Odds para campeão da Copa do Mundo 2026
          </h2>
          <p className="mt-3 text-sm text-text-dim">
            Médias das principais casas brasileiras (Superbet, bet365, Novibet). Última atualização: 19/05/2026 — odds variam até o apito inicial.
          </p>

          <div className="mt-6 rounded-2xl border border-border bg-bg-elevated overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-bg/40">
                <tr className="text-left">
                  <th className="px-4 sm:px-5 py-3 text-xs uppercase tracking-wide font-semibold text-text-dim">Seleção</th>
                  <th className="px-4 sm:px-5 py-3 text-xs uppercase tracking-wide font-semibold text-text-dim">Odd campeão</th>
                  <th className="px-4 sm:px-5 py-3 text-xs uppercase tracking-wide font-semibold text-text-dim hidden sm:table-cell">Análise</th>
                </tr>
              </thead>
              <tbody>
                {FAVORITES.map((row) => (
                  <tr
                    key={row.team}
                    className={`border-t border-border ${row.highlight ? "bg-brand/5" : ""}`}
                  >
                    <td className="px-4 sm:px-5 py-3 font-semibold text-text">
                      {row.team}
                      {row.highlight ? (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-wide text-brand">Brasil</span>
                      ) : null}
                    </td>
                    <td className="px-4 sm:px-5 py-3 font-mono font-bold text-brand">{row.odds}</td>
                    <td className="px-4 sm:px-5 py-3 text-text-muted hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 font-display text-xl font-bold text-text">Mercado de artilheiro (chuteira de ouro)</h3>
          <div className="mt-4 rounded-2xl border border-border bg-bg-elevated overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-bg/40">
                <tr className="text-left">
                  <th className="px-4 sm:px-5 py-3 text-xs uppercase tracking-wide font-semibold text-text-dim">Jogador</th>
                  <th className="px-4 sm:px-5 py-3 text-xs uppercase tracking-wide font-semibold text-text-dim">Odd artilheiro</th>
                </tr>
              </thead>
              <tbody>
                {TOP_SCORER_ODDS.map((row) => (
                  <tr
                    key={row.player}
                    className={`border-t border-border ${row.highlight ? "bg-brand/5" : ""}`}
                  >
                    <td className="px-4 sm:px-5 py-3 font-semibold text-text">
                      {row.player}
                      {row.favorite ? (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-wide text-success">Favorito</span>
                      ) : null}
                    </td>
                    <td className="px-4 sm:px-5 py-3 font-mono font-bold text-brand">{row.odds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-5">
            <h3 className="font-display text-lg font-bold text-text">Vencedor do Grupo C</h3>
            <p className="mt-2 text-text-muted">
              Brasil é apontado como amplo favorito para vencer o Grupo C — odds entre <strong className="font-mono text-brand">1.15 e 1.25</strong>{" "}
              nas principais casas. Marrocos aparece como segundo colocado natural (odds ~5.00–6.00), com Escócia e Haiti completando o grupo.
            </p>
            <div className="mt-4">
              <ButtonLink href="/go/bw-worldcup?src=copa-odds" external size="lg" variant="primary">
                Conferir odds atualizadas na BetWinner →
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* COMO APOSTAR */}
      <section className="py-12 sm:py-16 border-t border-border bg-bg-elevated/20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Como apostar na Copa do Mundo 2026 pela BetWinner
          </h2>
          <ol className="mt-6 space-y-4">
            <Step n={1} title="Cadastre-se com o código BETBRMAX">
              Acesse a BetWinner pelo nosso link verificado, preencha telefone (+55), CPF e o código promocional{" "}
              <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span>. Leva menos de 2 minutos.{" "}
              <Link href="/cadastro" className="text-brand hover:underline">Veja o tutorial completo de cadastro</Link>.
            </Step>
            <Step n={2} title="Deposite via PIX (mínimo R$ 10)">
              PIX é creditado em até 5 minutos. Sem taxas da casa. O bônus de 100% até R$ 1.500 é ativado no primeiro depósito.{" "}
              <Link href="/pix" className="text-brand hover:underline">Detalhes sobre PIX na BetWinner</Link>.
            </Step>
            <Step n={3} title="Encontre os jogos da Copa">
              Na seção <strong>Esportes → Futebol → Copa do Mundo 2026</strong> você acha todos os jogos da fase de grupos, mata-mata,
              mercados de campeão, artilheiro e props (escanteios, cartões, gols por tempo).
            </Step>
            <Step n={4} title="Aposte ao vivo e use cash out">
              Durante os jogos da Copa, a BetWinner oferece odds em tempo real, transmissão integrada para a maioria das partidas e cash out
              para fechar a aposta antes do apito final.{" "}
              <Link href="/aposta-ao-vivo" className="text-brand hover:underline">Guia de aposta ao vivo</Link>.
            </Step>
            <Step n={5} title="Saque os ganhos via PIX">
              Saques via PIX caem em até 1 hora após a verificação da conta. Sem taxas da casa.
            </Step>
          </ol>

          <div className="mt-8 rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6">
            <p className="text-text-muted">
              Pronto para o apito inicial em 11 de junho?
            </p>
            <div className="mt-4">
              <ButtonLink href="/go/bw-worldcup?src=copa-como-apostar" external size="lg" variant="primary">
                Cadastrar na BetWinner agora →
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* MERCADOS POPULARES */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Mercados mais populares para Copa do Mundo
          </h2>
          <article className="prose-content mt-6">
            <p>
              Além dos mercados clássicos (1X2, total de gols, ambas marcam, handicap),
              a Copa do Mundo concentra apostas em mercados de longa duração e props específicos do torneio.
              Os mais procurados pelos apostadores brasileiros:
            </p>
            <ul>
              <li><strong>Campeão (Outright winner):</strong> escolha quem levanta a taça em 19/jul. Odds em movimento até o jogo final.</li>
              <li><strong>Vencedor de grupo:</strong> apostar no 1º colocado de cada um dos 12 grupos. Brasil é favorito no Grupo C com odds ~1.15–1.25.</li>
              <li><strong>Classificação direta às oitavas:</strong> top 2 de cada grupo + 8 melhores terceiros — mercados específicos para "Brasil avança", "Brasil termina em 1º", etc.</li>
              <li><strong>Artilheiro / Chuteira de Ouro:</strong> Mbappé é o favoritão (7.00–9.00). Vinícius pagaria 23.00–26.00. Mercado paga bem em zebras.</li>
              <li><strong>Jogador da Copa (MVP):</strong> escolhido pela FIFA — geralmente conversa com o desempenho do campeão.</li>
              <li><strong>Próxima seleção eliminada:</strong> mercado live durante a fase de grupos e mata-mata.</li>
              <li><strong>Total de gols na Copa:</strong> over/under (geralmente linha em torno de 150–160 gols totais para todo o torneio).</li>
              <li><strong>Combinadas / Bet builder:</strong> múltiplos mercados na mesma partida (ex: Brasil vence + Vinícius marca + over 2.5 gols).</li>
            </ul>
            <p>
              Em jogos da seleção brasileira, recomendamos atenção especial a: escalação confirmada (sai 1h antes do jogo),
              clima local nas cidades-sede americanas (calor pode mudar ritmo de jogo) e fadiga acumulada na reta final do mata-mata.
            </p>
          </article>
        </Container>
      </section>

      {/* PROMO ESPECIAL — EM BREVE */}
      <section className="py-12 sm:py-16 border-t border-border bg-bg-elevated/20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Promoções específicas da Copa do Mundo
          </h2>
          <p className="mt-3 text-text-muted leading-relaxed">
            Operadores normalmente lançam ofertas temáticas da Copa do Mundo entre 7 e 10 dias antes do apito inicial — combos de
            odds turbinadas, freebets para jogos do Brasil, cashback em derrotas por pênaltis, etc.
          </p>

          <div className="mt-6 rounded-2xl border-2 border-dashed border-border bg-bg p-6 sm:p-8 opacity-95">
            <div className="flex items-center gap-2 mb-3">
              <span className="rounded-full border border-brand/40 bg-brand/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand">
                Em breve · Junho 2026
              </span>
            </div>
            <h3 className="font-display text-2xl font-extrabold text-text">
              Promo Copa do Mundo BetWinner
            </h3>
            <p className="mt-3 text-text-muted">
              A BetWinner ainda não publicou um bônus dedicado à Copa do Mundo 2026. Esta página será atualizada assim que houver novidade.
              Enquanto isso, o bônus padrão de boas-vindas de <strong>R$ 1.500 + 150 giros grátis</strong> (código{" "}
              <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span>) é válido para qualquer mercado — inclusive
              os jogos da Copa a partir de 13 de junho.
            </p>
            <div className="mt-5">
              <button
                type="button"
                disabled
                className="inline-flex items-center justify-center gap-2 rounded-lg font-bold tracking-[-0.005em] h-12 px-6 text-base sm:h-11 sm:px-5 sm:text-sm bg-bg-elevated text-text-dim border border-border cursor-not-allowed"
                aria-disabled="true"
                title="Disponível a partir de junho de 2026"
              >
                Disponível em junho de 2026
              </button>
            </div>
          </div>

          <p className="mt-6 text-sm text-text-dim">
            Quer chegar pronto para o apito inicial?{" "}
            <Link href="/go/bw-worldcup?src=copa-embreve" className="text-brand font-semibold hover:underline" target="_blank" rel="sponsored noopener noreferrer">
              Cadastre-se agora com o bônus padrão de R$ 1.500
            </Link>{" "}
            — saldo disponível para apostar desde o jogo de abertura em 11 de junho.
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 border-t border-border">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-8 text-center">
            Perguntas frequentes sobre apostas na Copa do Mundo 2026
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-border bg-bg-elevated p-5 open:border-border-strong"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-text">{item.question}</h3>
                  <span className="text-brand text-xl leading-none transition-transform group-open:rotate-45 flex-shrink-0">+</span>
                </summary>
                <p className="mt-3 text-text-muted leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-14 sm:py-20 border-t border-border bg-bg-elevated/40">
        <Container className="max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
            Faltam poucos dias — abertura em 11/jun
          </div>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Esteja pronto para o apito inicial
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Cadastre-se na BetWinner agora, ative o bônus de R$ 1.500 + 150 giros grátis com o código{" "}
            <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span> e tenha saldo disponível
            desde o primeiro jogo da Copa do Mundo 2026.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink href="/go/bw-worldcup?src=copa-final" external size="lg" variant="primary">
              Cadastrar com BETBRMAX →
            </ButtonLink>
            <ButtonLink href="/betwinner" size="lg" variant="outline">
              Ler análise da BetWinner
            </ButtonLink>
          </div>
          <div className="mt-8 text-xs text-text-dim max-w-xl mx-auto">
            <strong>Publicidade / conteúdo de afiliado.</strong> A BetSensei BR recebe comissão da BetWinner em cadastros e
            depósitos realizados pelos links desta página. Não recebemos para alterar nossa análise.
            Maiores de 18 anos. Apostar envolve risco — apenas com dinheiro que você pode perder.{" "}
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
