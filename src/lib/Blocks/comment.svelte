<script>
  export let comment;
  export let replyClass = '';
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
      likes and replies
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
    column-gap: .5rem;
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
    margin-left: calc(40px + .5rem);
  }

  .comment-content {
    font-size: var(--font-size-2);
    padding-block: .5rem;
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
      margin-left: calc(50px + .5rem);
    }
  }

  @media (hover: hover){
    .comment-content{
      padding-block: .7rem;
    }
  }
</style>