"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/cn";

type PromoCodeCopyProps = {
  code: string;
  className?: string;
};

export function PromoCodeCopy({ code, className }: PromoCodeCopyProps) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [code]);

  return (
    <div className={cn("flex overflow-hidden rounded-lg border border-border-strong", className)}>
      <div className="flex items-center bg-surface px-3 py-2.5 text-xs font-semibold text-text-muted whitespace-nowrap">
        Código promocional
      </div>
      <div className="flex flex-1 items-center justify-between gap-2 bg-white px-3 py-2.5 min-w-0">
        <span className="font-mono text-sm font-bold text-zinc-900 truncate">{code}</span>
        <button
          type="button"
          onClick={copy}
          className="flex-shrink-0 rounded-md p-1.5 text-brand hover:bg-brand/10 transition-colors"
          aria-label={copied ? "Código copiado" : "Copiar código promocional"}
          title={copied ? "Copiado!" : "Copiar código"}
        >
          {copied ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
