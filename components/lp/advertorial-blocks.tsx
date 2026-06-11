import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { isExternalLpCta } from "@/components/lp/lp-cta-link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

type ArticleFigureProps = {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
  className?: string;
  light?: boolean;
};

export function ArticleFigure({
  src,
  alt,
  caption,
  priority = false,
  className,
  light = false,
}: ArticleFigureProps) {
  return (
    <figure className={cn("my-8", className)}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-zinc-200 shadow-sm">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="(max-width: 768px) 100vw, 680px"
          className="object-cover object-center"
        />
      </div>
      <figcaption
        className={cn(
          "mt-2 text-xs leading-relaxed",
          light ? "text-zinc-500" : "text-text-dim",
        )}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

type LpCoverHeaderProps = {
  coverSrc: string;
  coverAlt: string;
  eyebrow: string;
  title: string;
  subhead: React.ReactNode;
  meta: React.ReactNode;
  className?: string;
  imageClassName?: string;
};

/** LP header — full-bleed cover image with dark gradient and text overlay. */
export function LpCoverHeader({
  coverSrc,
  coverAlt,
  eyebrow,
  title,
  subhead,
  meta,
  className,
  imageClassName,
}: LpCoverHeaderProps) {
  return (
    <header
      className={cn(
        "relative min-h-[260px] overflow-hidden border-b border-border sm:min-h-[320px]",
        className,
      )}
    >
      <Image
        src={coverSrc}
        alt={coverAlt}
        fill
        priority
        sizes="100vw"
        className={cn("object-cover object-center", imageClassName)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/90 to-bg/55" aria-hidden />
      <Container className="relative z-10 max-w-[680px] py-8 sm:min-h-[280px] sm:py-10 sm:flex sm:flex-col sm:justify-end">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>
        <h1 className="mt-3 font-display text-[1.65rem] sm:text-4xl font-extrabold tracking-tight leading-[1.12] text-text">
          {title}
        </h1>
        <div className="mt-4 text-base sm:text-lg text-text-muted leading-relaxed">{subhead}</div>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-dim">
          {meta}
        </div>
      </Container>
    </header>
  );
}

type StickyMobileCtaProps = {
  href: string;
};

export function StickyMobileCta({ href }: StickyMobileCtaProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/95 p-3 backdrop-blur-md md:hidden shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.15)]">
      <ButtonLink
        href={href}
        external={isExternalLpCta(href)}
        openInNewTab={false}
        size="lg"
        className="w-full min-h-[52px] rounded-full text-sm uppercase tracking-wide shadow-lg"
      >
        Resgatar bônus na BetWinner
      </ButtonLink>
    </div>
  );
}

type MistakeCardProps = {
  n: number;
  title: string;
  body: string;
  label?: string;
};

export function MistakeCard({ n, title, body, label = "Erro comum" }: MistakeCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-orange-100 border-l-4 border-l-brand bg-gradient-to-r from-orange-50/90 to-white p-5 shadow-md shadow-brand/5 md:p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand font-display text-sm font-extrabold text-white shadow-sm md:h-11 md:w-11">
          {n}
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-wider text-brand">{label}</p>
          <h3 className="mt-1 font-display text-lg font-bold leading-snug text-zinc-900 md:text-xl">
            {title}
          </h3>
          <p className="mt-2 font-sans text-base leading-relaxed text-zinc-800 md:text-lg">{body}</p>
        </div>
      </div>
    </article>
  );
}

type FeatureCardProps = {
  title: string;
  body: string;
};

export function FeatureCard({ title, body }: FeatureCardProps) {
  return (
    <article className="h-full rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
      <h3 className="font-display text-base font-bold text-zinc-900 leading-snug">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{body}</p>
    </article>
  );
}

type EditorialCtaLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function EditorialCtaLink({ href, children, className }: EditorialCtaLinkProps) {
  return (
    <div className={cn("my-8 text-center", className)}>
      <ButtonLink
        href={href}
        external={isExternalLpCta(href)}
        openInNewTab={false}
        size="lg"
        className="min-h-[48px] rounded-full px-8"
      >
        {children}
      </ButtonLink>
    </div>
  );
}

type PixFlowStep = {
  label: string;
  sub: string;
};

type PixFlowStripProps = {
  steps: PixFlowStep[];
  className?: string;
};

/** Visual Cadastro → PIX → Apostar strip for PIX-focused LPs. */
export function PixFlowStrip({ steps, className }: PixFlowStripProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-1 sm:gap-2 rounded-xl border border-zinc-200 bg-white p-3 sm:p-4 shadow-sm",
        className,
      )}
      aria-label="Fluxo: cadastro, PIX e apostas"
    >
      {steps.map((step, i) => (
        <div key={step.label} className="relative flex flex-col items-center text-center px-1">
          {i > 0 ? (
            <span
              className="absolute -left-1 sm:-left-2 top-1/2 hidden sm:block -translate-y-1/2 text-zinc-300 text-sm"
              aria-hidden
            >
              →
            </span>
          ) : null}
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/15 font-display text-xs font-extrabold text-brand">
            {i + 1}
          </span>
          <span className="mt-2 font-display text-xs sm:text-sm font-bold text-zinc-900 leading-tight">
            {step.label}
          </span>
          <span className="mt-0.5 text-[11px] sm:text-xs text-zinc-500">{step.sub}</span>
        </div>
      ))}
    </div>
  );
}
