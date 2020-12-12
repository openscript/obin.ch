import { ITSConfigFn } from 'gatsby-plugin-ts-config';
import { FileSystemNode } from 'gatsby-source-filesystem';
import { resolve } from 'path';
import { ArticlesQuery } from '../graphql-types';
import { defaultLanguage, Language, languages, slugTranslation } from './i18n';

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

const node: ITSConfigFn<'node'> = () => ({
  onCreateNode: async ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === 'MarkdownRemark' && node.parent) {
      const fileSystemNode = getNode(node.parent);
      const { name, relativeDirectory } = fileSystemNode as FileSystemNode;
      const nameMatch = name.match(/^(\w+)(.+)?\.(\w+)$/);
      const filename = nameMatch && nameMatch[1] ? nameMatch[1] : name;
      const language = nameMatch && nameMatch[3] ? nameMatch[3] : defaultLanguage;
      createNodeField({ node, name: 'language', value: language });
      createNodeField({ node, name: 'filename', value: filename });
      createNodeField({ node, name: 'kind', value: relativeDirectory });
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
              frontmatter {
                slug
              }
              fields {
                language
                filename
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
            path: addLanguagePrefix(`/articles/${node.frontmatter.slug}`, node.fields.language, defaultLanguage)
          };
        });
      createPage({
        path: addLanguagePrefix(`/articles/${node.frontmatter.slug}`, node.fields.language, defaultLanguage),
        component: resolve('./src/templates/article.tsx'),
        context: {
          slug: node.frontmatter.slug,
          language: node.fields.language,
          alternativeLanguagePaths
        }
      });
    });
  }
});

export default node;
