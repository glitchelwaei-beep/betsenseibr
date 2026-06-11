/** Hero copy for /lp/copa-pix — swap these for A/B tests without touching page structure. */
export const LP_COPA_PIX_PATH = "/lp/copa-pix";

export const LP_COPA_PIX = {
  eyebrow: "Guia • Copa do Mundo 2026",
  headline:
    "Como apostar na Copa do Mundo 2026 pelo PIX — passo a passo para brasileiros",
  subhead:
    "Cadastro em 2 minutos, depósito via PIX e bônus de {bonusShort} no primeiro depósito com o código {promoCode}.",
  hook:
    "Milhares de brasileiros já estão se cadastrando para acompanhar a Copa com apostas em reais. Três passos: criar conta, depositar via PIX e escolher os mercados da Copa — tudo pelo celular, em português.",
  readingMinutes: 3,
  publishedAt: "2026-06-10",
  modifiedAt: "2026-06-10",
  publishedLabel: "10 de junho de 2026",
  authorName: "Equipe BetSensei",
  authorRole: "Redação esportiva",
  heroImage: "/hero/banner.avif",
  headerCoverImage: "/hero/banner-2.webp",
  headerCoverAlt: "Copa do Mundo 2026 — cadastro e apostas via PIX para brasileiros",
  heroCaption:
    "Copa do Mundo 2026: cadastro, PIX e mercados de futebol disponíveis em português na BetWinner.",
} as const;

/** @deprecated Use LP_COPA_PIX — kept for any external imports */
export const LP_COPA_PIX_HERO = {
  eyebrow: LP_COPA_PIX.eyebrow,
  h1: LP_COPA_PIX.headline,
  subhead: LP_COPA_PIX.subhead,
  hook: LP_COPA_PIX.hook,
  byline: `Por ${LP_COPA_PIX.authorName} · atualizado em junho de 2026`,
} as const;
