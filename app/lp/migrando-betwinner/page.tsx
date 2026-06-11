import { Container } from "@/components/ui/container";
import { AffiliateOfferCard } from "@/components/site/affiliate-offer-card";
import { JsonLd } from "@/components/site/json-ld";
import {
  ArticleFigure,
  EditorialCtaLink,
  FeatureCard,
  LpCoverHeader,
  MistakeCard,
  StickyMobileCta,
} from "@/components/lp/advertorial-blocks";
import { ExitIntent } from "@/components/lp/exit-intent";
import { ReadingProgress } from "@/components/lp/reading-progress";
import { BEMOB_LP_CTA, buildLpCtaHref } from "@/lib/affiliate";
import { LP_MIGRANDO, LP_MIGRANDO_PATH } from "@/lib/lp-migrando-betwinner";
import { BETWINNER } from "@/lib/partner";
import { articleSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

const META_DESCRIPTION =
  "Análise editorial: por que apostadores brasileiros estão migrando para a BetWinner em 2026 — bônus, futebol, ao vivo, mobile e PIX.";

export const metadata = {
  ...buildMetadata({
    title: LP_MIGRANDO.headline,
    description: META_DESCRIPTION,
    path: LP_MIGRANDO_PATH,
    noindex: true,
    image: `${SITE.url}${LP_MIGRANDO.headerCoverImage}`,
  }),
  title: { absolute: LP_MIGRANDO.headline },
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const BETTOR_PRIORITIES = [
  {
    title: "Cobertura de futebol",
    body: "Brasileirão, Libertadores, Champions e Copa do Mundo — com mercados profundos em gols, escanteios e handicap.",
  },
  {
    title: "Apostas ao vivo",
    body: "Odds que atualizam durante o jogo, cash out e mercados que abrem e fecham conforme o ritmo da partida.",
  },
  {
    title: "Experiência mobile",
    body: "App estável, interface em português e navegação rápida no intervalo — quando a decisão precisa ser em segundos.",
  },
  {
    title: "Odds competitivas",
    body: "Pequenas diferenças nas cotações somam ao longo de uma temporada. Apostadores experientes comparam antes de clicar.",
  },
  {
    title: "Facilidade de uso",
    body: "Cadastro claro, depósito sem fricção e histórico de apostas legível — sem labirintos de menus.",
  },
  {
    title: "Cadastro rápido",
    body: "Telefone, e-mail, CPF e confirmação em minutos. PIX disponível logo após a verificação inicial.",
  },
] as const;

const COMMON_PROBLEMS = [
  {
    title: "Mercados limitados",
    body: "Algumas casas oferecem só resultado final em jogos menores — frustrante para quem acompanha estatísticas.",
  },
  {
    title: "Plataforma lenta",
    body: "Travamentos em jogos ao vivo custam odds. Performance importa tanto quanto a cotação exibida.",
  },
  {
    title: "Mobile mal adaptado",
    body: "Sites desktop espremidos no celular, botões pequenos e telas que não carregam no 4G do estádio.",
  },
  {
    title: "Interface confusa",
    body: "Promoções escondidas, termos ilegíveis e fluxos de saque que parecem labirinto afastam usuários.",
  },
] as const;

const BETWINNER_STRENGTHS = [
  {
    title: "Cobertura esportiva ampla",
    body: `Mais de ${BETWINNER.sports} modalidades, com foco em futebol brasileiro e internacional — incluindo mercados da Copa 2026.`,
  },
  {
    title: "Apostas ao vivo",
    body: "Transmissões e mercados in-play em futebol, UFC e e-sports, com interface pensada para decisões rápidas.",
  },
  {
    title: "App e site em português",
    body: "Suporte 24/7 em português, app Android (APK) e iOS — sem depender de tradução automática.",
  },
  {
    title: "PIX em minutos",
    body: `Depósito mínimo ${BETWINNER.minDeposit}, saque tipicamente entre ${BETWINNER.payoutTime}. Sem surpresas no fluxo.`,
  },
] as const;

const STEPS = [
  {
    title: "Crie sua conta",
    body: `Registro em menos de 2 minutos: +55, e-mail, CPF e senha. Use ${BETWINNER.promoCode} no campo de promoção, se disponível.`,
  },
  {
    title: "Ative a oferta disponível",
    body: `Faça o primeiro depósito via PIX (mínimo ${BETWINNER.minDeposit}) e ative o bônus de ${BETWINNER.bonusShort} conforme os termos da promoção.`,
  },
  {
    title: "Explore os mercados esportivos",
    body: "Navegue por futebol, ao vivo e Copa do Mundo. Defina limites antes do primeiro jogo — disciplina ainda é sua responsabilidade.",
  },
] as const;

export default async function MigrandoBetwinnerPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const ctaHref = buildLpCtaHref(params, BEMOB_LP_CTA["migrando-betwinner"]);

  const faq = [
    {
      question: "Por que apostadores estão trocando de casa em 2026?",
      answer:
        "Regulamentação, ofertas de bônus, qualidade do app e mercados ao vivo pesam na decisão. Muitos buscam PIX rápido, português nativo e cobertura de futebol superior.",
    },
    {
      question: `A BetWinner é indicada para brasileiros?`,
      answer: `Nossa redação atribui nota ${BETWINNER.rating} à BetWinner: licença internacional, PIX, app em português e bônus de ${BETWINNER.bonusShort} com ${BETWINNER.promoCode}. Apostas envolvem risco — leia os termos.`,
    },
    {
      question: "Quanto tempo leva para começar a apostar?",
      answer: `Cadastro leva cerca de 2 minutos. Depósito via PIX costuma cair em poucos minutos. Verificação pode ser exigida antes do primeiro saque.`,
    },
    {
      question: `Preciso do código ${BETWINNER.promoCode}?`,
      answer: `Recomendamos inserir ${BETWINNER.promoCode} no cadastro para acessar o bônus de boas-vindas de ${BETWINNER.bonusShort}, sujeito aos termos da BetWinner.`,
    },
  ];

  const articleJsonLd = articleSchema({
    headline: LP_MIGRANDO.headline,
    description: META_DESCRIPTION,
    url: LP_MIGRANDO_PATH,
    datePublished: LP_MIGRANDO.publishedAt,
    dateModified: LP_MIGRANDO.modifiedAt,
    authorName: LP_MIGRANDO.authorName,
    image: `${SITE.url}${LP_MIGRANDO.headerCoverImage}`,
  });

  const bonusHeadline = `Bônus de ${BETWINNER.bonusShort} para novos jogadores — ${BETWINNER.bonusContext}`;

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqSchema(faq)} />

      <ReadingProgress />
      <ExitIntent
        href={ctaHref}
        storageKey="lp-migrando-betwinner-exit-dismissed"
        title="Viu por que tantos brasileiros estão migrando?"
        body={`Conheça a BetWinner: PIX, app em português e bônus de ${BETWINNER.bonusShort} para novos cadastros.`}
        buttonLabel="Ver oferta disponível"
      />

      <article className="pb-24 md:pb-12">
        <LpCoverHeader
          coverSrc={LP_MIGRANDO.headerCoverImage}
          coverAlt={LP_MIGRANDO.headerCoverAlt}
          eyebrow={LP_MIGRANDO.category}
          title={LP_MIGRANDO.headline}
          subhead={LP_MIGRANDO.dek}
          meta={
            <>
              <span className="font-medium text-text-muted">{LP_MIGRANDO.authorName}</span>
              <span aria-hidden>·</span>
              <time dateTime={LP_MIGRANDO.publishedAt}>{LP_MIGRANDO.publishedLabel}</time>
              <span aria-hidden>·</span>
              <span>{LP_MIGRANDO.readingMinutes} min de leitura</span>
            </>
          }
          imageClassName="object-[center_35%]"
        />

        <div className="border-b border-border bg-bg px-4 py-6 sm:px-6 sm:py-8">
          <Container className="max-w-[680px] p-0">
            <AffiliateOfferCard href={ctaHref} variant="compact" className="mt-0 shadow-xl" />
          </Container>
        </div>

        <div className="bg-zinc-50 text-zinc-900">
          <Container className="max-w-[680px] py-8 sm:py-10">
            <h2 className="font-display text-2xl font-extrabold text-zinc-900 tracking-tight">
              O mercado brasileiro amadureceu — e o apostador também
            </h2>
            <p className="mt-4 text-[17px] leading-[1.8] text-zinc-600">
              Com a regulamentação e a popularização das apostas esportivas, o brasileiro deixou de aceitar
              qualquer plataforma. Em 2026, quem aposta de forma recorrente compara bônus, testa o app no
              celular e observa se a casa cobre o Campeonato Brasileiro e a Copa com a profundidade que o
              jogo exige.
            </p>
            <p className="mt-4 text-[17px] leading-[1.8] text-zinc-600">
              É nesse cenário que surge uma pergunta frequente nos fóruns e grupos de Telegram:{" "}
              <strong className="text-zinc-900">por que tantos estão migrando para a BetWinner?</strong>{" "}
              Nossa redação passou semanas analisando a plataforma antes de publicar esta recomendação.
            </p>

            <EditorialCtaLink href={ctaHref}>Conhecer a plataforma recomendada →</EditorialCtaLink>

            <h2 className="mt-12 font-display text-2xl font-extrabold text-zinc-900 tracking-tight">
              O que o apostador brasileiro exige hoje
            </h2>
            <p className="mt-3 text-[17px] leading-[1.8] text-zinc-600">
              Conversamos com leitores e testamos fluxos reais de cadastro, depósito e aposta ao vivo. Estes
              são os critérios que mais aparecem:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {BETTOR_PRIORITIES.map((item) => (
                <FeatureCard key={item.title} title={item.title} body={item.body} />
              ))}
            </div>

            <ArticleFigure
              src={LP_MIGRANDO.midImage}
              alt="Torcedores acompanham partida de futebol"
              caption={LP_MIGRANDO.midCaption}
              light
              className="[&_img]:object-[center_40%]"
            />

            <h2 className="mt-12 font-display text-2xl font-extrabold text-zinc-900 tracking-tight">
              Frustrações comuns em outras plataformas
            </h2>
            <p className="mt-3 text-[17px] leading-[1.8] text-zinc-600">
              Se você se identifica com algum destes pontos, não está sozinho — são as queixas mais
              recorrentes entre apostadores que decidiram migrar:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {COMMON_PROBLEMS.map((item) => (
                <FeatureCard key={item.title} title={item.title} body={item.body} />
              ))}
            </div>

            <h2 className="mt-12 font-display text-2xl font-extrabold text-zinc-900 tracking-tight">
              Por que a BetWinner aparece no topo das comparações
            </h2>
            <p className="mt-3 text-[17px] leading-[1.8] text-zinc-600">
              A {BETWINNER.name} não é desconhecida no mercado internacional — opera desde {BETWINNER.founded}{" "}
              com licença internacional. O que chama atenção em 2026 é a combinação de fatores abaixo, que
              nossa equipe validou em testes práticos:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {BETWINNER_STRENGTHS.map((item) => (
                <FeatureCard key={item.title} title={item.title} body={item.body} />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 rounded-lg border border-zinc-200 bg-white px-4 py-3 text-xs text-zinc-500">
              <span>Nota editorial {BETWINNER.rating}/10</span>
              <span aria-hidden>·</span>
              <span>{BETWINNER.licenseText}</span>
              <span aria-hidden>·</span>
              <span>PIX {BETWINNER.minDeposit}</span>
              <span aria-hidden>·</span>
              <span className="font-semibold text-zinc-700">18+</span>
            </div>

            <AffiliateOfferCard
              href={ctaHref}
              variant="banner"
              className="my-8"
              headline={`Novo cadastro? ${BETWINNER.bonusHeadline} — ${BETWINNER.bonusContext}`}
            />

            <h2 className="font-display text-2xl font-extrabold text-zinc-900 tracking-tight">
              Bônus de boas-vindas: o que você precisa saber
            </h2>
            <p className="mt-4 text-[17px] leading-[1.8] text-zinc-600">
              A oferta atual é <strong className="text-zinc-900">{BETWINNER.bonusHeadline}</strong>, ativada
              com o código <strong className="text-zinc-900">{BETWINNER.promoCode}</strong> no cadastro.
              O bônus é creditado no primeiro depósito qualificado via PIX — rollover e prazos conforme os
              termos da promoção na BetWinner.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                `Bônus de ${BETWINNER.bonusShort} para novos jogadores`,
                `Depósito mínimo ${BETWINNER.minDeposit} via PIX`,
                "App e suporte 100% em português",
                "Mercados de futebol e Copa do Mundo 2026",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[17px] leading-[1.75] text-zinc-600">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <AffiliateOfferCard
              href={ctaHref}
              variant="banner"
              className="my-8"
              headline={bonusHeadline}
            />

            <h2 className="font-display text-2xl font-extrabold text-zinc-900 tracking-tight">
              Como começar em 3 passos
            </h2>
            <div className="mt-6 space-y-4">
              {STEPS.map((step, i) => (
                <MistakeCard key={step.title} n={i + 1} title={step.title} body={step.body} />
              ))}
            </div>

            <EditorialCtaLink href={ctaHref}>Acessar BetWinner →</EditorialCtaLink>

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

            <h2 className="mt-12 font-display text-2xl font-extrabold text-zinc-900 tracking-tight">
              Conclusão editorial
            </h2>
            <p className="mt-4 text-[17px] leading-[1.8] text-zinc-600">
              A migração em massa raramente acontece por modismo — acontece quando uma plataforma resolve
              dores reais: mercados, mobile, PIX e clareza. A BetWinner reúne esses pontos de forma
              consistente o suficiente para merecer a recomendação da redação BetSensei em 2026.
            </p>
            <p className="mt-4 text-[17px] leading-[1.8] text-zinc-600">
              Se você está reavaliando onde acompanhar o futebol e a Copa, vale conhecer a oferta atual antes
              do primeiro jogo. Entre preparado — e com limites claros.
            </p>

            <EditorialCtaLink href={ctaHref}>Ver bônus atual →</EditorialCtaLink>

            <AffiliateOfferCard href={ctaHref} variant="compact" className="my-8 shadow-xl" />

            <p className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-500">
              <strong className="text-zinc-700">Nota editorial:</strong> BetSensei BR pode receber comissão
              por indicação. Isso não altera nossa análise. Apostas envolvem risco financeiro.
            </p>

            <aside className="mt-8 flex gap-4 rounded-xl border border-zinc-200 bg-white p-5">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/15 font-display text-sm font-extrabold text-brand"
                aria-hidden
              >
                BS
              </div>
              <div>
                <p className="font-display font-bold text-zinc-900">{LP_MIGRANDO.authorName}</p>
                <p className="text-sm text-zinc-500">{LP_MIGRANDO.authorRole}</p>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                  Equipe editorial independente. Testamos cadastro, PIX e mercados ao vivo antes de
                  recomendar qualquer plataforma.
                </p>
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
