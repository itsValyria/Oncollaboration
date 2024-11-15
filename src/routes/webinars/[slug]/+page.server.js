import fetchJson from "$lib/fetch-json"
import { json } from "@sveltejs/kit"

const baseURL = 'https://fdnd-agency.directus.app/items/'

export async function load({params}) {
  const webinarURL = `${baseURL}avl_webinars?fields=*.*.*&filter[slug][_eq]=${params.slug}`
  const webinar = await fetchJson(webinarURL)

  const commentsURL = `${baseURL}avl_comments?fields=*.*.*.*&filter[webinar_id][_eq]=${webinar.data[0].id}`  
  const comments = await fetchJson(commentsURL)

  return {
    webinar: webinar.data[0],
    comments: comments.data
  }
}

/** @satisfies {import('./$types').Actions} */
export const actions = {
	comment: async ({ request }) => {
		const data = await request.formData();
    const timestamp = new Date().toISOString();
    const content = data.get('comment');
    const user_id = data.get('user_id');
    const webinar_id = data.get('webinar_id');

    const response = await fetchJson(`${baseURL}avl_comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        time_posted: timestamp,
        content: content,
        user_id: user_id,
        webinar_id: webinar_id
      })
    });
    
    return { success: true };
	}
};