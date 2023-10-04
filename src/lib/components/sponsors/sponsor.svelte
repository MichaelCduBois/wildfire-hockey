<script lang="ts">
  export let link: string;
  export let sponsorName: string;
  export let tier: string;
</script>

<a
class="logo-item !bg-transparent"
href={link}
target="_blank">
  <img
    class={`sponsor-${tier}`}
    src={`sponsors/${sponsorName}.png`}
    alt={`${sponsorName} Logo`} />
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