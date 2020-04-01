export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e84276140181bc5e3ff4307',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8pbf9pkn',
                  apiId: 'b400ceb9-8f89-4295-a266-6ebeacdfd26d'
                },
                {
                  buildHookId: '5e8427618f3f1fcdd7edf3bf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1v76ku3e',
                  apiId: 'a6e246fe-ff11-4258-8038-e9ad255c1226'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmesimak/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1v76ku3e.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
