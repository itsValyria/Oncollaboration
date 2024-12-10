<script>
  import { Navigation, Footer } from "$lib/index.js";
  import { navigating } from '$app/stores';
  import { onMount } from 'svelte';

  onMount(() => {
    let scrolling = false;
    const ornamentImg = [
      "/images/kerstbal-1.png",
      "/images/kerstbal-2.png",
      "/images/kerstbal-3.png"
    ];

    const helpers = {
      createDiv: function (className) {
        const div = document.createElement('div');
        if (className) div.className = className;
        return div;
      },
      randomBetween: function (min, max) {
        return Math.random() * (max - min) + min;
      }
    };

    function Ornaments() {
      const ornaments = [];
      const ornamentCenter = helpers.createDiv('ornament-center');
      ornamentCenter.style.position = 'fixed';
      ornamentCenter.style.width = '10px';
      ornamentCenter.style.height = '10px';
      ornamentCenter.style.bottom = '0';
      ornamentCenter.style.left = 'calc(50% - 5px)';
      ornamentCenter.style.display = 'none';
      document.body.appendChild(ornamentCenter);

      // Initialize ornaments
      for (let i = 0; i < 20; i++) {
        const ornamentEl = helpers.createDiv('ornament');
        const randomIndex = Math.floor(helpers.randomBetween(0, ornamentImg.length));
        ornamentEl.style.backgroundImage = `url(${ornamentImg[randomIndex]})`;
        ornamentEl.style.backgroundSize = 'cover';
        ornamentEl.style.width = '30px';  // Fixed width and height for consistency
        ornamentEl.style.height = '30px';
        ornamentEl.style.position = 'absolute';

        // Random initial horizontal position
        ornamentEl.style.left = `${-200 + Math.random() * 400}px`;

        // Random speed and rotation
        const speed = helpers.randomBetween(2, 5);
        const rotation = helpers.randomBetween(-30, 30);

        // Store the ornament properties for later use
        ornaments.push({ el: ornamentEl, speed, rotation });
        ornamentCenter.appendChild(ornamentEl);
      }

      this.startAnimation = function () {
        ornamentCenter.style.display = 'block';

        ornaments.forEach((ornament, index) => {
          const startY = window.innerHeight + Math.random() * 100; // Random starting position off the screen

          // Set initial styles for transition
          ornament.el.style.transition = 'transform 2s ease-out, opacity 2s ease-out';
          ornament.el.style.transform = `translateY(${startY}px) rotate(${ornament.rotation}deg)`; // Initial position and rotation
          ornament.el.style.opacity = '1';

          // Apply final animation after a slight delay
          setTimeout(() => {
            // Animate flying up and rotating
            ornament.el.style.transform = `translateY(-500px) rotate(${ornament.rotation + 30}deg)`;  // Move upward with rotation
            ornament.el.style.opacity = '0';  // Fade out
          }, index * 50);  // Stagger animation for each ornament

        });

        // Hide the ornament center after the animation is complete
        setTimeout(() => {
          ornamentCenter.style.display = 'none';
          scrolling = false;
        }, 2500);  // Allow animation to complete before hiding
      };
    }

    const ornamentsInstance = new Ornaments();

    window.addEventListener('scroll', () => {
      if (!scrolling) {
        scrolling = true;
        ornamentsInstance.startAnimation();
      }
    });
  });
</script>

{#if $navigating}
  <Navigation />
  <main>
    <span>Loading...</span>
  </main>
{:else}
  <Navigation />
  <div class="content container">
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

  .ornament {
    position: absolute;
    width: 30px;
    height: 30px;
    background-size: cover !important;
  }

  .ornament-center {
    position: fixed;
    bottom: 0;
    left: 50%;
    z-index: 9999;  /* Ensure it stays above other content */
  }

  footer {
    height: 115px;
    background-color: #f0f0f0;
  }

  span {
    display: block;
    font-size: var(--font-size-4xl);
    font-weight: bold;
    margin: auto;
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
  }

  @media (min-width: 1920px) {
    .content {
      margin-top: 82px;
    }
  }
</style>
