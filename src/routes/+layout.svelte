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
  main {
    margin: auto;
  }
  
  .content {
    flex: 1;
    margin-right: 1em;
    margin-left: 1em;
  }

  @supports (animation-timeline: scroll()) {
    .content {
      animation: changepatterns linear;
      animation-timeline: scroll(nearest);
    }
  }
  
  footer {
    height: 115px;
    background-color: #f0f0f0;
  }

  span {
    display: block;
    font-size: var(--font-size-4xl);
    font-weight: bold;
    margin: auto;
  }

  @keyframes changepatterns {
    0% {
      background-size: 32px 32px;
    }
    20% {
      background-image: radial-gradient(var(--animation-color) 7px, transparent 7px), radial-gradient(var(--animation-color) 7px, transparent 7px);
      background-size: 32px 32px;
      background-position: 0 0, 16px 16px;
    }
    50% {
      background-image: repeating-linear-gradient(45deg, transparent, transparent 32px, var(--animation-color) 32px, var(--animation-color) 64px);
      background-size: 120px 120px;
    }
    100% {
      background: linear-gradient(135deg, var(--animation-color) 25%, transparent 25%) -32px 0, linear-gradient(225deg, var(--animation-color) 25%, transparent 25%) -32px 0, linear-gradient(315deg, var(--animation-color) 25%, transparent 25%), linear-gradient(45deg, var(--animation-color) 25%, transparent 25%);
      background-size: 64px 64px;
    }
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
