import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Jogo responsável — apostas, sinais de vício e canais de ajuda no Brasil",
  description: "Apostas devem ser entretenimento, não problema. Sinais de jogo problemático, recursos de autoexclusão e canais de ajuda no Brasil.",
  path: "/jogo-responsavel",
});

export default function JogoResponsavelPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Jogo responsável", url: "/jogo-responsavel" },
        ])}
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Jogo responsável" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Jogo responsável
          </h1>

          <div className="my-6 rounded-2xl border border-warning/30 bg-warning/5 p-5 text-text-muted leading-relaxed">
            <strong className="text-warning">Apostas são entretenimento, não fonte de renda.</strong> Aposte apenas o que você
            está disposto a perder. Se você sente que está perdendo o controle, procure ajuda imediatamente.
          </div>

          <article className="prose-content">
            <h2>Quem pode apostar no Brasil</h2>
            <p>
              No Brasil, apostas esportivas online são permitidas para pessoas maiores de <strong>{SITE.ageRestriction} anos</strong>.
              Apostadores menores de idade têm contas bloqueadas e saldo confiscado pelas casas autorizadas.
            </p>

            <h2>Sinais de jogo problemático</h2>
            <p>
              Marque mentalmente quantos destes você apresenta:
            </p>
            <ul>
              <li>Aposto mais do que planejo</li>
              <li>Aumento as apostas para "recuperar" perdas (chase losses)</li>
              <li>Já peguei dinheiro emprestado para apostar</li>
              <li>Já vendi pertences para conseguir dinheiro para apostas</li>
              <li>Escondo apostas de familiares e amigos</li>
              <li>Fico ansioso ou irritado quando não consigo apostar</li>
              <li>Apostas atrapalham meu trabalho, estudo ou relacionamentos</li>
              <li>Já tentei parar e não consegui</li>
              <li>Penso em apostas o tempo todo</li>
            </ul>
            <p>
              <strong>3 ou mais sinais é motivo para preocupação.</strong> 5 ou mais é jogo patológico — procure ajuda profissional.
            </p>

            <h2>Como apostar com responsabilidade</h2>
            <ul>
              <li>Defina um orçamento mensal para apostas e nunca exceda</li>
              <li>Use uma conta bancária separada só para apostas</li>
              <li>Defina um limite diário de tempo na casa de apostas</li>
              <li>Não aposte sob efeito de álcool ou estresse emocional</li>
              <li>Não persiga perdas — quando perdeu o limite do dia, pare</li>
              <li>Faça pausas regulares — uma semana sem apostar por mês</li>
              <li>Trate apostas como ingresso de cinema: dinheiro que pode acabar</li>
            </ul>

            <h2>Ferramentas de autoexclusão</h2>
            <p>
              Tanto a BetWinner quanto outras casas oferecem ferramentas para limitar você mesmo:
            </p>
            <ul>
              <li><strong>Limite de depósito:</strong> diário, semanal ou mensal</li>
              <li><strong>Limite de aposta:</strong> valor máximo por aposta</li>
              <li><strong>Limite de tempo:</strong> sessão máxima diária</li>
              <li><strong>Pausa:</strong> bloqueio temporário da conta (24h, 7 dias, 30 dias)</li>
              <li><strong>Autoexclusão:</strong> bloqueio permanente da conta</li>
            </ul>
            <p>
              Para configurar, acesse <strong>Perfil → Jogo responsável</strong> na BetWinner.
            </p>

            <h2>Canais de ajuda no Brasil</h2>
            <ul>
              <li><strong>Jogadores Anônimos Brasil:</strong> grupos de apoio gratuitos em capitais e cidades grandes — <a href="https://www.jogadoresanonimos.com.br" target="_blank" rel="noopener noreferrer">jogadoresanonimos.com.br</a></li>
              <li><strong>CVV — Centro de Valorização da Vida:</strong> 188 (telefone gratuito, 24h)</li>
              <li><strong>Núcleo Comunitário Antoni: AMAR-ARRUDA</strong> em São Paulo, Rio, Belo Horizonte e outras capitais — tratamento para dependência de jogo</li>
              <li><strong>Centros de Atenção Psicossocial (CAPS):</strong> rede pública do SUS, busque o mais próximo no portal do Ministério da Saúde</li>
            </ul>

            <h2>Para familiares</h2>
            <p>
              Se alguém da sua família tem problema com jogo, você não está sozinho. Grupos como <strong>Jog-Anon</strong>
              ajudam familiares de jogadores compulsivos. Conversar com um psicólogo também é eficaz.
            </p>

            <p>
              No <strong>{SITE.name}</strong> seguimos princípios estritos: não usamos marketing agressivo, não prometemos
              "ganhos garantidos", e em todas as páginas há lembretes de jogo responsável e idade mínima de 18 anos.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
