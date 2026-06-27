import Link from "next/link";
import { Container } from "@/components/ui/container";
import { AffiliateOfferCard } from "@/components/site/affiliate-offer-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageUpdated } from "@/components/site/page-updated";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { PALPITES, PALPITES_UPDATED } from "@/lib/palpites";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Palpites de futebol 2026 — Copa do Mundo e Brasileirão",
  description:
    "Palpites de futebol com análise editorial: Copa do Mundo 2026, Brasileirão e mercados sugeridos. Sem garantias — jogo responsável 18+.",
  path: "/palpites-futebol",
});

const FAQ = [
  {
    question: "Os palpites de futebol são garantidos?",
    answer:
      "Não. São análises editoriais com base em contexto de mercado e estatísticas. Apostas envolvem risco — nunca aposte mais do que pode perder.",
  },
  {
    question: "Onde apostar com base nos palpites?",
    answer: `Na BetWinner: cadastro com ${BETWINNER.promoCode}, PIX a partir de ${BETWINNER.minDeposit} e mercados de futebol completos. Somos afiliados da BetWinner.`,
  },
];

export default function PalpitesFutebolPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Palpites de futebol", url: "/palpites-futebol" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Futebol", href: "/futebol" },
            { label: "Palpites" },
          ]}
        />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Palpites de futebol — análise editorial 2026
          </h1>
          <PageUpdated date={PALPITES_UPDATED} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            Análises para <strong className="text-text">palpites de futebol</strong> na Copa do Mundo e Brasileirão. Não são recomendações financeiras.
          </p>

          <div className="my-6 rounded-lg border border-warning/30 bg-warning/5 p-4 text-sm text-text-muted">
            <strong className="text-warning">18+ Jogo responsável.</strong> Palpites não garantem lucro. Atualizamos esta página semanalmente durante a Copa.
          </div>

          <AffiliateOfferCard href="/go/betwinner?src=palpites-top" variant="compact" className="my-8 shadow-xl" />

          <div className="space-y-6 not-prose">
            {PALPITES.map((p) => (
              <article key={p.id} className="rounded-2xl border border-border bg-bg-elevated p-5 sm:p-6">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand mb-1">{p.competition}</div>
                <h2 className="font-display text-xl font-bold text-text">{p.match}</h2>
                <div className="text-sm text-text-dim mt-1">{p.date}</div>
                <p className="mt-4 text-text-muted leading-relaxed">{p.analysis}</p>
                <div className="mt-4">
                  <div className="text-xs font-semibold text-text-dim uppercase mb-2">Mercados em análise</div>
                  <ul className="flex flex-wrap gap-2">
                    {p.markets.map((m) => (
                      <li key={m} className="rounded-full bg-bg/60 border border-border px-3 py-1 text-xs text-text-muted">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 text-xs text-text-dim italic">{p.disclaimer}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 prose-content">
            <p>
              Mais análises no <Link href="/grupo-apostas">grupo de apostas esportivas</Link> (Telegram).
              Guias: <Link href="/copa-do-mundo-2026">apostas Copa do Mundo</Link>,{" "}
              <Link href="/apostas-brasileirao">apostas Brasileirão</Link>.
            </p>
          </div>

          <AffiliateOfferCard href="/go/betwinner?src=palpites-bottom" variant="banner" className="mt-8" />

          <h2 className="font-display text-2xl font-bold mt-10 mb-4">Perguntas frequentes</h2>
          <div className="not-prose space-y-3">
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
        </Container>
      </section>
    </>
  );
}
