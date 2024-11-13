<script>
  import { postComment } from '$lib/api.js';

  export let data; 

  let content = ''
  let webinarId = data.webinar.id;

  async function handleSubmit() {
    try {
      await postComment(content, webinarId);
      content = ''; // Clear the input field on success
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  }
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
  
    <form on:submit|preventDefault={handleSubmit}>
      <label>Ask a question.
        <input name="comment" placeholder="Add a comment..." bind:value={content}>
      </label>
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