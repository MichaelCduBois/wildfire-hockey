<script lang="ts">
  // Wildfire Imports
  import type { Sponsor } from "$lib/utils/sponsors";

  export let sponsor: Sponsor;
  export let year: number;
</script>

<a
  class="logo-item !bg-transparent shadow-transparent"
  href={sponsor.url}
  target="_blank">
  <img
    class={`sponsor-${sponsor.tier}`}
    src={`sponsors/${year}/${sponsor.name}.png`}
    alt={`${sponsor.name} Logo`} />
</a>

<style>
  .sponsor-assist {
    max-height: 100px;
  }

  /* .sponsor-goal {
    max-height: 150px;
  } */

  .sponsor-hat-trick {
    max-width: 100%;
    max-height: 200px;
  }
</style>
