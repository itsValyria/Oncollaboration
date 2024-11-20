import fetchJson from "$lib/fetch-json";

const baseURL = 'https://fdnd-agency.directus.app/items/';

export async function load({ url }) {
  // Converts the query string retrieved from the URL to lowercase
  const query = url.searchParams.get('query')?.toLowerCase() || '';
  
  // Define API endpoint URLs to fetch webinars en countourings data
  const webinar = `${baseURL}avl_webinars?fields=*.*.*&sort[]=-date`;
  const contouring = `${baseURL}avl_contourings?fields=*.*.*`;
  
  // Fetch the data from their API endpoints
  const webinars = await fetchJson(webinar);
  const contourings = await fetchJson(contouring);

  // Filter webinars based on the query input
  const filteredWebinars = webinars.data.filter(webinar =>
    webinar.title.toLowerCase().includes(query)
  );

  // Filter contourings based on the query input
  const filteredContourings = contourings.data.filter(contouring =>
    contouring.title.toLowerCase().includes(query)
  );

  // Returning the query back to the front-end along with the filtered webinars and contourings
  return {
    webinars: filteredWebinars,
    contourings: filteredContourings,
    query
  };
}