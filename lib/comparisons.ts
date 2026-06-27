import { BETWINNER } from "@/lib/partner";

export type ComparisonRow = {
  label: string;
  betwinner: string;
  competitor: string;
};

export type ComparisonCompetitor = {
  slug: string;
  name: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  licenseSummary: string;
  spaAuthorized: boolean;
  competitorStrengths: string[];
  competitorWeaknesses: string[];
  whenCompetitorWins: string;
  whenBetwinnerWins: string;
  table: ComparisonRow[];
  faq: { question: string; answer: string }[];
};

const BW = BETWINNER;

const BETWINNER_TABLE_BASE: ComparisonRow[] = [
  { label: "Licença no Brasil (SPA)", betwinner: "Não (internacional)", competitor: "" },
  { label: "Bônus de boas-vindas (2026)", betwinner: BW.bonusHeadline, competitor: "" },
  { label: "PIX depósito/saque", betwinner: "Sim", competitor: "" },
  { label: "Depósito mínimo", betwinner: BW.minDeposit, competitor: "" },
  { label: "Tempo médio de saque", betwinner: BW.payoutTime, competitor: "" },
  { label: "App em português", betwinner: "Sim (APK + iOS)", competitor: "" },
  { label: "Copa do Mundo 2026", betwinner: "Cobertura completa", competitor: "" },
];

function withCompetitor(rows: ComparisonRow[], values: string[]): ComparisonRow[] {
  return rows.map((row, i) => ({ ...row, competitor: values[i] ?? "—" }));
}

export const COMPARISONS: ComparisonCompetitor[] = [
  {
    slug: "betwinner-vs-bet365",
    name: "bet365",
    path: "/alternativas/betwinner-vs-bet365",
    metaTitle: "BetWinner vs bet365 no Brasil (2026): bônus, PIX e licença",
    metaDescription:
      "Comparativo honesto BetWinner vs bet365 para brasileiros: bônus de boas-vindas, PIX, app, licença e Copa 2026. Não somos afiliados da bet365.",
    h1: "BetWinner ou bet365 — qual escolher em 2026?",
    intro:
      "A bet365 é uma das marcas mais reconhecidas do mundo nas apostas esportivas. Para apostadores brasileiros, a escolha entre bet365 e BetWinner envolve licença, bônus pós-Lei 14.790/2023, PIX e o tipo de experiência que você busca na Copa do Mundo 2026.",
    licenseSummary:
      "A bet365 opera globalmente com licenças internacionais. No Brasil, a regulamentação da SPA redefiniu o mercado desde 2025. A BetWinner opera com licença internacional (Curaçao) e não está na lista da SPA.",
    spaAuthorized: false,
    competitorStrengths: [
      "Marca global com décadas de reputação em apostas esportivas",
      "Mercados profundos em ligas europeias e transmissões ao vivo",
      "Plataforma madura para apostas in-play",
    ],
    competitorWeaknesses: [
      "Oferta de bônus de boas-vindas varia e nem sempre é clara para novos cadastros BR",
      "Experiência e suporte podem ser menos focados no contexto brasileiro (PIX, CPF)",
    ],
    whenCompetitorWins:
      "Se você prioriza uma marca histórica internacional e já conhece a interface da bet365, pode preferir ficar onde está — desde que a operação disponível no Brasil atenda às suas necessidades de pagamento e suporte.",
    whenBetwinnerWins:
      `Se você quer ${BW.bonusHeadline.toLowerCase()} com código ${BW.promoCode}, cadastro rápido em português, PIX a partir de ${BW.minDeposit} e cobertura forte de futebol brasileiro e Copa 2026, a BetWinner costuma ser a opção mais direta para brasileiros em 2026.`,
    table: withCompetitor(BETWINNER_TABLE_BASE, [
      "Não (internacional)",
      "Variável / campanhas pontuais",
      "Sim (conforme operação)",
      "Variável",
      "Variável",
      "Sim",
      "Sim",
    ]),
    faq: [
      {
        question: "BetWinner ou bet365: qual tem bônus de boas-vindas em 2026?",
        answer: `A BetWinner oferece ${BW.bonusHeadline.toLowerCase()} com ${BW.promoCode} via link BetSensei. A bet365 pode ter promoções, mas a oferta para novos jogadores no Brasil não é tão previsível quanto a campanha BetWinner para a Copa 2026.`,
      },
      {
        question: "A bet365 aceita PIX?",
        answer:
          "Depende da operação e do método disponível na sua conta. A BetWinner aceita PIX de forma consistente para depósito e saque, com depósito mínimo de R$ 10 — ponto que testamos e documentamos em nosso guia PIX.",
      },
      {
        question: "Vocês são afiliados da bet365?",
        answer:
          "Não. O BetSensei BR é afiliado exclusivamente da BetWinner. Este comparativo é editorial e independente.",
      },
    ],
  },
  {
    slug: "betwinner-vs-superbet",
    name: "Superbet",
    path: "/alternativas/betwinner-vs-superbet",
    metaTitle: "BetWinner vs Superbet (2026): bônus, PIX e licença SPA",
    metaDescription:
      "Superbet ou BetWinner? Compare bônus pós-Lei 14.790, PIX, app e licença SPA. Guia imparcial — afiliados apenas da BetWinner.",
    h1: "BetWinner ou Superbet — qual escolher em 2026?",
    intro:
      "A Superbet é uma das casas mais visíveis do mercado brasileiro regulado. Desde janeiro de 2025, operadoras autorizadas pela SPA não podem mais oferecer bônus de boas-vindas — o que mudou o cálculo para quem compara Superbet e BetWinner.",
    licenseSummary:
      "A Superbet possui autorização da SPA (Secretaria de Prêmios e Apostas) no Brasil. A BetWinner opera com licença internacional e não está na lista oficial da SPA.",
    spaAuthorized: true,
    competitorStrengths: [
      "Operadora regulamentada no Brasil (SPA)",
      "Marca forte em marketing esportivo e patrocínios",
      "Retenção automática de IR sobre prêmios conforme regras brasileiras",
    ],
    competitorWeaknesses: [
      "Sem bônus de boas-vindas para novos cadastros desde a Lei 14.790/2023 (jan/2025)",
      "Promoções limitadas comparadas a casas internacionais",
    ],
    whenCompetitorWins:
      "Se regulamentação SPA, supervisão brasileira e retenção automática de imposto são prioridade absoluta para você, a Superbet representa o modelo regulado oficial.",
    whenBetwinnerWins:
      `Se você busca ${BW.bonusHeadline.toLowerCase()} (${BW.bonusContext}), PIX rápido e mercados da Copa 2026 com cadastro em português, a BetWinner continua atraente — com a ressalva de operar fora da SPA.`,
    table: withCompetitor(BETWINNER_TABLE_BASE, [
      "Sim (SPA)",
      "Não (proibido p/ SPA desde jan/2025)",
      "Sim",
      "Conforme operadora",
      "Conforme operadora",
      "Sim",
      "Sim",
    ]),
    faq: [
      {
        question: "A Superbet ainda dá bônus de boas-vindas?",
        answer:
          "Não. Desde 1º de janeiro de 2025, casas com licença SPA não podem oferecer bônus de boas-vindas. A BetWinner, por operar com licença internacional, ainda oferece campanha de novos jogadores.",
      },
      {
        question: "Superbet ou BetWinner para a Copa do Mundo 2026?",
        answer:
          "Ambas cobrem a Copa. A diferença prática está no bônus inicial, na licença (SPA vs internacional) e na experiência de PIX/saque que você prefere.",
      },
      {
        question: "Posso ter conta nas duas?",
        answer:
          "Tecnicamente sim, mas cada casa exige uma conta por CPF. Compare termos, limites e impostos antes de depositar em mais de uma plataforma.",
      },
    ],
  },
  {
    slug: "betwinner-vs-betnacional",
    name: "Betnacional",
    path: "/alternativas/betwinner-vs-betnacional",
    metaTitle: "BetWinner vs Betnacional (2026): bônus, PIX e comparativo",
    metaDescription:
      "Betnacional ou BetWinner? Compare licença SPA, bônus de boas-vindas, PIX e app. Análise editorial — somos afiliados da BetWinner.",
    h1: "BetWinner ou Betnacional — qual escolher em 2026?",
    intro:
      "A Betnacional aposta forte na identidade brasileira e no mercado regulado. Para quem pesquisa Betnacional vs BetWinner, a diferença central em 2026 continua sendo regulamentação SPA versus bônus internacional.",
    licenseSummary:
      "A Betnacional opera no modelo regulado brasileiro (SPA). A BetWinner possui licença internacional (Curaçao) e não está autorizada pela SPA.",
    spaAuthorized: true,
    competitorStrengths: [
      "Marca nacional com foco no torcedor brasileiro",
      "Operação sob supervisão da SPA",
      "PIX e métodos locais integrados ao ecossistema regulado",
    ],
    competitorWeaknesses: [
      "Bônus de boas-vindas indisponível para novos cadastros SPA desde 2025",
      "Menos flexibilidade promocional que casas offshore",
    ],
    whenCompetitorWins:
      "Apostadores que valorizam exclusivamente operadoras autorizadas no Brasil e preferem o arcabouço regulatório nacional.",
    whenBetwinnerWins:
      `Quem quer ${BW.bonusShort} de bônus no primeiro depósito, código ${BW.promoCode} e cobertura ampla de futebol internacional pode inclinar-se à BetWinner — entendendo os trade-offs de licença offshore.`,
    table: withCompetitor(BETWINNER_TABLE_BASE, [
      "Sim (SPA)",
      "Não (proibido p/ SPA desde jan/2025)",
      "Sim",
      "Conforme operadora",
      "Conforme operadora",
      "Sim",
      "Sim",
    ]),
    faq: [
      {
        question: "Betnacional tem código promocional de bônus em 2026?",
        answer:
          "Operadoras SPA não podem oferecer bônus de boas-vindas desde jan/2025. Na BetWinner, use o código BETSENSEI26 no cadastro para a campanha de 100% no 1º depósito qualificado.",
      },
      {
        question: "Qual tem melhor app para futebol?",
        answer:
          "Ambas oferecem app em português. A BetWinner se destaca em transmissões ao vivo e mercados internacionais; a Betnacional em integração ao mercado regulado BR.",
      },
    ],
  },
  {
    slug: "betwinner-vs-esportes-da-sorte",
    name: "Esportes da Sorte",
    path: "/alternativas/betwinner-vs-esportes-da-sorte",
    metaTitle: "BetWinner vs Esportes da Sorte (2026): comparativo completo",
    metaDescription:
      "Esportes da Sorte ou BetWinner? Compare bônus, PIX, licença SPA, app e Copa 2026. Guia imparcial para apostadores brasileiros.",
    h1: "BetWinner ou Esportes da Sorte — qual escolher?",
    intro:
      "Esportes da Sorte combina apostas esportivas e entretenimento de cassino no mercado brasileiro. A comparação com BetWinner interessa quem quer foco esportivo, bônus de entrada e PIX rápido.",
    licenseSummary:
      "Esportes da Sorte opera no mercado regulado brasileiro. A BetWinner é casa internacional com licença de Curaçao, fora da lista SPA.",
    spaAuthorized: true,
    competitorStrengths: [
      "Presença forte em patrocínios esportivos no Brasil",
      "Operação regulada (SPA)",
      "Mix de esportes e cassino para quem quer tudo num app",
    ],
    competitorWeaknesses: [
      "Sem bônus de boas-vindas SPA desde 2025",
      "Interface pode priorizar cassino sobre mercados esportivos profundos",
    ],
    whenCompetitorWins:
      "Se você quer operadora SPA com marca brasileira e também cassino integrado, Esportes da Sorte encaixa nesse perfil.",
    whenBetwinnerWins:
      `Apostadores focados em futebol, Copa 2026, live betting e ${BW.bonusHeadline.toLowerCase()} tendem a preferir a BetWinner — especialmente com PIX a partir de ${BW.minDeposit}.`,
    table: withCompetitor(BETWINNER_TABLE_BASE, [
      "Sim (SPA)",
      "Não (proibido p/ SPA desde jan/2025)",
      "Sim",
      "Conforme operadora",
      "Conforme operadora",
      "Sim",
      "Sim",
    ]),
    faq: [
      {
        question: "Esportes da Sorte ou BetWinner para apostas na Copa?",
        answer:
          "Ambas cobrem a Copa do Mundo 2026. A BetWinner se destaca no bônus de novos jogadores e mercados esportivos profundos; Esportes da Sorte no modelo regulado nacional.",
      },
    ],
  },
  {
    slug: "betwinner-vs-bet7k",
    name: "Bet7k",
    path: "/alternativas/betwinner-vs-bet7k",
    metaTitle: "BetWinner vs Bet7k (2026): bônus, PIX e qual escolher",
    metaDescription:
      "Bet7k ou BetWinner? Compare bônus, PIX, app mobile, saque e mercados esportivos. Análise editorial independente.",
    h1: "BetWinner ou Bet7k — comparativo 2026",
    intro:
      "A Bet7k atrai apostadores que buscam promoções e interface moderna. Comparar Bet7k e BetWinner ajuda a decidir entre promoções locais e a cobertura esportiva internacional da BetWinner.",
    licenseSummary:
      "A Bet7k opera como casa internacional no mercado brasileiro. A BetWinner também possui licença internacional (Curaçao), fora da SPA.",
    spaAuthorized: false,
    competitorStrengths: [
      "Interface moderna e campanhas promocionais frequentes",
      "PIX disponível para brasileiros",
      "Mix de esportes e cassino",
    ],
    competitorWeaknesses: [
      "Marca mais recente com menor histórico que bet365 ou BetWinner",
      "Termos de bônus podem variar com frequência",
    ],
    whenCompetitorWins:
      "Se você já usa Bet7k, conhece a interface e está satisfeito com as promoções ativas na sua conta.",
    whenBetwinnerWins:
      `Para Copa 2026, transmissões ao vivo, ${BW.sports}+ esportes e bônus documentado com ${BW.promoCode}, a BetWinner oferece pacote mais previsível — nota ${BW.rating}/10 em nossa análise.`,
    table: withCompetitor(BETWINNER_TABLE_BASE, [
      "Não (internacional)",
      "Variável (campanhas)",
      "Sim",
      "Variável",
      "Variável",
      "Sim",
      "Sim",
    ]),
    faq: [
      {
        question: "Bet7k ou BetWinner: qual bônus é melhor?",
        answer: `A BetWinner oferece ${BW.bonusHeadline.toLowerCase()} com código ${BW.promoCode}. A Bet7k pode ter promoções, mas os termos mudam — leia sempre o regulamento antes de depositar.`,
      },
    ],
  },
  {
    slug: "betwinner-vs-blaze",
    name: "Blaze",
    path: "/alternativas/betwinner-vs-blaze",
    metaTitle: "BetWinner vs Blaze: apostas esportivas e alternativa (2026)",
    metaDescription:
      "Blaze ou BetWinner para apostas? Compare foco cassino vs esportes, bônus, PIX e Copa 2026. Não somos afiliados da Blaze.",
    h1: "BetWinner ou Blaze — qual faz sentido para apostas?",
    intro:
      "A Blaze é conhecida principalmente por cassino e jogos instantâneos. Se você busca apostas esportivas, Copa do Mundo 2026 e mercados de futebol, a comparação com BetWinner é bem diferente de comparar duas casas esportivas tradicionais.",
    licenseSummary:
      "A Blaze opera internacionalmente no segmento de cassino e jogos. A BetWinner é focada em apostas esportivas com licença internacional.",
    spaAuthorized: false,
    competitorStrengths: [
      "Alta visibilidade de marca no Brasil",
      "Jogos de cassino e entretenimento rápido",
      "Comunidade ativa e promoções de cassino",
    ],
    competitorWeaknesses: [
      "Foco principal em cassino, não em apostas esportivas profundas",
      "Menos adequada para estratégias esportivas na Copa ou Brasileirão",
    ],
    whenCompetitorWins:
      "Se seu objetivo principal é cassino e jogos instantâneos, a Blaze foi desenhada para isso — não para substituir uma casa esportiva.",
    whenBetwinnerWins:
      `Para apostas em futebol, UFC, basquete, Copa 2026 e live betting com ${BW.bonusHeadline.toLowerCase()}, a BetWinner é a escolha natural — a Blaze não compete no mesmo nicho esportivo.`,
    table: withCompetitor(BETWINNER_TABLE_BASE, [
      "Não (internacional)",
      "Foco cassino / variável",
      "Sim",
      "Variável",
      "Variável",
      "Sim (app)",
      "Limitada (esportes)",
    ]),
    faq: [
      {
        question: "A Blaze serve para apostar na Copa do Mundo?",
        answer:
          "A Blaze oferece alguns mercados esportivos, mas não é sua especialidade. Para Copa 2026, mercados profundos e live betting, a BetWinner é mais adequada.",
      },
      {
        question: "Blaze ou BetWinner para iniciantes em apostas esportivas?",
        answer:
          "BetWinner. Interface em português, guias de cadastro, PIX a partir de R$ 10 e foco esportivo facilitam o começo. A Blaze é mais indicada para cassino.",
      },
    ],
  },
  {
    slug: "betwinner-vs-kto",
    name: "KTO",
    path: "/alternativas/betwinner-vs-kto",
    metaTitle: "BetWinner vs KTO (2026): bônus, PIX e licença SPA",
    metaDescription:
      "KTO ou BetWinner? Compare operadora SPA vs internacional, bônus, PIX, app e Copa 2026. Guia para apostadores brasileiros.",
    h1: "BetWinner ou KTO — qual escolher em 2026?",
    intro:
      "A KTO cresceu no mercado brasileiro regulado com patrocínios esportivos e app mobile. Comparar KTO e BetWinner resume-se, mais uma vez, a SPA regulada versus bônus internacional.",
    licenseSummary:
      "A KTO possui autorização SPA no Brasil. A BetWinner opera com licença internacional de Curaçao.",
    spaAuthorized: true,
    competitorStrengths: [
      "Operadora regulada (SPA) com app mobile polido",
      "Patrocínios esportivos e presença de marca no Brasil",
      "PIX integrado ao ecossistema regulado",
    ],
    competitorWeaknesses: [
      "Sem bônus de boas-vindas para novos cadastros SPA",
      "Promoções de entrada limitadas vs casas offshore",
    ],
    whenCompetitorWins:
      "Prioridade absoluta em operadora autorizada pela SPA e conformidade regulatória brasileira.",
    whenBetwinnerWins:
      `Quem quer ${BW.bonusHeadline.toLowerCase()}, código ${BW.promoCode} e saque PIX em ${BW.payoutTime} pode preferir BetWinner — aceitando operação offshore.`,
    table: withCompetitor(BETWINNER_TABLE_BASE, [
      "Sim (SPA)",
      "Não (proibido p/ SPA desde jan/2025)",
      "Sim",
      "Conforme operadora",
      "Conforme operadora",
      "Sim",
      "Sim",
    ]),
    faq: [
      {
        question: "KTO ou BetWinner para mobile?",
        answer:
          "Ambas têm app mobile em português. A KTO se destaca no ecossistema SPA; a BetWinner em bônus de entrada e mercados internacionais.",
      },
    ],
  },
  {
    slug: "betwinner-vs-7games",
    name: "7games",
    path: "/alternativas/betwinner-vs-7games",
    metaTitle: "BetWinner vs 7games (2026): bônus, PIX e comparativo",
    metaDescription:
      "7games ou BetWinner? Compare bônus de boas-vindas, PIX, app e mercados esportivos. Análise editorial — afiliados BetWinner.",
    h1: "BetWinner ou 7games — comparativo 2026",
    intro:
      "A 7games compete no segmento de casas acessíveis com promoções para novos usuários. A comparação com BetWinner interessa quem avalia bônus, PIX e profundidade esportiva para a Copa 2026.",
    licenseSummary:
      "A 7games opera internacionalmente no Brasil. A BetWinner possui licença de Curaçao e foco esportivo consolidado desde 2018.",
    spaAuthorized: false,
    competitorStrengths: [
      "Promoções e campanhas para novos cadastros",
      "PIX e cadastro simplificado",
      "Mix esportes + cassino",
    ],
    competitorWeaknesses: [
      "Menor tradição e cobertura esportiva que marcas estabelecidas",
      "Termos promocionais exigem leitura cuidadosa",
    ],
    whenCompetitorWins:
      "Se você já conhece a 7games e uma promoção específica atende melhor ao seu perfil de jogo.",
    whenBetwinnerWins:
      `Para ${BW.bonusContext}, ${BW.sports}+ esportes, transmissões ao vivo e análise com nota ${BW.rating}/10, a BetWinner oferece pacote mais completo para apostadores esportivos.`,
    table: withCompetitor(BETWINNER_TABLE_BASE, [
      "Não (internacional)",
      "Variável (campanhas)",
      "Sim",
      "Variável",
      "Variável",
      "Sim",
      "Sim",
    ]),
    faq: [
      {
        question: "7games ou BetWinner para bônus de 100%?",
        answer: `A BetWinner oferece ${BW.bonusHeadline.toLowerCase()} com ${BW.promoCode}. Compare rollover e prazo em ambas antes de depositar.`,
      },
    ],
  },
  {
    slug: "betwinner-vs-sportingbet",
    name: "Sportingbet",
    path: "/alternativas/betwinner-vs-sportingbet",
    metaTitle: "BetWinner vs Sportingbet apostas esportivas (2026)",
    metaDescription:
      "Sportingbet ou BetWinner para apostas esportivas? Compare bônus, PIX, app, licença SPA e mercados. Guia imparcial — afiliados BetWinner.",
    h1: "BetWinner ou Sportingbet — apostas esportivas em 2026",
    intro:
      "A Sportingbet é uma marca histórica de apostas esportivas no Brasil. Quem pesquisa Sportingbet apostas esportivas vs BetWinner compara regulamentação SPA, bônus e experiência mobile.",
    licenseSummary:
      "A Sportingbet opera no mercado regulado brasileiro (SPA). A BetWinner possui licença internacional (Curaçao) e não está na lista SPA.",
    spaAuthorized: true,
    competitorStrengths: [
      "Marca consolidada em apostas esportivas",
      "Operação regulada pela SPA",
      "App e PIX integrados ao ecossistema brasileiro",
    ],
    competitorWeaknesses: [
      "Sem bônus de boas-vindas SPA desde jan/2025",
      "Promoções de entrada limitadas vs casas offshore",
    ],
    whenCompetitorWins:
      "Prioridade em operadora SPA com histórico esportivo e supervisão brasileira.",
    whenBetwinnerWins:
      `Quem busca ${BW.bonusHeadline.toLowerCase()}, código ${BW.promoCode}, PIX rápido e mercados da Copa 2026 pode preferir BetWinner — aceitando licença offshore.`,
    table: withCompetitor(BETWINNER_TABLE_BASE, [
      "Sim (SPA)",
      "Não (proibido p/ SPA desde jan/2025)",
      "Sim",
      "Conforme operadora",
      "Conforme operadora",
      "Sim",
      "Sim",
    ]),
    faq: [
      {
        question: "Sportingbet ou BetWinner para apostas esportivas?",
        answer:
          "Ambas cobrem futebol e esportes principais. Sportingbet no modelo SPA; BetWinner com bônus de novos jogadores e foco em mercados internacionais.",
      },
    ],
  },
  {
    slug: "betwinner-vs-betao",
    name: "Betão",
    path: "/alternativas/betwinner-vs-betao",
    metaTitle: "BetWinner vs Betão: apostas esportivas e cassino ao vivo (2026)",
    metaDescription:
      "Betão ou BetWinner? Compare apostas esportivas, cassino ao vivo, bônus, PIX e app. Não somos afiliados da Betão.",
    h1: "BetWinner ou Betão — apostas esportivas e cassino ao vivo",
    intro:
      "A Betão combina apostas esportivas e cassino ao vivo no mercado brasileiro. A comparação com BetWinner interessa quem avalia bônus, PIX e profundidade esportiva para a Copa 2026.",
    licenseSummary:
      "A Betão opera no segmento regulado/internacional conforme sua operação declarada. A BetWinner possui licença internacional de Curaçao.",
    spaAuthorized: true,
    competitorStrengths: [
      "Mix apostas esportivas e cassino ao vivo",
      "Presença de marca no Brasil",
      "App mobile e PIX",
    ],
    competitorWeaknesses: [
      "Bônus de boas-vindas limitado no modelo SPA (desde 2025)",
      "Cobertura esportiva internacional pode ser menor que casas globais",
    ],
    whenCompetitorWins:
      "Se você quer cassino ao vivo e esportes na mesma conta sob operadora conhecida no BR.",
    whenBetwinnerWins:
      `Para ${BW.bonusContext}, ${BW.sports}+ esportes, transmissões ao vivo e ${BW.bonusHeadline.toLowerCase()} com ${BW.promoCode}.`,
    table: withCompetitor(BETWINNER_TABLE_BASE, [
      "Sim (SPA)",
      "Não (proibido p/ SPA desde jan/2025)",
      "Sim",
      "Conforme operadora",
      "Conforme operadora",
      "Sim",
      "Sim",
    ]),
    faq: [
      {
        question: "Betão ou BetWinner para a Copa do Mundo?",
        answer:
          "Ambas cobrem a Copa. BetWinner se destaca em bônus de entrada e mercados esportivos profundos; Betão em mix esportes + cassino ao vivo no ecossistema local.",
      },
    ],
  },
];

export const COMPARISON_BY_SLUG = Object.fromEntries(
  COMPARISONS.map((c) => [c.slug, c]),
) as Record<string, ComparisonCompetitor>;

export const COMPARISON_SLUGS = COMPARISONS.map((c) => c.slug);

export function getComparison(slug: string): ComparisonCompetitor | undefined {
  return COMPARISON_BY_SLUG[slug];
}
