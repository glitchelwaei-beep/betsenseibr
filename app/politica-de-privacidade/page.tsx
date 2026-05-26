import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Política de privacidade",
  description: `Política de privacidade do ${SITE.name}: quais dados coletamos e como usamos. LGPD compliant.`,
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
          <article className="prose-content mt-6">
            <p>
              O <strong>{SITE.name}</strong> respeita sua privacidade e processa dados conforme a Lei Geral de Proteção de
              Dados (LGPD — Lei 13.709/2018) e diretrizes do GDPR.
            </p>

            <h2>Quais dados coletamos</h2>
            <ul>
              <li>Analytics anônimo de visitas (páginas visitadas, tempo, origem)</li>
              <li>Informações técnicas do navegador (tipo, resolução, IP anonimizado)</li>
              <li>Cookies para análise e preferências</li>
              <li>Dados de formulários (se você nos contatar)</li>
            </ul>

            <h2>Como usamos os dados</h2>
            <ul>
              <li>Analisar tráfego e melhorar o conteúdo do site</li>
              <li>Responder ao seu contato</li>
              <li>Atribuir conversões a parceiros (apenas a informação de "houve uma conversão", sem dados pessoais)</li>
            </ul>

            <h2>Serviços de terceiros</h2>
            <p>
              Usamos analytics independente (sem repasse para Google). Quando você clica em links de afiliados (BetWinner),
              cookies do parceiro são instalados <strong>na BetWinner</strong>, não no nosso site.
            </p>

            <h2>Seus direitos (LGPD)</h2>
            <p>
              Conforme a LGPD, você pode:
            </p>
            <ul>
              <li>Solicitar acesso aos dados armazenados</li>
              <li>Solicitar exclusão de dados</li>
              <li>Cancelar comunicações</li>
              <li>Apresentar reclamação à ANPD (Autoridade Nacional de Proteção de Dados)</li>
            </ul>
            <p>
              Para exercer seus direitos, contate a gente em privacidade@{SITE.domain}. Respondemos em até 15 dias.
            </p>

            <h2>Cookies</h2>
            <p>
              Usamos cookies essenciais (funcionamento do site) e analíticos (sem identificação pessoal). Você pode
              desativá-los no seu navegador.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
