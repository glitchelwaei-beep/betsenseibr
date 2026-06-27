import Link from "next/link";
import { Container } from "@/components/ui/container";
import { AffiliateOfferCard } from "@/components/site/affiliate-offer-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageUpdated } from "@/components/site/page-updated";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { PAGE_UPDATED } from "@/lib/editorial";
import { COMPARISONS } from "@/lib/comparisons";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Melhores casas de apostas Brasil 2026 — comparativo BetWinner",
  description:
    "Compare BetWinner vs bet365, Superbet, Betnacional, Blaze, KTO e mais. Bônus, PIX, licença SPA e Copa 2026 — guia imparcial para brasileiros.",
  path: "/alternativas",
});

const HUB_FAQ = [
  {
    question: "Qual a melhor casa de apostas no Brasil em 2026?",
    answer: `Depende do que você prioriza: operadoras SPA (Superbet, Betnacional, KTO) são regulamentadas no Brasil, mas sem bônus de boas-vindas desde 2025. A BetWinner oferece ${BETWINNER.bonusHeadline.toLowerCase()} com licença internacional — leia cada comparativo abaixo.`,
  },
  {
    question: "BetWinner ou Superbet / Betnacional?",
    answer:
      "Casas SPA têm supervisão brasileira e retenção de IR automática. A BetWinner se destaca em bônus de entrada, PIX rápido e mercados da Copa 2026. Veja os comparativos individuais para detalhes.",
  },
  {
    question: "Vocês são afiliados de bet365, Superbet ou Blaze?",
    answer:
      "Não. O BetSensei BR é afiliado exclusivamente da BetWinner. Os comparativos são conteúdo editorial para ajudar na decisão.",
  },
];

export default function AlternativasHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Alternativas", url: "/alternativas" },
        ])}
      />
      <JsonLd data={faqSchema(HUB_FAQ)} />

      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Alternativas" }]} />
      </Container>

      <section className="py-10">
        <Container>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl">
            Melhores casas de apostas Brasil 2026 — comparativo honesto
          </h1>
          <PageUpdated date={PAGE_UPDATED.alternativas} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted max-w-3xl">
            Compare a <strong className="text-text">BetWinner</strong> com bet365, Superbet, Betnacional, Esportes da Sorte,
            Bet7k, Blaze, KTO e 7games. Bônus, PIX, licença SPA e Copa do Mundo 2026 — sem fingir ser outra marca.
          </p>

          <div className="mt-6 max-w-3xl rounded-lg border border-border bg-bg/40 p-4 text-sm text-text-muted">
            <strong className="text-text">Divulgação de afiliação:</strong> somos parceiros apenas da BetWinner.
            Não representamos as demais operadoras listadas abaixo.
          </div>

          <AffiliateOfferCard
            href="/go/betwinner?src=alternativas-hub-top"
            variant="compact"
            className="mt-8 max-w-3xl shadow-xl"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMPARISONS.map((c) => (
              <Link
                key={c.slug}
                href={c.path}
                className="group rounded-2xl border border-border bg-bg-elevated p-5 transition-colors hover:border-brand/40 hover:bg-brand/5"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-text-dim mb-2">Comparativo</div>
                <div className="font-display text-lg font-bold text-text group-hover:text-brand transition-colors">
                  BetWinner vs {c.name}
                </div>
                <p className="mt-2 text-sm text-text-muted line-clamp-2">{c.intro}</p>
                <div className="mt-3 text-sm font-semibold text-brand">Ler comparativo →</div>
              </Link>
            ))}
          </div>

          <div className="mt-12 max-w-3xl prose-content">
            <h2>Como lemos estes comparativos</h2>
            <p>
              Cada página compara critérios objetivos: licença SPA, bônus de boas-vindas (Lei 14.790/2023), PIX,
              depósito mínimo, app em português e cobertura da Copa 2026. Quando a operadora regulada faz mais sentido,
              dizemos. Quando a BetWinner se destaca — especialmente em bônus e PIX — também.
            </p>
            <p>
              Para aprofundar na nossa casa parceira:{" "}
              <Link href="/betwinner">análise BetWinner</Link>,{" "}
              <Link href="/bonus">bônus BetWinner</Link>,{" "}
              <Link href="/pix">PIX BetWinner</Link> e{" "}
              <Link href="/copa-do-mundo-2026">Copa do Mundo 2026</Link>.
            </p>

            <AffiliateOfferCard
              href="/go/betwinner?src=alternativas-hub-bottom"
              variant="banner"
              className="my-8 not-prose"
            />

            <h2>Perguntas frequentes</h2>
            <div className="not-prose space-y-3 mt-4">
              {HUB_FAQ.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-xl border border-border bg-bg-elevated p-4 open:border-border-strong"
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-text">{item.question}</h3>
                    <span className="text-brand text-xl leading-none transition-transform group-open:rotate-45 flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-text-muted leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
