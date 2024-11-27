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
  <div class="content">
    <slot />
  </div>
{/if}
<footer>
  <Footer />
</footer>

<style>
  main, .content {
    flex: 1;
    margin-right: 1em;
    margin-left: 1em;
  }

  footer {
    height: 115px;
    background-color: #f0f0f0;
  }

  span {
    display: block;
    font-size: var(--font-size-6);
    font-weight: bold;
    margin: auto;
  }

  @media (min-width: 600px) {
    .content {
      margin-bottom: 77px;
    }
  }

  @media (min-width: 1080px) {
    .content {
      margin-top: 74px;
      padding-bottom: 0;
    }
  }

  @media (min-width: 1920px) {
    .content {
      margin-top: 82px;
    }
  }


</style>
