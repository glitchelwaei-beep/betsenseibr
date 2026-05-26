import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema, reviewSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `BetWinner Brasil — análise completa, bônus, código promocional ${BETWINNER.promoCode} (2026)`,
  description:
    "Análise completa da BetWinner Brasil 2026: cadastro, bônus, PIX, app, saque, suporte, licença, prós e contras. Tudo testado por nós em português.",
  path: "/betwinner",
});

const FAQ = [
  {
    question: "Como me cadastrar na BetWinner do Brasil?",
    answer: `Acesse o site oficial da BetWinner pelo nosso link, clique em "Registrar", escolha BRL (Real) como moeda, informe o número de telefone +55, e-mail e CPF, crie uma senha e confirme por SMS. No campo de código promocional, insira ${BETWINNER.promoCode} para liberar o bônus máximo.`,
  },
  {
    question: "O depósito via PIX funciona na BetWinner?",
    answer: `Sim. Faça login, vá em "Depositar", selecione PIX, gere a chave QR ou copia-e-cola pelo app do seu banco. Valor mínimo: ${BETWINNER.minDeposit}. Sem taxa da casa. Crédito em até 5 minutos.`,
  },
  {
    question: "Qual o bônus de boas-vindas e como ativar com BETBRMAX?",
    answer: `O bônus é ${BETWINNER.bonusHeadline.toLowerCase()}. Para ativar, use o código ${BETWINNER.promoCode} no campo "Código de promoção" durante o cadastro. O bônus é creditado no primeiro depósito qualificado. Rollover típico: ${BETWINNER.rating > 9 ? "5x em apostas com odds 1.40+" : "5x em apostas combinadas"}.`,
  },
  {
    question: "Quanto tempo leva para sacar na BetWinner?",
    answer: `Tempo médio de saque: ${BETWINNER.payoutTime}. O método mais rápido é PIX. Antes do primeiro saque é necessário verificar a conta enviando RG ou CNH e selfie.`,
  },
  {
    question: "A BetWinner tem app no Brasil?",
    answer:
      "Sim. O app para Android é baixado como APK direto do site oficial (o Google Play não permite apps de apostas). Para iPhone, a instalação é feita via perfil de configuração da Apple. Os dois apps estão em português e oferecem streaming ao vivo, cash out e cassino.",
  },
  {
    question: "A BetWinner é legal no Brasil?",
    answer:
      "A BetWinner opera com licença internacional (Curaçao eGaming) e não está na lista oficial da SPA (Secretaria de Prêmios e Apostas) do Brasil. Apostadores brasileiros podem se cadastrar e jogar, mas a plataforma está fora da regulamentação brasileira — qualquer disputa deve ser resolvida pela jurisdição de Curaçao. Recomendamos sempre depositar pequenas quantias e verificar a conta antes de apostar valores maiores.",
  },
];

const REVIEW_BODY = `A BetWinner é uma casa de apostas que opera no Brasil desde 2018 sob licença de Curaçao. Cobre o Campeonato Brasileiro, aceita PIX e tem app em português. Nossa nota: ${BETWINNER.rating}/10.`;

export default function BetWinnerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "BetWinner", url: "/betwinner" },
        ])}
      />
      <JsonLd
        data={reviewSchema({
          itemName: BETWINNER.name,
          ratingValue: BETWINNER.rating,
          authorName: "Redação BetSensei BR",
          reviewBody: REVIEW_BODY,
          datePublished: "2026-05-22",
        })}
      />
      <JsonLd data={faqSchema(FAQ)} />

      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "BetWinner" }]} />
      </Container>

      {/* HEAD CARD */}
      <section className="pt-6">
        <Container>
          <div className="rounded-3xl border border-border bg-bg-elevated p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl font-display text-base font-extrabold text-white" style={{ backgroundColor: BETWINNER.brandColor }} aria-hidden>
                  BW
                </div>
                <div>
                  <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
                    BetWinner Brasil — análise completa 2026
                  </h1>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-accent/15 text-accent px-2.5 py-1 font-semibold">Licença internacional</span>
                    <span className="rounded-full bg-bg/60 text-text-muted px-2.5 py-1">Desde {BETWINNER.founded}</span>
                    <span className="rounded-full bg-success/15 text-success px-2.5 py-1 font-semibold">PIX</span>
                    <span className="rounded-full bg-bg/60 text-text-muted px-2.5 py-1">Atualizado: maio 2026</span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs text-text-dim uppercase font-semibold tracking-wide">Nossa nota</div>
                <div className="font-display text-5xl font-extrabold text-gold leading-none">{BETWINNER.rating}</div>
                <div className="text-xs text-text-dim mt-1">de 10</div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-bg/40 border border-border p-4">
                <div className="text-xs text-text-dim uppercase tracking-wide font-semibold">Bônus</div>
                <div className="mt-1 font-display text-2xl font-extrabold text-text">{BETWINNER.bonusHeadline}</div>
                <div className="mt-2 text-sm text-text-muted">
                  Código promocional: <span className="font-mono font-bold text-brand text-base">{BETWINNER.promoCode}</span>
                </div>
              </div>
              <div className="rounded-xl bg-bg/40 border border-border p-4 flex items-center">
                <ButtonLink href="/go/betwinner?src=review-head" external size="lg" variant="primary" className="w-full">
                  Cadastrar com {BETWINNER.promoCode} →
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* BODY */}
      <section className="py-12">
        <Container className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <article className="prose-content max-w-none">
            <h2>Resumo: o que esperar da BetWinner</h2>
            <p>
              A <strong>BetWinner</strong> é uma casa de apostas internacional que opera no Brasil desde 2018 sob licença da
              Curaçao eGaming. Não está na lista oficial da SPA (Secretaria de Prêmios e Apostas), mas aceita brasileiros,
              tem site e app 100% em português, e processa depósitos e saques via <strong>PIX</strong>. Bônus de boas-vindas
              de <strong>{BETWINNER.bonusHeadline}</strong> com o código <strong>{BETWINNER.promoCode}</strong>.
            </p>

            <h2>Cadastro na BetWinner — passo a passo</h2>
            <ol>
              <li>Clique em <a href="/go/betwinner?src=review-register">nosso link verificado</a> para abrir o site oficial</li>
              <li>Clique em "Registrar" no canto superior direito</li>
              <li>Escolha "Em um clique" para o cadastro mais rápido (ou "Por telefone" / "Por e-mail")</li>
              <li>Selecione <strong>Brasil</strong> como país e <strong>BRL</strong> como moeda</li>
              <li>No campo "Código de promoção", insira <strong>{BETWINNER.promoCode}</strong></li>
              <li>Confirme. Sua conta é criada e o bônus fica aguardando o primeiro depósito</li>
              <li>Para sacar depois, complete a verificação enviando RG/CNH e selfie</li>
            </ol>

            <h2>Depósito e saque via PIX — o método dos brasileiros</h2>
            <p>
              PIX é, de longe, o método mais rápido e barato para depositar e sacar na BetWinner.
              <Link href="/pix"> Veja nosso guia completo do PIX →</Link>
            </p>
            <ul>
              <li><strong>Depósito mínimo:</strong> {BETWINNER.minDeposit}</li>
              <li><strong>Saque mínimo:</strong> R$ 30</li>
              <li><strong>Tempo de depósito:</strong> 1–5 minutos</li>
              <li><strong>Tempo de saque:</strong> {BETWINNER.payoutTime}</li>
              <li><strong>Taxa da casa:</strong> 0%</li>
              <li><strong>Limite diário:</strong> até R$ 100.000 (verificado)</li>
            </ul>

            <h2>Bônus de boas-vindas + código {BETWINNER.promoCode}</h2>
            <p>
              <strong>{BETWINNER.bonusHeadline}</strong> ao usar o código <strong>{BETWINNER.promoCode}</strong> no cadastro.
              <Link href="/codigo-promocional"> Detalhes completos do código promocional →</Link>
            </p>
            <p>
              <strong>Atenção:</strong> a Lei 14.790/2023 proíbe bônus de boas-vindas para casas autorizadas pela SPA desde
              1º de janeiro de 2025. Como a BetWinner opera fora da SPA (licença internacional), ela ainda pode oferecer
              bônus de cadastro. Isso é um diferencial — mas significa que a plataforma também está fora da supervisão brasileira.
            </p>

            <h2>App da BetWinner para Android e iOS</h2>
            <p>
              O app Android é baixado como <strong>APK</strong> diretamente do site oficial (o Google Play proíbe apps de apostas
              no Brasil). Para iPhone, a instalação acontece via perfil de configuração da Apple.{" "}
              <Link href="/aplicativo">Veja a instalação passo a passo →</Link>
            </p>

            <h2>Mercados e cobertura esportiva</h2>
            <p>
              {BETWINNER.sports}+ esportes na linha. Cobertura completa de:
            </p>
            <ul>
              <li><strong>Futebol:</strong> Campeonato Brasileiro Série A e B, Copa do Brasil, Libertadores, Sul-Americana, estaduais (Paulista, Carioca, Mineiro, Gaúcho) e <Link href="/copa-do-mundo-2026">Copa do Mundo 2026</Link></li>
              <li><strong>UFC e MMA:</strong> todos os eventos numerados, Fight Nights, prelims</li>
              <li><strong>Basquete:</strong> NBA, NBB, Euroliga</li>
              <li><strong>Vôlei:</strong> Superliga, mundial, Champions League</li>
              <li><strong>Tênis:</strong> Grand Slams, ATP, WTA, Brasil Open</li>
              <li><strong>E-sports:</strong> CS2, Dota 2, League of Legends, Valorant, CBLOL</li>
            </ul>

            <h2>Apostas ao vivo e cash out</h2>
            <p>
              A BetWinner tem uma das melhores plataformas de live betting do Brasil: transmissões integradas para partidas
              principais, atualização de odds em tempo real, cash out completo e parcial.{" "}
              <Link href="/aposta-ao-vivo">Mais sobre apostas ao vivo →</Link>
            </p>

            <h2>Prós e contras</h2>
            <div className="grid gap-4 sm:grid-cols-2 my-4 not-prose">
              <div className="rounded-xl border border-success/30 bg-success/5 p-4">
                <h3 className="font-semibold text-success mb-2">Prós</h3>
                <ul className="space-y-1.5 text-sm text-text-muted">
                  {BETWINNER.pros.map((p) => (
                    <li key={p}>+ {p}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-danger/30 bg-danger/5 p-4">
                <h3 className="font-semibold text-danger mb-2">Contras</h3>
                <ul className="space-y-1.5 text-sm text-text-muted">
                  {BETWINNER.cons.map((c) => (
                    <li key={c}>− {c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <h2>Suporte e atendimento</h2>
            <p>
              A BetWinner tem chat ao vivo 24/7 em português, e-mail (info-br@betwinner.com) e seção de FAQ extensa. Tempo
              médio de resposta no chat: 2–5 minutos. Atendimento por telefone não está disponível no Brasil.
            </p>

            <h2>Veredito</h2>
            <p>
              A BetWinner ganha nota <strong>{BETWINNER.rating}/10</strong> da nossa redação. É uma das melhores casas
              internacionais ainda ativas no Brasil, com PIX rápido, app em português, bônus generoso e cobertura esportiva
              forte. O ponto negativo é a falta de licença SPA — significa que você joga sob jurisdição internacional.
              Recomendamos para apostadores que querem o melhor bônus e estão confortáveis com casas offshore.
            </p>

            <div className="my-8 rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6 not-prose">
              <h3 className="font-display text-xl font-bold text-text mb-2">Pronto para começar?</h3>
              <p className="text-text-muted mb-4">
                Use o código <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span> e receba{" "}
                {BETWINNER.bonusHeadline.toLowerCase()}.
              </p>
              <ButtonLink href="/go/betwinner?src=review-bottom" external size="lg" variant="primary">
                Ativar bônus na BetWinner →
              </ButtonLink>
            </div>

            <h2>Perguntas frequentes</h2>
            <div className="not-prose space-y-3 mt-4">
              {FAQ.map((item) => (
                <details key={item.question} className="group rounded-xl border border-border bg-bg-elevated p-4 open:border-border-strong">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-text">{item.question}</h3>
                    <span className="text-brand text-xl leading-none transition-transform group-open:rotate-45 flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-text-muted leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-bg-elevated p-5 sticky top-20">
              <div className="text-xs text-text-dim uppercase font-semibold tracking-wide mb-2">
                Dados rápidos
              </div>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-text-muted">Fundada</dt><dd className="text-text font-semibold">{BETWINNER.founded}</dd></div>
                <div className="flex justify-between"><dt className="text-text-muted">Licença</dt><dd className="text-text font-semibold">Curaçao</dd></div>
                <div className="flex justify-between"><dt className="text-text-muted">Esportes</dt><dd className="text-text font-semibold">{BETWINNER.sports}+</dd></div>
                <div className="flex justify-between"><dt className="text-text-muted">Depósito mín.</dt><dd className="text-text font-semibold">{BETWINNER.minDeposit}</dd></div>
                <div className="flex justify-between"><dt className="text-text-muted">Saque</dt><dd className="text-text font-semibold">{BETWINNER.payoutTime}</dd></div>
                <div className="flex justify-between"><dt className="text-text-muted">PIX</dt><dd className="text-success font-semibold">Sim</dd></div>
                <div className="flex justify-between"><dt className="text-text-muted">App PT-BR</dt><dd className="text-success font-semibold">Sim</dd></div>
                <div className="flex justify-between"><dt className="text-text-muted">Código</dt><dd className="text-brand font-mono font-bold">{BETWINNER.promoCode}</dd></div>
              </dl>
              <ButtonLink href="/go/betwinner?src=review-sidebar" external size="md" variant="primary" className="mt-4 w-full">
                Cadastrar →
              </ButtonLink>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
