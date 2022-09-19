<script>
  import "../app.css";
</script>

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
</div>
