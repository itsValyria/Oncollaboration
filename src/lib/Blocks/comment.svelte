<script>
  export let comment;
  export let replyClass = '';
</script>

  <div class="container-comment {replyClass}">
    <section class="head-comment">
      {#if comment.user_id === null}
        <img src="/images/profilepic.png" alt="error">
        <h4>Name Surname</h4>
      {:else}
        <img src="https://fdnd-agency.directus.app/assets/{comment.user_id.profile_picture.id}" alt="{comment.user_id.profile_picture.title}">
        <h4>{comment.user_id.fullname}</h4>
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

{#if comment.replies.length !== 0}
  {#each comment.replies as reply }
    <svelte:self 
    replyClass="reply"
    comment={reply}/>
  {/each}
{/if}



<style>
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

    & h4 {
      font-family: var(--font);
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
</style>