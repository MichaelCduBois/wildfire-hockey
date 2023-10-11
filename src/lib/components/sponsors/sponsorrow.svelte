<script lang="ts">
  export let sponsorCount: number;

  function getClasses(sponsorCount: number) {
    return `logo-cloud grid-cols-1 lg:!grid-cols-${sponsorCount} gap-1`;
  }
</script>

<div class={getClasses(sponsorCount)}>
  <slot />
</div>
