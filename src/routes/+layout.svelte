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
  /* @keyframes dreamscape-out {
    0% {
      transform: perspective(600px) scale(1) translateX(0);
      filter: hue-rotate(0deg) brightness(1) contrast(1);
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      opacity: 1;
    }
    25% {
      transform: perspective(600px) scale(1.1) translateX(-5%);
      filter: hue-rotate(90deg) brightness(1.2) contrast(1.5);
      clip-path: polygon(0% 10%, 90% 0%, 100% 90%, 10% 100%);
      opacity: 0.8;
    }
    50% {
      transform: perspective(600px) scale(0.8) translateX(10%);
      filter: hue-rotate(180deg) brightness(0.8) contrast(0.5);
      clip-path: polygon(10% 0%, 100% 10%, 90% 100%, 0% 90%);
      opacity: 0.5;
    }
    75% {
      transform: perspective(600px) scale(1.2) translateX(-15%);
      filter: hue-rotate(270deg) brightness(1.5) contrast(2);
      clip-path: polygon(5% 5%, 95% 0%, 100% 95%, 0% 100%);
      opacity: 0.3;
    }
    100% {
      transform: perspective(600px) scale(0.5) translateX(50%);
      filter: hue-rotate(360deg) brightness(0.5) contrast(0.3);
      clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
      opacity: 0;
    }
  }

  @keyframes dreamscape-in {
    0% {
      transform: perspective(600px) scale(0.5) translateX(-50%);
      filter: hue-rotate(360deg) brightness(0.5) contrast(0.3);
      clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
      opacity: 0;
    }
    25% {
      transform: perspective(600px) scale(1.2) translateX(15%);
      filter: hue-rotate(270deg) brightness(1.5) contrast(2);
      clip-path: polygon(5% 5%, 95% 0%, 100% 95%, 0% 100%);
      opacity: 0.3;
    }
    50% {
      transform: perspective(600px) scale(0.8) translateX(-10%);
      filter: hue-rotate(180deg) brightness(0.8) contrast(0.5);
      clip-path: polygon(10% 0%, 100% 10%, 90% 100%, 0% 90%);
      opacity: 0.5;
    }
    75% {
      transform: perspective(600px) scale(1.1) translateX(5%);
      filter: hue-rotate(90deg) brightness(1.2) contrast(1.5);
      clip-path: polygon(0% 10%, 90% 0%, 100% 90%, 10% 100%);
      opacity: 0.8;
    }
    100% {
      transform: perspective(600px) scale(1) translateX(0);
      filter: hue-rotate(0deg) brightness(1) contrast(1);
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      opacity: 1;
    }
  }

  :root::view-transition-old(root) {
    animation: dreamscape-out 2000ms cubic-bezier(0.4, 0, 0.2, 1) both;
    transform-origin: center;
  }

  :root::view-transition-new(root) {
    animation: dreamscape-in 2000ms cubic-bezier(0.4, 0, 0.2, 1) both;
    transform-origin: center;
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
