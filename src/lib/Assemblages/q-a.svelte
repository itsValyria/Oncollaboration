<script>
  import { page } from '$app/stores';
  import { enhance } from '$app/forms';

  let content = '';
  let slug = $page.url.pathname;
  
  export let webinar_id = '';
  export let user_id = 1;
  export let contouring_id = '';

  export let comments = [];
</script>

<h3>Q&A</h3>
<form  action="{slug}?/comment" method="POST" use:enhance>
  <label for="comment">Ask a question.</label>
  <input id="comment" name="comment" placeholder="Add a comment..." bind:value={content}>
  <input type="hidden" name="user_id" value={user_id}>
  <input type="hidden" name="webinar_id" value={webinar_id}>
  <input type="hidden" name="contouring_id" value={contouring_id}>
  <button type="submit">Send</button>
</form>

<section class="comments">
  <h4>Comments</h4>
  {#if comments.length === 0}
    <p>Be the first to comment.</p>
  {:else} 
    {#each comments as comment}
      {#if comment.parent_id === null}
        <div class="container-comment">
          <section class="head-comment">
            {#if comment.user_id === null}
              <img src="/images/profilepic.png" alt="error">
              <p>Name Surname</p>
            {:else}
              <img src="https://fdnd-agency.directus.app/assets/{comment.user_id.profile_picture.id}" alt="{comment.user_id.profile_picture.title}">
              <p>{comment.user_id.fullname}</p>
            {/if}
        
            {#if comment.time_posted === null}
              <span>hours ago</span>
            {:else}  
              <span>{comment.time_posted}</span>
            {/if}
          </section>
        
          <p class="content">{comment.content}</p>
        
          <div class="container-response">
            likes and replies
          </div>
        </div>
      {:else}
        <div class="container-comment reply">
          <section class="head-comment">
            {#if comment.user_id === null}
              <img src="/images/profilepic.png" alt="error">
              <p>Name Surname</p>
            {:else}
              <img src="https://fdnd-agency.directus.app/assets/{comment.user_id.profile_picture.id}" alt="{comment.user_id.profile_picture.title}">
              <p>{comment.user_id.fullname}</p>
            {/if}

            {#if comment.time_posted === null}
              <span>hours ago</span>
            {:else}  
              <span>{comment.time_posted}</span>
            {/if}
          </section>

          <p class="content">{comment.content}</p>

          <div class="container-response">
            likes and replies
          </div>
        </div>
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

  button:active {
    background-color: blueviolet;
  }

  .comments {
    height: 200px;
    overflow-y: scroll;

    & h4 {
      position: sticky;
      top: 0;
      width: 100%;
      background-color: var(--background-color);
    }
  }

  .container-comment {
    margin-block: 1rem;
  }

  .reply {
    margin-left: 50px;
  }

  .reply::before {
    content: "L";
    size: 3rem;
  }

  .head-comment {
    display: grid;
    grid: auto-flow / 50px 80%;
    column-gap: .5rem;
    align-items: center;

    & img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      object-fit: cover;
      grid-column: 1;
      grid-row: 1/3;
    }

    & p {
      font-weight: bold;
      font-size: var(--font-size-1);
      grid-column: 2;
      grid-row: 1;
    }

    & span {
      font-weight: 300;
      font-size: var(--font-size-0);
      color: gray;
      grid-column: 2;
      grid-row: 2;
    }
  }

  .content, .container-response {
    margin-left: calc(50px + .5rem);
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
  }
</style>