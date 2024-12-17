<script>
  import { Navigation, Footer, LoadingState } from "$lib/index.js";
  import { navigating } from '$app/stores';
  import { onMount } from 'svelte';
</script>

<header>
  <Navigation />
</header>

{#if $navigating}
  <main>
    <LoadingState />
  </main>
{:else}
  <div class="content">
    <slot />
  </div>
{/if}

<footer>
  <Footer />
</footer>

<style>
  main {
    margin: auto;
  }

  .content {
    flex: 1;
    margin-right: 1em;
    margin-left: 1em;
  }

  footer {
    height: 70px;
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

    footer {
      height: 115px;
      background-color: #f0f0f0;
    }
  }

  @media (min-width: 1920px) {
    .content {
      margin-top: 82px;
    }
  }
</style>