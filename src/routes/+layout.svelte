<script>
  import { Navigation, Footer } from "$lib/index.js";
  import { navigating } from '$app/stores';
  // Reactive statements en lifecycle-methoden van Svelte
  import { onMount } from 'svelte';

  let scrollFraction = 0;

  onMount(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      // Bereken een waarde tussen 0 en 1 gebaseerd op de scrollpositie
      scrollFraction = scrollPosition / maxScroll;

      // Pas de snelheid van de animatie en kleurverandering aan
      const animationSpeed = 5 - scrollFraction * 4; // Van 5s naar 1s
      const hueRotate = scrollFraction * 720; // Draai kleuren

      // Stel de CSS-variabelen in
      document.documentElement.style.setProperty('--animation-speed', `${animationSpeed}s`);
      document.documentElement.style.setProperty('--hue-rotate', `${hueRotate}deg`);
    };

    // Voeg scroll event listener toe
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Verwijder event listener bij demontage van de component
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

{#if $navigating}
  <Navigation />
  <main>
    <span>Loading...</span>
  </main>
{:else}
  <Navigation />
  <div class="content">
    <slot />
  </div>
{/if}
<footer>
  <Footer />
</footer>

<div class="animation-container">
  <div class="svg-container">
    <svg class="slide-left" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 992.1 992.1" style="enable-background:new 0 0 992.1 992.1;" xml:space="preserve">
 <style type="text/css">
   .st0{fill:#ED1C24;}
   .st1{fill:#FCCFB0;}
   .st2{fill:#FFFFFF;}
 </style>
 <g>
   <path class="st0" d="M734.4,273.6c-88.8-137.3-236.6-124-236.6-124c-179.7,0-240.4,128.9-240.4,128.9
     c44.5,172.7-41.9,226.3-41.9,226.3c22.9,97,83.8,110.7,83.8,110.7s3-6.4,6.6-18.4c3.6-12,15.6-18.9,15.6-18.9
     c71.6-51.6,176.3-54.5,176.3-54.5c123.6,0,195.1,75.2,195.1,75.2v16.6c80.1-23.7,84.8-114.6,84.8-114.6
     C694.9,420.7,734.4,273.6,734.4,273.6z M496.1,453c-80.6,0-145.9-65.3-145.9-145.9s65.3-145.9,145.9-145.9S642,226.5,642,307.1
     S576.6,453,496.1,453z"/>
   <path class="st1" d="M497.8,534.6c-106.3,0-182.1,62.5-182.1,62.5c-4.5,42.9-6.9,138.6,190.3,138.6s173.8-134,173.8-134
     S604.1,534.6,497.8,534.6z M434.7,659.4c-9.9,0-18-22.2-18-49.6c0-27.4,8-49.6,18-49.6s18,22.2,18,49.6
     C452.7,637.2,444.6,659.4,434.7,659.4z M564.4,659.4c-9.9,0-18-22.2-18-49.6c0-27.4,8-49.6,18-49.6s18,22.2,18,49.6
     C582.3,637.2,574.3,659.4,564.4,659.4z"/>
   <path d="M747,276c-60.7-97.3-151.1-136.4-238.4-136.4s-164.1,18.5-217.7,77.9C215,295.4,199.1,391.1,199.1,430s2.1,88.5,27.5,133.5
     s69.6,60.5,69.6,60.5c8,5,8.7,12.5,8.7,12.5c17.3,57.8,46.6,107.9,197.7,107.9c173.9,0,182-100.1,184.2-109.2s13.5-11.3,13.5-11.3
     C787,589.7,793,481.2,793,442.3C793,403.4,785.2,339.2,747,276z M250.3,290.5c0,0,18.3,50.1,8.9,112.8
     c-9.4,62.7-46.1,91.7-46.1,91.7C190.4,374.1,250.3,290.5,250.3,290.5z M506.1,735.7c-197.2,0-194.9-95.7-190.3-138.6
     c0,0,75.7-62.5,182.1-62.5s182.1,67,182.1,67S703.3,735.7,506.1,735.7z M692.9,615.5v-16.6c0,0-71.6-75.2-195.1-75.2
     c0,0-104.7,2.9-176.3,54.5c0,0-12,6.9-15.6,18.9c-3.6,12-6.6,18.4-6.6,18.4s-60.9-13.7-83.8-110.7c0,0,86.4-53.6,41.9-226.3
     c0,0,60.7-128.9,240.4-128.9c0,0,147.7-13.3,236.6,124c0,0-39.4,147.1,43.4,227.3C777.8,500.9,773,591.8,692.9,615.5z M735.4,390.9
     c-4.9-60.6,6-104.2,6-104.2s59.4,89.2,38.7,208.3C780.1,495,740.3,451.4,735.4,390.9z M452.7,609.8c0,27.4-8,49.6-18,49.6
     s-18-22.2-18-49.6c0-27.4,8-49.6,18-49.6S452.7,582.4,452.7,609.8z M582.3,609.8c0,27.4-8,49.6-18,49.6s-18-22.2-18-49.6
     c0-27.4,8-49.6,18-49.6S582.3,582.4,582.3,609.8z M496.1,161.2c-80.6,0-145.9,65.3-145.9,145.9S415.5,453,496.1,453
     S642,387.7,642,307.1S576.6,161.2,496.1,161.2z M496.1,442.8c-75,0-135.7-60.8-135.7-135.7s60.8-135.7,135.7-135.7
     s135.7,60.8,135.7,135.7S571,442.8,496.1,442.8z"/>
   <path class="st2" d="M631.8,307.1c0,75-60.8,135.7-135.7,135.7s-135.7-60.8-135.7-135.7s60.8-135.7,135.7-135.7
     S631.8,232.2,631.8,307.1z M259.2,403.3c9.4-62.7-8.9-112.8-8.9-112.8s-59.9,83.5-37.2,204.5C213.1,495,249.9,466,259.2,403.3z
      M741.4,286.7c0,0-10.9,43.6-6,104.2c4.9,60.6,44.7,104.2,44.7,104.2C800.8,375.9,741.4,286.7,741.4,286.7z"/>
 </g>
 </svg>
 <button class="eat-button slide-right">EAT<span class="span-button">( at your own risk )</span></button>
  </div>
  <div class="fractal-background"></div> 
</div>

<style>
  /* Basis stijlen */
  main, .content {
    flex: 1;
    margin-right: 1em;
    margin-left: 1em;
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

  .animation-container {
    height: 500vh;
    background-color: black;
    scroll-snap-type: y mandatory; 
  }
  
  .svg-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    margin-top: 300px;
  }

  svg {
    width: 400px;
    height: 400px;
    /* margin-top: 100px; */
  }

  .eat-button {
    padding: 20px 60px;
    border-radius: 20px;
    border: 2px solid white;
    font-size: 30px;
    font-family: var(--font);
    text-transform: uppercase;
    font-weight: bold;
    background-color: black;
    color: white;
    /* margin-bottom: 100px; */
  }

  .eat-button:hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }

  .span-button {
    font-size: 10px;
    margin-top: 10px;
  }

  .slide-left {
    animation: slideLeftAnimation both;
    animation-timeline: view();
  }

  @keyframes slideLeftAnimation {
    0% {
      transform: translateX(1000px);
    }
    50% {
      transform: translateX(0px);
    }
  }

  .slide-right {
    animation: slideRightAnimation both;
    animation-timeline: view();
  }

  @keyframes slideRightAnimation {
    0% {
      transform: translateX(-1000px);
    }

    50% {
      transform: translateX(0px);
    } 
  }

  /* Fractal Plaid Background */
  .fractal-background {
    opacity: 1;
    position: sticky;
    top: -100vh;
    left: 0;
    width: 100vw;
    height: 500vh;
    background: linear-gradient(45deg, red 25%, transparent 25%) -50px 0/100px 100px,
                linear-gradient(135deg, red 25%, transparent 25%) -50px 0/100px 100px,
                linear-gradient(45deg, transparent 75%, blue 75%) -50px 0/100px 100px,
                linear-gradient(135deg, transparent 75%, blue 75%) -50px 0/100px 100px;
    background-color: yellow;
    animation: animatePlaid var(--animation-speed, 5s) linear infinite;
    z-index: 0;
    filter: hue-rotate(var(--hue-rotate, 0deg));
  }

/* Fractal Plaid Animation */
@keyframes animatePlaid {
  0% {
    background-position: 0 0, 0 0, 0 0, 0 0;
  }
  100% {
    background-position: 100px 100px, -100px 100px, 100px -100px, -100px -100px;
  }
}


  /* Responsieve marges */
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
