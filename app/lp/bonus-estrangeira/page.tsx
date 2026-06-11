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
import { LP_BONUS_ESTRANGEIRA, LP_BONUS_ESTRANGEIRA_PATH } from "@/lib/lp-bonus-estrangeira";
import { BETWINNER } from "@/lib/partner";
import { articleSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { WORLD_CUP } from "@/lib/worldcup";

const META_DESCRIPTION =
  "Casa de apostas estrangeira libera bônus de boas-vindas para brasileiros antes da Copa 2026 — cadastro via PIX, código promocional e mercados de futebol em português.";

export const metadata = {
  ...buildMetadata({
    title: "Bônus de boas-vindas antes da Copa 2026",
    description: META_DESCRIPTION,
    path: LP_BONUS_ESTRANGEIRA_PATH,
    noindex: true,
    image: `${SITE.url}${LP_BONUS_ESTRANGEIRA.headerCoverImage}`,
  }),
  title: {
    absolute: LP_BONUS_ESTRANGEIRA.headline.replace("{bonusShort}", BETWINNER.bonusShort),
  },
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const BENEFITS = [
  {
    title: `Bônus de ${BETWINNER.bonusShort} ainda disponível`,
    body: "Casas estrangeiras licenciadas internacionalmente podem oferecer bônus de boas-vindas que operadoras locais regulamentadas não liberam da mesma forma.",
  },
  {
    title: "PIX em minutos, em reais",
    body: `Cadastro em ~2 min, depósito mínimo ${BETWINNER.minDeposit} via PIX, saldo disponível para apostar na Copa sem conversão de moeda.`,
  },
  {
    title: "Copa 2026 com mercados completos",
    body: "Futebol brasileiro, seleções, artilheiro, ao vivo — plataforma 100% em português com suporte 24/7.",
  },
] as const;

const STEPS = [
  {
    title: `Crie sua conta com o código ${BETWINNER.promoCode}`,
    body: "Registro em menos de 2 minutos: telefone +55, e-mail, CPF e senha. Cole o código promocional no formulário antes de confirmar.",
  },
  {
    title: `Deposite via PIX (mínimo ${BETWINNER.minDeposit}, cai em minutos)`,
    body: "Abra Depositar → PIX, pague pelo app do banco. Sem taxas da casa. Saldo disponível para apostar na Copa em poucos minutos.",
  },
  {
    title: `Ative o bônus de ${BETWINNER.bonusShort} no 1º depósito`,
    body: "Escolha mercados da Copa do Mundo 2026 — resultado, gols, artilheiro. O bônus é creditado conforme os termos da promoção.",
  },
] as const;

function replacePlaceholders(text: string): string {
  return text
    .replaceAll("{bonusShort}", BETWINNER.bonusShort)
    .replaceAll("{promoCode}", BETWINNER.promoCode)
    .replaceAll("{name}", BETWINNER.name);
}

export default async function BonusEstrangeiraLandingPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const ctaHref = buildLpCtaHref(params, BEMOB_LP_CTA["bonus-estrangeira"]);

  const headline = replacePlaceholders(LP_BONUS_ESTRANGEIRA.headline);
  const subhead = replacePlaceholders(LP_BONUS_ESTRANGEIRA.subhead);
  const hook = replacePlaceholders(LP_BONUS_ESTRANGEIRA.hook);

  const faq = [
    {
      question: "É seguro apostar em casa estrangeira?",
      answer: `A ${BETWINNER.name} opera com ${BETWINNER.licenseText.toLowerCase()} desde ${BETWINNER.founded}, aceita PIX e tem suporte em português. Apostas envolvem risco financeiro — leia os termos antes de depositar.`,
    },
    {
      question: `Como ativo o bônus de ${BETWINNER.bonusShort}?`,
      answer: `Faça o cadastro, insira o código ${BETWINNER.promoCode} no formulário e conclua o primeiro depósito qualificado via PIX. O bônus é creditado conforme os termos da promoção.`,
    },
    {
      question: "Quanto tempo demora o PIX?",
      answer: `Depósitos via PIX costumam cair em poucos minutos. Depósito mínimo ${BETWINNER.minDeposit}, sem taxas da casa.`,
    },
    {
      question: "Preciso ter experiência em apostas?",
      answer: "Não. O cadastro é simples pelo celular, a interface é em português e o suporte orienta novos usuários 24/7.",
    },
  ];

  const pixFlowSteps = [
    { label: "Cadastro", sub: "2 min" },
    { label: "PIX", sub: BETWINNER.minDeposit },
    { label: "Bônus", sub: BETWINNER.bonusShort },
  ];

  const articleJsonLd = articleSchema({
    headline,
    description: META_DESCRIPTION,
    url: LP_BONUS_ESTRANGEIRA_PATH,
    datePublished: LP_BONUS_ESTRANGEIRA.publishedAt,
    dateModified: LP_BONUS_ESTRANGEIRA.modifiedAt,
    authorName: LP_BONUS_ESTRANGEIRA.authorName,
    image: `${SITE.url}${LP_BONUS_ESTRANGEIRA.headerCoverImage}`,
  });

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqSchema(faq)} />

      <article className="pb-44">
        <LpCoverHeader
          coverSrc={LP_BONUS_ESTRANGEIRA.headerCoverImage}
          coverAlt={LP_BONUS_ESTRANGEIRA.headerCoverAlt}
          eyebrow={LP_BONUS_ESTRANGEIRA.eyebrow}
          title={headline}
          subhead={subhead}
          meta={
            <>
              <span className="font-medium text-text-muted">{LP_BONUS_ESTRANGEIRA.authorName}</span>
              <span aria-hidden>·</span>
              <time dateTime={LP_BONUS_ESTRANGEIRA.publishedAt}>
                {LP_BONUS_ESTRANGEIRA.publishedLabel}
              </time>
              <span aria-hidden>·</span>
              <span>{LP_BONUS_ESTRANGEIRA.readingMinutes} min de leitura</span>
            </>
          }
          imageClassName="object-[center_35%]"
        />

        <div className="border-b border-border bg-bg px-4 py-6 sm:px-6 sm:py-8">
          <Container className="max-w-[680px] p-0">
            <AffiliateOfferCard href={ctaHref} variant="compact" className="mt-0 shadow-xl" />
            <p className="mt-4 text-center text-xs text-text-dim">
              Estreia do Brasil {WORLD_CUP.brasilDebut} · {WORLD_CUP.brasilGroup} · Bônus antes do
              apito inicial
            </p>
          </Container>
        </div>

        <div className="bg-zinc-50 text-zinc-900">
          <Container className="max-w-[680px] py-8 sm:py-10">
            <PixFlowStrip steps={pixFlowSteps} />

            <p className="mt-6 text-[17px] leading-[1.8] text-zinc-800 font-medium">{hook}</p>

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
              Por que isso importa agora
            </h2>
            <div className="mt-6 space-y-4">
              {BENEFITS.map((item, i) => (
                <MistakeCard
                  key={item.title}
                  n={i + 1}
                  title={item.title}
                  body={item.body}
                  label="Vantagem"
                />
              ))}
            </div>

            <h2 className="mt-12 font-display text-2xl font-extrabold text-zinc-900 tracking-tight">
              Como ativar em 3 passos
            </h2>
            <div className="mt-6 space-y-4">
              {STEPS.map((step, i) => (
                <MistakeCard key={step.title} n={i + 1} title={step.title} body={step.body} label="Passo" />
              ))}
            </div>

            <AffiliateOfferCard href={ctaHref} variant="banner" className="my-8" />

            <ArticleFigure
              src={LP_BONUS_ESTRANGEIRA.heroImage}
              alt="Torcedores e futebol — Copa do Mundo 2026"
              caption={LP_BONUS_ESTRANGEIRA.heroCaption}
              light
              className="[&_img]:object-[center_35%]"
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
                <p className="font-display font-bold text-zinc-900">{LP_BONUS_ESTRANGEIRA.authorName}</p>
                <p className="text-sm text-zinc-500">{LP_BONUS_ESTRANGEIRA.authorRole}</p>
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

      <StickyOfferWidget href={ctaHref} dismissKey="lp-bonus-estrangeira-sticky-dismissed" />
    </>
  );
}
