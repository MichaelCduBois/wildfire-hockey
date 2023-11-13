<script lang="ts">
  // Wildfire Hockey Imports
  import { SponsorRow } from "$lib/components/sponsors";
  import type { Season } from "$lib/utils/seasons";

  export let season: Season;
</script>

<div class="logo-cloud-container">
  {#each season.sponsors as sponsorRowData}
    <SponsorRow
      {sponsorRowData}
      year={season.year} />
  {/each}
</div>

<style>
  .logo-cloud-container {
    margin: auto;
    text-align: center;
    width: 50%;
  }
</style>
