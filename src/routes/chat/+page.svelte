<script>
  import { slide } from "svelte/transition";
  import { chatListStore } from "../../stores/chatListStore";
  import { messageStore } from "../../stores/messageStore";
  import LeftArrowIcon from "../../components/LeftArrowIcon.svelte";
  import VideoCallIcon from "../../components/VideoCallIcon.svelte";
  import PhoneIcon from "../../components/PhoneIcon.svelte";
  import VerticalDotsIcon from "../../components/VerticalDotsIcon.svelte";
  import MicIcon from "../../components/MicIcon.svelte";
  import ReceivedMessage from "../../components/RecievedMessage.svelte";
  import SentMessage from "../../components/SentMessage.svelte";
</script>

<svelte:head>
  <title>{$chatListStore[0].name} • WhatsApp</title>
</svelte:head>

<div in:slide class="h-full w-full bg-accent flex flex-col">
  <div
    class="w-full bg-primary flex flex-row justify-between items-center pt-6 overflow-hidden"
  >
    <div class="flex flex-row items-center gap-1 text-base-100 px-2 py-3">
      <a href="/">
        <LeftArrowIcon />
      </a>
      <div class="avatar">
        <div class="w-7 rounded-full">
          <img alt="homer" src="/homer2.jpg" />
        </div>
      </div>
      <p class="font-bold ml-1 text-sm">{$chatListStore[0].name}</p>
    </div>
    <div class="flex flex-row items-center gap-2 text-base-100 px-2 py-3">
      <VideoCallIcon />
      <PhoneIcon />
      <VerticalDotsIcon />
    </div>
  </div>

  <!-- Chat Area -->
  <div
    class="flex flex-col gap-0 h-full flex-initial overflow-y-scroll box-content pr-6 w-full"
  >
    {#each $messageStore as message, idx (message.text + message.time)}
      <!-- Add space between received and sent messages -->
      {#if idx === 0 || message.received !== $messageStore[idx - 1].received}
        <div class="p-1" />
      {/if}
      {#if message.received}
        <ReceivedMessage
          text={message.text}
          first={message.first}
          time={message.time}
        />
      {:else}
        <SentMessage
          text={message.text}
          time={message.time}
          first={message.first}
        />
      {/if}
    {/each}
  </div>

  <div class="p-3 flex flex-row gap-1.5">
    <div
      class="h-10 flex-1 flex items-center rounded-full bg-base-100 shadow p-3"
    >
      <p class="text-base-content/70 text-sm">Message</p>
    </div>
    <button
      class="btn-sm h-10 w-10 btn btn-primary btn-circle bg-primary shadow"
    >
      <MicIcon />
    </button>
  </div>
</div>
