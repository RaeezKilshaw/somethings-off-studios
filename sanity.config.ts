import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'
import { projectId, dataset } from './sanity/env'

export default defineConfig({
  name: 'default',
  title: 'Somethings Off Studio',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('project').title('Work'),
            S.documentTypeListItem('client').title('Clients'),
            S.documentTypeListItem('post').title('News'),
            S.divider(),
            S.listItem()
              .title('About')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
            S.listItem()
              .title('Contact')
              .child(S.document().schemaType('contactPage').documentId('contactPage')),
            S.divider(),
            S.listItem()
              .title('Home')
              .child(S.document().schemaType('homePage').documentId('homePage')),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
})
