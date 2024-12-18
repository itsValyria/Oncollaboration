<script>
import { writable } from 'svelte/store';

  // Props passed to the component
  export let slug = "";
  export let image_scan = "";
  export let title = "";
  export let user_id = "";
  export let categories = [];  

  // State for theme and SVG URL
  let svgUrl = '';
  let currentTheme = writable('default');

  // Toggle the theme between 'christmas' and 'default'
  function toggleChristmasTheme() {
    if (typeof window !== 'undefined') {
      const theme = document.documentElement.getAttribute('data-theme') === 'christmas' ? 'default' : 'christmas';
      document.documentElement.setAttribute('data-theme', theme);
      currentTheme.set(theme); // Update the store
    }
  }

  // Update the SVG based on the theme
  function updateSvgOnThemeChange(theme) {
    if (theme === 'christmas') {
      const svgs = [
        '/images/snowwall-02.svg',
        '/images/snowwall-03.svg',
        '/images/snowwall-06.svg',
        '/images/snowwall-07.svg',
      ];
      svgUrl = svgs[Math.floor(Math.random() * svgs.length)];
    } else {
      svgUrl = '';
    }
  }

  // Handle theme changes when the component is mounted
  import { onMount } from 'svelte';
  onMount(() => {
    if (typeof window !== 'undefined') {
      // Set initial theme
      const initialTheme = document.documentElement.getAttribute('data-theme') || 'default';
      currentTheme.set(initialTheme);
      updateSvgOnThemeChange(initialTheme);

      // Listen for changes to the data-theme attribute
      const observer = new MutationObserver(() => {
        const theme = document.documentElement.getAttribute('data-theme');
        currentTheme.set(theme);
        updateSvgOnThemeChange(theme);
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
      });
    }
  });
</script>

<article>
  <a href="/contourings/{slug}">
    <div>
      {#if svgUrl}
      <img class="christmas-decoration-image" src={svgUrl} alt="Snow overlay" />
     {/if}
      <img src="https://fdnd-agency.directus.app/assets/{image_scan.id}?width=384&fit=cover&format=avif" alt="{title}" width="384px" height="384px" />
      {#each categories as category}
        <span>{category.avl_categories_id.name}</span>
      {/each}
    </div>
    <h3>{title}</h3>
    <p>{user_id.fullname}</p>
  </a>
</article>

<style>
  article {
    max-width: var(--card-max-width);
  }

  article a {
    color: var(--text-color);
    text-decoration: none;
    display: grid;
  }

  div {
    position: relative;
    width: 100%;
  }

  span {
    position: absolute;
    color: var(--text-color);
    font-size: var(--font-size-lg);
    font-weight: 700;
    border-radius: var(--border-radius-sm);
    padding: 5px;
    gap: 10px;
    background-color: var(--alt-text-color);
    bottom: 10px;
    right: 10px;
    opacity: 0;
    visibility: hidden;
    text-transform: capitalize;
  }

  img {
    height: 16rem;
    width: 100%;
    border-radius: var(--border-radius-md);
  }

  h3,
  p {
    margin: 0;
    padding: 0;
    color: var(--text-color);
    text-decoration: none;
  }

  h3 {
    font-size: var(--font-size-sm);
  }

  p {
    font-size: var(--font-size-xs);
  }

  .christmas-decoration-image {
    position: absolute;
    top: -1rem;
    left: 0;
    height: auto;
    width: 100%;
    opacity: 0;
    animation: fadeIn 7s ease-in forwards;
    z-index: 1;
  }

  @keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1; 
  }
}

  @media screen and (min-width: 600px) {
    span {
      opacity: 1;
      visibility: visible;
    }

    h3 {
      font-size: var(--font-size-2xl);
    }

    p {
      font-size: var( --font-size-lg);
    }
  }
  
  @media screen and (min-width: 1599px) {
    img {
      height: 100%;    
    }

    .christmas-decoration-image {
      top: -2rem;
    }
  }
</style>
