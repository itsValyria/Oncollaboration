import fetchJson from "$lib/fetch-json"

const baseURL = 'https://fdnd-agency.directus.app/items/'

export async function load({params}) {
  const url = `${baseURL}avl_contourings?fields=*.*.*&filter[slug][_eq]=${params.slug}`

  const contouring = await fetchJson(url)
  
  return {
    contouring: contouring.data[0]
  }
}