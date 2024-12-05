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
    {#each data.webinars as webinar, index}
    <li style="--index: {index};">
      <WebinarOverview {...webinar}/>
    </li>
    {/each}
  </ul>
</main>

<style>
  main {
    width: 100%;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    width: 90%;
  }

  li {
    max-width: var(--card-max-width);
  }

  @supports (animation-timeline: scroll()) {
    main {
      animation: bg linear;
      animation-timeline: scroll(nearest);
    }
    
    li {
      animation: shake 1s linear;
      animation-timeline: scroll(nearest);
      animation-delay: calc(var(--index) * 0.3s);
    }
  }
  
  @keyframes shake {
    0%{
      rotate: 0deg;
    }
    25%{
      rotate: -5deg;
    }
    50%{
      rotate: 0deg;
    }
    75%{
      rotate: 5deg;
    }
    100%{
      rotate: 0deg;
    }
  }

  @media only screen and (min-width: 600px) {
    h2 {
      margin-left: 1em;
      margin-top: 2em;
    }

    ul {
      margin: 2em 1em 0 1em;
    }
  }
</style>