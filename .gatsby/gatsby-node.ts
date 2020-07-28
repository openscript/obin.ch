import { ITSConfigFn } from 'gatsby-plugin-ts-config';
import { FileSystemNode } from 'gatsby-source-filesystem';
import path from 'path';

type Frontmatter = {
  permalink?: string,
  layout?: string
}

const node: ITSConfigFn<'node'> = () => ({
  onCreateNode: async ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    const fileSystemNode = getNode(node.parent);

    if (node.internal.type === 'MarkdownRemark' && fileSystemNode.internal.type === 'File') {
      const { permalink, layout } = node.frontmatter as Frontmatter
      const { relativePath } = fileSystemNode as FileSystemNode;

      let slug = permalink

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}/`
      }

      createNodeField({
        node,
        name: 'slug',
        value: slug || ''
      })

      createNodeField({
        node,
        name: 'layout',
        value: layout || ''
      })
    }
  },
  createPages: async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const allMarkdown = await graphql<any>(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
                layout
              }
            }
          }
        }
      }
    `)

    if (allMarkdown.errors) {
      reporter.panicOnBuild(allMarkdown.errors)
    }

    allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug, layout } = node.fields

      createPage({
        path: slug,
        component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
        context: {
          slug
        }
      })
    })
  }
});

export default node;
