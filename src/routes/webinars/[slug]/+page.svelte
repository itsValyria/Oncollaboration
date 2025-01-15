<script>
  import { QandA } from "$lib/index.js";
  export let data;

  let showFullDescription = false;

  // Assuming `data.webinar.description` contains the description text
  const description = data.webinar.description;

  // Function to truncate text
  function truncateText(text, limit = 199) {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  }
</script>

<main>
  <video controls width="250">
    <source
      src="https://fdnd-agency.directus.app/assets/{data.webinar.video}"
    />
    <track kind="captions" />
  </video>

  <h1>{data.webinar.title}</h1>

  <div class="description">
    <!-- Dynamically update the content based on `showFullDescription` -->
    {#if showFullDescription}
      {@html description}
    {:else}
      {@html truncateText(description)}
    {/if}
  </div>

  <button on:click={() => {showFullDescription = !showFullDescription;}}>
    {showFullDescription ? "Read Less" : "Read More"}
  </button>

  <div class="q-a">
    <QandA comments={data.comments} />
  </div>
</main>

<style>
  .description :global(p) {
    padding-block: 0.2rem;
  }

  video {
    width: 90vw;
    margin: 0 auto;
  }

  .q-a {
    width: 90vw;
    max-width: 500px;
    margin: 0 auto;
  }

  button {
    margin-top: 1rem;
    padding: var(--padding-label);
    background-color: var(--primary-color);
    color: var(--alt-text-color);
    border: transparent;
    cursor: pointer;
    font-size: var(--font-size-md);
    height: 34px;
    padding: 0.4rem 0.8em;
    border-radius: var(--border-radius-sm);
    text-transform: uppercase;
  }

  @media screen and (min-width: 600px) {
    video {
      width: 50vw;
    }
  }
</style>