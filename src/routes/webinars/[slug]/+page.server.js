import fetchJson from "$lib/fetch-json";
import { json } from '@sveltejs/kit';

const baseURL = 'https://fdnd-agency.directus.app/items/'

export async function load({params}) {
  const url = `${baseURL}/avl_webinars?fields=*.*.*&filter[slug][_eq]=${params.slug}`
  const webinar = await fetchJson(url)

  const comments = `${baseURL}/avl_comments?fields=*.*.*.*&filter[webinar_id][_eq]=${webinar.data[0].id}`
  const comment = await fetchJson(comments)
  
  return {
    webinar: webinar.data[0],
    comments: comment.data
  }
}

/** @satisfies {import('./$types').Actions} */
export const actions = {
  comment: async ({request}) => {
    const data = await request.formData();
    const content = data.get('comment');
    const webinar_id = data.get('webinar_id');
    const user_id = data.get('user_id');
    
    try {
      const response = await fetch(`${baseURL}avl_comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: content,
          webinar_id: webinar_id,
          user_id: user_id
        })
      });

      const result = await response.json();

      return json({ success: true, data: result }, { status: 201 });
    } catch (error) {
      return json({ success: false, error: error.message }, { status: 500 });
    }
  }
}