export const languages = ['de', 'en'] as const;
export type Language = typeof languages[number];

export const defaultLanguage: Language = 'de';
export type Translation = { [key in Language]: { [key: string]: string } };

export const slugTranslation: Translation = {
  de: {
    '/about': '/ueber-uns',
    '/imprint': '/impressum'
  },
  en: {}
};

export const localeTranslation: { [key in Language]: string } = {
  de: 'Deutsch',
  en: 'English'
};

export const contentTranslation: Translation = {
  de: {
    ...localeTranslation,
    ...slugTranslation.de,
    'meta.languageName': 'Deutsch',
    'meta.title': 'Robin Bühler',
    'misc.date': 'Datum',
    'misc.tags': 'Tags',
    'misc.more': 'Mehr',
    'misc.noEntries': 'Keine Einträge vorhanden',
    'page.index.title': 'Startseite',
    'page.index.section.values': 'Werte',
    'page.index.section.references': 'Referenzen',
    'page.index.section.offers': 'Angebote',
    'page.imprint.title': 'Impressum',
    'page.notFound.title': 'Seite nicht gefunden',
    'page.notFound.content': 'Es tut mir leid. Die gesuchte Seite konnte existiert nicht.',
    'page.blog.title': 'Blog',
    'page.blogPost.title': '{post} - Blog',
    'page.tag.title': `"{tag}" - Tag`,
    'tag.projects': 'Projekte'
  },
  en: {
    ...localeTranslation,
    ...slugTranslation.en,
    'meta.languageName': 'English',
    'meta.title': 'Robin Bühler',
    'misc.date': 'Date',
    'misc.tags': 'Tags',
    'misc.more': 'More',
    'misc.noEntries': 'No entries found',
    'page.index.title': 'Homepage',
    'page.index.section.values': 'Values',
    'page.index.section.references': 'References',
    'page.index.section.offers': 'Offers',
    'page.imprint.title': 'Imprint',
    'page.notFound.title': 'Page not found',
    'page.notFound.content': "I'm sorry. The requested page couldn't be found.",
    'page.blog.title': 'Blog',
    'page.blogPost.title': '{post} - Blog',
    'page.tag.title': `"{tag}" - Tag`,
    'tag.projects': 'Projects'
  }
};

export function translate(language: string, id: string) {
  if (contentTranslation[language as Language][id]) {
    return contentTranslation[language as Language][id];
  } else {
    return id;
  }
}
