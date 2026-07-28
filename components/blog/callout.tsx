import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CalloutProps = {
  title?: string;
  children: ReactNode;
  variant?: "info" | "warn" | "tip";
};

const styles = {
  info: "border-accent/35 bg-accent/10",
  warn: "border-warning/35 bg-warning/10",
  tip: "border-brand/35 bg-brand/10",
} as const;

export function Callout({ title, children, variant = "info" }: CalloutProps) {
  return (
    <aside
      className={cn(
        "not-prose my-8 rounded-2xl border px-5 py-4 text-sm leading-relaxed text-text-muted",
        styles[variant],
      )}
    >
      {title ? (
        <p className="mb-1.5 font-display text-base font-bold text-text">{title}</p>
      ) : null}
      <div className="[&_a]:text-brand [&_a]:underline [&_a]:underline-offset-2 [&_p]:mb-2 [&_p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}
