import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const ROUTES: { path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFreq: "daily" },
  { path: "/copa-do-mundo-2026", priority: 0.95, changeFreq: "daily" },
  { path: "/betwinner", priority: 0.95, changeFreq: "weekly" },
  { path: "/codigo-promocional", priority: 0.9, changeFreq: "weekly" },
  { path: "/cadastro", priority: 0.9, changeFreq: "weekly" },
  { path: "/pix", priority: 0.9, changeFreq: "weekly" },
  { path: "/aplicativo", priority: 0.9, changeFreq: "weekly" },
  { path: "/apostas-esportivas", priority: 0.85, changeFreq: "weekly" },
  { path: "/futebol", priority: 0.85, changeFreq: "weekly" },
  { path: "/aposta-ao-vivo", priority: 0.8, changeFreq: "weekly" },
  { path: "/como-apostar", priority: 0.8, changeFreq: "weekly" },
  { path: "/imposto", priority: 0.75, changeFreq: "monthly" },
  { path: "/jogo-responsavel", priority: 0.5, changeFreq: "yearly" },
  { path: "/sobre", priority: 0.4, changeFreq: "monthly" },
  { path: "/divulgacao-de-afiliacao", priority: 0.3, changeFreq: "yearly" },
  { path: "/contato", priority: 0.3, changeFreq: "yearly" },
  { path: "/politica-de-privacidade", priority: 0.3, changeFreq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));
}
