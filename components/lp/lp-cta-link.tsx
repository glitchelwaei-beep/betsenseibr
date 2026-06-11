import Link from "next/link";
import { cn } from "@/lib/cn";

export function isExternalLpCta(href: string): boolean {
  return href.startsWith("http");
}

type LpCtaLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

/** LP CTA link — external BeMob URLs use same-tab <a>; internal uses Next Link. */
export function LpCtaLink({ href, className, children }: LpCtaLinkProps) {
  if (isExternalLpCta(href)) {
    return (
      <a href={href} rel="sponsored noopener noreferrer" className={cn(className)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(className)}>
      {children}
    </Link>
  );
}
