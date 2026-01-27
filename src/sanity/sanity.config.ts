/**
 * Sanity Studio Configuration
 * 
 * This file configures the embedded Sanity Studio for content management.
 * Designed for intuitive use by non-technical copywriters.
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

// Custom desk structure for intuitive navigation
const deskStructure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      // Case Studies - Primary content type
      S.listItem()
        .title('Case Studies')
        .icon(() => '📝')
        .child(
          S.documentTypeList('caseStudy')
            .title('Case Studies')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),

      // Projects (legacy)
      S.listItem()
        .title('Projects')
        .icon(() => '📂')
        .child(
          S.documentTypeList('project')
            .title('Projects')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),

      S.divider(),

      // Site Settings - Singleton
      S.listItem()
        .title('Site Settings')
        .icon(() => '⚙️')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
    ]);

export default defineConfig({
  name: 'copywriting-portfolio',
  title: 'Portfolio Studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: deskStructure,
    }),
  ],

  schema: {
    types: schemaTypes as any,
  },

  // Studio customization
  studio: {
    components: {
      // Can add custom components here
    },
  },

  // Form configuration
  form: {
    // Disable file/image upload in production if needed
    // file: { assetSources: [] },
    // image: { assetSources: [] },
  },

  // Document actions customization
  document: {
    // Customize which actions appear for each document type
    actions: (prev, context) => {
      // For siteSettings, only show restore and publish
      if (context.schemaType === 'siteSettings') {
        return prev.filter(
          (action) =>
            action.action === 'publish' ||
            action.action === 'discardChanges' ||
            action.action === 'restore'
        );
      }
      return prev;
    },
  },
});
