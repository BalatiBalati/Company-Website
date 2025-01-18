import {createClient} from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'balatibalati-portfolio',
  dataset: 'production',
  apiVersion: '2025-01-18',
  useCdn: 'true',
  token: 'skZ4FAND1F9wIS2jeHFqV9f2zF6lRkXV1aIM3fenY9jP2pgwsmBl25ELbdTYUpKBY5TBlYGutFaxleOG4YOh4rDOepoDbAOcLHchXK5uA79xWool1PVmbpB2L11HOt40LFZjJCF90KpayyhNcK0O0nnklyB7YDpL7CTO9SbSqQSpvQrtWLaD',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
