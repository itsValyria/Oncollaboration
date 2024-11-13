<script>
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
    <h3>Q&A</h3>
  
    <form action="/" method="POST">
      <label for="comment">Ask a question.</label>
      <input id="comment" placeholder="Add a comment...">
      <button type="submit">Send</button>
    </form>
  
    <section class="comments">
      <h4>Comments</h4>
  
      {#each data.comments as comment}
        <p>{comment.content}</p>
      {/each}
    </section>
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