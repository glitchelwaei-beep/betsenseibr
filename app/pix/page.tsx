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
  title: "PIX BetWinner: como depositar e sacar (guia 2026)",
  description:
    "Depósito e saque via PIX na BetWinner Brasil: passo a passo, limites, tempo, problemas comuns. Sem taxa, em até 5 minutos. Atualizado em 2026.",
  path: "/pix",
});

const FAQ = [
  {
    question: "A BetWinner cobra taxa para PIX?",
    answer: "Não. Nem o depósito nem o saque via PIX têm taxa da BetWinner. O valor cai integral na sua conta de jogo (depósito) ou na sua chave PIX (saque).",
  },
  {
    question: "Quanto tempo leva o saque PIX?",
    answer: `Em média ${BETWINNER.payoutTime}. Saques abaixo de R$ 500 normalmente saem em até 30 minutos. Acima disso, a casa pode pedir verificação adicional, levando até 6 horas.`,
  },
  {
    question: "Qual o depósito mínimo via PIX?",
    answer: `${BETWINNER.minDeposit}. O depósito máximo padrão é R$ 50.000 por transação, com limite diário de R$ 100.000 para contas verificadas.`,
  },
  {
    question: "O PIX deu erro — o que fazer?",
    answer: "Confirme primeiro no app do seu banco se o PIX saiu. Se sim e o crédito não apareceu em 30 minutos, abra o chat da BetWinner com o ID da transação (comprovante do PIX). Geralmente é resolvido em 1–2 horas.",
  },
  {
    question: "Posso sacar para PIX de outra pessoa?",
    answer: "Não. A chave PIX cadastrada para saque deve ser de titularidade do mesmo CPF da conta na BetWinner. Tentativas de sacar para terceiros são bloqueadas.",
  },
];

export default function PixPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "PIX", url: "/pix" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "PIX" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            PIX BetWinner: depósito e saque
          </h1>
          <PageUpdated date={PAGE_UPDATED.pix} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            O método de pagamento mais usado pelos brasileiros. Sem taxa, 24/7, creditado em até 5 minutos.
          </p>

          <article className="prose-content mt-8">
            <h2>Depositar via PIX — passo a passo</h2>
            <ol>
              <li>Faça login na BetWinner (site ou app)</li>
              <li>Clique em "<strong>Depositar</strong>" no canto superior direito</li>
              <li>Selecione "<strong>PIX</strong>" como método</li>
              <li>Digite o valor (mínimo {BETWINNER.minDeposit}, máximo R$ 50.000)</li>
              <li>Você verá uma chave PIX (copia-e-cola) ou um QR Code</li>
              <li>Abra o app do seu banco, vá em PIX → "Copia e cola" ou "QR Code", e cole/escaneie</li>
              <li>Confirme o pagamento no app do banco</li>
              <li>O saldo aparece em até 5 minutos na BetWinner</li>
            </ol>

            <h2>Sacar via PIX — passo a passo</h2>
            <ol>
              <li>Antes de sacar pela primeira vez, complete a verificação (KYC) — envie RG/CNH e selfie</li>
              <li>Clique em "<strong>Sacar</strong>"</li>
              <li>Selecione PIX</li>
              <li>Digite o valor (mínimo R$ 30)</li>
              <li>Informe sua chave PIX — deve ser do mesmo CPF da conta</li>
              <li>Confirme. Saque processado em {BETWINNER.payoutTime}</li>
            </ol>

            <h2>Limites e tempos do PIX na BetWinner</h2>
            <table className="w-full text-sm not-prose mt-4 border border-border rounded-xl overflow-hidden">
              <thead className="bg-bg/40">
                <tr>
                  <th className="text-left p-3 font-semibold text-text">Parâmetro</th>
                  <th className="text-left p-3 font-semibold text-text">Valor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border"><td className="p-3 text-text-muted">Taxa da casa</td><td className="p-3 text-text">0%</td></tr>
                <tr className="border-t border-border"><td className="p-3 text-text-muted">Depósito mínimo</td><td className="p-3 text-text">{BETWINNER.minDeposit}</td></tr>
                <tr className="border-t border-border"><td className="p-3 text-text-muted">Depósito máximo por transação</td><td className="p-3 text-text">R$ 50.000</td></tr>
                <tr className="border-t border-border"><td className="p-3 text-text-muted">Saque mínimo</td><td className="p-3 text-text">R$ 30</td></tr>
                <tr className="border-t border-border"><td className="p-3 text-text-muted">Tempo de depósito</td><td className="p-3 text-text">1–5 minutos</td></tr>
                <tr className="border-t border-border"><td className="p-3 text-text-muted">Tempo de saque</td><td className="p-3 text-text">{BETWINNER.payoutTime}</td></tr>
                <tr className="border-t border-border"><td className="p-3 text-text-muted">Limite diário</td><td className="p-3 text-text">R$ 100.000 (conta verificada)</td></tr>
              </tbody>
            </table>

            <h2>Por que PIX é melhor que cartão ou boleto na BetWinner</h2>
            <ul>
              <li>Cartão de crédito pode falhar (bancos brasileiros bloqueiam transações de apostas estrangeiras)</li>
              <li>Boleto demora 1–2 dias úteis para compensar</li>
              <li>Criptomoedas exigem carteira e podem ter taxas de rede altas</li>
              <li>PIX é instantâneo, gratuito e funciona em qualquer banco brasileiro</li>
            </ul>

            <h2>Problemas comuns com PIX e como resolver</h2>
            <ul>
              <li><strong>"PIX saiu mas saldo não apareceu":</strong> aguarde 30 minutos. Se não resolver, contate o suporte com o ID da transação</li>
              <li><strong>"Erro: chave PIX inválida":</strong> verifique se a chave está cadastrada no seu banco e é do mesmo CPF</li>
              <li><strong>"Limite diário excedido":</strong> aumente o limite no app do banco (configurações de PIX)</li>
              <li><strong>"Saque pendente há horas":</strong> normal nas primeiras vezes. Acima de 6 horas, abra chamado com print</li>
            </ul>

            <div className="my-8 not-prose rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6">
              <h3 className="font-display text-xl font-bold text-text mb-2">Pronto para depositar e apostar?</h3>
              <p className="text-text-muted mb-4">
                Use o código <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span> no cadastro para ativar {BETWINNER.bonusHeadline.toLowerCase()}.
              </p>
              <ButtonLink href="/go/betwinner?src=pix-cta" external size="lg" variant="primary">
                Cadastrar na BetWinner →
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
        </Container>
      </section>
    </>
  );
}
