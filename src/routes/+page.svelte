<script>
  import SearchIcon from "../components/SearchIcon.svelte";
  import VerticalDotsIcon from "../components/VerticalDotsIcon.svelte";
  import ChatIcon from "../components/ChatIcon.svelte";

  let chatList = [
    {
      name: "Homer Simpson",
      imgUrl: "/homer.jpg",
      link: "/chat",
    },
    {
      name: "Bart Simpson",
      imgUrl: "/bart.jpg",
      link: "/chat",
    },
  ];
</script>

<svelte:head>
  <title>Home • WhatsApp</title>
</svelte:head>

<div class="h-full w-full bg-base-100 flex flex-col relative">
  <div class="w-full bg-primary flex flex-col pt-6">
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row items-center gap-1 text-base-100 p-2">
        <div class="font-bold ml-1 text-sm">WhatsApp</div>
      </div>
      <div class="flex flex-row items-center gap-2 text-base-100 px-2">
        <SearchIcon />
        <VerticalDotsIcon />
      </div>
    </div>
    <div class="tabs font-medium w-full grid grid-cols-3">
      <a
        href="#!"
        class="tab tab-bordered tab-active !border-base-100 text-base-100 text-xs"
        >Chat</a
      >
      <a href="#!" class="tab tab-bordered text-base-100/70 text-xs">Status</a>
      <a href="#!" class="tab tab-bordered text-base-100/70 text-xs">Calls</a>
    </div>
  </div>

  <div class="flex flex-col divide-y w-full">
    {#each chatList as chat (chat.name)}
      <a href={chat.link} class="flex flex-row gap-2 w-full items-center p-3">
        <div class="avatar">
          <div class="w-10 rounded-full">
            <img alt={chat.name} src={chat.imgUrl} />
          </div>
        </div>
        <p class="font-bold ml-1 text-sm">{chat.name}</p>
      </a>
    {/each}
  </div>

  <button class="btn btn-primary btn-circle shadow absolute bottom-3 right-3">
    <ChatIcon />
  </button>
</div>
