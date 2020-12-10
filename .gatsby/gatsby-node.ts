import { ITSConfigFn } from 'gatsby-plugin-ts-config';
import { FileSystemNode } from 'gatsby-source-filesystem';
import { pathToArray } from 'graphql/jsutils/Path';
import { resolve } from 'path';
import { ArticlesQuery } from '../graphql-types';
import { defaultLanguage, Language, languages, slugTranslation } from './i18n';

const trimRightSlash = (path: string) => {
  return path === '/' ? path : path.replace(/\/$/, '');
};

const generateTranslatedPaths = (path: string) => {
  const paths: { language: Language; path: string }[] = [];

  languages.forEach((language) => {
    const trimmedPath = trimRightSlash(path);
    let newPath = slugTranslation[language][trimmedPath] ?? trimmedPath;
    if (language !== defaultLanguage) {
      newPath = `/${language}${newPath}`;
    }
    paths.push({ language, path: newPath });
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
  onCreatePage: async ({ page, actions }) => {
    const { createPage, deletePage } = actions;
    const paths = generateTranslatedPaths(page.path);

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
              }
            }
          }
        }
      }
    `);

    result.data?.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `articles/${node.frontmatter.slug}`,
        component: resolve('./src/templates/article.tsx'),
        context: {
          slug: node.frontmatter.slug,
          language: node.fields.language
        }
      });
    });
  }
});

export default node;
