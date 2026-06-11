"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type ExitIntentProps = {
  href: string;
  storageKey?: string;
  title?: string;
  body?: string;
  buttonLabel?: string;
};

export function ExitIntent({
  href,
  storageKey = "lp-exit-dismissed",
  title = "Ainda dá tempo de conhecer a plataforma recomendada",
  body = "Cadastro rápido, depósito via PIX e bônus de boas-vindas para novos jogadores.",
  buttonLabel = "Resgatar bônus na BetWinner",
}: ExitIntentProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.sessionStorage.getItem(storageKey)) return;

    const desktop = window.matchMedia("(min-width: 768px)");
    if (!desktop.matches) return;

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !window.sessionStorage.getItem(storageKey)) {
        setOpen(true);
      }
    };

    document.addEventListener("mouseleave", onLeave);
    return () => document.removeEventListener("mouseleave", onLeave);
  }, [storageKey]);

  const dismiss = () => {
    window.sessionStorage.setItem(storageKey, "1");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] hidden md:flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
    >
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand">Antes de sair</p>
        <h2 id="exit-intent-title" className="mt-3 font-display text-2xl font-extrabold text-zinc-900 leading-tight">
          {title}
        </h2>
        <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{body}</p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href={href}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-bold uppercase tracking-wide text-white no-underline transition-colors hover:bg-brand-hover"
          >
            {buttonLabel}
          </Link>
          <button
            type="button"
            onClick={dismiss}
            className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
          >
            Continuar lendo
          </button>
        </div>
      </div>
    </div>
  );
}
