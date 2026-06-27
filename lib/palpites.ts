/** Editorial palpites — update weekly during Copa / Brasileirão. */

export type PalpiteEntry = {
  id: string;
  match: string;
  competition: string;
  date: string;
  analysis: string;
  markets: string[];
  disclaimer: string;
};

export const PALPITES_UPDATED = "27 de junho de 2026";

export const PALPITES: PalpiteEntry[] = [
  {
    id: "copa-bra-mar",
    match: "Brasil x Marrocos — estreia Grupo C",
    competition: "Copa do Mundo 2026",
    date: "13 de junho de 2026",
    analysis:
      "Brasil estreia como favorito (~1.55–1.65 no 1X2) contra Marrocos, semifinalista em 2022. Ancelotti tende a escalar time titular; mercado de menos de 2.5 gols pode ter valor se o jogo for truncado nos primeiros 30 minutos.",
    markets: ["Brasil ou empate (dupla chance)", "Menos de 3.5 gols", "Brasil marcar — sim"],
    disclaimer: "Análise editorial, não garantia de resultado. Aposte com responsabilidade.",
  },
  {
    id: "copa-bra-hai",
    match: "Brasil x Haiti",
    competition: "Copa do Mundo 2026",
    date: "19 de junho de 2026",
    analysis:
      "Haiti é zebra no grupo, mas jogos de seleção podem ser armadilhas em copas. Linha de handicap -1.5 Brasil costuma pagar menos; mercado de gols no 2º tempo interessa se Brasil abrir placar cedo.",
    markets: ["Brasil vitória", "Mais de 2.5 gols", "Brasil -1 handicap asiático"],
    disclaimer: "Odds variam até o apito. Confira a linha no momento da aposta.",
  },
  {
    id: "brasileirao-rodada",
    match: "Rodada Brasileirão Série A — favoritos em casa",
    competition: "Campeonato Brasileiro",
    date: "Junho 2026",
    analysis:
      "Em rodadas pós-data FIFA, times com menos desfalques por convocação tendem a performar melhor em casa. Compare escalações 1h antes — mercado de escanteios e cartões reage bem a clássicos regionais.",
    markets: ["Mandante ou empate em clássicos equilibrados", "Ambas marcam em jogos abertos", "Escanteios — linha asiática"],
    disclaimer: "Palpite genérico de rodada; confirme partida a partida.",
  },
  {
    id: "copa-bra-esc",
    match: "Brasil x Escócia — 3ª rodada Grupo C",
    competition: "Copa do Mundo 2026",
    date: "24 de junho de 2026",
    analysis:
      "Escócia pode precisar de resultado dependendo da classificação acumulada. Jogo de risco para zebra pura, mas mercado de gols costuma ser mais previsível que resultado exato em decisões de grupo.",
    markets: ["Mais de 1.5 gols", "Brasil classifica — sim", "Ambas marcam"],
    disclaimer: "Classificação do grupo influencia intensidade — reavalie perto do jogo.",
  },
];
