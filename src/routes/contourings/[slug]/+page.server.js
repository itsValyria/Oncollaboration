import fetchJson from "$lib/fetch-json"

const baseURL = 'https://fdnd-agency.directus.app/items/'

async function fetchReplies(commentIds) {
  if (!commentIds || commentIds.length === 0) return [];

  // Fetch reply data for the given IDs
  const repliesURL = `${baseURL}avl_comments?fields=time_posted,content,parent_id,likes,id,user_id.profile_picture.id,user_id.profile_picture.title,user_id.fullname,replies&filter[id][_in]=${commentIds.join(',')}`;
  const replies = await fetchJson(repliesURL);
  
  // Recursively fetch replies for each comment
  for (const reply of replies.data) {
    reply.replies = await fetchReplies(reply.replies); // Recursive fetching
  }

  return replies.data;
}

export async function load({params}) {
  const contouringURL = `${baseURL}avl_contourings?fields=image_scan,title,id,user_id.profile_picture.id,user_id.profile_picture.title,user_id.fullname,user_id.entitle,used_literature.directus_files_id,categories.avl_categories_id.name&filter[slug][_eq]=${params.slug}`
  const contouring = await fetchJson(contouringURL)

  const commentsURL = `${baseURL}avl_comments?fields=time_posted,content,parent_id,likes,id,user_id.profile_picture.id,user_id.profile_picture.title,user_id.fullname,replies&filter[contouring_id][_eq]=${contouring.data[0].id}&filter[parent_id][_null]=true`
  const comments = await fetchJson(commentsURL)
  
  for (const comment of comments.data) {
    comment.replies = await fetchReplies(comment.replies); // Recursive fetching  
  }
  
  return {
    contouring: contouring.data[0],
    comments: comments.data
  }
}

/** @satisfies {import('./$types').Actions} */
export const actions = {
  comment: async ({ request, params }) => {
		const data = await request.formData();
    const timestamp = new Date().toISOString();
    const content = data.get('comment');

    const contouringData = await fetchJson(`${baseURL}avl_contourings?fields=id&filter[slug][_eq]=${params.slug}`)
    
    const user_id = 1;
    const contouring_id = contouringData.data[0].id;

    const response = await fetchJson(`${baseURL}avl_comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        time_posted: timestamp,
        content: content,
        user_id: user_id,
        contouring_id: contouring_id
      })
    });

    return { success: true };
	},

  like: async ({ request }) => {
    const data = await request.formData();
    const ID = data.get('comment-id');
    const likesData = await fetchJson(`${baseURL}avl_comments/${ID}?fields=likes`);
    const likes = likesData.data.likes;
    
    const response = await fetchJson(`${baseURL}avl_comments/${ID}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: likes + 1,
      })
    });
    
    return { success: true };
  },
  reply: async ({ request, params }) => {
		const data = await request.formData();
    const timestamp = new Date().toISOString();
    const content = data.get('reply');
    const ID = data.get('comment-id');

    const contouringData = await fetchJson(`${baseURL}avl_contourings?fields=id&filter[slug][_eq]=${params.slug}`)
    
    const user_id = 1;
    const contouring_id = contouringData.data[0].id;

    const response = await fetchJson(`${baseURL}avl_comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        time_posted: timestamp,
        content: content,
        user_id: user_id,
        contouring_id: contouring_id,
        parent_id: ID
      })
    });
    
    return { success: true };
	},
}