<script>
  import { onMount } from 'svelte';
  import { Navigation, Footer, LoadingState } from "$lib/index.js";
  import { navigating } from '$app/stores';

  // List of sound files to play on hover
  const sounds = [
    '/audio/jingle-bells.mp3',
    '/audio/we-wish-you.mp3',
  ];

  // Reference to the currently playing audio
  let currentAudio = null;

  // Function to play a random sound on hover
  function playRandomSound(event) {
    // Check if the hovered element is not the christmas button
    if (event.target.closest('.christmas-button')) {
      return;
    }

    // Stop the current audio if it's playing
    if (currentAudio && !currentAudio.paused) {
      currentAudio.pause();
      currentAudio.currentTime = 0; 
    }

    // Select a random sound from the list
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    currentAudio = new Audio(randomSound);
    currentAudio.play();
  }

  // Add event listener to all <a> elements after the component is mounted
  onMount(() => {
    // Select all <a> elements on the page
    const links = document.querySelectorAll('a');
    
    // Attach the hover event to each <a> element
    links.forEach(link => {
      link.addEventListener('mouseover', playRandomSound);
    });
  });
</script>

<header>
  <Navigation />
</header>

{#if $navigating}
  <main>
    <LoadingState />
  </main>
{:else}
  <div class="content">
    <slot />
  </div>
{/if}

<footer>
  <Footer />
</footer>

<style>
  main {
    margin: auto;
  }

  .content {
    flex: 1;
    margin-right: 1em;
    margin-left: 1em;
  }

  footer {
    height: 70px;
  }

  @media (min-width: 600px) {
    .content {
      margin-bottom: 77px;
    }
  }

  @media (min-width: 1080px) {
    .content {
      margin-top: 74px;
      padding-bottom: 0;
    }

    footer {
      height: 115px;
      background-color: #f0f0f0;
    }
  }

  @media (min-width: 1920px) {
    .content {
      margin-top: 82px;
    }
  }
</style>