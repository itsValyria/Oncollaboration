<script>
  export let data;
  import { ContouringOverview, Search, WebinarOverview } from "$lib/index.js";
  import SearchResults from "../../lib/search-results.svelte";
</script>

<main>
  <h1>Search Results</h1>
  <Search></Search>
  <p>Results for: <strong>"{data.query}"</strong></p>
  <SearchResults {data} />
</main>

<style>
  main {
    margin: 1rem;
    margin-top: 2rem;
  }

  @media screen and (min-width: 1599px) {
    main {
      margin: 4rem;
    }
  }
</style>