<script>
  import { QandA, Resources } from "$lib/index.js";
  export let data;
</script>

<main>
  <h1>{data.contouring.title}</h1>

  <img src="https://fdnd-agency.directus.app/assets/{data.contouring.image_scan}?width=384&fit=cover&format=avif" alt="CT-Scans" width="384" height="384" />
  
  <div class="used-literature">
    <Resources 
      heading = "Used Literature"
      resources = {data.contouring.used_literature}
    />
  </div>

  <div class='q-a'>
    <QandA 
      comments = {data.comments} />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
  }

  h1 {
    margin-block: 1rem 1.5rem;
  }

  img {
    width: 100%;
    max-width: var(--card-max-width);
    border-radius: var(--border-radius-sm);
  }

  .used-literature {
    margin-block: 1rem 2rem;
    width: 100%;
  }

  .q-a {
    width: 90vw;
    max-width: 500px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 418px) {
    .used-literature {
      width: var(--card-max-width);
    }
  }
</style>