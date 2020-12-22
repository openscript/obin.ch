import { ITSConfigFn } from 'gatsby-plugin-ts-config';

const configuration: ITSConfigFn<'config'> = ({ projectRoot }) => ({
  siteMetadata: {
    siteUrl: 'https://r.obin.ch',
    email: 'hi+r@obin.ch',
    phone: '+41 44 520 54 67',
    mainNavigation: [
      {
        title: 'page.blog.title',
        path: '/blog'
      }
    ]
  },
  plugins: [
    // Plugins
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-svgr',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'r.obin.ch',
        short_name: 'r.obin.ch',
        start_url: '/',
        background_color: `#6a4a3c`,
        theme_color: `#eb6841`,
        display: 'standalone',
        icon: 'static/icons/favicon.png',
        icons: [
          {
            src: 'static/icons/favicon192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'static/icons/favicon512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    // Sources
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${projectRoot}/content`
      }
    },

    // Transformers
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
});

export default configuration;
