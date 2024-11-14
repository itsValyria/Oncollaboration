<script>
  import { QandA } from "$lib/index.js";
  export let data; 
</script>

<main>
  <video controls width="250">
    <source src="https://fdnd-agency.directus.app/assets/{data.webinar.video.id}">
    <track kind="captions">
  </video>
  
  <h1>{data.webinar.title}</h1>
  
  <div class='description'>
    {@html data.webinar.description}
  </div>
  
  <section>
    <QandA 
      webinarId = {data.webinar.id}
      comments = {data.comments} />
  </section>
</main>

<style>
  .description :global(p) {
    padding-block: .2rem;
  }

  video {
    width: 90vw;
    margin: var(--margin-center);
  }

  @media screen and (min-width: 600px){
    video {
      width: 50vw;
    }
  }
</style>