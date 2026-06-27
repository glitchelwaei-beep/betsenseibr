import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { AffiliateOfferCard } from "@/components/site/affiliate-offer-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageUpdated } from "@/components/site/page-updated";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { SITE } from "@/lib/site";
import { PAGE_UPDATED } from "@/lib/editorial";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Grupo de apostas esportivas no Telegram — BetSensei BR",
  description:
    "Grupo de apostas esportivas para brasileiros: análises, odds, Copa do Mundo e dicas no Telegram. Comunidade BetSensei + guia BetWinner.",
  path: "/grupo-apostas",
});

const FAQ = [
  {
    question: "O que é o grupo de apostas esportivas BetSensei?",
    answer:
      "Comunidade no Telegram com análises de jogos, mercados da Copa do Mundo, Brasileirão e alertas de odds. Não substitui pesquisa própria — apostas envolvem risco.",
  },
  {
    question: "O grupo dá palpites garantidos?",
    answer:
      "Não. Compartilhamos análise editorial e contexto de mercado. Nenhum palpite garante lucro. Jogue com responsabilidade (18+).",
  },
  {
    question: "Preciso se cadastrar na BetWinner para entrar?",
    answer:
      "Não para entrar no Telegram. Para apostar com bônus de boas-vindas, cadastre-se na BetWinner com código BETSENSEI26 pelo nosso link.",
  },
];

export default function GrupoApostasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Grupo de apostas", url: "/grupo-apostas" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Casa de apostas", href: "/casa-de-apostas" },
            { label: "Grupo de apostas" },
          ]}
        />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Grupo de apostas esportivas — comunidade BetSensei
          </h1>
          <PageUpdated date={PAGE_UPDATED.grupoApostas} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            Análises, contexto de mercado e discussão sobre <strong className="text-text">apostas esportivas</strong> no nosso grupo no Telegram.
          </p>

          <div className="my-8 rounded-2xl border border-brand/30 bg-brand/5 p-6 sm:p-8 text-center not-prose">
            <div className="font-display text-2xl font-bold text-text mb-2">Entrar no grupo Telegram</div>
            <p className="text-text-muted mb-6">
              Copa do Mundo 2026, Brasileirão, odds e mercados — em português, sem spam de cassino.
            </p>
            <ButtonLink href={SITE.telegram} external size="lg" variant="primary">
              Abrir grupo no Telegram →
            </ButtonLink>
          </div>

          <AffiliateOfferCard
            href="/go/betwinner?src=pillar-grupo-top"
            variant="compact"
            className="my-8 shadow-xl"
          />

          <article className="prose-content">
            <h2>O que você encontra no grupo</h2>
            <ul>
              <li>Contexto de jogos da Copa do Mundo e Seleção Brasileira</li>
              <li>Discussão de mercados (gols, handicap, ao vivo)</li>
              <li>Links para guias do site (PIX, bônus, cadastro)</li>
              <li>Avisos de jogo responsável</li>
            </ul>

            <p>
              Palpites editoriais também em <Link href="/palpites-futebol">palpites de futebol</Link>.
              Para apostar: <Link href="/betwinner">BetWinner</Link> com {BETWINNER.bonusHeadline.toLowerCase()}.
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
