<script>
    export let data;
    import { Filter, SearchResults, Search } from "$lib/index.js";
  </script>
  
<main>
  <h1>Category Results</h1>
    <Search />

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
  