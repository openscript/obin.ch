import { exec } from 'child_process';
import { CreateNodeArgs, Node, Actions } from 'gatsby';
import { FileSystemNode } from 'gatsby-source-filesystem';
import slug from 'limax';
import { promisify } from 'util';
import { defaultLanguage, translate } from '../i18n';
import { addLanguagePrefix } from '../utils/path';

const promisifiedExec = promisify(exec);

const convertToISOString = (dateTimeString: string) => {
  if (isNaN(Date.parse(dateTimeString))) {
    return new Date().toISOString();
  } else {
    return new Date(dateTimeString).toISOString();
  }
};

const getPublicationDate = async (path: string) => {
  const publicationDate = await promisifiedExec(`git log --diff-filter=A --follow --format=%aI -- ${path} | tail -1`);
  return convertToISOString(publicationDate.stdout.trim());
};

const getModificationDate = async (path: string) => {
  const modificationDate = promisifiedExec(`git log -1 --format=%aI -- ${path} | tail -1`);
  return convertToISOString((await modificationDate).stdout.trim());
};

const enhanceBlogNodes = async (node: Node, actions: Actions, language: string) => {
  const { createNodeField } = actions;
  const { tags } = node['frontmatter'] as { tags?: string[] };
  if (tags) {
    createNodeField({
      node,
      name: 'tags',
      value: tags.map((tag) => {
        const translatedValue = translate(language, `tag.${slug(tag)}`);
        return { value: tag, translation: translatedValue, path: addLanguagePrefix(`/tags/${slug(translatedValue)}`, language) };
      })
    });
  }
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
    const { title, publishedAt, modifiedAt } = node['frontmatter'] as { title?: string; publishedAt?: Date; modifiedAt?: Date };
    const currentSlug = title ? slug(title) : filename;
    const path = addLanguagePrefix(`/${relativeDirectory}/${currentSlug}`, language);
    const kind = relativeDirectory.split('/')[0] || '';
    createNodeField({ node, name: 'language', value: language });
    createNodeField({ node, name: 'filename', value: filename });
    createNodeField({ node, name: 'kind', value: kind });
    createNodeField({ node, name: 'slug', value: currentSlug });
    createNodeField({ node, name: 'path', value: path });
    createNodeField({ node, name: 'publishedAt', value: publishedAt || (await getPublicationDate(absolutePath)) });
    createNodeField({ node, name: 'modifiedAt', value: modifiedAt || publishedAt || (await getModificationDate(absolutePath)) });

    await enhanceBlogNodes(node, actions, language);
  }
}
