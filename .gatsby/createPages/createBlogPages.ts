import { CreatePagesArgs } from 'gatsby';
import { resolve } from 'path';
import { CreateBlogPagesQuery } from '../../graphql-types';
import { ITEMS_PER_PAGE } from '../configuration';
import { languages } from '../i18n';
import { addLanguagePrefix } from '../utils/path';

export async function CreateBlogPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions;
  for (const language of languages) {
    const result = await graphql<CreateBlogPagesQuery>(`
      query CreateBlogPages {
        allMarkdownRemark(filter: { fields: { language: { eq: "${language}" }, kind: { eq: "blog" } } }) {
          edges {
            node {
              id
            }
          }
        }
      }
    `);
    const articleCount = result.data?.allMarkdownRemark.edges.length || 0;
    const pageCount = Math.ceil(articleCount / ITEMS_PER_PAGE);
    const alternativeLanguagePaths = languages
      .filter((l) => l !== language)
      .map((l) => {
        return {
          path: addLanguagePrefix('/blog', l),
          language: l
        };
      });
    Array.from({ length: pageCount + 1 }).forEach((_, i) => {
      const currentPath = i === 0 ? '/blog' : `/blog/${i + 1}`;
      createPage({
        path: addLanguagePrefix(currentPath, language),
        component: resolve('./src/templates/blog.tsx'),
        context: {
          limit: ITEMS_PER_PAGE,
          skip: i * ITEMS_PER_PAGE,
          pageCount: pageCount,
          currentPage: i + 1,
          language,
          alternativeLanguagePaths
        }
      });
    });
  }
}