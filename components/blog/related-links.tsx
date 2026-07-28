import Link from "next/link";

const DEFAULT_LINKS = [
  { href: "/como-apostar", label: "Como apostar (iniciantes)" },
  { href: "/imposto", label: "Imposto sobre prêmios (IR)" },
  { href: "/jogo-responsavel", label: "Jogo responsável" },
];

type RelatedLinksProps = {
  links?: { href: string; label: string }[];
  title?: string;
};

export function RelatedLinks({
  links = DEFAULT_LINKS,
  title = "Continue lendo no BetSensei",
}: RelatedLinksProps) {
  return (
    <nav className="not-prose my-10 border-t border-border pt-8" aria-label="Links relacionados">
      <p className="font-display text-lg font-bold text-text">{title}</p>
      <ul className="mt-4 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-brand underline-offset-3 hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
