import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { AffiliateOfferCard } from "@/components/site/affiliate-offer-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageUpdated } from "@/components/site/page-updated";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { PAGE_UPDATED } from "@/lib/editorial";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Apostas Copa do Brasil 2026 — mercados e mata-mata",
  description:
    "Apostas na Copa do Brasil: mercados de mata-mata, odds, jogos de ida e volta e como apostar na BetWinner com PIX.",
  path: "/apostas-copa-do-brasil",
});

const FAQ = [
  {
    question: "A BetWinner cobre a Copa do Brasil?",
    answer: "Sim. Mercados completos para todas as fases do mata-mata, incluindo classificação, gols e handicap.",
  },
  {
    question: "Como apostar na Copa do Brasil?",
    answer: `Esportes → Futebol → Copa do Brasil. Cadastro com ${BETWINNER.promoCode} e depósito PIX a partir de ${BETWINNER.minDeposit}.`,
  },
];

export default function ApostasCopaDoBrasilPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Apostas Copa do Brasil", url: "/apostas-copa-do-brasil" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Futebol", href: "/futebol" },
            { label: "Copa do Brasil" },
          ]}
        />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Apostas Copa do Brasil 2026
          </h1>
          <PageUpdated date={PAGE_UPDATED.apostasCopaBr} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            Mercados de mata-mata, ida e volta e estratégias para <strong className="text-text">apostas na Copa do Brasil</strong>.
          </p>

          <AffiliateOfferCard href="/go/betwinner?src=copa-br-top" variant="compact" className="my-8 shadow-xl" />

          <article className="prose-content">
            <h2>Particularidades do mata-mata</h2>
            <ul>
              <li>Jogos de ida e volta — empate no agregado pode ir aos pênaltis</li>
              <li>Times grandes rotacionam elenco nas fases iniciais</li>
              <li>Mercado “classificar” e “próximo eliminado” além do 1X2</li>
              <li>Ao vivo: gols no 2º tempo mudam odds de classificação</li>
            </ul>

            <p>
              <Link href="/futebol">Apostas em futebol →</Link>
              {" · "}
              <Link href="/apostas-brasileirao">Apostas Brasileirão →</Link>
              {" · "}
              <Link href="/copa-do-mundo-2026">Copa do Mundo 2026 →</Link>
            </p>

            <div className="my-8 not-prose rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6">
              <ButtonLink href="/go/betwinner?src=copa-br-cta" external size="lg" variant="primary">
                Apostar na Copa do Brasil →
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
