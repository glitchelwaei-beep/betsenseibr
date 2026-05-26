import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Trilha de navegação" className="text-sm text-text-dim">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className="hover:text-brand transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-text-muted">{item.label}</span>
            )}
            {i < items.length - 1 && <span aria-hidden className="text-text-dim/60">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
