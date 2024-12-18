<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { ContouringOverview, Search, WebinarOverview } from "$lib/index.js";
  export let data;

  let newestWebinars = data.webinars.slice(0, 4);
  let newestContourings = data.contourings.slice(0, 4);
  let svgUrl = '';
  let currentTheme = writable('default');

  // Function to toggle the theme
  function toggleChristmasTheme() {
    if (typeof window !== 'undefined') { // Check if window is defined (browser)
      const theme = document.documentElement.getAttribute('data-theme') === 'christmas' ? 'default' : 'christmas';
      document.documentElement.setAttribute('data-theme', theme);
      currentTheme.set(theme); // Update the store with the new theme
    }
  }

  // Function to update SVG when the theme changes
  function updateSvgOnThemeChange() {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'christmas') {
      const svgs = [
        '/images/snowwall-02.svg',
        '/images/snowwall-03.svg',
        '/images/snowwall-06.svg',
        '/images/snowwall-07.svg',
      ];
      svgUrl = svgs[Math.floor(Math.random() * svgs.length)];
    } else {
      svgUrl = ''; // No Christmas SVG when not in Christmas theme
    }
  }

  // Use MutationObserver to detect changes to the data-theme attribute
  onMount(() => {
    if (typeof window !== 'undefined') {
      // Set initial theme
      currentTheme.set(document.documentElement.getAttribute('data-theme') || 'default');
      
      // Create MutationObserver to listen for changes to the data-theme attribute
      const observer = new MutationObserver(() => {
        updateSvgOnThemeChange();
      });

      // Observe changes to the data-theme attribute
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
      });

      // Set initial SVG when the component is mounted
      updateSvgOnThemeChange();
    }
  });
</script>

<main>
  <h1>Home</h1>
  <Search />
  <section>
    <h2>Webinars</h2>
    <div class="carrousel">
      {#each newestWebinars as webinar}
        <div class="kaart">
          <WebinarOverview  {...webinar}/>
        </div>
      {/each}
    </div>
    <a href="/webinars" class="see-all">
      SEE ALL WEBINARS
      {#if svgUrl}
        <img src={svgUrl} alt="Christmas decoration" class="christmas-deco" />
      {/if}
    </a>
  </section>

  <section>
    <h2>Contourings</h2>
    <div class="carrousel">
      {#each newestContourings as contouring}
        <div class="contouringkaart">
          <ContouringOverview {...contouring} />
        </div>
      {/each}
    </div>
    <a href="/contourings" class="see-all">
      SEE ALL CONTOURINGS
      {#if svgUrl}
        <img src={svgUrl} alt="Christmas decoration" class="christmas-deco" />
      {/if}
    </a>
  </section>
</main>

<style>
  h1 {
    font-size: var(--font-size-2xl);
  }

  h2 {
    font-size: var(--font-size-lg);
    margin-bottom: 0.5em;
    margin-top: 0.8em;
  }

  a {
    display: inline-flex;
    color: var(--alt-text-color);
    background-color: var(--primary-color);
    font-size: var(--font-size-sm);
    text-decoration: none;
    font-weight: 700;
    padding: var(--padding-button);
    border-radius: var(--border-radius-sm);
    margin: 1em 0;
    position: relative;
  }

  .christmas-deco {
    position: absolute;
    top: -0.8em;
    left: 0;
    height: auto;
    width: 100%;
    opacity: 0;
    animation: fadeIn 7s ease-in forwards;
  }

  .carrousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 0px;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    margin: 0 auto;
    gap: 10px;
  }

  .kaart {
    flex: 0 0 calc(100% - 20%);
    scroll-snap-align: start;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .contouringkaart {
    flex: 0 0 calc(100% - 42%);
    scroll-snap-align: start;
    border-radius: 10px;
    box-sizing: border-box;
  }

  .carrousel::-webkit-scrollbar {
    display: none;
  }

  @keyframes fadeIn {
  0% {
    opacity: 0; /* Start with 0 opacity */
  }
  100% {
    opacity: 1; /* End with full opacity */
  }
}

  @media screen and (min-width: 500px) {
    .kaart {
      flex: 0 0 auto;
    }

    .contouringkaart {
      flex: 0 0 auto;
    }
  }

  @media screen and (min-width: 600px) {
    h1 {
      font-size: var(--font-size-4xl);
    }

    h2 {
      font-size: var(--font-size-3xl);
    }

    a {
      font-size: var(--font-size-lg);
    }
  }

  @media screen and (min-width: 1000px) {
    .carrousel {
      margin: 0;
    }

    .christmas-decoration {
      top: -1em;
    }
  }
</style>