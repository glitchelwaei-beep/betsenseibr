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
  title: "Como se cadastrar na BetWinner — passo a passo 2026",
  description: "Tutorial completo de cadastro na BetWinner Brasil: telefone +55, CPF, código promocional BETSENSEI26, verificação. Em menos de 2 minutos.",
  path: "/cadastro",
});

const FAQ = [
  {
    question: "Preciso de CPF para me cadastrar na BetWinner?",
    answer: "Sim. A BetWinner exige CPF para criar conta de jogadores brasileiros — usado para verificação de identidade antes do primeiro saque.",
  },
  {
    question: "Posso ter mais de uma conta na BetWinner?",
    answer: "Não. Os termos de uso permitem apenas uma conta por CPF, e-mail e endereço IP. Tentativas de criar contas múltiplas resultam em bloqueio e confisco do saldo.",
  },
  {
    question: "Quanto tempo leva a verificação (KYC)?",
    answer: "Após enviar RG/CNH e selfie, a verificação leva de 24 a 72 horas. Você pode apostar antes da verificação, mas não pode sacar.",
  },
];

export default function CadastroPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: "/" },
          { name: "Cadastro", url: "/cadastro" },
        ])}
      />
      <JsonLd data={faqSchema(FAQ)} />
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Cadastro" }]} />
      </Container>
      <section className="py-10">
        <Container className="max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Como se cadastrar na BetWinner
          </h1>
          <PageUpdated date={PAGE_UPDATED.cadastro} className="mt-2" />
          <p className="mt-4 text-lg text-text-muted">
            Cadastro em 2 minutos: telefone, CPF, código promocional <strong className="font-mono text-brand">{BETWINNER.promoCode}</strong>. Tutorial passo a passo com prints.
          </p>

          <div className="my-8 rounded-2xl border border-brand/30 bg-brand/5 p-6">
            <p className="text-text-muted">
              <strong className="text-text">Antes de começar:</strong> tenha em mãos seu CPF, número de telefone +55 e uma chave PIX que você usará para depósitos e saques (importante: o titular do PIX precisa ser igual ao titular da conta).
            </p>
            <ButtonLink href="/go/betwinner?src=cadastro-top" external size="lg" variant="primary" className="mt-4 w-full sm:w-auto">
              Abrir BetWinner para cadastrar →
            </ButtonLink>
          </div>

          <article className="prose-content">
            <h2>Passo 1 — Abrir o site oficial</h2>
            <p>
              Use <a href="/go/betwinner?src=cadastro-step1">nosso link verificado</a>. Isso garante que você acessa o site
              correto e que o código promocional seja registrado. Cuidado com sites clones que copiam o visual da BetWinner.
            </p>

            <h2>Passo 2 — Clicar em "Registrar"</h2>
            <p>
              Botão verde no canto superior direito. Aparecem 4 opções:
            </p>
            <ul>
              <li><strong>Em um clique</strong> — o mais rápido (recomendado)</li>
              <li><strong>Por telefone</strong> — confirmação por SMS</li>
              <li><strong>Por e-mail</strong> — confirmação por link</li>
              <li><strong>Por rede social</strong> — Google, Telegram, etc.</li>
            </ul>

            <h2>Passo 3 — Preencher os dados</h2>
            <ul>
              <li><strong>País:</strong> Brasil</li>
              <li><strong>Moeda:</strong> BRL (Real)</li>
              <li><strong>Telefone:</strong> +55 (com DDD)</li>
              <li><strong>E-mail:</strong> válido e ativo</li>
              <li><strong>CPF:</strong> obrigatório para apostadores brasileiros</li>
              <li><strong>Senha:</strong> mín. 8 caracteres com números e letras</li>
            </ul>

            <h2>Passo 4 — Aplicar o código promocional {BETWINNER.promoCode}</h2>
            <p>
              No mesmo formulário, há um campo <strong>"Código de promoção"</strong>. Insira <strong>{BETWINNER.promoCode}</strong> para ativar {BETWINNER.bonusHeadline.toLowerCase()} ({BETWINNER.bonusContext}).
            </p>

            <h2>Passo 5 — Confirmar telefone por SMS</h2>
            <p>
              Você recebe um código de 6 dígitos por SMS. Insira-o no site para confirmar a conta.
            </p>

            <h2>Passo 6 — Fazer o primeiro depósito via PIX</h2>
            <p>
              Acesse "Depositar", selecione PIX, copie a chave ou escaneie o QR Code com o app do seu banco. Depósito mínimo: {BETWINNER.minDeposit}. O bônus é creditado automaticamente.
            </p>

            <h2>Passo 7 — Verificação (KYC) antes do primeiro saque</h2>
            <p>
              Vá em <strong>Perfil → Verificação</strong> e envie:
            </p>
            <ul>
              <li>Foto frente e verso do RG ou CNH</li>
              <li>Selfie segurando o documento ao lado do rosto</li>
              <li>Comprovante de residência (conta de luz, fatura) — opcional, pedido para saques grandes</li>
            </ul>
            <p>
              A verificação demora 24–72 horas. Sem ela você consegue apostar, mas não pode sacar.
            </p>

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
