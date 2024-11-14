<script>
  import { postComment } from '$lib/api.js';

  let content = '';
  export let webinarId = '';
  export let comments = [];

  async function handleSubmit() {
    try {
      await postComment(content, webinarId);
      content = ''; // Clear the input field on success
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  }
</script>

<h3>Q&A</h3>
  
<form on:submit|preventDefault={handleSubmit}>
  <label>Ask a question.
    <input name="comment" placeholder="Add a comment..." bind:value={content}>
  </label>
  <button type="submit">Send</button>
</form>

<section class="comments">
  <h4>Comments</h4>

  {#each comments as comment}
    <div>{comment.content}</div>
  {/each}
</section>