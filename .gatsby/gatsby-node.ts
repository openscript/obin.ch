import { ITSConfigFn } from 'gatsby-plugin-ts-config';
import { FileSystemNode } from 'gatsby-source-filesystem';
import { resolve } from 'path';
import { ArticlesQuery } from '../graphql-types';
import { defaultLanguage, Language, languages, slugTranslation } from './i18n';
import { exec } from 'child_process';
import { promisify } from 'util';
import slug from 'limax';

const promisifiedExec = promisify(exec);

const trimRightSlash = (path: string) => {
  return path === '/' ? path : path.replace(/\/$/, '');
};

const addLanguagePrefix = (path: string, language: string, defaultLanguage: string) => {
  return language !== defaultLanguage ? `/${language}${path}` : path;
};

const translatePagePaths = (path: string) => {
  const paths: { language: Language; path: string }[] = [];

  languages.forEach((language) => {
    const trimmedPath = trimRightSlash(path);
    const newPath = slugTranslation[language][trimmedPath] ?? trimmedPath;
    paths.push({ language, path: addLanguagePrefix(newPath, language, defaultLanguage) });
  });

  return paths;
};

const getCreationDate = async (path: string) => {
  return promisifiedExec(`git log --diff-filter=A --follow --format=%aI -- ${path} | tail -1`);
};

const getModificationDate = async (path: string) => {
  return promisifiedExec(`git log -1 --format=%aI -- ${path} | tail -1`);
};

const node: ITSConfigFn<'node'> = () => ({
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
      const path = addLanguagePrefix(`/${relativeDirectory}/${currentSlug}`, language, defaultLanguage);
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
  createPages: async ({ graphql, actions }) => {
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
});

export default node;
