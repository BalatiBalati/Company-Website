import {createClient} from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'v1f4ktqd',
  dataset: 'production',
  apiVersion: '2025-01-18',
  useCdn: 'true',
  token: 'skuOO2Qe6E2zbdlsndMxQgqsdXhYbCfXrUwipTZHYYpBRyYS2eDvc7BtBV84efFDZ2dGw4Vf8j6ZkqzSFMvu7gKjZ8SjOKIa7IatsyBDxsEItLTgloPVIOgEIOJ8UFnidhmEgI9sKgWsXoykWRqUJreJHtGANzYeuAanoBNWS7BcWJnzPR7X',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
