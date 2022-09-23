<script>
  import { messageStore } from "../stores/messageStore";
  import TrashIcon from "./TrashIcon.svelte";
  import PencilIcon from "./PencilIcon.svelte";

  export let idx;
  let isEditing = false;
  let newMessage = $messageStore[idx].text;

  const toggleEdit = () => {
    isEditing = !isEditing;
  };

  const saveChanges = () => {
    $messageStore[idx].text = newMessage;
    isEditing = false;
  };
</script>

<div class="flex flex-row justify-between items-center">
  {#if isEditing}
    <div class="flex flex-col gap-2 w-full">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Message</span>
        </label>
        <textarea class="textarea textarea-bordered" bind:value={newMessage} />
      </div>
      <div class="flex gap-4 w-full mt-2">
        <button on:click={saveChanges} class="btn btn-sm btn-primary flex-1">
          Save
        </button>
        <button on:click={toggleEdit} class="btn btn-sm"> Cancel </button>
        <button
          disabled={$messageStore.length == 1}
          on:click={() => {
            messageStore.removeMessage(idx);
            isEditing = false;
          }}
          class="btn btn-error btn-outline btn-sm"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  {:else}
    <p class="text-lg">
      {$messageStore[idx].text}
    </p>
    <button on:click={toggleEdit} class="btn btn-outline btn-sm">
      <PencilIcon />
    </button>
  {/if}
</div>
