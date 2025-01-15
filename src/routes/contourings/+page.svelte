<script>
  import {Search, Filter, ContouringOverview} from "$lib/index.js";
  export let data;
  let viewtransition = true
</script>

<main>
  <Search />

  <Filter activeCategory={data.category} currentPage="contourings"/>

  <h2>All contourings</h2>
  
  <ul>
    {#each data.contourings as contouring}
    <li>
      <ContouringOverview {...contouring} {viewtransition}/>
    </li>
    {/each}
  </ul>
</main>

<style>
  main {
    width: 100%;
  }

  h2 {
    margin: 1em 0 0 1em;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 2em 1em 0 1em;
  }
</style>