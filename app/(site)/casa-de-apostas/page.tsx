import Link from "next/link";
import { Container } from "@/components/ui/container";
import { AffiliateOfferCard } from "@/components/site/affiliate-offer-card";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageUpdated } from "@/components/site/page-updated";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { PAGE_UPDATED } from "@/lib/editorial";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Casa de apostas no Brasil 2026 — como escolher",
  description:
    "Guia de casa de apostas para brasileiros: licença SPA, PIX, bônus, app e apostas esportivas. O que avaliar antes de se cadastrar.",
  path: "/casa-de-apostas",
});

const FAQ = [
  {
    question: "O que é uma casa de apostas?",
    answer:
      "É uma plataforma online onde você deposita dinheiro, faz apostas em esportes (e, em alguns casos, cassino) e saca os prêmios. No Brasil, operadoras podem ser reguladas pela SPA ou operar com licença internacional.",
  },
  {
    question: "Qual a melhor casa de apostas para brasileiros?",
    answer: `Depende do perfil: quem prioriza regulamentação SPA escolhe operadoras autorizadas; quem busca bônus de boas-vindas e PIX rápido pode considerar casas internacionais como a BetWinner (${BETWINNER.bonusHeadline.toLowerCase()}). Veja nosso comparativo.`,
  },
  {
    question: "Casa de apostas com PIX é obrigatório no Brasil?",
    answer:
      "Não é obrigatório, mas PIX é o método mais usado por brasileiros — depósito e saque em minutos, sem taxa da casa na maioria das plataformas que aceitam o método.",
  },
  {
    question: "Apostas esportivas e cassino ao vivo na mesma conta?",
    answer:
      "Muitas casas oferecem os dois. A BetWinner é forte em apostas esportivas e transmissões ao vivo; também tem cassino ao vivo como complemento na mesma conta.",
  },
  {
    question: "Melhor cassino online ou casa de apostas esportiva?",
    answer:
      "Se seu foco é futebol, Brasileirão e Copa do Mundo, priorize casas com mercados esportivos profundos. Cassino online é outro nicho — não confunda plataformas focadas em jogos instantâneos com casas esportivas completas.",
  },
];

export default function CasaDeApostasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Casa de apostas", url: "/casa-de-apostas" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Casa de apostas" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Casa de apostas no Brasil — guia para escolher em 2026
          </h1>
          <PageUpdated date={PAGE_UPDATED.casaApostas} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            O que observar ao escolher uma <strong className="text-text">casa de apostas</strong>: licença, PIX, bônus, app,
            apostas esportivas e transparência editorial.
          </p>

          <AffiliateOfferCard
            href="/go/betwinner?src=pillar-casa-apostas-top"
            variant="compact"
            className="my-8 shadow-xl"
          />

          <article className="prose-content">
            <h2>O que avaliar numa casa de apostas</h2>
            <ul>
              <li><strong>Licença:</strong> SPA (Brasil) vs internacional — implicações em bônus e supervisão</li>
              <li><strong>PIX:</strong> depósito e saque rápidos, limites e taxas</li>
              <li><strong>Bônus:</strong> operadoras SPA não podem oferecer bônus de boas-vindas desde 2025</li>
              <li><strong>App:</strong> aplicativo de apostas esportivas em português</li>
              <li><strong>Mercados:</strong> futebol brasileiro, Copa do Mundo, ao vivo</li>
            </ul>

            <h2>Guias por tema</h2>
            <ul>
              <li><Link href="/casas-de-apostas-confiaveis">Casas de apostas confiáveis</Link></li>
              <li><Link href="/casas-de-apostas-licenciadas">Casas de apostas licenciadas (SPA)</Link></li>
              <li><Link href="/casa-de-apostas-com-pix">Casa de apostas com PIX</Link></li>
              <li><Link href="/alternativas">Melhor casa de apostas — comparativo</Link></li>
              <li><Link href="/apostas-esportivas">Apostas esportivas</Link></li>
              <li><Link href="/betwinner">Análise BetWinner</Link></li>
            </ul>

            <h2>Nossa recomendação testada</h2>
            <p>
              Testamos cadastro, PIX, apostas e saque na <strong>BetWinner</strong> — nota {BETWINNER.rating}/10.
              Oferece {BETWINNER.bonusHeadline.toLowerCase()} com código {BETWINNER.promoCode}, PIX a partir de {BETWINNER.minDeposit} e cobertura da Copa 2026.
              Somos afiliados exclusivamente da BetWinner; leia a <Link href="/divulgacao-de-afiliacao">divulgação de afiliação</Link>.
            </p>

            <AffiliateOfferCard
              href="/go/betwinner?src=pillar-casa-apostas-bottom"
              variant="banner"
              className="my-8 not-prose"
            />

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
