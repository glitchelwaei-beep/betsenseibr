import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const NAV_LINKS = [
  { href: "/betwinner", label: "BetWinner" },
  { href: "/codigo-promocional", label: "Código promocional" },
  { href: "/aplicativo", label: "Aplicativo" },
  { href: "/pix", label: "PIX" },
  { href: "/apostas-esportivas", label: "Esportes" },
  { href: "/futebol", label: "Futebol" },
  { href: "/como-apostar", label: "Como apostar" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-display text-xl font-extrabold tracking-tight">
            <span className="text-brand">BET</span>
            <span className="text-text">SENSEI</span>
            <span className="text-text-muted text-sm ml-1">.br</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-text-muted hover:text-text rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={SITE.telegram} external variant="outline" size="sm" className="hidden sm:inline-flex">
            Telegram
          </ButtonLink>
          <ButtonLink href="/go/betwinner" external variant="primary" size="sm">
            Bônus R$ 1.500 →
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
