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
      const ornamentContainer = helpers.createDiv('ornament-container');
      ornamentContainer.style.position = 'absolute';
      ornamentContainer.style.width = '100%';
      ornamentContainer.style.top = '0';
      ornamentContainer.style.left = '0';
      document.body.appendChild(ornamentContainer);

      // Initialize ornaments
      for (let i = 0; i < 20; i++) { // Increased number of ornaments
        const ornamentEl = helpers.createDiv('ornament');
        const randomIndex = Math.floor(helpers.randomBetween(0, ornamentImg.length));
        ornamentEl.style.backgroundImage = `url(${ornamentImg[randomIndex]})`;
        ornamentEl.style.backgroundSize = 'cover';
        ornamentEl.style.width = '64px';
        ornamentEl.style.height = '64px';
        ornamentEl.style.position = 'absolute';

        // Random horizontal position across the entire viewport width
        ornamentEl.style.left = `${-200 + Math.random() * window.innerWidth}px`;

        // Random speed and rotation
        const speed = helpers.randomBetween(2, 5);
        const rotation = helpers.randomBetween(-30, 30);

        // Store the ornament properties for later use
        ornaments.push({ el: ornamentEl, speed, rotation });
        ornamentContainer.appendChild(ornamentEl);
      }

      this.startAnimation = function () {
        ornamentContainer.style.display = 'block';

        ornaments.forEach((ornament, index) => {
          const screenHeight = window.innerHeight;
          const screenWidth = window.innerWidth;
          const startY = screenHeight + Math.random() * 200; // Start just below the viewport
          const startRotation = -10 * Math.random() * 20; // Random rotation

          // Initial styles for the ornament (opacity starts at 0)
          ornament.el.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s ease-in';
          ornament.el.style.transform = `translateY(${startY}px) rotate(${startRotation}deg)`;
          ornament.el.style.opacity = '0'; // Start hidden

          // Apply fade-in effect and then move upwards
          setTimeout(() => {
            ornament.el.style.opacity = '1'; // Fade in
            ornament.el.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s ease-out'; // Change to the move animation
            ornament.el.style.transform = `translateY(${startY}px) rotate(${startRotation}deg)`;

            // Apply movement upwards
            setTimeout(() => {
              const finalY = -(screenHeight / 2) - 50; // Move upwards off-screen (top)
              const finalRotation = startRotation + 30; // Apply final rotation

              ornament.el.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.6s ease-in';
              ornament.el.style.transform = `translateY(${finalY}px) rotate(${finalRotation}deg)`;
              ornament.el.style.opacity = '0'; // Fade out
            }, 500); // Start the upwards movement after fade-in (500ms)
          }, index * 50); // Stagger the animations for each ornament
        });

        // Hide the ornament container after the animation is complete
        setTimeout(() => {
          ornamentContainer.style.display = 'none';
          scrolling = false;
        }, 1500); // Allow animation to complete before hiding
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

  .ornament-container {
    position: absolute; /* Ensures it spans the entire viewport */
    width: 100%;
    height: 100vh; /* Ensure the container takes full height */
    top: 0;
    left: 0;
    overflow: visible; /* Make sure ornaments aren't clipped */
  }

  .ornament {
    position: absolute;
    width: 64px;
    height: 64px;
    background-size: cover;
  }

  .ornament-center {
    position: fixed;
    bottom: 0;
    left: 50%;
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
