<script lang="ts">
  // 3rd Party Imports
  import { Accordion, AccordionItem, Table } from "@skeletonlabs/skeleton";
  // Wildfire Hockey Imports
  import { Sponsor, SponsorList, SponsorRow } from "$lib/components/sponsors"
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
      alt="Wildfire Logo"
      class="w-3/5 md:w-1/3 mx-auto" />
  </div>
  <SponsorList>
    <SponsorRow sponsorCount={1}>
      <Sponsor sponsorName={"Handy Truck Lines"} link={"https://handytruckline.com/"} tier={"hat-trick"} />
    </SponsorRow>
    <SponsorRow sponsorCount={5}>
      <Sponsor sponsorName={"Leagueify"} link={"https://leagueify.org/"} tier={"assist"} />
      <Sponsor sponsorName={"Libby d Photography"} link={"https://www.libbydphotography.com/"} tier={"assist"} />
      <Sponsor sponsorName={"Hunts Mobile Repair"} link={"https://www.facebook.com/Huntsmobilewelding/"} tier={"assist"} />
      <Sponsor sponsorName={"Thrifty"} link={"https://thriftyplus.com/"} tier={"assist"} />
      <Sponsor sponsorName={"Js Mobile Garage"} link={"https://www.facebook.com/profile.php?id=100063828369323"} tier={"assist"} />
    </SponsorRow>
    <SponsorRow sponsorCount={2}>
      <Sponsor sponsorName={"Agproud"} link={"https://agproud.com/"} tier={"assist"} />
      <Sponsor sponsorName={"Idaho Water Sports"} link={"https://idahowatersports.com/"} tier={"assist"} />
    </SponsorRow>
  </SponsorList>

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
