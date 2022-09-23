<script>
  import { messageStore } from "../stores/messageStore";
  let isAdding = false;
  let text = "";
  let time = "";
  let received = true;
  let first = false;

  const toggleAdding = () => {
    isAdding = !isAdding;
  };

  const addMessage = () => {
    let message = {
      id: $messageStore.length,
      text,
      time,
      received,
      first,
    };

    messageStore.addMessage(message);
    isAdding = false;
  };
</script>

<div class="divider" />
{#if isAdding}
  <form
    on:submit|preventDefault={addMessage}
    class="flex flex-col gap-2 w-full"
  >
    <div class="form-control">
      <label class="label">
        <span class="label-text">Message</span>
      </label>
      <textarea class="textarea textarea-bordered" bind:value={text} required />
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Time</span>
      </label>
      <input
        class="input input-bordered"
        type="text"
        bind:value={time}
        required
      />
    </div>
    <div class="flex gap-4">
      <div class="form-control w-full">
        <label class="label cursor-pointer">
          <span class="label-text">Received</span>
          <input
            type="radio"
            bind:group={received}
            name="radio-received"
            class="radio radio-primary"
            value={true}
          />
        </label>
      </div>
      <div class="form-control w-full">
        <label class="label cursor-pointer">
          <span class="label-text">Sent</span>
          <input
            type="radio"
            bind:group={received}
            name="radio-received"
            class="radio radio-primary"
            value={false}
          />
        </label>
      </div>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text"
          >First message (triangular shape at corner)</span
        >
        <input
          type="checkbox"
          bind:checked={first}
          class="checkbox checkbox-primary"
        />
      </label>
    </div>
    <div class="flex gap-2 mt-4">
      <button type="submit" class="btn btn-primary flex-1">Add message</button>
      <button on:click|preventDefault={toggleAdding} class="btn">Cancel</button>
    </div>
  </form>
{:else}
  <button on:click={toggleAdding} class="btn btn-block">Add Message</button>
{/if}
