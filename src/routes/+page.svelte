<script lang="ts">
  // 3rd Party Imports
  import { Accordion, AccordionItem, Table } from "@skeletonlabs/skeleton";
  // Wildfire Hockey Imports
  import { SponsorList } from "$lib/components/sponsors";
  import gamesTable from "$lib/utils/games";
  import goaliesTable from "$lib/utils/goalies";
  import playersTable from "$lib/utils/players";
  import getRecord, { type Season } from "$lib/utils/seasons";
  import stats from "$lib/stats.json";

  // Script Code
  const seasons: Array<Season> = [];
  stats.seasons.forEach((season) => {
    seasons.push(season);
  });
</script>

<div class="page-container">
  <div class="container mx-auto flex justify-center items-center">
    <img
      src="Wildfire Logo.png"
      alt="Wildfire Logo | Designed by Fan Zone Athletics https://www.fanzoneathletics.com/"
      class="w-3/5 md:w-1/3 mx-auto" />
  </div>
  <!-- Current Sponsor Section -->
  <h2 class="section-heading">A big thank you to all of our current sponsors!</h2>
  <SponsorList season={seasons[0]} />

  <!-- Statistics Section -->
  <h2 class="section-heading">Statistics by Season:</h2>
  <div class="stats-container">
    <Accordion autocollapse>
      {#each seasons as season, index}
        <AccordionItem open={index === 0}>
          <svelte:fragment slot="summary"
            ><h3 class="season">
              {season.year}: {getRecord(season)}
            </h3></svelte:fragment>
          <svelte:fragment slot="content">
            <!-- Show Sponsors of Previous Seasons -->
            {#if seasons[0].year !== season.year}
              <h3 class="section-heading">
                Thank you to our sponsors for the {season.year} season:
              </h3>
              <SponsorList {season} />
            {/if}
            <!-- Show Season Statistics -->
            <Table source={gamesTable(season.year)} />
            <Table source={goaliesTable(season.year)} />
            <Table source={playersTable(season.year)} />
          </svelte:fragment>
        </AccordionItem>
      {/each}
    </Accordion>
  </div>
</div>

<style>
  .page-container {
    padding: 1.5rem 1rem;
  }

  .season {
    font-size: 1.2rem;
    text-align: center;
  }

  .section-heading {
    margin: 1rem;
    font-size: 1.75rem;
    text-align: center;
  }

  .stats-container {
    margin: auto;
    max-width: 950px;
  }
</style>
