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
  title: `Código promocional BetWinner 2026: ${BETWINNER.promoCode} — bônus ${BETWINNER.bonusShort}`,
  description: `Código promocional BetWinner ${BETWINNER.promoCode} — ${BETWINNER.bonusHeadline.toLowerCase()}. Passo a passo para usar em 2026.`,
  path: "/codigo-promocional",
});

const FAQ = [
  {
    question: `Onde inserir o código ${BETWINNER.promoCode}?`,
    answer: `Durante o cadastro na BetWinner, no campo "Código de promoção" (ou "Promo code"). Se você esqueceu, abra um chat com o suporte logo após criar a conta — eles podem aplicar antes do primeiro depósito.`,
  },
  {
    question: `O código ${BETWINNER.promoCode} expira?`,
    answer: "Nosso código é atualizado periodicamente e está ativo em 2026. Recomendamos voltar a esta página antes de se cadastrar para garantir que o código esteja válido.",
  },
  {
    question: "Posso ganhar o bônus sem código?",
    answer: `Pelo link BetSensei você acessa a oferta de ${BETWINNER.bonusHeadline.toLowerCase()}. ${BETWINNER.promoCodeNote}`,
  },
  {
    question: "Quais as condições de rollover (apostas para liberar o bônus)?",
    answer: "Rollover típico: 5x o valor do bônus em apostas combinadas com pelo menos 3 seleções e odds mínima de 1.40 por seleção. Prazo: 30 dias. Confira os termos exatos no e-mail de confirmação após o depósito.",
  },
];

export default function CodigoPromocionalPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Código promocional", url: "/codigo-promocional" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Código promocional" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Código promocional BetWinner 2026
          </h1>
          <PageUpdated date={PAGE_UPDATED.codigo} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            Bônus de boas-vindas com o código {BETWINNER.promoCode} — {BETWINNER.bonusContext}.
            {" "}
            <Link href="/bonus" className="text-brand hover:underline">Guia do bônus BetWinner →</Link>
          </p>

          <div className="my-8 rounded-2xl border-2 border-dashed border-brand bg-brand/5 p-6 sm:p-8 text-center">
            <div className="text-xs text-text-dim uppercase tracking-wider font-semibold mb-3">
              Código promocional
            </div>
            <div className="font-display text-4xl sm:text-5xl font-extrabold text-brand font-mono tracking-wider">
              {BETWINNER.promoCode}
            </div>
            <div className="mt-4 text-text-muted">
              Ativa <strong className="text-text">{BETWINNER.bonusHeadline}</strong>
            </div>
            <ButtonLink href="/go/betwinner?src=promo-cta" external size="lg" variant="primary" className="mt-6">
              Usar código na BetWinner →
            </ButtonLink>
          </div>

          <article className="prose-content">
            <h2>Como usar o código {BETWINNER.promoCode} — passo a passo</h2>
            <ol>
              <li>Clique em <a href="/go/betwinner?src=promo-step1">cadastrar na BetWinner</a></li>
              <li>Clique em "Registrar"</li>
              <li>Escolha "Brasil" como país e "BRL" como moeda</li>
              <li>Preencha telefone (+55), e-mail, CPF, senha</li>
              <li>No campo <strong>"Código de promoção"</strong>, insira <strong>{BETWINNER.promoCode}</strong></li>
              <li>Confirme o cadastro por SMS</li>
              <li>Faça o primeiro depósito via PIX (mínimo {BETWINNER.minDeposit}) — o bônus é creditado automaticamente</li>
            </ol>

            <h2>Termos do bônus de boas-vindas</h2>
            <ul>
              <li><strong>Oferta:</strong> {BETWINNER.bonusHeadline}</li>
              <li><strong>Campanha:</strong> {BETWINNER.bonusContext}</li>
              <li><strong>Depósito mínimo qualificador:</strong> {BETWINNER.minDeposit}</li>
              <li><strong>Rollover:</strong> conforme termos da promoção na BetWinner (geralmente 5x em apostas combinadas)</li>
              <li><strong>Prazo:</strong> confira no e-mail de confirmação após o depósito</li>
              <li><strong>Mercados elegíveis:</strong> esportes, incluindo jogos da Copa do Mundo 2026</li>
            </ul>

            <h2>Aviso legal: Lei 14.790/2023</h2>
            <p>
              A Lei 14.790/2023 (em vigor desde 1º de janeiro de 2025) proíbe casas de apostas com licença da SPA brasileira
              de oferecerem bônus de boas-vindas. Como a BetWinner opera com licença internacional (Curaçao), essa restrição
              não se aplica — mas isso também significa que a plataforma está fora da supervisão da SPA. Avalie sempre os
              riscos.
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
