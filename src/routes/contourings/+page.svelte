<script>
  import {Search, Filter, ContouringOverview} from "$lib/index.js";
  export let data;
</script>

<main>
  <h1>Contourings</h1>

  <Search />

  <Filter />

  <ul>
    {#each data.contourings as contouring}
    <li>
      <ContouringOverview {...contouring}/>
    </li>
    {/each}
  </ul>
</main>

<style>
  main {
    width: 100vw;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2em;
    margin-left: auto;
  }
</style>