<script>
  import { Navigation, Footer } from "$lib/index.js";
  import { navigating } from '$app/stores';
</script>

{#if $navigating} 
  <Navigation />
  <main>
    <span>Loading...</span>
  </main>
{:else} 
  <Navigation />
  <div class="slot">
    <slot />
  </div>
{/if}
<Footer />


<style>
  main {
    display: flex;
    width: 100vw;
    height: 90vh;
  }

  span {
    display: block;
    font-size: var(--font-size-6);
    font-weight: bold;
    width: fit-content;
    margin: auto;
  }

  .slot {
    padding-bottom: 57px;
  }

  @media screen and (min-width: 600px) {
    .slot {
      padding-bottom: 77px;
    }
  }

  @media screen and (min-width: 1080px) {
    .slot {
      margin-top: 74px;
      padding-bottom: 0;
    }
  }

  @media screen and (min-width: 1920px) {
    .slot {
      margin-top: 82px;
    }
  }
</style>