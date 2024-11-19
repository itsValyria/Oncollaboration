<script>
  export let data;
  import { ContouringOverview, WebinarOverview } from "$lib/index.js";
</script>

<main>
  {#if data.webinars.length > 0}
    <h2>Matching Webinars</h2>
    <div class="carrousel">
      {#each data.webinars as webinar}
        <div>
          <WebinarOverview {...webinar} />
        </div>
      {/each}
    </div>
  {/if}

  {#if data.contourings.length > 0}
    <h2>Matching Contourings</h2>
    <div class="carrousel">
      {#each data.contourings as contouring}
        <div>
          <ContouringOverview {...contouring} />
        </div>
      {/each}
    </div>
  {/if}

  {#if data.webinars.length === 0 && data.contourings.length === 0}
    <p>No results found.</p>
  {/if}
</main>

<style>
  main {
    margin-top: 2rem;
  }

  .carrousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 0px;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    margin: 2em auto;
    gap: 10px;
  }

  .carrousel > div {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }

  @media screen and (min-width: 1599px) {
    .carrousel {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
  }
</style>