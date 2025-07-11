import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'zcvzshrn',
  dataset: 'production',
  apiVersion: '2023-07-02',
  useCdn: true,
})

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
