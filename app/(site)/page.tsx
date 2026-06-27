import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/site/json-ld";
import { WorldCupHero } from "@/components/site/world-cup-hero";
import { faqSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `BetWinner Brasil: bônus ${BETWINNER.bonusShort}, PIX e Copa 2026`,
  description:
    `BetWinner Brasil: bônus ${BETWINNER.bonusShort}, cadastro com PIX, app APK e código ${BETWINNER.promoCode}. Análise honesta e guias em português — inclui especial Copa 2026.`,
  path: "/",
});

const FAQ_ITEMS = [
  {
    question: "A BetWinner é confiável no Brasil em 2026?",
    answer:
      "A BetWinner opera com licença internacional de Curaçao desde 2018 e tem milhões de usuários no mundo. Ela ainda não está na lista oficial da SPA (Secretaria de Prêmios e Apostas) do Brasil, mas aceita apostadores brasileiros e oferece interface em português, atendimento 24/7 e saques via PIX. Apostadores brasileiros usam a plataforma por conta própria, pois ela está fora da regulamentação brasileira.",
  },
  {
    question: `Como funciona o código promocional ${BETWINNER.promoCode}?`,
    answer:
      `Ao se cadastrar pelo link BetSensei, você acessa a oferta de ${BETWINNER.bonusHeadline.toLowerCase()} (${BETWINNER.bonusContext}). ${BETWINNER.promoCodeNote} O bônus é creditado conforme os termos da promoção na BetWinner.`,
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

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQ_ITEMS)} />

      <WorldCupHero affiliateSrc="home-hero" showBackground />

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
            <NavCard href="/bonus" title="Bônus BetWinner 2026" desc={`${BETWINNER.bonusHeadline}. Como ativar com código ${BETWINNER.promoCode}, rollover e depósito via PIX.`} />
            <NavCard href="/cadastro" title="Como se cadastrar" desc="Cadastro em 2 minutos: telefone +55, CPF, código promocional BETSENSEI26. Tutorial completo." />
            <NavCard href="/pix" title="Depósito e saque via PIX" desc="O método mais rápido e barato. Sem taxa, creditado em até 5 minutos. Limites, dicas e troubleshooting." />
            <NavCard href="/codigo-promocional" title={`Código promocional ${BETWINNER.promoCode}`} desc={`Ative o bônus de ${BETWINNER.bonusShort} para novos jogadores. Como aplicar, condições de rollover e prazos.`} />
            <NavCard href="/aplicativo" title="BetWinner mobile e app (APK)" desc="BetWinner mobile no celular: download do APK, instalação no iPhone e diferenças vs. site mobile." />
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
