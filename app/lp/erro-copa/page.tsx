import { Container } from "@/components/ui/container";
import { AffiliateOfferCard } from "@/components/site/affiliate-offer-card";
import { JsonLd } from "@/components/site/json-ld";
import {
  ArticleFigure,
  LpCoverHeader,
  MistakeCard,
  StickyMobileCta,
} from "@/components/lp/advertorial-blocks";
import { ExitIntent } from "@/components/lp/exit-intent";
import { ReadingProgress } from "@/components/lp/reading-progress";
import { buildBetwinnerGoHref } from "@/lib/affiliate";
import { LP_ERRO_COPA, LP_ERRO_COPA_PATH } from "@/lib/lp-erro-copa";
import { BETWINNER } from "@/lib/partner";
import { articleSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

const META_DESCRIPTION =
  "O 7 a 1 de 2014 expôs três erros que ainda fazem apostadores perderem dinheiro em Copas. Análise editorial e como se preparar para 2026.";

export const metadata = {
  ...buildMetadata({
    title: LP_ERRO_COPA.headline,
    description: META_DESCRIPTION,
    path: LP_ERRO_COPA_PATH,
    noindex: true,
    image: `${SITE.url}${LP_ERRO_COPA.headerCoverImage}`,
  }),
  title: { absolute: LP_ERRO_COPA.headline },
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const MISTAKES = [
  {
    title: "Apostar no coração, não no número",
    body: "Odds baixas em favoritos parecem seguras — até que um 7 a 1 destrói bilhetes inteiros num único jogo.",
  },
  {
    title: "Perseguir prejuízo após uma zebra",
    body: "Dobrar a aposta no jogo seguinte para \"recuperar\" é o caminho mais rápido para esgotar a banca.",
  },
  {
    title: "Ignorar limite de banca em jogos grandes",
    body: "Sem teto por partida, a emoção da Copa decide quanto você arrisca — não a estratégia.",
  },
] as const;

const TIPS = [
  "Defina um valor máximo por jogo antes da competição",
  "Compare odds em mercados específicos, não só no vencedor",
  "Use PIX para depósitos rápidos e controlados",
  "Escolha plataforma em português com termos claros",
] as const;

export default async function ErroCopaAdvertorialPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const ctaHref = buildBetwinnerGoHref(params);

  const faq = [
    {
      question: "Por que o 7 a 1 ainda importa para quem aposta?",
      answer:
        "Copas concentram emoção e volume de apostas impulsivas. O Mineirão mostrou o que acontece quando milhões apostam no mesmo favorito sem gestão de banca.",
    },
    {
      question: "Como evitar esses erros na Copa 2026?",
      answer:
        "Defina limite por jogo, não persiga prejuízo e compare odds. Casas com PIX e suporte em português ajudam a manter disciplina.",
    },
    {
      question: `Preciso do código ${BETWINNER.promoCode}?`,
      answer: `Insira ${BETWINNER.promoCode} no cadastro para o bônus de ${BETWINNER.bonusShort} no primeiro depósito qualificado.`,
    },
  ];

  const articleJsonLd = articleSchema({
    headline: LP_ERRO_COPA.headline,
    description: META_DESCRIPTION,
    url: LP_ERRO_COPA_PATH,
    datePublished: LP_ERRO_COPA.publishedAt,
    dateModified: LP_ERRO_COPA.modifiedAt,
    authorName: LP_ERRO_COPA.authorName,
    image: `${SITE.url}${LP_ERRO_COPA.headerCoverImage}`,
  });

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqSchema(faq)} />

      <ReadingProgress />
      <ExitIntent
        href={ctaHref}
        storageKey="lp-erro-copa-exit-dismissed"
        title="Ainda dá tempo de se preparar para a Copa 2026"
        body="Cadastro rápido, depósito via PIX e bônus de boas-vindas para novos jogadores."
      />

      <article className="pb-24 md:pb-12">
        <LpCoverHeader
          coverSrc={LP_ERRO_COPA.headerCoverImage}
          coverAlt={LP_ERRO_COPA.headerCoverAlt}
          eyebrow={LP_ERRO_COPA.category}
          title={LP_ERRO_COPA.headline}
          subhead={LP_ERRO_COPA.dek}
          meta={
            <>
              <span className="font-medium text-text-muted">{LP_ERRO_COPA.authorName}</span>
              <span aria-hidden>·</span>
              <time dateTime={LP_ERRO_COPA.publishedAt}>{LP_ERRO_COPA.publishedLabel}</time>
              <span aria-hidden>·</span>
              <span>{LP_ERRO_COPA.readingMinutes} min de leitura</span>
            </>
          }
          imageClassName="object-[center_35%]"
        />

        {/* Primary CTA — above the fold */}
        <div className="border-b border-border bg-bg px-4 py-6 sm:px-6 sm:py-8">
          <Container className="max-w-[680px] p-0">
            <AffiliateOfferCard href={ctaHref} variant="compact" className="mt-0 shadow-xl" />
          </Container>
        </div>

        {/* Light article body */}
        <div className="bg-zinc-50 text-zinc-900">
          <Container className="max-w-[680px] py-8 sm:py-10">
            <p className="text-[17px] sm:text-lg leading-[1.8] text-zinc-800 font-medium">
              Em 8 de julho de 2014, milhares de apostadores brasileiros acordaram no dia seguinte com a
              mesma pergunta: <strong className="text-zinc-900">como deixei tanto dinheiro num único palpite?</strong>
            </p>
            <p className="mt-4 text-[17px] leading-[1.8] text-zinc-600">
              Onze anos depois, o padrão se repete em toda Copa — e a de 2026 não será diferente. A diferença
              está em quem reconhece os erros antes do apito inicial.
            </p>

            <blockquote className="my-8 border-l-4 border-brand py-1 pl-5 font-display text-xl font-bold text-zinc-900 leading-snug">
              &quot;Copa amplifica emoção. E emoção, no mercado de apostas, é custo.&quot;
            </blockquote>

            <h2 className="mt-12 font-display text-2xl font-extrabold text-zinc-900 tracking-tight">
              Os três erros que ainda drenam a banca
            </h2>
            <p className="mt-3 text-[17px] leading-[1.8] text-zinc-600">
              Antes do apito em Belo Horizonte, &quot;Brasil vence&quot; parecia quase garantido. Quando o
              quarto gol alemão saiu, não foi só o estádio que ficou em silêncio.
            </p>

            <div className="mt-6 space-y-4">
              {MISTAKES.map((item, i) => (
                <MistakeCard key={item.title} n={i + 1} title={item.title} body={item.body} />
              ))}
            </div>

            <AffiliateOfferCard href={ctaHref} variant="banner" className="my-8" />

            <ArticleFigure
              src={LP_ERRO_COPA.heroImage}
              alt="Estádio de futebol iluminado durante a Copa do Mundo"
              caption={LP_ERRO_COPA.heroCaption}
              light
              className="[&_img]:object-[center_20%]"
            />

            <h2 className="mt-12 font-display text-2xl font-extrabold text-zinc-900 tracking-tight">
              O que fazer diferente em 2026
            </h2>
            <ul className="mt-5 space-y-3">
              {TIPS.map((tip) => (
                <li key={tip} className="flex gap-3 text-[17px] leading-[1.75] text-zinc-600">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[17px] leading-[1.8] text-zinc-600">
              Nossa redação testou a {BETWINNER.name} (nota {BETWINNER.rating}): PIX a partir de{" "}
              {BETWINNER.minDeposit}, app em português e cobertura completa da Copa. Não substitui
              disciplina — mas facilita entrar preparado.
            </p>

            <p className="mt-4 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-500">
              <strong className="text-zinc-700">Nota editorial:</strong> BetSensei BR pode receber comissão
              por indicação. Apostas envolvem risco financeiro.
            </p>

            <section className="mt-12">
              <h2 className="font-display text-xl font-extrabold text-zinc-900">Perguntas frequentes</h2>
              <dl className="mt-5 space-y-5">
                {faq.map((item) => (
                  <div key={item.question} className="border-b border-zinc-200 pb-5 last:border-0">
                    <dt className="font-semibold text-zinc-900">{item.question}</dt>
                    <dd className="mt-2 text-[17px] leading-[1.75] text-zinc-600">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <AffiliateOfferCard href={ctaHref} variant="compact" className="my-8 shadow-xl" />

            <aside className="flex gap-4 rounded-xl border border-zinc-200 bg-white p-5">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/15 font-display text-sm font-extrabold text-brand"
                aria-hidden
              >
                BS
              </div>
              <div>
                <p className="font-display font-bold text-zinc-900">{LP_ERRO_COPA.authorName}</p>
                <p className="text-sm text-zinc-500">{LP_ERRO_COPA.authorRole}</p>
              </div>
            </aside>
          </Container>
        </div>

        <footer className="border-t border-border bg-bg py-6 text-center text-xs text-text-dim leading-relaxed">
          <p>
            <strong className="text-text-muted">18+</strong> · Jogo responsável · Apostas envolvem risco
            financeiro. Bônus sujeito a termos da {BETWINNER.name}.
          </p>
          <p className="mt-2 max-w-lg mx-auto px-4">
            Publicidade. Conteúdo informativo — não constitui aconselhamento financeiro.
          </p>
        </footer>
      </article>

      <StickyMobileCta href={ctaHref} />
    </>
  );
}
