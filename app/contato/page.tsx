import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contato",
  description: `Entre em contato com o ${SITE.name}: e-mail, Telegram e formulário.`,
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Contato", url: "/contato" },
        ])}
      />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Contato" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contato
          </h1>
          <article className="prose-content mt-6">
            <p>Para correções de conteúdo, feedback ou parcerias:</p>
            <ul>
              <li><strong>E-mail:</strong> contato@{SITE.domain}</li>
              <li><strong>Telegram:</strong> <a href={SITE.telegram} target="_blank" rel="noopener noreferrer">@betsensei_br</a></li>
              <li><strong>Instagram:</strong> <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">@betsensei_br</a></li>
            </ul>

            <h2>Suporte técnico da BetWinner</h2>
            <p>
              Se você está com problema na BetWinner (depósito, saque, conta bloqueada), nós não somos a casa — contate o
              suporte oficial:
            </p>
            <ul>
              <li>Chat ao vivo no site da BetWinner (24/7, em português)</li>
              <li>E-mail: info-br@betwinner.com</li>
            </ul>

            <h2>Imprensa e parcerias</h2>
            <p>
              Para parcerias editoriais (guest posts, conteúdo patrocinado), envie um e-mail para parcerias@{SITE.domain}.
              Avaliamos caso a caso e mantemos transparência total sobre conteúdos patrocinados.
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
