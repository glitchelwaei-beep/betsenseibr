import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/site/json-ld";
import { faqSchema, reviewSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `BetWinner Brasil 2026: análise, código promocional ${BETWINNER.promoCode} e bônus de R$ 1.500 — ${SITE.shortName}`,
  description:
    "Análise honesta da BetWinner para apostadores brasileiros: cadastro, PIX, código promocional BETBRMAX, app, saque, suporte 24/7 e licença. Tudo em português, atualizado em 2026.",
  path: "/",
});

const FAQ_ITEMS = [
  {
    question: "A BetWinner é confiável no Brasil em 2026?",
    answer:
      "A BetWinner opera com licença internacional de Curaçao desde 2018 e tem milhões de usuários no mundo. Ela ainda não está na lista oficial da SPA (Secretaria de Prêmios e Apostas) do Brasil, mas aceita apostadores brasileiros e oferece interface em português, atendimento 24/7 e saques via PIX. Apostadores brasileiros usam a plataforma por conta própria, pois ela está fora da regulamentação brasileira.",
  },
  {
    question: "Como funciona o código promocional BETBRMAX?",
    answer:
      "O código BETBRMAX é inserido no campo \"Código de promoção\" durante o cadastro. Ele ativa o bônus de boas-vindas de 100% até R$ 1.500 + 150 giros grátis no primeiro depósito. Como a BetWinner opera fora da SPA, ela ainda pode oferecer bônus de boas-vindas (proibidos para casas autorizadas no Brasil desde 1º de janeiro de 2025).",
  },
  {
    question: "Posso depositar e sacar via PIX na BetWinner?",
    answer:
      "Sim. A BetWinner aceita PIX para depósitos (creditados em até 5 minutos) e saques (processados em até 1 hora, dependendo da verificação da conta). Depósito mínimo via PIX: R$ 10. Sem taxas da casa.",
  },
  {
    question: "A BetWinner tem aplicativo para Android e iPhone?",
    answer:
      "Sim. O app Android é baixado como APK direto do site oficial da BetWinner — o Google Play proíbe apps de apostas. Para iOS, a instalação é feita via perfil de configuração da Apple. Ambos os apps são em português e oferecem apostas ao vivo, transmissões e cassino.",
  },
  {
    question: "Preciso pagar imposto sobre os prêmios da BetWinner?",
    answer:
      "Para casas autorizadas pela SPA, o imposto de 15% sobre prêmios líquidos acima do limite mensal (~R$ 2.259) é retido automaticamente. Como a BetWinner é offshore, o imposto não é retido — o jogador é responsável por declarar e recolher o IR (Imposto de Renda) sobre os ganhos.",
  },
  {
    question: "A BetWinner cobre o Campeonato Brasileiro?",
    answer:
      "Sim, com mercados completos para todas as rodadas da Série A, Série B, Copa do Brasil, Copa Libertadores e Sul-Americana. Também cobre as estaduais (Paulista, Carioca, Mineiro, Gaúcho) e divisões inferiores.",
  },
];

const REVIEW_BODY = `${BETWINNER.name} é uma casa de apostas internacional ativa no Brasil desde 2018. Nossa nota: ${BETWINNER.rating}/10. Destaques: ${BETWINNER.bonusHeadline}, depósitos via PIX, app em português e mais de 40 esportes incluindo o Campeonato Brasileiro completo.`;

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQ_ITEMS)} />
      <JsonLd
        data={reviewSchema({
          itemName: BETWINNER.name,
          ratingValue: BETWINNER.rating,
          authorName: "Redação BetSensei BR",
          reviewBody: REVIEW_BODY,
          datePublished: "2026-05-22",
        })}
      />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/vbanner.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/60 to-bg/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.12),transparent_55%)]" />
        <Container className="relative py-16 sm:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated/60 px-3 py-1 text-xs font-semibold text-text-muted">
              <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
              Atualizado em maio de 2026
            </div>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
              BetWinner <span className="text-brand">Brasil</span> — Bônus de R$ 1.500 + 150 giros grátis
            </h1>
            <p className="mt-5 text-lg text-text-muted leading-relaxed max-w-2xl">
              Análise honesta da BetWinner para apostadores brasileiros. Cadastro em 2 minutos, depósito PIX, saque rápido,
              app em português e cobertura completa do Campeonato Brasileiro. Use o código promocional{" "}
              <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span> para ativar o bônus máximo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <ButtonLink href="/go/betwinner?src=home-hero" external size="lg" variant="primary">
                Ativar bônus de R$ 1.500 →
              </ButtonLink>
              <ButtonLink href="/betwinner" size="lg" variant="outline">
                Ler análise completa
              </ButtonLink>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              <Stat value="R$ 1.500" label="bônus de boas-vindas" />
              <Stat value="PIX" label="depósito e saque" />
              <Stat value="18+" label="jogue com responsabilidade" />
            </div>
          </div>
        </Container>
      </section>

      {/* BETWINNER FEATURE CARD */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl border border-brand/30 bg-bg-elevated p-6 sm:p-10 shadow-[0_10px_60px_-15px_rgba(249,115,22,0.25)]">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl font-display text-lg font-extrabold text-white"
                  style={{ backgroundColor: BETWINNER.brandColor }}
                  aria-hidden
                >
                  BW
                </div>
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                    BetWinner
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-accent/15 text-accent px-2.5 py-1 font-semibold">
                      Licença internacional
                    </span>
                    <span className="rounded-full bg-bg/60 text-text-muted px-2.5 py-1">
                      Desde 2018
                    </span>
                    <span className="rounded-full bg-success/15 text-success px-2.5 py-1 font-semibold">
                      PIX 24/7
                    </span>
                    <span className="rounded-full bg-bg/60 text-text-muted px-2.5 py-1">
                      Em português
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs text-text-dim uppercase font-semibold tracking-wide">
                  Nossa nota
                </div>
                <div className="font-display text-5xl font-extrabold text-gold leading-none">
                  {BETWINNER.rating}
                </div>
                <div className="text-xs text-text-dim mt-1">de 10</div>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-bg/40 border border-border p-5">
              <div className="text-xs text-text-dim uppercase tracking-wide font-semibold">
                Bônus de boas-vindas (com código {BETWINNER.promoCode})
              </div>
              <div className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-text">
                {BETWINNER.bonusHeadline}
              </div>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <Fact label="Depósito mínimo" value={BETWINNER.minDeposit} />
                <Fact label="Saque" value={BETWINNER.payoutTime} />
                <Fact label="Esportes" value={`${BETWINNER.sports}+`} />
                <Fact label="Atendimento" value="24/7 PT-BR" />
              </div>
            </div>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {BETWINNER.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-text-muted">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <ButtonLink href="/go/betwinner?src=home-card" external size="lg" variant="primary" className="sm:flex-1">
                Cadastrar com {BETWINNER.promoCode} →
              </ButtonLink>
              <ButtonLink href="/betwinner" size="lg" variant="outline" className="sm:flex-1">
                Análise completa
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* WORLD CUP 2026 — TIME-BOUND CALLOUT */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-4xl">
          <Link
            href="/copa-do-mundo-2026"
            className="block rounded-3xl border-2 border-brand/40 bg-gradient-to-br from-brand/10 via-brand/5 to-transparent p-6 sm:p-8 transition-all hover:border-brand hover:from-brand/15"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-brand/15 text-brand">
                <span className="text-3xl" aria-hidden>🏆</span>
              </div>
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-wide font-bold text-brand">
                  Especial · começa 11/jun · Brasil estreia 13/jun
                </div>
                <h2 className="mt-1 font-display text-2xl sm:text-3xl font-extrabold text-text">
                  Copa do Mundo 2026 — Apostas, Odds e Bônus
                </h2>
                <p className="mt-2 text-text-muted">
                  Jogos do Brasil no Grupo C, odds atualizadas dos favoritos, artilheiro e bônus de R$ 1.500 na BetWinner →
                </p>
              </div>
            </div>
          </Link>
        </Container>
      </section>

      {/* QUICK NAV TO KEY PAGES */}
      <section className="py-16 sm:py-20 border-t border-border bg-bg-elevated/20">
        <Container>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Tudo o que você precisa saber
          </h2>
          <p className="text-text-muted mb-8">
            Guias passo a passo para começar, depositar, sacar e apostar com a BetWinner.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <NavCard href="/cadastro" title="Como se cadastrar" desc="Cadastro em 2 minutos: telefone +55, CPF, código promocional BETBRMAX. Tutorial completo." />
            <NavCard href="/pix" title="Depósito e saque via PIX" desc="O método mais rápido e barato. Sem taxa, creditado em até 5 minutos. Limites, dicas e troubleshooting." />
            <NavCard href="/codigo-promocional" title="Código promocional BETBRMAX" desc="Ative o bônus máximo de R$ 1.500 + 150 giros. Como aplicar, condições de rollover e prazos." />
            <NavCard href="/aplicativo" title="App BetWinner para Android e iOS" desc="Download do APK, instalação no iPhone via perfil Apple, requisitos e diferenças vs. site mobile." />
            <NavCard href="/futebol" title="Apostas no Campeonato Brasileiro" desc="Mercados, odds médias, dicas para apostar em Série A, Libertadores, Copa do Brasil e estaduais." />
            <NavCard href="/como-apostar" title="Como apostar (para iniciantes)" desc="Glossário, tipos de aposta (simples, múltipla, handicap), gestão de banca e estratégias básicas." />
            <NavCard href="/aposta-ao-vivo" title="Apostas ao vivo" desc="Como funciona o live, transmissões da BetWinner, cash out e estratégias para apostas in-play." />
            <NavCard href="/imposto" title="Imposto sobre prêmios (IR 15%)" desc="O que mudou com a Lei 14.790/2023, como declarar ganhos de casas offshore como a BetWinner." />
            <NavCard href="/jogo-responsavel" title="Jogo responsável" desc="Sinais de problema, limites de autoexclusão, canais de ajuda no Brasil." />
          </div>
        </Container>
      </section>

      {/* WHY US */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <WhyCard title="Testes reais, não copy-paste" body="Cadastramos, depositamos via PIX, apostamos, sacamos e contactamos o suporte. Tudo o que escrevemos foi vivido." />
            <WhyCard title="Divulgação clara" body="Recebemos comissão da BetWinner. Por isso explicamos os pontos negativos com a mesma honestidade dos positivos." />
            <WhyCard title="Foco em Brasil" body="PIX, CPF, Lei 14.790/2023, IR, Campeonato Brasileiro. Não traduzimos análises estrangeiras — escrevemos do zero para o brasileiro." />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 border-t border-border bg-bg-elevated/20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight mb-8 text-center">
            Perguntas frequentes sobre BetWinner Brasil
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group rounded-xl border border-border bg-bg-elevated p-5 open:border-border-strong">
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
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl sm:text-3xl font-extrabold text-text">{value}</div>
      <div className="text-xs text-text-dim mt-1">{label}</div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] text-text-dim uppercase tracking-wide font-semibold">{label}</div>
      <div className="text-text font-semibold mt-0.5">{value}</div>
    </div>
  );
}

function WhyCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-bg-elevated p-6">
      <h3 className="font-display text-xl font-bold text-text mb-3">{title}</h3>
      <p className="text-text-muted leading-relaxed">{body}</p>
    </div>
  );
}

function NavCard({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link href={href} className="block rounded-2xl border border-border bg-bg-elevated p-5 transition-all hover:border-brand/50 hover:bg-bg-elevated/80">
      <h3 className="font-display text-lg font-bold text-text mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{desc}</p>
      <div className="mt-3 text-sm font-semibold text-brand">Ler guia →</div>
    </Link>
  );
}
