import { ITSConfigFn } from 'gatsby-plugin-ts-config';
import { createArticlePages } from './createPages/createArticlePages';
import { createArticlesPages } from './createPages/createArticlesPages';
import { translatePagePaths } from './utils/path';
import { enhanceMarkdownNodes } from './onCreateNode/enhanceMarkdowNodes';

const node: ITSConfigFn<'node'> = () => ({
  // enhance nodes
  onCreateNode: async (args) => {
    await enhanceMarkdownNodes(args);
  },
  // translate pages
  onCreatePage: async ({ page, actions }) => {
    const { createPage, deletePage } = actions;
    const paths = translatePagePaths(page.path);

    deletePage(page);

    paths.forEach((path) => {
      const alternativeLanguagePaths = paths.filter((p) => p.language !== path.language);
      const context = { ...page.context, language: path.language, alternativeLanguagePaths };
      createPage({ ...page, path: path.path, context });
    });
  },
  // generate pages
  createPages: async (args) => {
    await createArticlePages(args);
    await createArticlesPages(args);
  }
});

export default node;
