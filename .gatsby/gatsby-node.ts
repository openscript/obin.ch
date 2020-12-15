import { ITSConfigFn } from 'gatsby-plugin-ts-config';
import { createArticlePages } from './createPages/createArticlePages';
import { createArticlesPages } from './createPages/createArticlesPages';
import { enhanceMarkdownNodes } from './onCreateNode/enhanceMarkdowNodes';
import { translatePage } from './onCreatePage/translatePage';

const node: ITSConfigFn<'node'> = () => ({
  // enhance nodes
  onCreateNode: async (args) => {
    await enhanceMarkdownNodes(args);
  },
  // translate pages
  onCreatePage: async (args) => {
    await translatePage(args);
  },
  // generate pages
  createPages: async (args) => {
    await createArticlePages(args);
    await createArticlesPages(args);
  }
});

export default node;
