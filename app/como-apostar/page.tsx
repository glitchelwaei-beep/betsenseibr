import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Como apostar em esportes (guia para iniciantes 2026)",
  description: "Guia completo de apostas esportivas para iniciantes no Brasil: tipos de aposta, odds, gestão de banca e estratégias. Tudo em português.",
  path: "/como-apostar",
});

const FAQ = [
  {
    question: "Quanto preciso para começar a apostar?",
    answer: `O depósito mínimo na BetWinner é ${BETWINNER.minDeposit}. Mas para começar com algum aprendizado real, recomendamos um bankroll inicial de pelo menos R$ 100, com apostas de R$ 2–5 cada (2–5% do bankroll).`,
  },
  {
    question: "É possível viver de apostas esportivas?",
    answer: "Para a grande maioria das pessoas, não. Estatisticamente, mais de 95% dos apostadores perdem dinheiro a longo prazo. Quem ganha consistentemente trata como negócio: estuda muito, gerencia banca com rigor, e aceita variância. Encare apostas como entretenimento, não como investimento.",
  },
  {
    question: "O que significa odd 2.00?",
    answer: "Odd 2.00 significa que sua aposta é dobrada se acertar. Apostar R$ 10 com odd 2.00 retorna R$ 20 (lucro líquido de R$ 10). A casa estima que a probabilidade do evento acontecer é de 50%.",
  },
];

export default function ComoApostarPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Como apostar", url: "/como-apostar" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Como apostar" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Como apostar em esportes — guia para iniciantes
          </h1>
          <p className="mt-4 text-lg text-text-muted">
            Do glossário básico à gestão de banca. Tudo o que um apostador iniciante precisa saber antes de fazer a primeira aposta.
          </p>

          <article className="prose-content mt-8">
            <h2>1. Entendendo as odds</h2>
            <p>
              As odds (cotações) mostram quanto você ganha por cada R$ 1 apostado. Existem três formatos principais; no Brasil, o decimal é o padrão:
            </p>
            <ul>
              <li><strong>Odd 1.50:</strong> R$ 10 apostados retornam R$ 15 (lucro de R$ 5)</li>
              <li><strong>Odd 2.00:</strong> dobra o valor (R$ 10 → R$ 20)</li>
              <li><strong>Odd 3.50:</strong> R$ 10 → R$ 35</li>
            </ul>
            <p>
              <strong>Probabilidade implícita:</strong> 1 ÷ odd × 100. Uma odd 2.00 implica 50% de chance. Uma odd 4.00 implica 25%.
            </p>

            <h2>2. Tipos de aposta para iniciantes</h2>
            <ul>
              <li><strong>Simples (single):</strong> uma seleção, mais simples e segura para começar</li>
              <li><strong>Vencedor da partida (1X2):</strong> qual time vence ou empate (futebol)</li>
              <li><strong>Mais/menos gols:</strong> total de gols acima ou abaixo de uma linha (mercado popular)</li>
              <li><strong>Ambas marcam:</strong> sim/não para os dois times marcarem</li>
              <li><strong>Combinada (múltipla):</strong> várias seleções — odds maiores mas chance menor</li>
            </ul>
            <p>
              <strong>Dica para iniciante:</strong> comece com apostas simples (1X2 ou mais/menos gols) em ligas que você acompanha. Evite múltiplas grandes nos primeiros 100 jogos.
            </p>

            <h2>3. Gestão de banca — a regra mais importante</h2>
            <p>
              Banca é o dinheiro que você separou para apostar. Regras de gestão de banca para iniciantes:
            </p>
            <ul>
              <li>Use só dinheiro que você está disposto a perder</li>
              <li><strong>Nunca aposte mais de 2–5%</strong> da banca em uma única aposta</li>
              <li>Mantenha banca em conta separada da BetWinner — não misture com salário</li>
              <li>Defina um "stop loss" mensal: se perder X% da banca, pare por 30 dias</li>
              <li>Não tente recuperar perdas com apostas maiores ("chase losses") — é o caminho mais rápido para falência</li>
            </ul>

            <h2>4. Onde apostar — escolhendo a casa</h2>
            <p>
              Critérios para escolher uma casa de apostas:
            </p>
            <ul>
              <li>Métodos de pagamento brasileiros (PIX é fundamental)</li>
              <li>Velocidade de saque</li>
              <li>Cobertura dos esportes que você acompanha</li>
              <li>Qualidade das odds (comparar entre casas)</li>
              <li>Suporte em português</li>
              <li>Reputação online (reclamações, prazos de saque)</li>
            </ul>

            <h2>5. Análise antes de apostar</h2>
            <p>
              Antes de fazer uma aposta, considere:
            </p>
            <ul>
              <li>Forma recente dos dois times (últimos 5–10 jogos)</li>
              <li>Confrontos diretos (histórico)</li>
              <li>Lesões e suspensões (ver a escalação 1h antes)</li>
              <li>Mando de campo e ambiente (gramado, clima, torcida)</li>
              <li>Importância do jogo para cada lado</li>
              <li>Calendário (jogo "no meio" entre Libertadores e Brasileirão = poupança de titulares)</li>
            </ul>

            <h2>6. Erros comuns de iniciantes</h2>
            <ul>
              <li><strong>Apostar com o coração:</strong> torcer pelo time não muda a probabilidade</li>
              <li><strong>Apostas grandes em odds baixas:</strong> "aquela aposta certa" nunca é certa</li>
              <li><strong>Múltiplas com 8+ seleções:</strong> matematicamente um péssimo negócio</li>
              <li><strong>Não comparar odds:</strong> diferença de 0.10 em odd 2.00 é 5% de retorno extra a longo prazo</li>
              <li><strong>Apostar bêbado ou irritado:</strong> emoção é o pior conselheiro</li>
            </ul>

            <h2>7. Quando parar</h2>
            <p>
              Pare imediatamente se:
            </p>
            <ul>
              <li>Está apostando mais do que planejou</li>
              <li>Está usando dinheiro emprestado</li>
              <li>Está escondendo apostas de familiares</li>
              <li>Apostas estão atrapalhando trabalho, sono ou relacionamentos</li>
            </ul>
            <p>
              Procure ajuda em <strong>Jogadores Anônimos Brasil</strong> ou disque <strong>188 (CVV)</strong>. Mais informações na nossa página de jogo responsável.
            </p>

            <div className="my-8 not-prose rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6">
              <h3 className="font-display text-xl font-bold text-text mb-2">Começar com cautela</h3>
              <p className="text-text-muted mb-4">
                Depósito mínimo de {BETWINNER.minDeposit}. Use o código <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span> para o bônus de boas-vindas.
              </p>
              <ButtonLink href="/go/betwinner?src=como-apostar" external size="lg" variant="primary">
                Cadastrar na BetWinner →
              </ButtonLink>
            </div>

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
