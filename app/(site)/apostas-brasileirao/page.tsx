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
  title: "Apostas Brasileirão 2026 — mercados, odds e dicas Série A",
  description:
    "Apostas no Brasileirão Série A: mercados, odds, dicas por rodada e como apostar na BetWinner com PIX e bônus de boas-vindas.",
  path: "/apostas-brasileirao",
});

const FAQ = [
  {
    question: "Como apostar no Brasileirão pela BetWinner?",
    answer: `Cadastre-se com PIX (mín. ${BETWINNER.minDeposit}), use o código ${BETWINNER.promoCode} e acesse Esportes → Futebol → Campeonato Brasileiro Série A.`,
  },
  {
    question: "Quais mercados usar no Brasileirão?",
    answer: "1X2, dupla chance, mais/menos gols, ambas marcam, handicap asiático e apostas ao vivo. Calendário apertado (quarta e domingo) afeta desfalques.",
  },
];

export default function ApostasBrasileiraoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Apostas Brasileirão", url: "/apostas-brasileirao" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Futebol", href: "/futebol" },
            { label: "Brasileirão" },
          ]}
        />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Apostas Brasileirão 2026 — Série A
          </h1>
          <PageUpdated date={PAGE_UPDATED.apostasBrasileirao} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            Mercados, odds e dicas para <strong className="text-text">apostas no Campeonato Brasileiro</strong> na BetWinner.
          </p>

          <AffiliateOfferCard href="/go/betwinner?src=brasileirao-top" variant="compact" className="my-8 shadow-xl" />

          <article className="prose-content">
            <h2>Mercados populares no Brasileirão</h2>
            <ul>
              <li>Resultado final (1X2) e dupla chance</li>
              <li>Mais/menos gols — linha 2.5 muito usada</li>
              <li>Ambas marcam e handicap asiático</li>
              <li>Apostas ao vivo com transmissão integrada</li>
            </ul>

            <h2>Dicas específicas Série A</h2>
            <ul>
              <li>Confira escalações 1h antes — desfalques mudam odds</li>
              <li>Mando de campo pesa (Maracanã, Morumbi, Mineirão)</li>
              <li>Pós-data FIFA: times com menos convocados rendem melhor</li>
              <li>Clássicos: evite múltiplas longas em jogos emocionais</li>
            </ul>

            <p>
              <Link href="/futebol">Guia geral de futebol →</Link>
              {" · "}
              <Link href="/palpites-futebol">Palpites de futebol →</Link>
              {" · "}
              <Link href="/casa-de-apostas">Casa de apostas →</Link>
            </p>

            <div className="my-8 not-prose rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6">
              <ButtonLink href="/go/betwinner?src=brasileirao-cta" external size="lg" variant="primary">
                Apostar no Brasileirão →
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
