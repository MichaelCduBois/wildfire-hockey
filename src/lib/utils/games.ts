// 3rd Party Imports
import { tableMapperValues } from "@skeletonlabs/skeleton";
// 3rd Party Type Imports
import type { TableSource } from "@skeletonlabs/skeleton";
// Wildfire Hockey Imports
import stats from "$lib/stats.json";

export default function gamesTable(selectedSeason: number) {
  const gameTable: TableSource = {
    head: ["Date", "Opponent", "Location", "Result", "Score"],
    body: tableMapperValues(getStats(selectedSeason), [
      "date",
      "opponent",
      "location",
      "result",
      "score",
    ]),
  };

  return gameTable;
}

function getStats(selectedSeason: number) {
  const gameStats: Array<object> = [];

  stats.seasons.forEach((season) => {
    if (season.year === selectedSeason) {
      season.games.forEach((game: Game) => {
        // If Game was Played
        if (game.played) {
          // Generate Score String
          game.score = `${game.goalsFor} - ${game.goalsAgainst}`;
          // Generate Game Result String
          game.result =
            game.goalsFor > game.goalsAgainst
              ? "Win"
              : game.goalsFor < game.goalsAgainst
              ? "Loss"
              : "Tie";
        } else {
          // Generate Score String
          game.score = "-";
          // Generate Game Result String
          game.result = "-"
        }

        // Add Game to Array
        gameStats.push(game);
      });
    }
  });

  return gameStats;
}

interface Game {
  date: string;
  opponent: string;
  location: string;
  goalsFor: number;
  goalsAgainst: number;
  result?: string;
  score?: string;
  played: boolean;
}
