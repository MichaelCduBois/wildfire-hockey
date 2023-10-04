<script lang="ts">
  export let sponsorCount: number;
</script>

<div class={`logo-cloud grid-cols-1 lg:!grid-cols-${sponsorCount} gap-1`}>
  <slot />
</div>
