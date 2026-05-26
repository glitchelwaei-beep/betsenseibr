import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Divulgação de afiliação",
  description: `Como o ${SITE.name} ganha dinheiro: divulgação completa do nosso programa de afiliação com a BetWinner.`,
  path: "/divulgacao-de-afiliacao",
});

export default function DivulgacaoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Divulgação", url: "/divulgacao-de-afiliacao" },
        ])}
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Divulgação de afiliação" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Divulgação de afiliação
          </h1>
          <article className="prose-content mt-6">
            <p>
              O <strong>{SITE.name}</strong> participa do programa de afiliados da BetWinner. Quando você se cadastra na
              BetWinner clicando nos nossos links e faz um depósito, recebemos uma comissão.
            </p>

            <h2>O que isso significa para você</h2>
            <ul>
              <li><strong>Custo zero:</strong> você não paga nada a mais. O bônus de boas-vindas é igual (ou maior, com o código <code>BETBRMAX</code>) do que se você acessasse direto</li>
              <li><strong>Sem influência editorial:</strong> a comissão não muda nossa avaliação. Apontamos defeitos da BetWinner abertamente</li>
              <li><strong>Sem dados compartilhados:</strong> só a informação "houve um cadastro" é repassada — sem dados pessoais</li>
            </ul>

            <h2>Como os links são identificados</h2>
            <p>
              Todos os links para a BetWinner usam <code>rel="sponsored noopener noreferrer"</code> conforme recomendações
              do Google. Cada link passa por uma URL de tracking interna (<code>/go/betwinner</code>) para que possamos
              identificar qual página gerou o cadastro.
            </p>

            <h2>Restrições de idade e jogo responsável</h2>
            <p>
              O conteúdo do site é destinado a maiores de {SITE.ageRestriction} anos. Jogos de apostas podem causar
              dependência. Se você ou alguém próximo apresenta sinais de problema, busque ajuda. Veja nossa página de{" "}
              <a href="/jogo-responsavel">jogo responsável</a>.
            </p>

            <h2>Por que apenas a BetWinner?</h2>
            <p>
              Optamos por focar em uma única casa em vez de cobrir 50 superficialmente. A BetWinner foi escolhida pelos
              critérios listados em <a href="/sobre">sobre o projeto</a>. Não recebemos pagamento para listar exclusivamente
              a BetWinner — é uma decisão editorial nossa.
            </p>

            <h2>Aviso sobre licenciamento</h2>
            <p>
              <strong>Importante:</strong> a BetWinner opera com licença internacional (Curaçao eGaming) e não está na
              lista oficial da SPA (Secretaria de Prêmios e Apostas) do Brasil. Apostadores brasileiros que usam a
              plataforma o fazem por conta e risco próprio, fora da regulamentação da Lei 14.790/2023.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
