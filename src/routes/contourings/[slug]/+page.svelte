<script>
  import { QandA } from "$lib/index.js";
  export let data; 
</script>

<main>
  <h1>{data.contouring.title}</h1>

  <img src="https://fdnd-agency.directus.app/assets/{data.contouring.image_scan}" alt="CT-Scans" width="384" height="384" />
  
  <section>
    <QandA 
      comments = {data.comments} />
  </section>
</main>

<style>
  img {
    width: 80vw;
  }

  section {
    width: 90vw;
    max-width: 500px;
    margin: 0 auto;
  }
</style>