import { json } from '@sveltejs/kit';
import { postComment } from '$lib/api.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { content, webinarId } = await request.json();

  // Basic validation
  if (!content || !webinarId) {
    return json({ error: 'Missing content or webinar ID' }, { status: 400 });
  }

  try {
    const comment = await postComment(content, webinarId);
    return json(comment, { status: 201 });
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}