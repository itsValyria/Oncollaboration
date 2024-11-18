<script>
  export let data;
  import { ContouringOverview, Search, WebinarOverview } from "$lib/index.js";
</script>

<main>
  <h1>Search Results</h1>
  <Search></Search>
  <p>Results for: <strong>"{data.query}"</strong></p>
  
  {#if data.webinars.length || data.contourings.length}
    <h2>Matching Webinars</h2>
    <div class="carrousel">
      {#each data.webinars as webinar}
        <div>
          <WebinarOverview {...webinar} />
        </div>
      {/each}
      {#if !data.webinars.length}
        <p>No matching webinars found.</p>
      {/if}
    </div>

    <h2>Matching Contourings</h2>
    <div class="carrousel">
      {#each data.contourings as contouring}
        <div>
          <ContouringOverview {...contouring} />
        </div>
      {/each}
      {#if !data.contourings.length}
        <p>No matching contourings found.</p>
      {/if}
    </div>
  {:else}
    <p>No results found.</p>
  {/if}
</main>

<style>
  main {
    margin: 1rem;
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
    main {
      margin: 4rem;
    }

    .carrousel {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }
  }
</style>