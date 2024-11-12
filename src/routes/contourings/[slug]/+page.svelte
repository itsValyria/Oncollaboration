<script>
  export let data; 
</script>


<h1>{data.contouring.title}</h1>

<img src="https://fdnd-agency.directus.app/assets/{data.contouring.image_scan.id}" alt="CT-Scans" width="384" height="384" />

<style>
  img {
    width: 80vw;
  }
</style>