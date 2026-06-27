import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { HeaderGuidesDropdown } from "@/components/site/header-guides-dropdown";
import { HeaderMobileNav } from "@/components/site/header-mobile-nav";
import { NAV_PRIMARY_LINKS } from "@/lib/nav";
import { BETWINNER } from "@/lib/partner";

const navLinkClass =
  "whitespace-nowrap px-3 py-2 text-sm text-text-muted hover:text-text rounded-md transition-colors";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <Container className="relative flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center gap-2 group">
          <span className="font-display text-xl font-extrabold tracking-tight">
            <span className="text-brand">BET</span>
            <span className="text-text">SENSEI</span>
            <span className="text-text-muted text-sm ml-1">brasil</span>
          </span>
        </Link>

        <nav className="hidden lg:flex min-w-0 items-center gap-0.5" aria-label="Menu principal">
          {NAV_PRIMARY_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
          <HeaderGuidesDropdown />
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <HeaderMobileNav />
          <ButtonLink
            href="/go/betwinner"
            external
            variant="primary"
            size="sm"
            className="whitespace-nowrap px-4"
          >
            {BETWINNER.bonusShort} bônus →
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
