import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageUpdated } from "@/components/site/page-updated";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { BETWINNER } from "@/lib/partner";
import { PAGE_UPDATED } from "@/lib/editorial";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Aposta ao vivo (live betting) na BetWinner — guia 2026",
  description: "Como funciona a aposta ao vivo (in-play) na BetWinner Brasil: transmissões, cash out, estratégias e diferenças vs. pré-jogo.",
  path: "/aposta-ao-vivo",
});

const FAQ = [
  {
    question: "O que é aposta ao vivo (in-play)?",
    answer:
      "Aposta ao vivo é apostar com a partida em andamento. As odds mudam segundo a segundo conforme gols, cartões, escanteios e posse de bola — diferente da aposta pré-jogo, em que as odds são fixas no momento da aposta.",
  },
  {
    question: "Como funciona o cash out na BetWinner?",
    answer:
      "Durante a partida, acesse Minhas apostas, veja o valor oferecido e clique em Cash out para encerrar a aposta antes do fim do jogo. O valor é creditado na hora. O cash out parcial permite fechar parte da aposta e deixar o restante correndo.",
  },
  {
    question: "A BetWinner tem transmissão ao vivo?",
    answer:
      "Sim. A BetWinner oferece live streaming integrado para muitos eventos (dependendo dos direitos de transmissão), além de centro de estatísticas em tempo real e notificações de odds no app.",
  },
  {
    question: "Quando evitar apostas ao vivo?",
    answer:
      "Evite quando a conexão estiver instável, quando não estiver assistindo à partida, após sequência de perdas ou quando houver alta carga emocional (por exemplo, apostar no time do coração).",
  },
];

export default function ApostaAoVivoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Aposta ao vivo", url: "/aposta-ao-vivo" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Aposta ao vivo" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Aposta ao vivo na BetWinner
          </h1>
          <PageUpdated date={PAGE_UPDATED.live} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            Apostar com a partida rolando, transmissões integradas e cash out. Como funciona e quando vale a pena.
          </p>

          <article className="prose-content mt-8">
            <h2>O que é aposta ao vivo (in-play)</h2>
            <p>
              Aposta ao vivo é apostar com a partida em andamento. As odds mudam segundo a segundo conforme o jogo evolui:
              gol marcado, cartão, escanteio, posse de bola, lesão. Diferente da aposta pré-jogo, você usa o que está vendo
              para tomar decisões.
            </p>

            <h2>Recursos da BetWinner para apostas ao vivo</h2>
            <ul>
              <li><strong>Live streaming integrado:</strong> assistir à partida direto na plataforma (depende dos direitos)</li>
              <li><strong>Centro de estatísticas:</strong> posse, finalizações, escanteios em tempo real</li>
              <li><strong>Cash out total ou parcial:</strong> encerrar a aposta antes do fim do jogo</li>
              <li><strong>Edição de aposta:</strong> remover ou trocar uma seleção em apostas múltiplas (antes do início)</li>
              <li><strong>Notificações push:</strong> alertas de odds significativas (no app)</li>
            </ul>

            <h2>Como usar o cash out</h2>
            <ol>
              <li>Acesse "Minhas apostas" durante a partida</li>
              <li>Veja o valor de cash out oferecido (geralmente menor que o lucro total potencial)</li>
              <li>Clique em "Cash out" para encerrar imediatamente</li>
              <li>O valor é creditado no saldo na hora</li>
            </ol>
            <p>
              O cash out parcial permite encerrar parte da aposta e deixar o restante correndo.
            </p>

            <h2>Estratégias básicas para in-play</h2>
            <ul>
              <li><strong>Espere o primeiro tempo:</strong> as odds mais valiosas geralmente aparecem após 30–60 minutos de jogo</li>
              <li><strong>Time levou gol cedo:</strong> odds para empate ou virada inflam — pode ser valor</li>
              <li><strong>Atenção a expulsões:</strong> mercado de "mais/menos gols" muda imediatamente após cartão vermelho</li>
              <li><strong>Cuidado com odds congeladas:</strong> a casa pausa odds em momentos críticos (pênaltis, VAR). Não tente "burlar"</li>
              <li><strong>Cash out não é grátis:</strong> a casa sempre cobra uma margem. Use estrategicamente</li>
            </ul>

            <h2>Quando não apostar ao vivo</h2>
            <ul>
              <li>Sem conexão estável (delay pode te custar caro)</li>
              <li>Sem assistir à partida (você está apenas adivinhando)</li>
              <li>Após perdas — emoção piora decisões in-play</li>
              <li>Com alta dependência emocional do resultado (apostas no time do coração)</li>
            </ul>

            <div className="my-8 not-prose rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/10 to-transparent p-6">
              <h3 className="font-display text-xl font-bold text-text mb-2">Testar apostas ao vivo</h3>
              <p className="text-text-muted mb-4">
                {BETWINNER.bonusHeadline} com código <span className="font-mono font-bold text-brand">{BETWINNER.promoCode}</span>.
              </p>
              <ButtonLink href="/go/betwinner?src=live-page" external size="lg" variant="primary">
                Cadastrar e apostar →
              </ButtonLink>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
