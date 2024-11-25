<script>
  import { Comment, Loader } from '$lib/index.js';
  import { page } from '$app/stores';
  import { enhance } from '$app/forms';

  let content = '';
  let slug = $page.url.pathname;

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

<section>
  <h2>Q&A</h2>
  <form  action="{slug}?/comment" method="POST" use:enhance={addComment}>
    <label for="comment">Ask a question.</label>
    <input id="comment" name="comment" placeholder="Add a comment..." required bind:value={content}>
    <button type="submit">
      {#if loading}
        <Loader />
      {:else}
        Send
      {/if}
      </button>
  </form>
  
  <section class="comments">
    <h3>Comments</h3>
    {#if comments.length === 0}
      <p>Be the first to comment.</p>
    {:else} 
    <ol>
      {#each comments as comment}
        {#if comment.parent_id === null}
        <Comment {comment}/>  
        {/if} 
      {/each}
    </ol>
    {/if}
  </section>
</section>

<style>
  h2 {
    font-size: var(--font-size-4);
  }

  h3 {
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
    font-size: var(--font-size-1);
    height: 34px;
    border: transparent;
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
    border: transparent;
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

    .comments h3 {
      position: sticky;
      top: 0;
      width: 100%;
      background-color: var(--background-color);
    }
  }
</style>