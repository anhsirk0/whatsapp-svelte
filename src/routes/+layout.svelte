<script>
  import { chatListStore } from "../stores/chatListStore";
  import { messageStore } from "../stores/messageStore";
  import SettingsIcon from "../components/SettingsIcon.svelte";
  import UserInfo from "../components/UserInfo.svelte";
  import MessageInfo from "../components/MessageInfo.svelte";
  import AddUser from "../components/AddUser.svelte";
  import AddMessage from "../components/AddMessage.svelte";

  let dropdownOpened = false;

  import "../app.css";
</script>

<div class="drawer drawer-end">
  <input id="settings-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <!-- Page content here -->
    <div
      class="min-h-screen overflow-hidden bg-base-100 flex justify-center items-center m-0 p-0 relative"
    >
      <div class="mockup-phone">
        <div class="camera" />
        <div class="display">
          <div class="artboard artboard-demo phone-1">
            <slot />
          </div>
        </div>
      </div>
      <div class="absolute top-8 right-8">
        <label
          for="settings-drawer"
          class="btn btn-primary btn-lg btn-circle shadow-lg"
        >
          <SettingsIcon />
        </label>
      </div>
    </div>
  </div>
  <div class="drawer-side">
    <label for="settings-drawer" class="drawer-overlay" />
    <div class="menu p-4 overflow-y-auto w-80 lg:w-96 bg-base-100 space-y-4">
      <!-- Sidebar content here -->
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow"
      >
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-xl font-medium">Users</div>
        <div class="collapse-content">
          <div class="flex flex-col gap-4">
            {#each $chatListStore as user, idx (user.name + idx)}
              <UserInfo {idx} />
            {/each}
          </div>
          <AddUser />
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow"
      >
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-xl font-medium">Messages</div>
        <div class="collapse-content">
          <div class="flex flex-col gap-4">
            {#each $messageStore as message, idx (message.text + idx)}
              <MessageInfo {idx} />
            {/each}
          </div>
          <AddMessage />
        </div>
      </div>
    </div>
  </div>
</div>
