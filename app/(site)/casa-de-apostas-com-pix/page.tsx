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
  title: "Casa de apostas com PIX — depósito e saque via PIX 2026",
  description:
    "Casa de apostas com PIX no Brasil: depósito PIX, saque via PIX, limites, tempo e como escolher. Guia BetWinner testado.",
  path: "/casa-de-apostas-com-pix",
});

const FAQ = [
  {
    question: "Toda casa de apostas aceita PIX?",
    answer:
      "A maioria das casas que atendem brasileiros oferece PIX, mas limites e tempos variam. Operadoras SPA e internacionais costumam integrar PIX como método principal.",
  },
  {
    question: "Qual o depósito PIX mínimo na BetWinner?",
    answer: `${BETWINNER.minDeposit}. O crédito costuma cair em 1–5 minutos, sem taxa da casa.`,
  },
  {
    question: "Quanto tempo leva o saque via PIX?",
    answer: `Na BetWinner, em média ${BETWINNER.payoutTime} após verificação da conta. A chave PIX deve ser do mesmo CPF do titular.`,
  },
];

export default function CasaDeApostasComPixPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Casa de apostas com PIX", url: "/casa-de-apostas-com-pix" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Casa de apostas", href: "/casa-de-apostas" },
            { label: "Com PIX" },
          ]}
        />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Casa de apostas com PIX — depósito e saque no Brasil
          </h1>
          <PageUpdated date={PAGE_UPDATED.casaPix} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            Por que PIX virou padrão nas <strong className="text-text">casas de apostas</strong> brasileiras e o que observar no depósito PIX e saque via PIX.
          </p>

          <AffiliateOfferCard
            href="/go/betwinner?src=pillar-pix-top"
            variant="compact"
            className="my-8 shadow-xl"
          />

          <article className="prose-content">
            <h2>Depósito PIX — o que esperar</h2>
            <ul>
              <li>Crédito em minutos (geralmente 1–5 min)</li>
              <li>Sem taxa da casa na maioria das plataformas</li>
              <li>QR Code ou copia-e-cola no app do banco</li>
              <li>Depósito mínimo a partir de {BETWINNER.minDeposit} na BetWinner</li>
            </ul>

            <h2>Saque via PIX — cuidados</h2>
            <ul>
              <li>Verificação KYC (RG/CNH + selfie) antes do primeiro saque</li>
              <li>Chave PIX no mesmo CPF da conta</li>
              <li>Tempos variam conforme valor e histórico da conta</li>
            </ul>

            <p>
              Passo a passo completo na BetWinner: <Link href="/pix">guia depósito e saque via PIX →</Link>
              {" · "}
              <Link href="/cadastro">cadastro com PIX →</Link>
            </p>

            <AffiliateOfferCard
              href="/go/betwinner?src=pillar-pix-bottom"
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
