// Single partner: BetWinner Brasil.
// Operates under Curaçao license; NOT on the SPA list of authorized operators.
// Brazilian Law 14.790/2023 restricts welcome bonuses for SPA-licensed operators,
// but BetWinner is offshore and can still offer bonuses.

export const BETWINNER = {
  slug: "betwinner",
  name: "BetWinner",
  brand: "BETWINNER",
  rating: 9.1,
  brandColor: "#eab308",

  // Welcome bonus (Brazilian-targeted)
  bonusHeadline: "Bônus de 100% até R$ 1.500 + 150 giros grátis",
  bonusAmount: "100%",
  promoCode: "BETBRMAX",

  // Operational data
  affiliateUrl: "https://gbaodm2hp.com/2Wuf?p=%2Fregistration%2F&lang=pt",
  sports: 40,
  founded: 2018,
  minDeposit: "R$ 10",
  payoutTime: "5 minutos – 1 hora",
  paymentMethods: ["PIX", "Boleto Bancário", "Cartão de Crédito", "Cartão de Débito", "Criptomoedas"],
  pixSupport: true,
  language: "Português",
  support247: true,

  // License: international, NOT SPA
  licensedInBrazil: false,
  licenseType: "Internacional (Curaçao)",
  licenseText: "Licença internacional (Curaçao eGaming)",

  highlights: [
    "Bônus de 100% até R$ 1.500 + 150 giros grátis",
    "Saque via PIX em até 1 hora",
    "Mais de 40 esportes incluindo futebol brasileiro",
    "App Android (APK) e iOS — interface 100% em português",
    "Suporte 24/7 em português via chat e e-mail",
  ],

  pros: [
    "Cadastro rápido (menos de 2 minutos)",
    "Aceita PIX, boleto e criptomoedas",
    "Cobertura completa do Campeonato Brasileiro",
    "Transmissões ao vivo de futebol, UFC e e-sports",
    "Promoções recorrentes para apostadores recorrentes",
  ],

  cons: [
    "Não possui licença da SPA (Secretaria de Prêmios e Apostas)",
    "Verificação obrigatória antes do primeiro saque",
    "Limite de saque pode ser baixo para apostadores high-rollers",
  ],
};

export type Partner = typeof BETWINNER;
