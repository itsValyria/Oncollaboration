import fetchJson from "$lib/fetch-json"

const baseURL = 'https://fdnd-agency.directus.app/items/'

export async function load({params}) {
  const url = `${baseURL}/avl_webinars?fields=*.*.*&filter[slug][_eq]=${params.slug}`
  const webinar = await fetchJson(url)

  const comments = `${baseURL}/avl_comments?filter[webinar_id][_eq]=${webinar.data[0].id}`
  const comment = await fetchJson(comments)
  
  return {
    webinar: webinar.data[0],
    comments: comment.data
  }
}