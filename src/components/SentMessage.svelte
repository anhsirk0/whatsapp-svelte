<script>
  export let text = "Hi!";
  export let first = false;
  export let time = "3:14 PM";
</script>

<div
  class="bg-secondary ml-auto w-4/5 mx-4 mt-1 p-2 rounded-lg shadow relative"
>
  {#if first}
    <div
      class="w-4 overflow-hidden inline-block absolute top-0 -right-2 drop-shadow-2xl shadow-2xl"
    >
      <div
        class="h-6 rounded bg-secondary rotate-45 transform origin-top-right drop-shadow-2xl"
      />
    </div>
  {/if}
  <p class="text-sm px-1">
    {text}
  </p>
  <p class="text-right text-xs text-base-content/70">{time}</p>
</div>
