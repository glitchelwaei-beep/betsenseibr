import Link from "next/link";
import { Container } from "@/components/ui/container";
import { AffiliateOfferCard } from "@/components/site/affiliate-offer-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageUpdated } from "@/components/site/page-updated";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { PAGE_UPDATED } from "@/lib/editorial";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Casas de apostas confiáveis no Brasil 2026 — checklist",
  description:
    "Como identificar casas de apostas confiáveis: licença, PIX, suporte, pagamentos e sinais de alerta. Checklist para apostadores brasileiros.",
  path: "/casas-de-apostas-confiaveis",
});

const FAQ = [
  {
    question: "Como saber se uma casa de apostas é confiável?",
    answer:
      "Verifique licença (SPA ou internacional declarada), histórico de pagamentos, suporte em português, métodos locais (PIX), política de verificação clara e ausência de sites clones. Desconfie de promessas irreais.",
  },
  {
    question: "Casas de apostas licenciadas são mais confiáveis?",
    answer:
      "Operadoras SPA são supervisionadas no Brasil. Casas internacionais licenciadas (ex.: Curaçao) operam fora da SPA — confiabilidade depende de reputação, tempo de mercado e testes reais de saque.",
  },
  {
    question: "A BetWinner é confiável?",
    answer: `Testamos cadastro, PIX, apostas e saque. A BetWinner opera desde ${BETWINNER.founded} com licença internacional, suporte 24/7 em português e PIX. Nota editorial: ${BETWINNER.rating}/10. Veja a análise completa.`,
  },
];

export default function CasasConfiaveisPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Casas confiáveis", url: "/casas-de-apostas-confiaveis" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Casa de apostas", href: "/casa-de-apostas" },
            { label: "Confiáveis" },
          ]}
        />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Casas de apostas confiáveis — checklist 2026
          </h1>
          <PageUpdated date={PAGE_UPDATED.casasConfiaveis} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            Sinais de uma <strong className="text-text">casa de apostas confiável</strong> e armadilhas comuns no mercado brasileiro.
          </p>

          <AffiliateOfferCard
            href="/go/betwinner?src=pillar-confiaveis-top"
            variant="compact"
            className="my-8 shadow-xl"
          />

          <article className="prose-content">
            <h2>Checklist de confiança</h2>
            <ul>
              <li>Licença declarada e termos de uso legíveis</li>
              <li>PIX funcional com saques testados por usuários reais</li>
              <li>Suporte em português com tempo de resposta razoável</li>
              <li>Verificação KYC antes do primeiro saque (padrão do setor)</li>
              <li>Site oficial único — cuidado com clones que copiam o visual</li>
              <li>Divulgação clara de afiliação em sites de review</li>
            </ul>

            <h2>Sinais de alerta</h2>
            <ul>
              <li>Bônus “sem depósito” ou freebet impossíveis de sacar</li>
              <li>Saque bloqueado sem explicação após verificação completa</li>
              <li>App baixado fora do site oficial</li>
              <li>Odds sistematicamente piores que o mercado sem justificativa</li>
            </ul>

            <p>
              <Link href="/casas-de-apostas-licenciadas">Casas licenciadas (SPA) →</Link>
              {" · "}
              <Link href="/casa-de-apostas">Guia casa de apostas →</Link>
              {" · "}
              <Link href="/sobre">Sobre nossa metodologia →</Link>
            </p>

            <AffiliateOfferCard
              href="/go/betwinner?src=pillar-confiaveis-bottom"
              variant="banner"
              className="my-8 not-prose"
            />

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
