export async function postComment(content, webinarId) {
  const comments = `${baseURL}/avl_comments`;

  const response = await fetch(comments, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: content,
      webinar_id: webinarId
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.errors[0]?.message || 'Failed to post comment');
  }

  return await response.json();
}