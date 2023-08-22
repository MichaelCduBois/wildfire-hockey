// 3rd Party Imports
import { tableMapperValues } from "@skeletonlabs/skeleton";
// 3rd Party Type Imports
import type { TableSource } from "@skeletonlabs/skeleton";
// Wildfire Hockey Imports
import stats from "$lib/stats.json";

export default function goaliesTable(selectedSeason: number) {
  const goalieTable: TableSource = {
    head: [
      "Number",
      "Games Played",
      "Save Percentage",
      "Goals Against Average",
      "Saves",
      "Goals Against",
      "Shutouts",
      "Penalty Minutes",
    ],
    body: tableMapperValues(getStats(selectedSeason), [
      "number",
      "gamesPlayed",
      "savePercentage",
      "goalsAgainstAverage",
      "saves",
      "goalsAgainst",
      "shutouts",
      "penaltyMinutes",
    ]),
  };

  return goalieTable;
}

function getStats(selectedSeason: number) {
  const goalieStats: Array<object> = [];

  stats.seasons.forEach((season) => {
    if (season.year === selectedSeason) {
      season.roster.goalies.forEach((goalie: Goalie) => {
        // Generate Save Percentage
        goalie.savePercentage = (
          goalie.saves /
          (goalie.saves + goalie.goalsAgainst)
        ).toFixed(3);

        // Generate Goals Against Average
        goalie.goalsAgainstAverage = (
          goalie.goalsAgainst / goalie.gamesPlayed
        ).toFixed(2);

        // Add Goalie to Array
        goalieStats.push(goalie);
      });
    }
  });

  return goalieStats;
}

interface Goalie {
  number: number;
  gamesPlayed: number;
  savePercentage?: string;
  goalsAgainstAverage?: string;
  saves: number;
  goalsAgainst: number;
  shutouts: number;
  penaltyMinutes: number;
}
