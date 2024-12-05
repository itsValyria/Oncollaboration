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

  <svg xmlns="http://www.w3.org/2000/svg" xml:lang="en" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
    <defs>
      <path id="textcircle" d="M250,400
                   a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
    </defs>
    <g class="textcircle">
      <text textLength="940">
        <textPath 
                  xlink:href="#textcircle" 
                  aria-label="CSS & SVG are awesome"
                  textLength="940"
                  fill="blue">
         | ALL WEBINARS | ALL WEBINARS 
        </textPath>
      </text>
    </g>
  </svg>
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

  svg:nth-of-type(1){
    width: 100dvw;
    height: 100dvh;
    display: flex;
    align-content: center;
    justify-content: center;
      letter-spacing: 6px;
      font-weight: 700;
      animation: spin-article linear;
      animation-timeline: scroll();   
  }


  @keyframes spin-article{
    0%{
      rotate: 360deg;
      text-shadow: red 0px 0px,
      yellow 0px 5px,
      purple 0px 10px;
      font-size: 3vw;
    }
    25%{
      text-shadow: red 0px 5px,
      yellow 0px -10px,
      purple 0px -15px;
      font-size: 3vw;
    }
    50%{
      text-shadow: red 0px 10px,
      yellow 0px 15px,
      purple 0px 20px;
      font-size: 3vw;
    }
    75%{
      text-shadow: red 0px -5px,
      yellow 0px 0px,
      purple 0px 5px;
      font-size: 3vw;
    }
    100%{
      rotate: 0deg;
      text-shadow: red 0px 0px,
      yellow 0px 5px,
      purple 0px 10px;
      font-size: 3vw;
    }
  }

    ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    width: 90vw;
  }

  li {
    max-width: var(--card-max-width);
  }

  @media only screen and (min-width: 600px) {

    ul {
      margin: 2em 1em 0 1em;
    }
  }
</style>