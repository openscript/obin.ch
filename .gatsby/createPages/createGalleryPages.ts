import { CreatePagesArgs } from 'gatsby';
import { resolve } from 'path';
import { GALLERY_PATH } from '../configuration';
import { languages, translate } from '../i18n';
import { addLanguagePrefix } from '../utils/path';

export async function CreateGalleryPages({ actions }: CreatePagesArgs) {
  const { createPage } = actions;
  for (const language of languages) {
    const alternativeLanguagePaths = languages
      .filter((l) => l !== language)
      .map((l) => {
        return {
          path: addLanguagePrefix(translate(l, GALLERY_PATH), l),
          language: l
        };
      });
    const currentPath = translate(language, GALLERY_PATH);
    createPage({
      path: addLanguagePrefix(currentPath, language),
      component: resolve('./src/templates/gallery.tsx'),
      context: {
        language,
        alternativeLanguagePaths
      }
    });
  }
}
