import { createImageUrlBuilder } from '@sanity/image-url';
import { projectId, dataset } from './client';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || 'sample_project_id',
  dataset: dataset || 'production',
});

type ImageSource = Parameters<typeof imageBuilder.image>[0];

export const urlForImage = (source: ImageSource | null | undefined) => {
  if (!source) return null;
  try {
    return imageBuilder.image(source).auto('format').fit('max');
  } catch {
    return null;
  }
};
