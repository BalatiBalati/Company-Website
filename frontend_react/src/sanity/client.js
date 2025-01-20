import {createClient} from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'v1f4ktqd',
  dataset: 'production',
  apiVersion: '2025-01-18',
  useCdn: 'true',
  token: 'skpmU09QTQjMyUMXf0jV2yzOEt5yZAX8gkIAzXDDwXHIlDDf1Mxhj1Z6hbeNuufqaNRd1QExtI5kDdPZ2J90vVBRiax97qCQZpxenl9nBTQBjpcHAgVzrDBxWgVjZhsMYFzydlD5T9XTghQ8hxl16NG6BWVha5hWlgrYt5sgEKa5CcRQV1eG',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
