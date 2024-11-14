const baseURL = 'https://fdnd-agency.directus.app/items/'

export async function postComment(content, webinar_id, contouring_id, user_id) {
  const comments = `${baseURL}avl_comments`;

  const response = await fetch(comments, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: content,
      webinar_id: webinar_id,
      contouring_id: contouring_id,
      user_id: user_id
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors[0]?.message || 'Failed to post comment');
  }

  return await response.json();
}