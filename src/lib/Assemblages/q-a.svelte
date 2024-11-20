<script>
  import { Comment, Loader } from '$lib/index.js';
  import { page } from '$app/stores';
  import { enhance } from '$app/forms';

  let content = '';
  let slug = $page.url.pathname;
  
  export let webinar_id = '';
  export let user_id = 1;
  export let contouring_id = '';

  export let comments = [];

  let loading = false;
  const addComment = () => {
    loading = true;

    return async ({ update }) => {
      await update();
      loading = false;
    };
  };
</script>

<h3>Q&A</h3>
<form  action="{slug}?/comment" method="POST" use:enhance={addComment}>
  <label for="comment">Ask a question.</label>
  <input id="comment" name="comment" placeholder="Add a comment..." required bind:value={content}>
  <input type="hidden" name="user_id" value={user_id}>
  <input type="hidden" name="webinar_id" value={webinar_id}>
  <input type="hidden" name="contouring_id" value={contouring_id}>
  <button type="submit">
    {#if loading}
      <Loader />
    {:else}
      Send
    {/if}
    </button>
</form>

<section class="comments">
  <h4>Comments</h4>
  {#if comments.length === 0}
    <p>Be the first to comment.</p>
  {:else} 
    {#each comments as comment}
      {#if comment.parent_id === null}
      <Comment
      comment = {comment}/>  
      {/if} 
    {/each}
  {/if}
</section>

<style>
  h3 {
    font-size: var(--font-size-4);
  }

  h4 {
    font-size: var(--font-size-2);
  }

  form {
    margin-block: 1rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  label {
    font-family: var(--heading-font);
    font-size: var(--font-size-2);
    font-weight: bold;
    margin-bottom: .5rem;
    width: 100%;
  }

  input {
    padding: var(--padding-label);
    height: 34px;
    border: none;
    width: 100%;
    border-radius: var(--border-radius-small);
  }

  ::placeholder {
    color: var(--text-color);
  }

  button {
    margin-top: 1rem;
    padding: var(--padding-label);
    background-color: var(--primary-color);
    color: var(--alt-text-color);
    border: none;
    cursor: pointer;
    height: 34px;
    width: 100%;
    border-radius: var(--border-radius-small);
    text-transform: uppercase;
  }

  @media only screen and (min-width: 600px) {
    input {
      width: 70%;
      border-start-end-radius: 0;
      border-end-end-radius: 0;
    }

    button {
      margin-top: 0;
      width: 30%;
      border-start-start-radius: 0;
      border-end-start-radius: 0;
    }

    .comments {
      height: 200px;
      overflow-y: scroll;
    }

    .comments h4 {
      position: sticky;
      top: 0;
      width: 100%;
      background-color: var(--background-color);
    }
  }
</style>