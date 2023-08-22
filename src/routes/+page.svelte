<script lang="ts">
  // 3rd Party Imports
  import { Accordion, AccordionItem, Table } from "@skeletonlabs/skeleton";
  // Wildfire Hockey Imports
  import gamesTable from "$lib/utils/games";
  import goaliesTable from "$lib/utils/goalies";
  import playersTable from "$lib/utils/players";
  import stats from "$lib/stats.json";

  // Script Code
  const seasons: Array<object> = [];
  stats.seasons.forEach((season) => {
    seasons.push(season);
  });
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
        <Table source={gamesTable(season.year)} />
        <Table source={playersTable(season.year)} />
        <Table source={goaliesTable(season.year)} />
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
