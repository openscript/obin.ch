import { CreatePagesArgs } from 'gatsby';
import slug from 'limax';
import { resolve } from 'path';
import { CreateTagPagesQuery } from '../../graphql-types';
import { languages, translate } from '../i18n';
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
          const translatedValue = translate(alternate, `tag.${slug(entry.tag)}`);
          return { language: alternate, path: addLanguagePrefix(`/tags/${slug(translatedValue)}`, alternate) };
        });
      const translatedValue = translate(language, `tag.${slug(entry.tag)}`);
      createPage({
        path: addLanguagePrefix(`/tags/${slug(translatedValue)}`, language),
        component: resolve('./src/templates/tag.tsx'),
        context: {
          tag: entry.tag,
          title: translatedValue,
          language,
          alternativeLanguagePaths
        }
      });
    });
  });
}
