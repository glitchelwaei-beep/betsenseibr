import { ButtonLink } from "@/components/ui/button";
import { BETWINNER } from "@/lib/partner";

type AffiliateCtaProps = {
  title?: string;
  body?: string;
  href?: string;
  ctaLabel?: string;
};

export function AffiliateCta({
  title = `Praticar com disciplina na ${BETWINNER.name}`,
  body = `Depósito a partir de ${BETWINNER.minDeposit} via PIX, app em português e acompanhamento da banca com calma — não com pressa.`,
  href = "/cadastro",
  ctaLabel = "Ver guia de cadastro",
}: AffiliateCtaProps) {
  return (
    <aside className="not-prose my-10 rounded-2xl border border-brand/30 bg-bg-elevated p-6 sm:p-8 shadow-[0_10px_60px_-15px_rgba(249,115,22,0.2)]">
      <p className="font-display text-xl font-extrabold tracking-tight text-text sm:text-2xl">
        {title}
      </p>
      <p className="mt-2 text-text-muted leading-relaxed">{body}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <ButtonLink href={href}>{ctaLabel}</ButtonLink>
        <ButtonLink href="/betwinner" variant="outline">
          Análise {BETWINNER.name}
        </ButtonLink>
      </div>
    </aside>
  );
}
