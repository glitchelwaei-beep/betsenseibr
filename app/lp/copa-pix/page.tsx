import { Container } from "@/components/ui/container";
import { AffiliateOfferCard } from "@/components/site/affiliate-offer-card";
import { JsonLd } from "@/components/site/json-ld";
import {
  ArticleFigure,
  LpCoverHeader,
  MistakeCard,
  PixFlowStrip,
} from "@/components/lp/advertorial-blocks";
import { StickyOfferWidget } from "@/components/lp/sticky-offer-widget";
import { BEMOB_LP_CTA, buildLpCtaHref } from "@/lib/affiliate";
import { LP_COPA_PIX, LP_COPA_PIX_PATH } from "@/lib/lp-copa-pix";
import { BETWINNER } from "@/lib/partner";
import { articleSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { WORLD_CUP } from "@/lib/worldcup";

const META_DESCRIPTION =
  "Passo a passo para cadastro, depósito via PIX e bônus de boas-vindas na BetWinner — guia para apostadores brasileiros na Copa 2026.";

export const metadata = {
  ...buildMetadata({
    title: "Como apostar na Copa 2026 pelo PIX",
    description: META_DESCRIPTION,
    path: LP_COPA_PIX_PATH,
    noindex: true,
    image: `${SITE.url}${LP_COPA_PIX.headerCoverImage}`,
  }),
  title: { absolute: LP_COPA_PIX.headline },
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const STEPS = [
  {
    title: `Crie sua conta com o código ${BETWINNER.promoCode}`,
    body: "Registro em menos de 2 minutos: telefone +55, e-mail, CPF e senha. Cole o código promocional no formulário antes de confirmar.",
  },
  {
    title: "Deposite via PIX (mínimo R$ 10, cai em minutos)",
    body: "Abra Depositar → PIX, pague pelo app do banco. Sem taxas da casa. Saldo disponível para apostar na Copa em poucos minutos.",
  },
  {
    title: `Faça sua primeira aposta na Copa e ative o bônus de ${BETWINNER.bonusShort}`,
    body: "Escolha mercados da Copa do Mundo 2026 — resultado, gols, artilheiro. O bônus é creditado conforme os termos da promoção.",
  },
] as const;

export default async function CopaPixLandingPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const ctaHref = buildLpCtaHref(params, BEMOB_LP_CTA["copa-pix"]);

  const subhead = LP_COPA_PIX.subhead
    .replace("{bonusShort}", BETWINNER.bonusShort)
    .replace("{promoCode}", BETWINNER.promoCode);

  const faq = [
    {
      question: "Como funciona o PIX?",
      answer: `Após o cadastro, escolha PIX em "Depositar", copie a chave ou escaneie o QR Code no app do seu banco. Depósito mínimo ${BETWINNER.minDeposit}; o saldo costuma cair em poucos minutos, sem taxas da casa.`,
    },
    {
      question: "É confiável?",
      answer: `A BetWinner opera com licença internacional desde ${BETWINNER.founded}, aceita PIX e tem suporte em português. Apostas envolvem risco — leia os termos antes de depositar.`,
    },
    {
      question: `Preciso do código ${BETWINNER.promoCode}?`,
      answer: `Sim — insira ${BETWINNER.promoCode} no campo "Código de promoção" durante o cadastro para ativar o bônus de ${BETWINNER.bonusShort} no primeiro depósito qualificado.`,
    },
  ];

  const pixFlowSteps = [
    { label: "Cadastro", sub: "2 min" },
    { label: "PIX", sub: BETWINNER.minDeposit },
    { label: "Apostar na Copa", sub: `bônus ${BETWINNER.bonusShort}` },
  ];

  const articleJsonLd = articleSchema({
    headline: LP_COPA_PIX.headline,
    description: META_DESCRIPTION,
    url: LP_COPA_PIX_PATH,
    datePublished: LP_COPA_PIX.publishedAt,
    dateModified: LP_COPA_PIX.modifiedAt,
    authorName: LP_COPA_PIX.authorName,
    image: `${SITE.url}${LP_COPA_PIX.headerCoverImage}`,
  });

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqSchema(faq)} />

      <article className="pb-44">
        <LpCoverHeader
          coverSrc={LP_COPA_PIX.headerCoverImage}
          coverAlt={LP_COPA_PIX.headerCoverAlt}
          eyebrow={LP_COPA_PIX.eyebrow}
          title={LP_COPA_PIX.headline}
          subhead={subhead}
          meta={
            <>
              <span className="font-medium text-text-muted">{LP_COPA_PIX.authorName}</span>
              <span aria-hidden>·</span>
              <time dateTime={LP_COPA_PIX.publishedAt}>{LP_COPA_PIX.publishedLabel}</time>
              <span aria-hidden>·</span>
              <span>{LP_COPA_PIX.readingMinutes} min de leitura</span>
            </>
          }
          imageClassName="object-[center_35%]"
        />

        {/* Primary offer — above the fold */}
        <div className="border-b border-border bg-bg px-4 py-6 sm:px-6 sm:py-8">
          <Container className="max-w-[680px] p-0">
            <AffiliateOfferCard href={ctaHref} variant="compact" className="mt-0 shadow-xl" />
            <p className="mt-4 text-center text-xs text-text-dim">
              Estreia do Brasil {WORLD_CUP.brasilDebut} · {WORLD_CUP.brasilGroup} · Deposite via PIX antes do apito
            </p>
          </Container>
        </div>

        {/* Light article body */}
        <div className="bg-zinc-50 text-zinc-900">
          <Container className="max-w-[680px] py-8 sm:py-10">
            <PixFlowStrip steps={pixFlowSteps} />

            <p className="mt-6 text-[17px] leading-[1.8] text-zinc-800 font-medium">{LP_COPA_PIX.hook}</p>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-xs text-zinc-500">
              <span>Nota {BETWINNER.rating}</span>
              <span aria-hidden>·</span>
              <span>Licença internacional</span>
              <span aria-hidden>·</span>
              <span>PIX 24/7</span>
              <span aria-hidden>·</span>
              <span>100% em português</span>
              <span aria-hidden>·</span>
              <span className="font-semibold text-zinc-700">18+</span>
            </div>

            <h2 className="mt-10 font-display text-2xl font-extrabold text-zinc-900 tracking-tight">
              Passo a passo em 3 etapas
            </h2>
            <div className="mt-6 space-y-4">
              {STEPS.map((step, i) => (
                <MistakeCard key={step.title} n={i + 1} title={step.title} body={step.body} />
              ))}
            </div>

            <AffiliateOfferCard href={ctaHref} variant="banner" className="my-8" />

            <ArticleFigure
              src={LP_COPA_PIX.heroImage}
              alt="Estádio de futebol iluminado durante a Copa do Mundo"
              caption={LP_COPA_PIX.heroCaption}
              light
              className="[&_img]:object-[center_25%]"
            />

            <section className="mt-10">
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
                <p className="font-display font-bold text-zinc-900">{LP_COPA_PIX.authorName}</p>
                <p className="text-sm text-zinc-500">{LP_COPA_PIX.authorRole}</p>
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

      <StickyOfferWidget href={ctaHref} dismissKey="lp-copa-pix-sticky-dismissed" />
    </>
  );
}
