<script>
  import { Navigation, Footer, LoadingState } from "$lib/index.js";
  import { navigating } from '$app/stores';

  let showLoading = false;
  let navigatingTimeout;

  // Watch the `navigating` store
  $: if ($navigating) {
    // Delay showing the loading state
    clearTimeout(navigatingTimeout);
    navigatingTimeout = setTimeout(() => {
      showLoading = true;
    }, 300); // Adjust delay for view-transition capture
  } else {
    clearTimeout(navigatingTimeout);
    showLoading = false; // Hide loading when navigation completes
  }
</script>

{#if showLoading}
  <Navigation />
  <main>
    <LoadingState />
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
