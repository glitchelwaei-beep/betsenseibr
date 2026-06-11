import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { PageUpdated } from "@/components/site/page-updated";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { PAGE_UPDATED } from "@/lib/editorial";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Política de privacidade",
  description: `Política de privacidade do ${SITE.name}: quais dados coletamos, cookies e seus direitos (LGPD).`,
  path: "/politica-de-privacidade",
});

export default function PrivacidadePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Privacidade", url: "/politica-de-privacidade" },
        ])}
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Privacidade" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Política de privacidade
          </h1>
          <PageUpdated date={PAGE_UPDATED.privacidade} showAuthor={false} />
          <article className="prose-content mt-6">
            <p>
              O <strong>{SITE.name}</strong> respeita sua privacidade e processa dados conforme a Lei Geral de Proteção de
              Dados (LGPD — Lei 13.709/2018).
            </p>

            <h2>Quais dados coletamos</h2>
            <p>
              Este site é estático e não exige cadastro. Coletamos apenas o mínimo necessário para operação técnica:
            </p>
            <ul>
              <li>
                Dados técnicos que seu navegador envia a qualquer site (tipo de dispositivo, idioma, endereço IP),
                processados pelo servidor de hospedagem para entregar as páginas
              </li>
              <li>
                Se você nos contatar por e-mail ou Telegram, recebemos o conteúdo da mensagem e seu endereço ou identificador
                de contato
              </li>
            </ul>
            <p>
              <strong>Não utilizamos ferramentas de analytics de terceiros</strong> (como Google Analytics) neste site no
              momento.
            </p>

            <h2>Como usamos os dados</h2>
            <ul>
              <li>Operar e proteger o site (logs técnicos do provedor de hospedagem)</li>
              <li>Responder ao seu contato por e-mail ou Telegram</li>
              <li>
                Atribuir conversões a parceiros afiliados (apenas a informação de que houve um cadastro via nosso link —
                sem dados pessoais seus)
              </li>
            </ul>

            <h2>Serviços de terceiros</h2>
            <p>
              Quando você clica em links de afiliados (BetWinner), cookies e dados podem ser instalados{" "}
              <strong>no site da BetWinner</strong>, sujeitos à política de privacidade deles — não no {SITE.name}.
            </p>

            <h2>Seus direitos (LGPD)</h2>
            <p>Conforme a LGPD, você pode:</p>
            <ul>
              <li>Solicitar acesso aos dados que armazenarmos sobre você</li>
              <li>Solicitar correção ou exclusão de dados</li>
              <li>Cancelar comunicações</li>
              <li>Apresentar reclamação à ANPD (Autoridade Nacional de Proteção de Dados)</li>
            </ul>
            <p>
              Para exercer seus direitos, escreva para{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Respondemos em até 15 dias úteis.
            </p>

            <h2>Cookies</h2>
            <p>
              O {SITE.name} não define cookies de rastreamento ou publicidade próprios. Seu navegador pode armazenar cookies
              essenciais do provedor de hospedagem. Cookies de afiliados só são definidos quando você acessa a BetWinner
              pelos nossos links.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
