<script>
  import { ContouringOverview, Search, WebinarOverview } from "$lib/index.js";
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  let query = '';
  let matchingWebinars = [];
  let matchingContourings = [];

  // Load the search query from the URL
  $: query = $page.url.searchParams.get('query');

  onMount(async () => {
    if (query) {
      await fetchResults();
    }
  });

  async function fetchResults() {
    // Example: Fetch data from API or filter existing data
    const webinarRes = await fetch(`/api/webinars?search=${query}`);
    const contouringRes = await fetch(`/api/contourings?search=${query}`);

    if (webinarRes.ok) matchingWebinars = await webinarRes.json();
    if (contouringRes.ok) matchingContourings = await contouringRes.json();
  }
</script>

<main>
  <h1>Search Results</h1>
  <p>Results for: <strong>{query}</strong></p>

  <section>
    <h2>Webinars</h2>
    {#if matchingWebinars.length > 0}
      <div class="results">
        {#each matchingWebinars as webinar}
          <WebinarOverview {...webinar} />
        {/each}
      </div>
    {:else}
      <p>No webinars found.</p>
    {/if}
  </section>

  <section>
    <h2>Contourings</h2>
    {#if matchingContourings.length > 0}
      <div class="results">
        {#each matchingContourings as contouring}
          <ContouringOverview {...contouring} />
        {/each}
      </div>
    {:else}
      <p>No contourings found.</p>
    {/if}
  </section>
</main>

<style>
  .results {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
</style>