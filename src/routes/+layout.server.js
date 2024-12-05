import fetchJson from "$lib/fetch-json";

const baseURL = 'https://fdnd-agency.directus.app/items/';

export async function load({ url }) {
  const query = url.searchParams.get('query')?.toLowerCase() || '';
  // Converts the query string retrieved from the URL to lowercase
  const category = url.searchParams.get('category')?.toLowerCase() || 'all';
  
  // Define API endpoint URLs to fetch webinars en countourings data
  const webinarsURL = `${baseURL}avl_webinars?fields=slug,thumbnail.id,thumbnail.title,duration,title,speakers.avl_speakers_id.fullname,categories.avl_categories_id.name&sort[]=-date`;
  const contouringsURL = `${baseURL}avl_contourings?fields=slug,image_scan.id,title,user_id.fullname,categories.avl_categories_id.name`;
  const FeaturedWebinar = `${baseURL}avl_webinars?fields=thumbnail,slug,duration,title,description,categories.avl_categories_id.name&filter[featured]=true`;
  // const categoriesURL = `${baseURL}avl_categories?fields=*.*.*`;


  // Fetch the data from their API endpoints
  const webinars = await fetchJson(webinarsURL);
  const contourings = await fetchJson(contouringsURL);
  const FeaturedWebinars = await fetchJson(FeaturedWebinar);
  // const categories = await fetchJson(categoriesURL);

  // Filter webinars based on the query input
  let filteredWebinars = webinars.data.filter((webinar) =>
    webinar.title.toLowerCase().includes(query)
  );
  // Filter contourings based on the query input
  let filteredContourings = contourings.data.filter((contouring) =>
    contouring.title.toLowerCase().includes(query)
  );

  // Filter data based on selected category
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
    FeaturedWebinars: FeaturedWebinars.data,
    // categories: categories.data,
    query,
    category,
  };
}
