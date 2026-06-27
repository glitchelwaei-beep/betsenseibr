"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_GUIDE_LINKS, NAV_PRIMARY_LINKS } from "@/lib/nav";
import { cn } from "@/lib/cn";

const linkClass =
  "rounded-md px-3 py-2.5 text-sm text-text-muted hover:text-text hover:bg-bg-elevated transition-colors";

export function HeaderMobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-muted hover:text-text hover:bg-bg-elevated transition-colors"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      <div
        id="mobile-nav-panel"
        className={cn(
          "absolute left-0 right-0 top-16 border-b border-border bg-bg/95 backdrop-blur-md shadow-lg",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col px-4 py-3" aria-label="Menu principal">
          {NAV_PRIMARY_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="my-2 border-t border-border" />
          <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-text-dim">Guias</div>
          {NAV_GUIDE_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
