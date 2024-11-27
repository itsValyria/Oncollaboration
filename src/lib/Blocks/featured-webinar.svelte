<script>
  export let thumbnail = "";
  export let duration = "";
  export let title = "";
  export let description = "";
  export let categories = "";
</script>


<section>
  <h1>Featured Webinar</h1>
  <article>
    <a href="/`webinars?featured=true`">
      <div class="container-image">
        <img src="https://fdnd-agency.directus.app/assets/{thumbnail.id}" alt="" width="412" height="322">
        <span class="duration">{duration}</span>
      </div>
      <div class="featured-webinar-info">
        <h2>{title}</h2>
        <p>{@html description}</p>
      </div>
    </a>
    <div class="bottom-featured-card">
      {#if categories.length > 0}
        {#each categories as category}
          <p class="category">{category.avl_categories_id.name}</p>
        {/each}
      {:else}
        <p>No categories available</p>
      {/if}
      <a href="/">Watch this webinar</a>
    </div>
  </article>
</section>

<style>

  section{
    container-type: inline-size;
    padding: 15px;
  }

   article {
    display: grid;
    grid-template-areas: 
    "a a"
    "b b"
    "c c"
    "d d"
  }

  @container (width > 1000px) {
    article{
    grid-template-areas: 
    "a a"
    "a a"
    "c c";
    background-color: blue;
    }

  }

  h1{
    margin-bottom: .5em;
  }

  .container-image {
    position: relative;
    grid-area: a;
  }

  span {
    position: absolute;
    color: var(--alt-text-color);
    padding: var(--padding-label);
    font-size: var(--font-size-1);
    border-radius: var(--border-radius-small);
    background-color: black;
    bottom: 10px;
    right: 10px;
  }

  img {
    height: auto;
    width: 100%;
    border-radius: var(--border-radius-big);
  }


  .featured-webinar-info{
    grid-area: b;
  }

  .featured-webinar-info h2{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-all;
    font-size: var(--font-size-3);
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: .5em;
  }

  .featured-webinar-info p{
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
   margin-top: .5em;
   font-size: var(--font-size-1);
  }

  .bottom-featured-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: c;
    margin-top: .5em;
  }

  .bottom-featured-card p{
    padding: var(--padding-label);
    width: fit-content;
    background-color: var(--background-category-color);
    border-radius: var(--border-radius-big);
    text-transform: uppercase;
    font-weight: 700;
  }

  .bottom-featured-card a{
    padding: var(--padding-label);
    width: fit-content;
    background-color: var(--primary-color);
    color: white;
    transition: .2s;
    border-radius: var(--border-radius-big);
    text-transform: uppercase;
  }

  .bottom-featured-card a:hover{
    scale: 1.1;
  }

  @media screen and (min-width: 600px) {
    span {
      opacity: 1;
      visibility: visible;
    }

    h3 {
      font-size: var(--font-size-4);
    }

    p {
      font-size: var( --font-size-2);
    }
  }
</style>