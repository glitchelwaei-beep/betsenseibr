export type NavLink = { href: string; label: string };

export const NAV_PRIMARY_LINKS: readonly NavLink[] = [
  { href: "/betwinner", label: "BetWinner" },
  { href: "/bonus", label: "Bônus" },
  { href: "/codigo-promocional", label: "Código" },
  { href: "/cadastro", label: "Cadastro" },
  { href: "/pix", label: "PIX" },
];

export const NAV_GUIDE_LINKS: readonly NavLink[] = [
  { href: "/blog", label: "Blog" },
  { href: "/aplicativo", label: "Aplicativo" },
  { href: "/apostas-esportivas", label: "Esportes" },
  { href: "/futebol", label: "Futebol" },
  { href: "/como-apostar", label: "Como apostar" },
  { href: "/copa-do-mundo-2026", label: "Mundial 2026" },
];

/** All header destinations — primary first, then guides. */
export const NAV_LINKS: readonly NavLink[] = [...NAV_PRIMARY_LINKS, ...NAV_GUIDE_LINKS];
