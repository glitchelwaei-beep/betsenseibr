import Link from "next/link";
import { NAV_GUIDE_LINKS } from "@/lib/nav";

const linkClass =
  "block px-4 py-2 text-sm text-text-muted hover:text-text hover:bg-bg-elevated transition-colors";

export function HeaderGuidesDropdown() {
  return (
    <details className="relative group/details">
      <summary className="list-none cursor-pointer select-none px-3 py-2 text-sm text-text-muted hover:text-text rounded-md transition-colors [&::-webkit-details-marker]:hidden flex items-center gap-1">
        Guias
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="opacity-60 transition-transform group-open/details:rotate-180"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="absolute left-0 top-full z-50 mt-1 min-w-[13rem] rounded-lg border border-border bg-bg/95 py-1 shadow-lg backdrop-blur-md">
        {NAV_GUIDE_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className={linkClass}>
            {link.label}
          </Link>
        ))}
      </div>
    </details>
  );
}
