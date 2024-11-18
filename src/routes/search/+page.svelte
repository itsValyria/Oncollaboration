<script>
  export let data;
  import { ContouringOverview, Search, WebinarOverview } from "$lib/index.js";
</script>

<main>
  <h1>Search Results</h1>
  <Search></Search>
  <p>Results for: <strong>"{data.query}"</strong></p>
  
  {#if data.webinars.length || data.contourings.length}
    <section>
      <h2>Matching Webinars</h2>
      {#each data.webinars as webinar}
        <div>
          <WebinarOverview {...webinar} />
        </div>
      {/each}
      {#if !data.webinars.length}
        <p>No matching webinars found.</p>
      {/if}
    </section>

    <section>
      <h2>Matching Contourings</h2>
      {#each data.contourings as contouring}
        <div>
          <ContouringOverview {...contouring} />
        </div>
      {/each}
      {#if !data.contourings.length}
        <p>No matching contourings found.</p>
      {/if}
    </section>
  {:else}
    <p>No results found.</p>
  {/if}
</main>

<style>
  main {
    margin: 1rem;
    margin-top: 2rem;
  }
</style>