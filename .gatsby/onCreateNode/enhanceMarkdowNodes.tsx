import { exec } from 'child_process';
import { CreateNodeArgs } from 'gatsby';
import { FileSystemNode } from 'gatsby-source-filesystem';
import slug from 'limax';
import { promisify } from 'util';
import { defaultLanguage } from '../i18n';
import { addLanguagePrefix } from '../utils/path';

const promisifiedExec = promisify(exec);

const getCreationDate = async (path: string) => {
  return promisifiedExec(`git log --diff-filter=A --follow --format=%aI -- ${path} | tail -1`);
};

const getModificationDate = async (path: string) => {
  return promisifiedExec(`git log -1 --format=%aI -- ${path} | tail -1`);
};

export async function enhanceMarkdownNodes(args: CreateNodeArgs) {
  const { getNode, node, actions } = args;
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark' && node.parent) {
    const fileSystemNode = getNode(node.parent);
    const { name, relativeDirectory, absolutePath } = fileSystemNode as FileSystemNode;
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
}