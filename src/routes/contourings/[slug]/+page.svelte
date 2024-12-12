<script>
  import { QandA } from "$lib/index.js";
  export let data;
</script>

<main>
  <h1>{data.contouring.title}</h1>

  <img src="https://fdnd-agency.directus.app/assets/{data.contouring.image_scan}?width=384&fit=cover&format=avif" alt="CT-Scans" width="384" height="384" />
  
  <section>
    <h2>Used literature</h2>
    <div class="container-literature">
      <p>{data.contouring.title}</p>
      <span>{data.contouring.used_literature[0].formattedFileSize}</span>
      <a href="https://fdnd-agency.directus.app/assets/{data.contouring.used_literature[0].directus_files_id.id}?download" download="test" target="_blank">
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.67213 10.2297L4.47541 7.03303L5.37049 6.10598L7.03278 7.76827V2.55762H8.31147V7.76827L9.97377 6.10598L10.8688 7.03303L7.67213 10.2297ZM3.83606 12.7871C3.48442 12.7871 3.1834 12.6619 2.93299 12.4115C2.68258 12.1611 2.55737 11.8601 2.55737 11.5084V9.5904H3.83606V11.5084H11.5082V9.5904H12.7869V11.5084C12.7869 11.8601 12.6617 12.1611 12.4113 12.4115C12.1609 12.6619 11.8598 12.7871 11.5082 12.7871H3.83606Z"/>
        </svg> 
      </a>
    </div>
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

  .container-literature {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: var(--primary-color);

    & path {
      fill: var(--alt-text-color);
    }
  }

  .q-a {
    width: 90vw;
    max-width: 500px;
    margin: 0 auto;
  }
</style>