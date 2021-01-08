import { ITSConfigFn } from 'gatsby-plugin-ts-config';
import { CreateBlogPages } from './createPages/createBlogPages';
import { CreateBlogPostPages } from './createPages/createBlogPostPages';
import { CreateGalleryPages } from './createPages/createGalleryPages';
import { CreateTagPages } from './createPages/createTagPages';
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
    await CreateGalleryPages(args);
    await CreateTagPages(args);
  }
});

export default node;
