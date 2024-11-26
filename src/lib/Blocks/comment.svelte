<script>
  import { page } from '$app/stores';
  import { enhance } from '$app/forms';
  import {Like, Liked, LoaderSpin} from '$lib/index.js';

  export let comment;
  export let replyClass = '';
  
  let likes = comment?.likes || 0;
  let slug = $page.url.pathname;

  let loading = false;
  let liked = false;
  const likeComment = () => {
    loading = true;
    liked = true;

    return async ({ update }) => {
      await update();
      loading = false;
    };
  };
</script>

  <li class="comment-container {replyClass}">
    <section class="comment-head">
      {#if comment.user_id === null}
        <img src="/images/profilepic.png" alt="error">
        <h4>Name Surname</h4>
      {:else}
        <img src="https://fdnd-agency.directus.app/assets/{comment.user_id.profile_picture.id}" alt="{comment.user_id.profile_picture.title}">
        <h4>{comment.user_id.fullname}</h4>
      {/if}

      {#if comment.time_posted === null}
        <time>hours ago</time>
      {:else}  
        <time>{comment.time_posted}</time>
      {/if}
    </section>

    <p class="comment-content">{comment.content}</p>

    <div class="comment-response">
      <form action="{slug}?/like" method="POST" id="like" use:enhance={likeComment}>
        <input type="hidden" name="like" value="{likes}">
        <input type="hidden" name="comment-id" value="{comment.id}">
        <button type="submit" id="like" aria-label="Like this comment">
            {#if loading}
            <div class="loader">
              <LoaderSpin />
            </div>
            {:else}
              <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                {#if liked}
                  <Liked />    
                {:else}
                  <Like />
                {/if}  
              </svg> 
            {/if}
        </button>

        <span class="like-count">
          {#if comment.likes != null}
            {comment.likes}
          {:else} 
            0
          {/if}  
           likes</span>
      </form>
      reply
    </div>
  </li>

{#if comment.replies.length !== 0}
  {#each comment.replies as reply }
    <svelte:self 
    replyClass="reply"
    comment={reply}/>
  {/each}
{/if}



<style>
  .comment-container {
    margin-block: 1rem;
    list-style: none;
    container-type: inline-size;
  }

  .reply {
    margin-left: 50px;
  }

  .reply::before {
    content: "L";
    size: 3rem;
  }

  .comment-head {
    display: grid;
    grid: auto-flow / 40px 80%;
    column-gap: var(--gap);
    align-items: center;

    & img {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      object-fit: cover;
      grid-column: 1;
      grid-row: 1/3;
    }

    & h4 {
      font-family: var(--font);
      font-weight: bold;
      font-size: var(--font-size-1);
      grid-column: 2;
      grid-row: 1;
    }

    & time {
      font-weight: 300;
      font-size: var(--font-size-0);
      color: #4b4141;
      grid-column: 2;
      grid-row: 2;
    }
  }

  .comment-content, .comment-response {
    margin-left: calc(40px + var(--gap));
  }

  .comment-content {
    font-size: var(--font-size-2);
    padding-block: var(--gap);
  }

  .loader {
    width: 20px;
    height: 20px;
  }
  
  #like {
    display: flex;
    gap: var(--gap);
    align-items: center;
  }

  #like button {
    border: transparent;
    background: none;
    cursor: pointer;
    height: fit-content;
  }

  #like svg {
    fill: var(--primary-color)
  }

  #like span {
    font-weight: bold;
  }

  @container (min-width: 350px) {
    .comment-head {
      grid: auto-flow / 50px 80%;
    }

    .comment-head img {
      width: 50px;
      height: 50px;
    }

    .comment-content, .comment-response {
      margin-left: calc(50px + var(--gap));
    }
  }

  @media (hover: hover){
    .comment-content{
      padding-block: .7rem;
    }
  }
</style>