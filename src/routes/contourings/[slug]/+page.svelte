<script>
  import { QandA } from "$lib/index.js";
  export let data; 
</script>

<main>
  <h1>{data.contouring.title}</h1>

  <img src="https://fdnd-agency.directus.app/assets/{data.contouring.image_scan}?width=384&fit=cover&format=avif" alt="CT-Scans" width="384" height="384" />
  
  <section>
    <h2>Used literature</h2>
    <p>{data.contouring.title}</p>

    <a href="https://fdnd-agency.directus.app/assets/{data.contouring.used_literature[0].directus_files_id}?download" download="test" target="_blank">download</a>
  </section>

  <div class='q-a'>
    <QandA 
      comments = {data.comments} />
  </div>
</main>

<style>
  h1 {
    margin-block: 1rem 1.5rem;
  }

  img {
    width: 100%;
    height: 90vw;
    border-radius: var(--border-radius-sm);
  }

  .q-a {
    width: 90vw;
    max-width: 500px;
    margin: 0 auto;
  }
</style>