<script>
  import { Navigation, Footer } from "$lib/index.js";
  // import { navigating } from '$app/stores';
  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<!-- {#if $navigating}
  <Navigation />
  <main>
    <span>Loading...</span>
  </main>
{:else} -->
<Navigation />
<div class="content">
  <slot />
</div>
<!-- {/if} -->
<footer>
  <Footer />
</footer>

<style>
  @keyframes combined-hue-fade {
    0% {
      filter: hue-rotate(0deg) blur(0px);
      opacity: 1;
    }
    50% {
      filter: hue-rotate(180deg) blur(5px);
      /* opacity: 0.5; Take this out for smooth transition */
      
    }
    100% {
      filter: hue-rotate(360deg) blur(0px);
      opacity: 0;
    }
  }

  :root::view-transition-old(root) {
    animation: combined-hue-fade 2000ms cubic-bezier(0.4, 0, 0.2, 1) both;
  }

  :root::view-transition-new(root) {
    animation: combined-hue-fade 2000ms cubic-bezier(0.4, 0, 0.2, 1) reverse
      both;
  }

  /* main {
    margin: auto;
  } */

  .content {
    flex: 1;
    margin-right: 1em;
    margin-left: 1em;
  }

  footer {
    height: 115px;
    background-color: #f0f0f0;
  }

  /* span {
    display: block;
    font-size: var(--font-size-4xl);
    font-weight: bold;
    margin: auto;
  } */

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
