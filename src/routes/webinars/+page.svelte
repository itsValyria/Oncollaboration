<script>
  import {Search, Filter, WebinarOverview, FeaturedWebinar} from "$lib/index.js";
  export let data;
</script>

<main>
  <h1>Webinars</h1>

  <Search />

  <Filter />

  {#each data.FeaturedWebinars as featuredWebinar}
    <FeaturedWebinar {...featuredWebinar}/>
  {/each}

  <h2>All webinars</h2>
  <ul>
    {#each data.webinars as webinar}
    <li>
      <WebinarOverview {...webinar}/>
    </li>
    {/each}
  </ul>
</main>

<style>
  main {
    width: 100vw;
  }

  h2 {
    margin-left: 1em;
    margin-top: 2em;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 2em 1em 0 1em;
    justify-content: center;
  }

  li {
    max-width: var(--card-max-width);
  }
</style>