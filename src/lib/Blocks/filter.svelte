<script>
  export let activeCategory; // Ontvang de actieve categorie van de pagina
  import { goto } from '$app/navigation';
  export let currentPage; 
</script>

<form method="get" action="/{currentPage}" id="filter" name="filter">
  <input type="hidden" name="page" value={currentPage} />
  <button type="button" on:click={() => goto('/currentPage')} class:selected={!activeCategory || activeCategory === 'all'}>All</button>
  <button type="submit" name="category" value="breast" aria-label="Filter on breast category" class:selected={activeCategory === 'breast'}>Breast</button>
  <button type="submit" name="category" value="gastrointestinal" class:selected={activeCategory === 'gastrointestinal'}>Gastrointestinal</button>
  <button type="submit" name="category" value="gynaecology" class:selected={activeCategory === 'gynaecology'}>Gynaecology</button>
  <button type="submit" name="category" value="head&neck" class:selected={activeCategory === 'head&neck'}>Head & neck</button>
  <button type="submit" name="category" value="lung" class:selected={activeCategory === 'lung'}>Lung</button>
  <button type="submit" name="category" value="neuro-oncology" class:selected={activeCategory === 'neuro-oncology'}>Neuro-oncology</button>
  <button type="submit" name="category" value="prostate" class:selected={activeCategory === 'prostate'}>Prostate</button>
  <button type="submit" name="category" value="urology" class:selected={activeCategory === 'urology'}>Urology</button>
</form>

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
