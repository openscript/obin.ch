import { ITSConfigFn } from 'gatsby-plugin-ts-config';
import { CreateBlogPages } from './createPages/createBlogPages';
import { CreateBlogPostPages } from './createPages/createBlogPostPages';
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
    await CreateBlogPostPages(args);
    await CreateBlogPages(args);
  }
});

export default node;
