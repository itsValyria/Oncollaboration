<script>
  import {Navigation} from "$lib/index.js";
</script>

<Navigation />

<div class="slot">
  <slot />
</div>

<style>
.slot {
  padding-bottom: 57px;
}

@media (min-width: 600px) {
  .slot {
    padding-bottom: 77px;
  }
}

@media (min-width: 1080px) {
  .slot {
    margin-top: 74px;
    padding-bottom: 0;
  }
}

@media (min-width: 1920px) {
  .slot {
    margin-top: 82px;
  }
}
</style>