import { ITSConfigFn } from 'gatsby-plugin-ts-config';
import { FileSystemNode } from 'gatsby-source-filesystem';
import { defaultLanguage } from './i18n';
import { exec } from 'child_process';
import { promisify } from 'util';
import slug from 'limax';
import { createArticlePages } from './createPages/createArticlePages';
import { createArticlesPages } from './createPages/createArticlesPages';
import { addLanguagePrefix, translatePagePaths } from './utils/path';

const promisifiedExec = promisify(exec);

const getCreationDate = async (path: string) => {
  return promisifiedExec(`git log --diff-filter=A --follow --format=%aI -- ${path} | tail -1`);
};

const getModificationDate = async (path: string) => {
  return promisifiedExec(`git log -1 --format=%aI -- ${path} | tail -1`);
};

const node: ITSConfigFn<'node'> = () => ({
  // enhance nodes
  onCreateNode: async ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark' && node.parent) {
      const fileSystemNode = getNode(node.parent);
      const { name, relativeDirectory, absolutePath } = fileSystemNode as FileSystemNode;
      getCreationDate(absolutePath);
      const nameMatch = name.match(/^(\w+)(.+)?\.(\w+)$/);
      const filename = nameMatch && nameMatch[1] ? nameMatch[1] : name;
      const language = nameMatch && nameMatch[3] ? nameMatch[3] : defaultLanguage;
      const { title } = node['frontmatter'] as { title?: string };
      const currentSlug = title ? slug(title) : filename;
      const path = addLanguagePrefix(`/${relativeDirectory}/${currentSlug}`, language);
      const createdAt = await getCreationDate(absolutePath);
      const modifiedAt = await getModificationDate(absolutePath);
      createNodeField({ node, name: 'language', value: language });
      createNodeField({ node, name: 'filename', value: filename });
      createNodeField({ node, name: 'kind', value: relativeDirectory });
      createNodeField({ node, name: 'slug', value: currentSlug });
      createNodeField({ node, name: 'path', value: path });
      createNodeField({ node, name: 'createdAt', value: createdAt.stdout });
      createNodeField({ node, name: 'modifiedAt', value: modifiedAt.stdout });
    }
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
