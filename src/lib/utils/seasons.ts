// Wildfire Hockey Type Imports
import type { Game } from "$lib/utils/games";

export default function getRecord(season: Season) {
  let wins = 0;
  let losses = 0;
  let ties = 0;

  season.games.forEach((game) => {
    if (game.goalsFor > game.goalsAgainst && game.played) {
      wins++;
    } else if (game.goalsFor < game.goalsAgainst && game.played) {
      losses++;
    } else if (game.goalsFor === game.goalsAgainst && game.played) {
      ties++;
    }
  });
  return `${wins}-${losses}-${ties}`;
}

export interface Season {
  year: number;
  games: Game[];
  roster: object;
}
