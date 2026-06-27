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
  title: `Bônus de boas-vindas e bônus de cadastro BetWinner 2026 — ${BETWINNER.bonusShort}`,
  description: `Bonus apostas BetWinner: bônus de boas-vindas ${BETWINNER.bonusShort} no 1º depósito. Código ${BETWINNER.promoCode}, rollover e ativação via PIX.`,
  path: "/bonus",
});

const FAQ = [
  {
    question: `Qual o bônus BetWinner disponível em 2026?`,
    answer: `${BETWINNER.bonusHeadline} (${BETWINNER.bonusContext}). Use o código ${BETWINNER.promoCode} no cadastro e faça o primeiro depósito qualificado via PIX (mínimo ${BETWINNER.minDeposit}).`,
  },
  {
    question: "Como ativar o bônus BetWinner passo a passo?",
    answer: `Cadastre-se na BetWinner, insira ${BETWINNER.promoCode} no campo "Código de promoção", confirme a conta e deposite via PIX. O bônus é creditado conforme os termos da promoção.`,
  },
  {
    question: "Preciso de código promocional para o bônus BetWinner?",
    answer: `Sim — insira ${BETWINNER.promoCode} durante o cadastro para garantir a oferta de ${BETWINNER.bonusHeadline.toLowerCase()}. ${BETWINNER.promoCodeNote}`,
  },
  {
    question: "Quais as condições de rollover do bônus BetWinner?",
    answer: "Rollover típico: 5x o valor do bônus em apostas combinadas com pelo menos 3 seleções e odds mínima de 1.40 por seleção. Prazo: 30 dias. Confira os termos exatos no e-mail de confirmação após o depósito.",
  },
  {
    question: "O bônus BetWinner vale para apostas na Copa do Mundo 2026?",
    answer: `Sim. A campanha ${BETWINNER.bonusContext.toLowerCase()} cobre mercados de futebol, incluindo jogos da Copa do Mundo 2026.`,
  },
  {
    question: "A BetWinner tem bônus sem depósito, freebet ou apostas grátis?",
    answer: `Não oferecemos páginas para promessas que não condizem com a oferta real. A BetWinner trabalha com ${BETWINNER.bonusHeadline.toLowerCase()} no primeiro depósito qualificado (mín. ${BETWINNER.minDeposit} via PIX) — não bônus sem depósito. Desconfie de sites que prometem freebet garantido.`,
  },
];

export default function BonusPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Bônus BetWinner", url: "/bonus" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Bônus BetWinner" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Bônus de boas-vindas BetWinner 2026 — {BETWINNER.bonusShort} no cadastro
          </h1>
          <PageUpdated date={PAGE_UPDATED.bonus} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            Guia completo do <strong className="text-text">bônus BetWinner</strong> para brasileiros: oferta de{" "}
            {BETWINNER.bonusHeadline.toLowerCase()}, código <strong className="font-mono text-brand">{BETWINNER.promoCode}</strong>{" "}
            e ativação via PIX.
          </p>

          <div className="my-8 rounded-2xl border-2 border-dashed border-brand bg-brand/5 p-6 sm:p-8 text-center">
            <div className="text-xs text-text-dim uppercase tracking-wider font-semibold mb-3">
              Bônus BetWinner
            </div>
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-text">
              {BETWINNER.bonusHeadline}
            </div>
            <div className="mt-3 text-text-muted">
              Código: <span className="font-mono font-bold text-brand text-lg">{BETWINNER.promoCode}</span>
            </div>
            <div className="mt-2 text-sm text-text-dim">{BETWINNER.bonusContext}</div>
            <ButtonLink href="/go/betwinner?src=bonus-cta" external size="lg" variant="primary" className="mt-6">
              Ativar bônus BetWinner →
            </ButtonLink>
          </div>

          <article className="prose-content">
            <h2>O que é o bônus BetWinner?</h2>
            <p>
              O <strong>bônus BetWinner</strong> de boas-vindas oferece <strong>{BETWINNER.bonusHeadline.toLowerCase()}</strong>{" "}
              para novos jogadores que se cadastram com o código <strong>{BETWINNER.promoCode}</strong> e fazem o primeiro
              depósito qualificado. A campanha está alinhada ao calendário da{" "}
              <Link href="/copa-do-mundo-2026">Copa do Mundo 2026</Link>.
            </p>

            <h2>Como ativar o bônus BetWinner — passo a passo</h2>
            <ol>
              <li>
                Abra o <a href="/go/betwinner?src=bonus-step1">site oficial da BetWinner</a> pelo nosso link
              </li>
              <li>
                Clique em &quot;Registrar&quot; e preencha telefone (+55), e-mail, CPF e senha —{" "}
                <Link href="/cadastro">tutorial completo de cadastro →</Link>
              </li>
              <li>
                No campo <strong>&quot;Código de promoção&quot;</strong>, insira <strong>{BETWINNER.promoCode}</strong> —{" "}
                <Link href="/codigo-promocional">detalhes do código promocional →</Link>
              </li>
              <li>Confirme a conta por SMS</li>
              <li>
                Deposite via <Link href="/pix">PIX</Link> (mínimo {BETWINNER.minDeposit}) — saldo em poucos minutos
              </li>
              <li>O bônus BetWinner é creditado conforme os termos da promoção</li>
            </ol>

            <h2>Termos do bônus BetWinner</h2>
            <ul>
              <li><strong>Oferta:</strong> {BETWINNER.bonusHeadline}</li>
              <li><strong>Campanha:</strong> {BETWINNER.bonusContext}</li>
              <li><strong>Depósito mínimo:</strong> {BETWINNER.minDeposit}</li>
              <li><strong>Método recomendado:</strong> PIX (sem taxa da casa)</li>
              <li><strong>Rollover:</strong> conforme termos da promoção (geralmente 5x em apostas combinadas)</li>
              <li><strong>Mercados elegíveis:</strong> esportes, incluindo futebol e Copa do Mundo 2026</li>
            </ul>

            <h2>Bônus BetWinner vs. casas regulamentadas no Brasil</h2>
            <p>
              A Lei 14.790/2023 proíbe bônus de boas-vindas para operadoras com licença da SPA desde 1º de janeiro de 2025.
              Como a BetWinner opera com licença internacional (Curaçao), ela ainda oferece o{" "}
              <strong>bônus BetWinner</strong> — mas está fora da supervisão brasileira.{" "}
              <Link href="/alternativas">Compare vs Superbet e outras casas →</Link>
              {" · "}
              <Link href="/betwinner">Análise completa da BetWinner →</Link>
            </p>

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
        </Container>
      </section>
    </>
  );
}
