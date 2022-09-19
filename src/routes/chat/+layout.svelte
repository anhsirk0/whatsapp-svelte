<script>
  import { fade } from "svelte/transition";
</script>

<div in:fade class="h-full w-full bg-accent flex flex-col">
  <slot />
</div>
