import { CreatePagesArgs } from 'gatsby';
import { resolve } from 'path';
import { CreateBlogPagesQuery } from '../../graphql-types';
import { BLOG_PATH, ITEMS_PER_PAGE } from '../configuration';
import { languages, translate } from '../i18n';
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
    const entryCount = result.data?.allMarkdownRemark.edges.length || 0;
    const pageCount = Math.ceil(entryCount / ITEMS_PER_PAGE);
    const alternativeLanguagePaths = languages
      .filter((l) => l !== language)
      .map((l) => {
        return {
          path: addLanguagePrefix(translate(l, BLOG_PATH), l),
          language: l
        };
      });
    Array.from({ length: pageCount + 1 }).forEach((_, i) => {
      const currentPath = i === 0 ? translate(language, BLOG_PATH) : `${translate(language, BLOG_PATH)}/${i + 1}`;
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
