// 3rd Party Imports
import { tableMapperValues } from "@skeletonlabs/skeleton";
// 3rd Party Type Imports
import type { TableSource } from "@skeletonlabs/skeleton";
// Wildfire Hockey Imports
import stats from "$lib/stats.json";

export default function playersTable(selectedSeason: number) {
  const playerTable: TableSource = {
    head: ["Number", "Position", "Games Played", "Points", "Goals", "Assists", "Penalty Minutes"],
    body: tableMapperValues(getStats(selectedSeason), [
      "number",
      "position",
      "gamesPlayed",
      "points",
      "goals",
      "assists",
      "penaltyMinutes",
    ]),
  };

  return playerTable;
}

function getStats(selectedSeason: number) {
  const playerStats: Array<object> = [];

  stats.seasons.forEach((season) => {
    if (season.year === selectedSeason) {
      season.roster.skaters.forEach((player: Player) => {
        // Generate Points
        player.points = player.goals + player.assists;

        // Add Player to Array
        playerStats.push(player);
      });
    }
  });

  return playerStats;
}

interface Player {
  number: number;
  position: string;
  gamesPlayed: number;
  points?: number;
  goals: number;
  assists: number;
  penaltyMinutes: number;
}
