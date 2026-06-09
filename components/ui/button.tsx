import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand !text-white no-underline hover:bg-brand-hover hover:!text-white shadow-[0_10px_30px_-8px_rgba(249,115,22,0.7)] sm:shadow-[0_6px_24px_-8px_rgba(249,115,22,0.55)]",
  secondary:
    "bg-surface text-text border border-border hover:border-border-strong hover:bg-bg-elevated",
  ghost: "bg-transparent text-text-muted hover:text-text hover:bg-bg-elevated",
  outline:
    "bg-transparent text-text border border-border-strong hover:bg-bg-elevated",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-3 text-sm sm:h-9",
  md: "h-12 px-6 text-base sm:h-11 sm:px-5 sm:text-sm",
  lg: "h-14 px-7 text-base sm:h-12",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external = false,
  ...props
}: CommonProps & { href: string; external?: boolean } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold tracking-[-0.005em] transition-all duration-150 active:scale-[0.98]",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="sponsored noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
