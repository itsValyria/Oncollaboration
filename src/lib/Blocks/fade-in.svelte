<script>
  import { onMount } from 'svelte';
  let opacity = 0; // Reactieve variabele voor opacity
  let element;

  const handleScroll = () => {
    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Bereken hoe ver het element in de viewport is
      const start = windowHeight * .75; // 75% van de hoogte
      const end = 0; // Bovenaan viewport

      // Zorg ervoor dat de waarde tussen 0 en 1 blijft
      if (rect.top <= start && rect.top >= end) {
        opacity = 1 - (rect.top - end) / (start - end); // Bereken de opacity
      } else if (rect.top > start) {
        opacity = 0; // Buiten boven bereik
      } else if (rect.bottom < 0) {
        opacity = 0; // Buiten onder bereik
      }
    }
  };

  onMount(() => {
    // Voeg de scrolllistener toe bij mount
    window.addEventListener('scroll', handleScroll);
    // Check direct de positie bij het laden
    handleScroll();
    return () => {
      // Verwijder de listener bij unmount
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<style>
  .fade-in {
    opacity: 0; /* Standaard volledig transparant */
  }
</style>

<div
  bind:this={element}
  class="fade-in"
  style="opacity: {opacity};"
>
  <slot />
</div>
