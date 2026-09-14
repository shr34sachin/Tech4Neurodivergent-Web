import { StructureBuilder } from 'sanity/structure';

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Tech4Neurodivergent Studio')
    .items([
      // 1. Guides Organized by Topic Cluster (Hierarchy View)
      S.listItem()
        .title('Guides by Topic Cluster (क्लस्टर अनुसारका निर्देशिकाहरू)')
        .child(
          S.documentTypeList('guideCluster')
            .title('Select a Topic Cluster')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
            .child((clusterId) =>
              S.documentList()
                .title('Guides in this Cluster')
                .filter('_type == "guide" && cluster._ref == $clusterId')
                .params({ clusterId })
                .defaultOrdering([
                  { field: 'isPrimary', direction: 'desc' },
                  { field: 'order', direction: 'asc' },
                ])
            )
        ),

      // 2. All Educational Guides (Direct List View)
      S.listItem()
        .title('All Educational Guides (सबै निर्देशिकाहरू)')
        .schemaType('guide')
        .child(
          S.documentTypeList('guide')
            .title('All Guides')
            .defaultOrdering([
              { field: 'order', direction: 'asc' },
              { field: 'title', direction: 'asc' },
            ])
        ),

      // 3. Topic Clusters Management
      S.listItem()
        .title('Topic Clusters Settings (विषय क्षेत्रहरू)')
        .schemaType('guideCluster')
        .child(
          S.documentTypeList('guideCluster')
            .title('Topic Clusters')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),

      // 4. Supportive Web-Apps
      S.listItem()
        .title('Supportive Web-Apps (८ सहयोगी वेब-एपहरू)')
        .schemaType('supportiveWebApp')
        .child(
          S.documentTypeList('supportiveWebApp')
            .title('Supportive Web-Apps')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),

      S.divider(),

      // 5. Site Layout & Global Settings (Singleton)
      S.listItem()
        .title('Site Layout & Global Settings (साइट लेआउट र eSewa)')
        .schemaType('siteSettings')
        .child(
          S.document()
            .title('Site Layout & Global Settings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      S.divider(),

      // 6. Blog & Research Articles
      S.listItem()
        .title('Blog & Research Articles')
        .schemaType('post')
        .child(
          S.documentTypeList('post')
            .title('Blog Posts')
            .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
        ),

      // 7. Custom Pages
      S.listItem()
        .title('Custom Pages (कस्टम पृष्ठहरू)')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Custom Pages')),

      // 8. Categories & Authors
      S.listItem()
        .title('Taxonomy (लेखक तथा वर्गहरू)')
        .child(
          S.list()
            .title('Taxonomy')
            .items([
              S.documentTypeListItem('category').title('Categories'),
              S.documentTypeListItem('author').title('Authors'),
            ])
        ),
    ]);
