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
</article>
