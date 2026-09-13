import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';
import { deskStructure } from './src/sanity/structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '5jc1f7wk';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  basePath: '/admin',
  name: 'tech4neurodivergent-studio',
  title: 'Tech4Neurodivergent Content Studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
