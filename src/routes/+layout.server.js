import fetchJson from "$lib/fetch-json";

const baseURL = 'https://fdnd-agency.directus.app/items/'

export async function load() {
  const webinar = `${baseURL}avl_webinars?fields=*.*.*&sort[]=-date`;
  const contouring = `${baseURL}avl_contourings?fields=*.*.*`;
  const FeaturedWebinar = `${baseURL}avl_webinars?fields=*.*.*&filter[featured]=true`;
  
  const webinars = await fetchJson(webinar);
  const contourings = await fetchJson(contouring);
  const FeaturedWebinars = await fetchJson(FeaturedWebinar);

  return {
    webinars: webinars.data,
    contourings: contourings.data,
    FeaturedWebinars: FeaturedWebinars.data,
  };
}
