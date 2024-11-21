<script>
  export let thumbnail = "";
  export let duration = "";
  export let title = "";
  export let categories = [];
</script>

<article>
  <a href="/">
    <div class="container-image">
      <img src="https://fdnd-agency.directus.app/assets/{thumbnail.id}" alt="thumbnail" width="412" height="322">
      <p class="duration">{duration}</p>
    </div>
    <h3>{title}</h3>
    <div class="categories">
        <p class="category">{categories.name}</p>
    </div>
  </a>
  <a href="/">Watch this webinar</a>
</article>

<style>
  article {
    margin-inline: .5rem;
    height: 100%;
  }

  article a {
    color: var(--text-color);
    text-decoration: none;
    height: 100%;
  }

  article p {
    font-size: var(--font-size-00);
  }

  article .container-image {
    position: relative;
  }  

  article .container-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: var(--border-radius-big);
  }

  article .container-image .duration {
    position: absolute;
    background-color: #1F000B;
    color: var(--alt-text-color);
    padding: var(--padding-label);
    bottom: 10px;
    right: 10px;
    border-radius: var(--border-radius-small);
    z-index: 1;
  }

  article h3 {
    word-break: break-all;
    font-size: var(--font-size-0);
    overflow: hidden;
    text-overflow: ellipsis;
  }
  article .categories {
    display: flex;
    margin-top: auto;
  }

  article .categories .category {
    display: none;
    margin-inline-end: .5rem;
    padding: var(--padding-label);
    width: fit-content;
    background-color: var(--background-category-color);
    border-radius: var(--border-radius-small);
  }

  article:first-of-type {
    margin-left: 0;
  }
  
  @media only screen and (min-width: 600px) {
    article {
      margin-inline: 1rem;
    }

    article p {
      font-size: var(--font-size-2);
    }

    article h3 {
      font-size: var(--font-size-4);
    }

    article .categories .category {
      display: block;
    }
  }
</style>