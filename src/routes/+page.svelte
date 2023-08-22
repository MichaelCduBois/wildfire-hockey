<script lang="ts">
  // 3rd Party Imports
  import {
    Accordion,
    AccordionItem,
    Table,
    tableMapperValues,
  } from "@skeletonlabs/skeleton";
  // Type Imports
  import type { TableSource } from "@skeletonlabs/skeleton";
  // Stat Imports
  import stats from "$lib/stats.json";

  // Script Code
  const seasons: Array<object> = [];
  stats.seasons.forEach((season) => {
    seasons.push(season);
  });

  function getGameStats(selectedSeason: number) {
    const gameStats: Array<object> = [];
    stats.seasons.forEach((season) => {
      if (season.year === selectedSeason) {
        season.games.forEach((game) => {
          game.score = `${game.goalsFor} - ${game.goalsAgainst}`;
          if (game.goalsFor > game.goalsAgainst) {
            game.result = "Win";
          } else if (game.goalsFor < game.goalsAgainst) {
            game.result = "Loss";
          } else {
            game.result = "Tie";
          }
          gameStats.push(game);
        });
      }
    });
    return gameStats;
  }

  function getGoalieStats(selectedSeason: number) {
    const goalieStats: Array<object> = [];
    stats.seasons.forEach((season) => {
      if (season.year === selectedSeason) {
        season.roster.goalies.forEach((goalie) => {
          goalie.savePercentage = (
            goalie.saves /
            (goalie.saves + goalie.goalsAgainst)
          ).toFixed(3);
          goalieStats.push(goalie);
        });
      }
    });
    return goalieStats;
  }

  function getPlayerStats(selectedSeason: number) {
    const rosterStats: Array<object> = [];
    stats.seasons.forEach((season) => {
      if (season.year === selectedSeason) {
        season.roster.skaters.forEach((player) => {
          player.points = player.goals + player.assists;
          rosterStats.push(player);
        });
      }
    });
    return rosterStats;
  }

  function generateGameTable(selectedSeason: number) {
    const gameTable: TableSource = {
      head: ["Date", "Opponent", "location", "Score", "Result"],
      body: tableMapperValues(getGameStats(selectedSeason), [
        "date",
        "opponent",
        "location",
        "score",
        "result",
      ]),
    };

    return gameTable;
  }

  function generateGoalieTable(selectedSeason: number) {
    const goalieTable: TableSource = {
      head: [
        "Number",
        "Position",
        "Games Played",
        "Save Percentage",
        "Saves",
        "Goals Against",
      ],
      body: tableMapperValues(getGoalieStats(selectedSeason), [
        "number",
        "position",
        "gamesPlayed",
        "savePercentage",
        "saves",
        "goalsAgainst",
      ]),
    };

    return goalieTable;
  }

  function generateSkaterTable(selectedSeason: number) {
    const playerTable: TableSource = {
      head: [
        "Number",
        "Position",
        "Games Played",
        "Points",
        "Goals",
        "Assists",
        "Penalty Minutes",
      ],
      body: tableMapperValues(getPlayerStats(selectedSeason), [
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
</script>

<div class="container mx-auto flex justify-center items-center">
  <img
    src="Wildfire Text.png"
    alt="Wildfire Text"
    class="w-1/2 mx-auto" />
</div>
<h2>A big thank you to all of our sponsors!</h2>
<div class="logo-cloud-container">
  <div class="logo-cloud grid-cols-1 lg:!grid-cols-1 gap-1">
    <a
      class="logo-item !bg-transparent"
      href="https://handytruckline.com/"
      target="_blank">
      <img
        class="sponsor-logo-500"
        src="sponsors/Handy Truck Lines.png"
        alt="Handy Truck Lines Logo" />
    </a>
  </div>
  <div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-1">
    <a
      class="logo-item !bg-transparent"
      href="https://leagueify.org/"
      target="_blank">
      <img
        class="sponsor-logo"
        src="sponsors/Leagueify.png"
        alt="Leagueify Logo" />
    </a>
    <a
      class="logo-item !bg-transparent"
      href="https://www.libbydphotography.com"
      target="_blank">
      <img
        class="sponsor-logo"
        src="sponsors/Libby d Photography.png"
        alt="Libby d Photography Logo" />
    </a>
    <a
      class="logo-item !bg-transparent"
      href="https://www.facebook.com/Huntsmobilewelding/"
      target="_blank">
      <img
        class="sponsor-logo"
        src="sponsors/Hunts Mobile Repair.png"
        alt="Hunts Mobile Repair Logo" />
    </a>
  </div>
  <div class="logo-cloud grid-cols-1 lg:!grid-cols-2 gap-1">
    <a
      class="logo-item !bg-transparent"
      href="https://agproud.com"
      target="_blank">
      <img
        class="sponsor-logo"
        src="sponsors/Agproud.png"
        alt="Agproud Logo" />
    </a>
    <a
      class="logo-item !bg-transparent"
      href="https://idahowatersports.com"
      target="_blank">
      <img
        class="sponsor-logo"
        src="sponsors/Idaho Water Sports.png"
        alt="Idaho Water Sports Logo" />
    </a>
  </div>
</div>

<h2>Statistics:</h2>
<Accordion autocollapse>
  {#each seasons as season, index}
    <!--  -->
    <AccordionItem open={index === 0}>
      <svelte:fragment slot="summary"><h2>{season.year}</h2></svelte:fragment>
      <svelte:fragment slot="content">
        <Table source={generateGameTable(season.year)} />
        <Table source={generateSkaterTable(season.year)} />
        <Table source={generateGoalieTable(season.year)} />
      </svelte:fragment>
    </AccordionItem>
  {/each}
</Accordion>

<style>
  h2,
  .logo-cloud-container {
    margin: auto;
    text-align: center;
    width: 50%;
  }

  .sponsor-logo-500 {
    max-width: 100%;
    max-height: 200px;
  }

  .sponsor-logo {
    max-height: 100px;
  }
</style>
