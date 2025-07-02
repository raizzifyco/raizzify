import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'zcvzshrn',
  dataset: 'production',
  apiVersion: '2023-07-02',
  useCdn: true,
})
