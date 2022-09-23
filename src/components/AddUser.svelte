<script>
  import { chatListStore } from "../stores/chatListStore";
  let isAdding = false;
  let name = "";
  let imgUrl = "";

  const toggleAdding = () => {
    isAdding = !isAdding;
  };

  const addUser = () => {
    let user = {
      id: $chatListStore.length,
      name,
      imgUrl,
    };

    chatListStore.addUser(user);
    isAdding = false;
  };
</script>

<div class="divider" />
{#if isAdding}
  <form on:submit|preventDefault={addUser} class="flex flex-col gap-2 w-full">
    <div class="form-control">
      <label class="label">
        <span class="label-text">Name</span>
      </label>
      <input
        class="input input-bordered"
        type="text"
        bind:value={name}
        required
      />
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Image URL</span>
      </label>
      <input
        class="input input-bordered"
        type="text"
        bind:value={imgUrl}
        required
      />
    </div>
    <div class="flex gap-2 mt-4">
      <button type="submit" class="btn btn-primary flex-1">Add user</button>
      <button on:click|preventDefault={toggleAdding} class="btn">Cancel</button>
    </div>
  </form>
{:else}
  <button on:click={toggleAdding} class="btn btn-block">Add User</button>
{/if}
