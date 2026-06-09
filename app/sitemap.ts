import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const ROUTES: {
  path: string;
  priority: number;
  changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified: string;
}[] = [
  { path: "/", priority: 1.0, changeFreq: "daily", lastModified: "2026-06-09" },
  { path: "/copa-do-mundo-2026", priority: 0.95, changeFreq: "daily", lastModified: "2026-06-09" },
  { path: "/betwinner", priority: 0.95, changeFreq: "weekly", lastModified: "2026-06-09" },
  { path: "/codigo-promocional", priority: 0.9, changeFreq: "weekly", lastModified: "2026-05-22" },
  { path: "/cadastro", priority: 0.9, changeFreq: "weekly", lastModified: "2026-05-22" },
  { path: "/pix", priority: 0.9, changeFreq: "weekly", lastModified: "2026-05-22" },
  { path: "/aplicativo", priority: 0.9, changeFreq: "weekly", lastModified: "2026-05-22" },
  { path: "/apostas-esportivas", priority: 0.85, changeFreq: "weekly", lastModified: "2026-05-22" },
  { path: "/futebol", priority: 0.85, changeFreq: "weekly", lastModified: "2026-05-22" },
  { path: "/aposta-ao-vivo", priority: 0.8, changeFreq: "weekly", lastModified: "2026-05-22" },
  { path: "/como-apostar", priority: 0.8, changeFreq: "weekly", lastModified: "2026-05-22" },
  { path: "/imposto", priority: 0.75, changeFreq: "monthly", lastModified: "2026-05-01" },
  { path: "/jogo-responsavel", priority: 0.5, changeFreq: "yearly", lastModified: "2026-05-01" },
  { path: "/sobre", priority: 0.4, changeFreq: "monthly", lastModified: "2026-05-01" },
  { path: "/divulgacao-de-afiliacao", priority: 0.3, changeFreq: "yearly", lastModified: "2026-05-01" },
  { path: "/contato", priority: 0.3, changeFreq: "yearly", lastModified: "2026-06-09" },
  { path: "/politica-de-privacidade", priority: 0.3, changeFreq: "yearly", lastModified: "2026-05-01" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));
}
