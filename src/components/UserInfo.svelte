<script>
  import { chatListStore } from "../stores/chatListStore";
  import TrashIcon from "./TrashIcon.svelte";
  import PencilIcon from "./PencilIcon.svelte";

  export let idx;
  let isEditing = false;
  let newName = $chatListStore[idx].name;
  let newImgUrl = $chatListStore[idx].imgUrl;
  let newVerified = $chatListStore[idx].verified;

  const toggleEdit = () => {
    isEditing = !isEditing;
  };

  const saveChanges = () => {
    $chatListStore[idx].name = newName;
    $chatListStore[idx].imgUrl = newImgUrl;
    $chatListStore[idx].verified = newVerified;
    isEditing = false;
  };
</script>

<div class="flex flex-row justify-between items-center">
  {#if isEditing}
    <div class="flex flex-col gap-2 w-full">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <input class="input input-bordered" type="text" bind:value={newName} />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Image URL</span>
        </label>
        <input
          class="input input-bordered"
          type="text"
          bind:value={newImgUrl}
        />
      </div>
      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Verified</span>
          <input
            type="checkbox"
            bind:checked={newVerified}
            class="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div class="flex gap-4 w-full mt-2">
        <button on:click={saveChanges} class="btn btn-sm btn-primary flex-1">
          Save
        </button>
        <button on:click={toggleEdit} class="btn btn-sm"> Cancel </button>
        <button
          disabled={$chatListStore.length == 1}
          on:click={() => {
            chatListStore.removeUser(idx);
            isEditing = false;
          }}
          class="btn btn-error btn-outline btn-sm"
        >
          <TrashIcon />
        </button>
      </div>
      <div class="divider my-0" />
    </div>
  {:else}
    <p class="text-lg">
      {$chatListStore[idx].name}
    </p>
    <button on:click={toggleEdit} class="btn btn-outline btn-sm">
      <PencilIcon />
    </button>
  {/if}
</div>
