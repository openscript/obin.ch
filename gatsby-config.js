'use strict'

module.exports = {
  siteMetadata: {
    title: 'r.obin.ch',
    description: 'Mein Faszikel.',
    keywords: 'blog, experiments, software, teaching, traveling, photos',
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
    'gatsby-plugin-typescript',
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
    }
  ]
}
