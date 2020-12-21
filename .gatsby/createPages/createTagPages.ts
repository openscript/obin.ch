import { CreatePagesArgs } from 'gatsby';
import slug from 'limax';
import { resolve } from 'path';
import { CreateTagPagesQuery } from '../../graphql-types';
import { languages } from '../i18n';
import { addLanguagePrefix } from '../utils/path';

export async function CreateTagPages({ graphql, actions }: CreatePagesArgs) {
  const { createPage } = actions;
  const result = await graphql<CreateTagPagesQuery>(`
    query CreateTagPages {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          totalCount
          tag: fieldValue
        }
      }
    }
  `);

  result.data?.allMarkdownRemark.group.forEach((entry) => {
    languages.forEach((language) => {
      const alternativeLanguagePaths = languages
        .filter((alternate) => alternate !== language)
        .map((alternate) => {
          return { language: alternate, path: addLanguagePrefix(`/tags/${slug(entry.tag)}`, alternate) };
        });
      createPage({
        path: addLanguagePrefix(`/tags/${slug(entry.tag)}`, language),
        component: resolve('./src/templates/tag.tsx'),
        context: {
          tag: entry.tag,
          language,
          alternativeLanguagePaths
        }
      });
    });
  });
}
