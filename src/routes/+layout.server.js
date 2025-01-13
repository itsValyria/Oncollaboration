import fetchJson from "$lib/fetch-json";

const baseURL = 'https://fdnd-agency.directus.app/items/';

export async function load({ url }) {
  // Define API endpoint URLs to fetch webinars en countourings data
  const webinarsURL = `${baseURL}avl_webinars?fields=slug,thumbnail.id,thumbnail.title,duration,title,speakers.avl_speakers_id.fullname,categories.avl_categories_id.name&sort[]=-date`;
  const contouringsURL = `${baseURL}avl_contourings?fields=slug,image_scan.id,title,user_id.fullname,categories.avl_categories_id.name`;
  const FeaturedWebinarURL = `${baseURL}avl_webinars?fields=thumbnail,slug,duration,title,description,categories.avl_categories_id.name&filter[featured]=true`;

  // Fetch the data from their API endpoints
  const webinars = await fetchJson(webinarsURL);
  const contourings = await fetchJson(contouringsURL);
  const FeaturedWebinar = await fetchJson(FeaturedWebinarURL);

  // Converts the query string retrieved from the URL to lowercase
  const query = url.searchParams.get('query')?.toLowerCase() || '';
  
  // Filter webinars based on the query input
  let filteredWebinars = webinars.data.filter((webinar) =>
    webinar.title.toLowerCase().includes(query)
  );

  // Filter contourings based on the query input
  let filteredContourings = contourings.data.filter((contouring) =>
    contouring.title.toLowerCase().includes(query)
  );

  // Filter data based on selected category
  const category = url.searchParams.get('category')?.toLowerCase() || 'all';
  if (category !== 'all') {
    filteredWebinars = filteredWebinars.filter((webinar) =>
      webinar.categories?.some((cat) =>
        cat.avl_categories_id?.name?.toLowerCase() === category
      )
    );
    filteredContourings = filteredContourings.filter((contouring) =>
      contouring.categories?.some((cat) =>
        cat.avl_categories_id?.name?.toLowerCase() === category
      )
    );
  }

  return {
    webinars: filteredWebinars,
    contourings: filteredContourings,
    FeaturedWebinars: FeaturedWebinar.data,
    query,
    category,
  };
}
