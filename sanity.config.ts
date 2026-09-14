import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';
import { deskStructure } from './src/sanity/structure';
import { seedPlugin } from './src/sanity/plugins/seedPlugin';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '5jc1f7wk';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  basePath: '/admin',
  name: 'default',
  title: 'Tech4Neurodivergent Content Studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    seedPlugin(),
  ],
  schema: {
    types: schemaTypes,
  },
});
