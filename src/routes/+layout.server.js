import fetchJson from "$lib/fetch-json";

const baseURL = 'https://fdnd-agency.directus.app/items/';

export async function load({ url }) {
  const query = url.searchParams.get('query')?.toLowerCase() || '';
  const category = url.searchParams.get('category')?.toLowerCase() || 'all';
  
  const webinarsURL = `${baseURL}avl_webinars?fields=*.*.*&sort[]=-date`;
  const contouringsURL = `${baseURL}avl_contourings?fields=*.*.*`;
  // const categoriesURL = `${baseURL}avl_categories?fields=*.*.*`;
  
  const webinars = await fetchJson(webinarsURL);
  const contourings = await fetchJson(contouringsURL);
  // const categories= await fetchJson(categoriesURL);

  // Filter data op basis van de query
  let filteredWebinars = webinars.data.filter((webinar) =>
    webinar.title.toLowerCase().includes(query)
  );
  let filteredContourings = contourings.data.filter((contouring) =>
    contouring.title.toLowerCase().includes(query)
  );

  // Filter data op basis van de categorie
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
    // categories: categories.data,
    query,
    category,
  }; 
}
