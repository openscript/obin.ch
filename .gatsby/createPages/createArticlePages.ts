import { CreatePagesArgs } from 'gatsby';
import { resolve } from 'path';
import { ArticlesQuery } from '../../graphql-types';

export async function createArticlePages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions;
  const result = await graphql<ArticlesQuery>(`
    query Articles {
      allMarkdownRemark(filter: { fields: { kind: { eq: "articles" } } }) {
        edges {
          node {
            fields {
              language
              filename
              path
              slug
            }
          }
        }
      }
    }
  `);

  result.data?.allMarkdownRemark.edges.forEach(({ node }) => {
    const alternativeLanguagePaths = result.data?.allMarkdownRemark.edges
      .filter((alternative) => {
        return node.fields.filename === alternative.node.fields.filename && node.fields.language !== alternative.node.fields.language;
      })
      .map(({ node }) => {
        return {
          language: node.fields.language,
          path: node.fields.path
        };
      });
    createPage({
      path: node.fields.path,
      component: resolve('./src/templates/article.tsx'),
      context: {
        slug: node.fields.slug,
        language: node.fields.language,
        alternativeLanguagePaths
      }
    });
  });
}
