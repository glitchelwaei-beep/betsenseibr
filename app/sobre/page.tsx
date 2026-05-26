import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sobre o projeto",
  description: `Sobre o ${SITE.name}: como avaliamos a BetWinner, política editorial e equipe.`,
  path: "/sobre",
});

export default function SobrePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Sobre", url: "/sobre" },
        ])}
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Sobre" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Sobre o {SITE.name}
          </h1>
          <article className="prose-content mt-6">
            <p>
              O <strong>{SITE.name}</strong> é um portal independente focado em uma única casa de apostas: a <strong>BetWinner</strong>.
              Em vez de cobrir 50 operadoras superficialmente, escolhemos analisar uma a fundo. Cada página deste site é
              baseada em uso real da plataforma por nós: cadastro, depósito via PIX, apostas, saque e contato com suporte.
            </p>

            <h2>Por que apenas a BetWinner?</h2>
            <p>
              Acreditamos que o melhor serviço ao leitor brasileiro é uma análise vertical e honesta. A BetWinner foi escolhida por:
            </p>
            <ul>
              <li>Histórico desde 2018 com presença consolidada no Brasil</li>
              <li>Aceita PIX nativamente — fundamental para apostadores brasileiros</li>
              <li>Cobertura completa do Campeonato Brasileiro e Libertadores</li>
              <li>App e atendimento 100% em português</li>
              <li>Pode oferecer bônus de boas-vindas (proibidos para casas com licença SPA)</li>
            </ul>
            <p>
              Isso não significa que a BetWinner é a melhor para todos. Ela tem desvantagens — a principal sendo a falta
              de licença brasileira da SPA. Explicamos isso abertamente em cada página relevante.
            </p>

            <h2>Como avaliamos</h2>
            <ul>
              <li><strong>Cadastro real:</strong> criamos conta com CPF verdadeiro, completamos KYC</li>
              <li><strong>Depósito real:</strong> testamos PIX, cartão e outros métodos com valores próprios</li>
              <li><strong>Apostas reais:</strong> em mercados que conhecemos, com gestão de banca</li>
              <li><strong>Saque real:</strong> testamos tempo de saque com diferentes valores</li>
              <li><strong>Suporte real:</strong> contatamos chat, e-mail e medimos tempos de resposta</li>
            </ul>

            <h2>Como ganhamos dinheiro</h2>
            <p>
              O <strong>{SITE.name}</strong> recebe comissão da BetWinner quando você se cadastra através dos nossos
              links e faz um depósito. Isso é chamado de "modelo de afiliação". Não cobramos nada de você — o seu bônus
              de cadastro é o mesmo (ou maior, com o código BETBRMAX) do que se você fosse direto.
            </p>
            <p>
              <strong>Importante:</strong> a comissão não influencia nossa avaliação. Apontamos os defeitos da BetWinner
              (como a falta de licença SPA) na mesma medida em que destacamos as qualidades. Leia nossa{" "}
              <a href="/divulgacao-de-afiliacao">divulgação de afiliação completa</a>.
            </p>

            <h2>Política editorial</h2>
            <p>
              Cada conteúdo no site segue nossa política de honestidade:
            </p>
            <ul>
              <li>Sem promessas de "ganhos garantidos"</li>
              <li>Sem estratégias mágicas para vencer apostas</li>
              <li>Reconhecimento de que a maioria dos apostadores perde a longo prazo</li>
              <li>Lembretes de jogo responsável em todas as páginas relevantes</li>
              <li>Idade mínima 18+ destacada</li>
            </ul>

            <h2>Contato</h2>
            <p>
              Para feedback, correções ou parcerias, use a <a href="/contato">página de contato</a>.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
