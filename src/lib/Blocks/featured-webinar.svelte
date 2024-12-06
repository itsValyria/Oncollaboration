<script>
  export let thumbnail = "";
  export let slug = "";
  export let duration = "";
  export let title = "";
  export let description = "";
  export let categories = "";
</script>

<section>
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
          FEATURED WEBINAR | FEATURED WEBINAR | 
        </textPath>
      </text>
    </g>
  </svg>

  <article>
    <div class="container-image">
      <a href="/webinars/{slug}">
        <img src="https://fdnd-agency.directus.app/assets/{thumbnail.id}?width=412&fit=cover&format=avif" alt="{title}" width="412px" height="322px" />
        <span class="duration">{duration}</span>
      </a>
    </div>

    <div class="featured-webinar-info">
      <a href="/webinars/{slug}">
        <h3>{title}</h3>
        <p>{@html description}</p>
      </a>
    </div>

    <div class="bottom-featured-card">
      {#if categories.length > 0}
        {#each categories as category}
          <p class="category">{category.avl_categories_id.name}</p>
        {/each}
      {:else}
        <p>No categories available</p>
      {/if}
    

      <div class="action-link">
        <a href="/webinars/{slug}">Watch webinar</a>
      </div>
   </div>
  </article>
</section>

<style>
  section{
    container-type: inline-size;
    container-name: main-container;
    padding-block: 1em;
    width: 100vw;
  }

  svg:nth-of-type(1){
    width: 100dvw;
    height: 100dvh;
    font-size: 3vw;
    display: flex;
    align-content: center;
    justify-content: center;
      letter-spacing: 6px;
      font-weight: 700;
      animation: spin linear;
      animation-timeline: scroll();   
  }


  article {
    display: grid;
    grid-template-areas:
      "a"
      "b"
      "c";
    gap: .5em;
    grid-template-columns: 1fr;
    animation: spin2 linear;
      animation-timeline: view();
      animation-range: entry;
      z-index: 200;
  }


  @keyframes spin{
    0%{
      rotate: 0deg;
      text-shadow: red 0px 0px,
      yellow 0px 5px;
      font-size: 3vw;
    }
    25%{
      text-shadow: red 0px 5px,
      yellow 0px -10px,
      purple 0px 10px;
    }
    50%{
      text-shadow: red 0px 10px,
      yellow 0px 15px,
      purple 0px 20px;
    }
    75%{
      text-shadow: red 0px -5px,
      yellow 0px 0px,
      purple 0px 15px;
    }
    100%{
      rotate: 360deg;
      text-shadow: red 0px 0px,
      yellow 0px 5px,
      purple 0px 15px;
    }
  }

  @keyframes spin2{
    0%{
    opacity: 0;
    scale: .7;
    }

    100%{
      opacity: 1;
      scale: 1;
    }
  }


  a, p, h3 {
    color: var(--text-color);
    text-decoration: none;
    text-shadow: red 0px 0px,
      yellow 0px 5px,
      purple 0px 10px;
  }

  .container-image {
    grid-area: a;
    position: relative;
  }

  .container-image img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-md);
  }

  .container-image span {
    position: absolute;
    bottom: 5%;
    right: 5%;
    color: var(--alt-text-color);
    background-color: var(--text-color);
    padding: var(--padding-label);
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-md);
    z-index: 1000;
  }

  .featured-webinar-info {
    grid-area: b;
  }

  .featured-webinar-info h3 {
    margin: 0.5em 0;
    font-size: var(--font-size-xl);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .featured-webinar-info p {
    margin: 0.5em 0;
    font-size: var(--font-size-md);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bottom-featured-card {
    grid-area: c;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bottom-featured-card p {
    background-color: var(--background-category-color);
    border-radius: var(--border-radius-sm);
    padding: 5px;
    text-transform: uppercase;
    font-weight: bold;
  }

  .action-link a {
    background-color: var(--primary-color);
    color: white;
    padding: 5px;
    border-radius: var(--border-radius-sm);
    text-transform: uppercase;
    transition: 0.2s;
    grid-area: d;
  }

  .action-link a:hover {
    transform: scale(1.1);
  }

  @container main-container (min-width: 821px) {
    article {
      grid-template-areas:
        "a b"
        "a c"
        "a c";
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto 1fr 1fr;
    }

    .bottom-featured-card {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-self: start;
    }

    .action-link a{
      font-size: 22px;
    }
  }

  @container main-container (600px < width <820px) {
    article {
      grid-template-areas:
        "a b"
        "a c"
        "a c";
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto;
    }

    .bottom-featured-card {
      display: flex;
      flex-direction: column;
      justify-self: start;
      gap: 4rem;
    }

    .container-image img {
      width: 100%;
      min-width: 422px;
      height: auto;
      border-radius: var(--border-radius-md);
    }
  }

  @media only screen and (min-width: 600px){
    section {
      padding: 1em;
      width: 100vw;
    }
  }
</style>