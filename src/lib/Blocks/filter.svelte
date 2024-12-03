<script>
  export let activeCategory; // Ontvang de actieve categorie van de pagina
  import { goto } from '$app/navigation';
</script>

<form method="get" action="/filter" id="filter" name="filter">
  <button type="button" on:click={() => goto('/webinars')} class:selected={!activeCategory || activeCategory === 'all'}>All</button>
  <button type="submit" name="category" value="breast" aria-label="Filter on breast category" class:selected={activeCategory === 'breast'}>Breast</button>
  <button type="submit" name="category" value="gastrointestinal" aria-label="Filter on gastrointestinal category" class:selected={activeCategory === 'gastrointestinal'}>Gastrointestinal</button>
  <button type="submit" name="category" value="gynaecology" aria-label="Filter on gynaecology category" class:selected={activeCategory === 'gynaecology'}>Gynaecology</button>
  <button type="submit" name="category" value="head&neck" aria-label="Filter on head and neck category" class:selected={activeCategory === 'head&neck'}>Head & neck</button>
  <button type="submit" name="category" value="lung" aria-label="Filter on lung category" class:selected={activeCategory === 'lung'}>Lung</button>
  <button type="submit" name="category" value="neuro-oncology" aria-label="Filter on neuro oncology category" class:selected={activeCategory === 'neuro-oncology'}>Neuro-oncology</button>
  <button type="submit" name="category" value="prostate" aria-label="Filter on prostate category" class:selected={activeCategory === 'prostate'}>Prostate</button>
  <button type="submit" name="category" value="urology" aria-label="Filter on urology category" class:selected={activeCategory === 'urogoly'}>Urology</button>
</form>

<!-- 
<form method="get" action="/filter" id="filter" name="filter">
  <button type="button" on:click={() => goto('/webinars')} class:selected={!activeCategory || activeCategory === 'all'}>All</button>
  {#each categories as category}
    <button type="submit" name="category" class:selected={activeCategory === 'urogoly'} value={category.name.toLowerCase()}>
      {category.name}
    </button>
  {/each}
</form> -->

<style>
  form {
    display: flex;
    overflow-x: auto;
    width: 99%;
    -webkit-mask: linear-gradient(90deg,#0000,#000 5% 95%,#0000);
    mask: linear-gradient(90deg,#0000,#000 5% 95%,#0000);;
  }

  button {
    margin: .2rem;
    padding: var(--padding-button);
    text-transform: uppercase;
    background-color: var(--background-category-color);
    border: none;
    border-radius: var(--border-radius-sm);
    flex-shrink: 0;
    cursor: pointer;
    color: inherit;
  }

  .selected {
    background-color: var(--primary-color);
    color: var(--alt-text-color);
  }
  button:focus {
    outline: var(--focus);
    border-radius: var(--border-radius-sm);
  }

  @media screen and (min-width:600px) {
    form {
      flex-wrap: wrap;
      justify-content: center;
      -webkit-mask: 0;
      mask: 0;
    }

    button {
      margin-inline: 5px 8px;
      padding: 8px 16px;
    }
  }
</style>
