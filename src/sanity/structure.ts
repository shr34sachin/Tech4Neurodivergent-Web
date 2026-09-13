import { StructureBuilder } from 'sanity/structure';

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content Management')
    .items([
      // 1. Topic Clusters
      S.listItem()
        .title('Topic Clusters (विषय क्षेत्रहरू)')
        .schemaType('guideCluster')
        .child(
          S.documentTypeList('guideCluster')
            .title('Topic Clusters')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),

      // 2. Educational Guides
      S.listItem()
        .title('Educational Guides (शैक्षिक निर्देशिकाहरू)')
        .schemaType('guide')
        .child(
          S.documentTypeList('guide')
            .title('All Guides')
            .defaultOrdering([
              { field: 'cluster.order', direction: 'asc' },
              { field: 'order', direction: 'asc' },
            ])
        ),

      // 3. Supportive Web-Apps
      S.listItem()
        .title('Supportive Web-Apps (सहयोगी वेब-एपहरू)')
        .schemaType('supportiveWebApp')
        .child(
          S.documentTypeList('supportiveWebApp')
            .title('Supportive Web-Apps')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),

      S.divider(),

      // 4. Site Layout & Global Settings (Singleton)
      S.listItem()
        .title('Site Layout & Global Settings (साइट लेआउट)')
        .schemaType('siteSettings')
        .child(
          S.editor()
            .title('Site Layout & Settings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      S.divider(),

      // 5. Blog & Research Posts
      S.listItem()
        .title('Blog & Research Articles')
        .schemaType('post')
        .child(
          S.documentTypeList('post')
            .title('Blog Posts')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),

      // 6. Custom Pages
      S.listItem()
        .title('Custom Pages (صفحات)')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Custom Pages')),

      // 7. Categories & Authors
      S.listItem()
        .title('Authors & Categories')
        .child(
          S.list()
            .title('Taxonomy')
            .items([
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('author').title('Authors'),
            ])
        ),
    ]);
