import {createClient} from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'v1f4ktqd',
  dataset: 'production',
  apiVersion: '2024-09-15',
  useCdn: 'true',
  token: 'skpAjD9dtBeewwXttvz7oezXC5gS793vG1I399Um7SefiQveYHsDV7A2YpKuXOhbQUrckG9OD80EWtO8GQFrXWRIySrPr4R4wcHsfjkpwoaHFe4ujcMWpKEuEPZp5v5sOZ10TJJJtDld7g2po4spfyKRNJjov7BryQROgD0SIOvgfP8HbU5K',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
