import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageUpdated } from "@/components/site/page-updated";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { PAGE_UPDATED } from "@/lib/editorial";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Imposto sobre prêmios de apostas no Brasil — IR 15% e Lei 14.790/2023",
  description: "Como funciona o imposto sobre prêmios de apostas no Brasil em 2026. IR de 15%, limite isento mensal, declaração de ganhos em casas offshore como a BetWinner.",
  path: "/imposto",
});

const FAQ = [
  {
    question: "Qual o imposto sobre prêmios de apostas no Brasil?",
    answer: "Segundo a Lei 14.790/2023, prêmios líquidos acima do limite mensal isento (~R$ 2.259,20 em 2026) são tributados em 15% de Imposto de Renda (IR). Casas autorizadas pela SPA retêm automaticamente.",
  },
  {
    question: "A BetWinner retém o imposto automaticamente?",
    answer: "Não. Como a BetWinner opera com licença internacional (Curaçao) e não está na lista da SPA, ela não atua como retentora do IR brasileiro. O jogador é responsável por declarar os ganhos no IR anual.",
  },
  {
    question: "Como declarar ganhos de apostas no IR?",
    answer: "Os prêmios devem ser declarados em \"Rendimentos sujeitos à tributação exclusiva/definitiva\" no programa do IR, código 26 (outros). Mantenha extratos de saque e comprovantes — a Receita pode pedir.",
  },
];

export default function ImpostoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Imposto", url: "/imposto" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Imposto" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Imposto sobre prêmios de apostas no Brasil
          </h1>
          <PageUpdated date={PAGE_UPDATED.imposto} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            IR de 15% sobre prêmios líquidos, limite isento mensal, declaração para casas offshore. Tudo o que você precisa saber em 2026.
          </p>

          <article className="prose-content mt-8">
            <h2>O que diz a Lei 14.790/2023</h2>
            <p>
              A Lei 14.790/2023, em vigor desde 1º de janeiro de 2025, estabelece:
            </p>
            <ul>
              <li><strong>Alíquota:</strong> 15% de Imposto de Renda sobre prêmios líquidos</li>
              <li><strong>Limite isento mensal:</strong> ~R$ 2.259,20 (atualizado anualmente)</li>
              <li><strong>Base de cálculo:</strong> apenas o lucro líquido (saques menos depósitos no mês)</li>
              <li><strong>Retenção automática:</strong> apenas em casas autorizadas pela SPA</li>
            </ul>

            <h2>Casas autorizadas (com SPA) vs. offshore (como BetWinner)</h2>
            <p>
              <strong>Casas autorizadas pela SPA</strong> (188 plataformas em maio de 2026) retêm os 15% automaticamente
              quando você saca prêmios acima do limite. Você não precisa se preocupar — a casa repassa direto para a Receita.
            </p>
            <p>
              <strong>Casas internacionais como a BetWinner</strong> não retêm o IR brasileiro. Significa duas coisas:
            </p>
            <ul>
              <li>O valor cheio cai na sua conta (sem desconto)</li>
              <li>Você é o responsável por declarar e pagar o IR no ano seguinte</li>
            </ul>

            <h2>Como declarar ganhos de apostas no IR anual</h2>
            <ol>
              <li>Some seus prêmios líquidos do ano (saques - depósitos)</li>
              <li>No programa do IRPF, vá em "Rendimentos sujeitos à tributação exclusiva/definitiva"</li>
              <li>Selecione o código <strong>26 — Outros</strong></li>
              <li>Informe a fonte pagadora ("BetWinner / Curaçao") e o valor</li>
              <li>O programa calcula o IR devido (15% sobre o que exceder o limite mensal)</li>
              <li>Pague o IR junto com a declaração anual</li>
            </ol>

            <h2>Documentos que você deve guardar</h2>
            <ul>
              <li>Extrato de saques da BetWinner (baixar no histórico da conta)</li>
              <li>Comprovantes PIX dos saques recebidos</li>
              <li>Extrato bancário mostrando entradas</li>
              <li>Print do total apostado vs. recebido (caso de fiscalização)</li>
            </ul>
            <p>
              <strong>Importante:</strong> guarde por pelo menos 5 anos. A Receita pode pedir comprovação retroativa.
            </p>

            <h2>Cuidado com transações suspeitas</h2>
            <p>
              Bancos brasileiros reportam movimentações relevantes à Receita. Se você receber valores grandes via PIX
              (acima de R$ 10.000/mês), o banco pode pedir comprovação de origem. Tenha sempre os extratos da casa de
              apostas em mãos.
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

            <p className="text-xs text-text-dim mt-8">
              Esta página é meramente informativa e não substitui consultoria contábil ou jurídica especializada. Para situações específicas, consulte um contador.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
