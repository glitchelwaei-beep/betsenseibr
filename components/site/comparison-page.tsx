import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageUpdated } from "@/components/site/page-updated";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { PAGE_UPDATED } from "@/lib/editorial";
import type { ComparisonCompetitor } from "@/lib/comparisons";
import { COMPARISONS } from "@/lib/comparisons";

type ComparisonPageViewProps = {
  comparison: ComparisonCompetitor;
};

export function ComparisonPageView({ comparison }: ComparisonPageViewProps) {
  const c = comparison;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Alternativas", url: "/alternativas" },
          { name: c.name, url: c.path },
        ])}
      />
      <JsonLd data={faqSchema(c.faq)} />

      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Alternativas", href: "/alternativas" },
            { label: c.name },
          ]}
        />
      </Container>

      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">{c.h1}</h1>
          <PageUpdated date={PAGE_UPDATED.alternativas} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">{c.intro}</p>

          <div className="my-6 rounded-lg border border-border bg-bg/40 p-4 text-sm text-text-muted leading-relaxed">
            <strong className="text-text">Divulgação:</strong> o BetSensei BR é afiliado exclusivamente da BetWinner.
            Não temos parceria com {c.name}. Este comparativo é editorial e imparcial dentro do nosso escopo de análise.
          </div>

          <div className="my-8 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b border-border bg-bg-elevated">
                  <th className="p-3 text-left font-semibold text-text">Critério</th>
                  <th className="p-3 text-left font-semibold text-brand">BetWinner</th>
                  <th className="p-3 text-left font-semibold text-text">{c.name}</th>
                </tr>
              </thead>
              <tbody>
                {c.table.map((row) => (
                  <tr key={row.label} className="border-t border-border">
                    <td className="p-3 text-text-muted">{row.label}</td>
                    <td className="p-3 text-text">{row.betwinner}</td>
                    <td className="p-3 text-text">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <article className="prose-content">
            <h2>Licença e regulamentação</h2>
            <p>{c.licenseSummary}</p>
            <p>
              Desde janeiro de 2025, operadoras autorizadas pela SPA não podem oferecer bônus de boas-vindas.
              {c.spaAuthorized
                ? ` A ${c.name} está nesse grupo regulado.`
                : ` A ${c.name} e a BetWinner operam fora desse modelo SPA.`}{" "}
              <Link href="/betwinner">Análise completa da BetWinner →</Link>
            </p>

            <h2>Pontos fortes da {c.name}</h2>
            <ul>
              {c.competitorStrengths.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <h2>Limitações da {c.name} (para comparar)</h2>
            <ul>
              {c.competitorWeaknesses.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>

            <h2>Quando a {c.name} faz mais sentido</h2>
            <p>{c.whenCompetitorWins}</p>

            <h2>Quando a BetWinner faz mais sentido</h2>
            <p>{c.whenBetwinnerWins}</p>

            <div className="my-8 rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6 not-prose">
              <h3 className="font-display text-xl font-bold text-text mb-2">
                Testar a BetWinner com bônus {BETWINNER.bonusShort}
              </h3>
              <p className="text-text-muted mb-4">
                Código <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span> · PIX a partir de{" "}
                {BETWINNER.minDeposit} ·{" "}
                <Link href="/cadastro" className="text-brand hover:underline">
                  cadastro em 2 min
                </Link>
              </p>
              <ButtonLink href={`/go/betwinner?src=compare-${c.slug}`} external size="lg" variant="primary">
                Cadastrar na BetWinner →
              </ButtonLink>
            </div>

            <h2>Outros comparativos</h2>
            <ul>
              {COMPARISONS.filter((x) => x.slug !== c.slug)
                .slice(0, 4)
                .map((x) => (
                  <li key={x.slug}>
                    <Link href={x.path}>{x.h1.replace(" — qual escolher em 2026?", "").replace(" — comparativo 2026", "").replace(" — qual escolher?", "").replace(" — qual faz sentido para apostas?", "")}</Link>
                  </li>
                ))}
              <li>
                <Link href="/alternativas">Ver todos os comparativos →</Link>
              </li>
            </ul>

            <h2>Perguntas frequentes</h2>
            <div className="not-prose space-y-3 mt-4">
              {c.faq.map((item) => (
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
          </article>
        </Container>
      </section>
    </>
  );
}
