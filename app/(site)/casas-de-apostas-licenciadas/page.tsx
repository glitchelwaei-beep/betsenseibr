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
  title: "Casas de apostas licenciadas no Brasil 2026 — SPA e regulamentação",
  description:
    "Casas de apostas licenciadas pela SPA vs operadoras internacionais. Lei 14.790/2023, bônus proibido e o que muda para apostadores.",
  path: "/casas-de-apostas-licenciadas",
});

const FAQ = [
  {
    question: "O que são casas de apostas licenciadas no Brasil?",
    answer:
      "São operadoras autorizadas pela SPA (Secretaria de Prêmios e Apostas) após a Lei 14.790/2023. Devem cumprir regras de publicidade, autoexclusão, retenção de IR e não podem oferecer bônus de boas-vindas desde jan/2025.",
  },
  {
    question: "A BetWinner é licenciada no Brasil?",
    answer:
      "Não. A BetWinner opera com licença internacional (Curaçao) e não está na lista oficial da SPA. Apostadores brasileiros usam por conta própria, fora da supervisão brasileira.",
  },
  {
    question: "Vale a pena usar casa licenciada ou internacional?",
    answer: `Licenciadas: supervisão SPA e IR retido. Internacionais como BetWinner: ainda oferecem ${BETWINNER.bonusHeadline.toLowerCase()}, mas jurisdição offshore. Compare trade-offs em nosso guia.`,
  },
];

export default function CasasLicenciadasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Casas licenciadas", url: "/casas-de-apostas-licenciadas" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Casa de apostas", href: "/casa-de-apostas" },
            { label: "Licenciadas" },
          ]}
        />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Casas de apostas licenciadas no Brasil — guia SPA 2026
          </h1>
          <PageUpdated date={PAGE_UPDATED.casasLicenciadas} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            Entenda a diferença entre <strong className="text-text">casas de apostas licenciadas</strong> (SPA) e operadoras internacionais.
          </p>

          <AffiliateOfferCard
            href="/go/betwinner?src=pillar-licenciadas-top"
            variant="compact"
            className="my-8 shadow-xl"
          />

          <article className="prose-content">
            <h2>Lei 14.790/2023 — o que mudou</h2>
            <ul>
              <li>Regulamentação de apostas de quota fixa desde jan/2025</li>
              <li>Licença SPA obrigatória para operar legalmente no Brasil</li>
              <li>Proibição de bônus de boas-vindas para operadoras SPA</li>
              <li>Retenção de 15% de IR sobre prêmios acima do limite mensal</li>
              <li>Autoexclusão e limites de jogo obrigatórios</li>
            </ul>

            <h2>Operadoras SPA vs BetWinner (internacional)</h2>
            <p>
              Superbet, Betnacional, KTO e outras operadoras SPA estão no modelo regulado. A BetWinner opera offshore e ainda oferece bônus de cadastro — trade-off entre supervisão brasileira e promoções.
              <Link href="/alternativas"> Compare operadoras →</Link>
            </p>

            <AffiliateOfferCard
              href="/go/betwinner?src=pillar-licenciadas-bottom"
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
