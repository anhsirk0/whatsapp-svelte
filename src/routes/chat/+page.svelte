<script>
  import { slide } from "svelte/transition";
  import LeftArrowIcon from "../../components/LeftArrowIcon.svelte";
  import VideoCallIcon from "../../components/VideoCallIcon.svelte";
  import PhoneIcon from "../../components/PhoneIcon.svelte";
  import VerticalDotsIcon from "../../components/VerticalDotsIcon.svelte";
  import MicIcon from "../../components/MicIcon.svelte";
  import ReceivedMessage from "../../components/RecievedMessage.svelte";
  import SentMessage from "../../components/SentMessage.svelte";
</script>

<svelte:head>
  <title>Homer Simpson • WhatsApp</title>
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
      <p class="font-bold ml-1 text-sm">Homer Simpson</p>
    </div>
    <div class="flex flex-row items-center gap-2 text-base-100 px-2 py-3">
      <VideoCallIcon />
      <PhoneIcon />
      <VerticalDotsIcon />
    </div>
  </div>

  <!-- Chat Area -->
  <div
    class="flex flex-col gap-0 h-full flex-initial pt-2 overflow-y-scroll box-content pr-6 w-full"
  >
    <ReceivedMessage
      text="My favorite quotes of Homer Simpson"
      first={true}
      time="3:14 PM"
    />
    <ReceivedMessage
      text="Maybe, just once, someone will call me 'Sir', without adding 'you're making a
    scene'."
      time="3:14 PM"
    />
    <ReceivedMessage
      text="Weaseling out of things is important to learn; it’s what separates us from the animals… except the weasel."
      first={true}
      time="3:15 PM"
    />

    <ReceivedMessage text="Woo hoo!" time="3:16 PM" />

    <div class="p-2" />

    <SentMessage
      text="My favorite quotes of Homer Simpson"
      first={true}
      time="3:17 PM"
    />
    <SentMessage
      text="Trying is the first step towards failure."
      time="3:17 PM"
    />

    <div class="p-2" />

    <ReceivedMessage text="Doh!" first={true} time="3:20 PM" />
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
