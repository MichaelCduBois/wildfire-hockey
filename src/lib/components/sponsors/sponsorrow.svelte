<script lang="ts">
  export let sponsorCount: number;

  // Tailwind workaround for dynamic classes
  const _possibleClasses: Array<string> = [
    "lg:!grid-cols-1",
    "lg:!grid-cols-2",
    "lg:!grid-cols-3",
    "lg:!grid-cols-4",
    "lg:!grid-cols-5",
  ]
  // Use the _possibleClasses for linting
  _possibleClasses;
</script>

<div class="logo-cloud grid-cols-1 lg:!grid-cols-{sponsorCount} gap-1">
  <slot />
</div>
