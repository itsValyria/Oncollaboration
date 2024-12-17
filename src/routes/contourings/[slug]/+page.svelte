<script>
  import { QandA } from "$lib/index.js";
  export let data; 
</script>

<main>

  <section class="container">
    <h1>{data.contouring.title}</h1>
    <img src="https://fdnd-agency.directus.app/assets/{data.contouring.image_scan}" alt="CT-Scans" width="384" height="384" style:--contouring="image-{data.contouring.image_scan}"/>
  </section>

  <section>
    <QandA 
      comments = {data.comments} />
  </section>
</main>

<style>
  .container {
    display: grid;
    margin: 30px auto;
    grid-template-rows: auto 1fr;
    gap: 20px;
  }

  img {
    width: 500px;
    height: auto;
    border-radius: var(--border-radius-md);
    view-transition-name: var(--contouring);
  }

  section {
    width: 90vw;
    max-width: 500px;
    margin: 0 auto;
  }
</style>