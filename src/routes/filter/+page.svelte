<script>
    export let data; // Ontvang de gegevens vanuit de server
    import { Filter, SearchResults } from "$lib/index.js";
  </script>
  
<main>
<h1>Category Results</h1>
  <Filter activeCategory={data.category}></Filter>
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
  