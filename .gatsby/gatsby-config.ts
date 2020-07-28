import { ITSConfigFn } from 'gatsby-plugin-ts-config';

const configuration: ITSConfigFn<'config'> = ({ projectRoot }) => ({
  siteMetadata: {
    title: 'r.obin.ch',
    license: 'AGPL-3.0',
    url: 'https://r.obin.ch',
    author: {
      name: 'Robin Bühler',
      email: 'r@obin.ch'
    }
  },
  plugins: [
    // Plugins
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-svgr',
    {
      resolve: 'gatsby-plugin-ts',
      options: {
        codegen: true,
        fileName: 'graphql-type.ts',
        documentPaths: [
          'src/**/*.{ts,tsx}',
          'node_modules/gatsby-*/**/*.js',
          '.gatsby/gatsby-node.ts',
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: false
      }
    },

    // Sources
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${projectRoot}/src/content`
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

/*
module.exports = {
  siteMetadata: {
    title: 'r.obin.ch',
    license: 'Robin Bühler - AGPL-3.0',
    siteUrl: 'https://r.obin.ch',
    author: {
      name: 'Robin Bühler',
      url: 'https://r.obin.ch',
      email: ''
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
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
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://r.obin.ch'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `r.obin.ch`,
        short_name: `r.obin.ch`,
        start_url: `/`,
        background_color: `#6A4A3C`,
        theme_color: `#EB6841`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-ts',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
        prefixDefault: false
      }
    },
    'gatsby-plugin-svgr',
    `gatsby-plugin-graphql-codegen`
  ]
}
*/
