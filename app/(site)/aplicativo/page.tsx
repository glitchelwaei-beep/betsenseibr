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
  title: "App de apostas e aplicativo de apostas esportivas — BetWinner 2026",
  description:
    "App de apostas esportivas no celular: baixar APK Android, instalar no iPhone e usar o site mobile da BetWinner. Passo a passo para brasileiros.",
  path: "/aplicativo",
});

const FAQ = [
  {
    question: "Por que a BetWinner não está no Google Play?",
    answer:
      "O Google Play proíbe aplicativos de apostas com dinheiro real em muitos países, incluindo o Brasil. Por isso a BetWinner — assim como praticamente todas as casas de apostas — distribui o app como arquivo APK direto do site oficial.",
  },
  {
    question: "É seguro baixar o APK da BetWinner?",
    answer:
      "Sim, desde que você baixe somente do site oficial. Use nosso link verificado. Depois, no Android, será preciso habilitar a instalação de fontes desconhecidas só uma vez para esse APK.",
  },
  {
    question: "Como instalar no iPhone (iOS)?",
    answer:
      "Sim, há versão para iOS. A instalação acontece via perfil de configuração da Apple (mais detalhes no guia abaixo). É um processo legítimo, mas o iPhone vai pedir confirmação extra de segurança.",
  },
  {
    question: "Qual o melhor app de apostas esportivas para brasileiros?",
    answer:
      "Depende do que você prioriza. A BetWinner oferece app em português com PIX, apostas ao vivo, transmissões e bônus de boas-vindas — baixe o APK no Android ou instale via perfil Apple no iOS.",
  },
  {
    question: "Como usar a BetWinner mobile no celular?",
    answer:
      "Abra o site oficial no navegador do celular (Chrome ou Safari) para a versão mobile, ou baixe o app nativo: APK no Android e perfil Apple no iOS. Ambos estão em português e permitem apostas ao vivo, PIX e cadastro com o código promocional.",
  },
  {
    question: "Quais os requisitos mínimos?",
    answer:
      "Android 7.0+ com pelo menos 2 GB de RAM e ~80 MB de espaço livre. iOS 12+ em iPhone 6s ou superior.",
  },
];

export default function AplicativoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Aplicativo", url: "/aplicativo" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Aplicativo" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            App de apostas esportivas — BetWinner no celular
          </h1>
          <PageUpdated date={PAGE_UPDATED.aplicativo} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            Aplicativo de apostas esportivas em português para Android (APK) e iPhone (iOS), além do site mobile no navegador.
          </p>

          <div className="my-8 rounded-2xl border border-border bg-bg-elevated p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl font-display text-base font-extrabold text-white" style={{ backgroundColor: BETWINNER.brandColor }}>
                BW
              </div>
              <div>
                <div className="font-display text-2xl font-bold">BetWinner APK</div>
                <div className="text-sm text-text-muted">Android 7.0+ • ~80 MB • PT-BR</div>
              </div>
            </div>
            <ButtonLink href="/go/bw-apk?src=apk-page" external size="lg" variant="primary" className="mt-6 w-full">
              Baixar no site oficial →
            </ButtonLink>
            <p className="mt-3 text-xs text-text-dim text-center">
              O link leva ao site oficial da BetWinner. Não hospedamos o APK em nossos servidores.
            </p>
          </div>

          <article className="prose-content">
            <h2>Instalação no Android — passo a passo</h2>
            <ol>
              <li>Abra <strong>Configurações → Segurança</strong> (ou "Apps e notificações") e permita instalações de fontes desconhecidas para o seu navegador</li>
              <li>Clique no botão "Baixar no site oficial" acima</li>
              <li>No site da BetWinner, clique em "Baixar para Android" — o APK começa a baixar</li>
              <li>Abra o arquivo baixado — o sistema vai pedir confirmação</li>
              <li>Confirme a instalação e aguarde (~30 segundos)</li>
              <li>Abra o app e faça login ou cadastre-se com o código <strong>{BETWINNER.promoCode}</strong></li>
            </ol>

            <h2>Instalação no iPhone (iOS)</h2>
            <ol>
              <li>Abra o <a href="/go/bw-apk?src=apk-ios">site oficial da BetWinner</a> no Safari</li>
              <li>Clique em "Baixar para iPhone"</li>
              <li>Aceite baixar o perfil de configuração da Apple</li>
              <li>Vá em <strong>Configurações → Geral → VPN e gerenciamento de dispositivo</strong> e confie no perfil</li>
              <li>O ícone do app aparece na tela inicial</li>
            </ol>

            <h2>Requisitos mínimos</h2>
            <ul>
              <li><strong>Android:</strong> versão 7.0 ou superior, 2 GB RAM, ~80 MB livres</li>
              <li><strong>iOS:</strong> 12 ou superior, iPhone 6s ou mais novo</li>
              <li><strong>Internet:</strong> Wi-Fi ou 4G/5G estável para apostas ao vivo</li>
            </ul>

            <h2>BetWinner mobile: site vs app</h2>
            <p>
              Você pode apostar pela BetWinner mobile de duas formas: pelo <strong>site mobile</strong> no navegador do celular
              (Chrome, Safari) ou pelo <strong>app nativo</strong> (APK no Android, perfil Apple no iOS). O app oferece notificações
              push, login biométrico e transmissões mais estáveis; o site mobile não exige instalação.
            </p>

            <h2>Recursos do app vs. site mobile</h2>
            <ul>
              <li>Notificações push de odds e resultados</li>
              <li>Transmissões ao vivo integradas (mais estáveis no app)</li>
              <li>Login por Touch ID / Face ID</li>
              <li>Modo escuro nativo</li>
              <li>Histórico offline de apostas</li>
            </ul>

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
