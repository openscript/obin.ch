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
    'misc.more': 'Mehr',
    'page.index.title': 'Startseite',
    'page.index.section.values': 'Werte',
    'page.index.section.references': 'Referenzen',
    'page.index.section.offers': 'Angebote',
    'page.imprint.title': 'Impressum',
    'page.notFound.title': 'Seite nicht gefunden',
    'page.notFound.content': 'Es tut mir leid. Die gesuchte Seite konnte existiert nicht.',
    'page.articles.title': 'Blog'
  },
  en: {
    ...localeTranslation,
    ...slugTranslation.en,
    'meta.languageName': 'English',
    'meta.title': 'Robin Bühler',
    'misc.more': 'More',
    'page.index.title': 'Homepage',
    'page.index.section.values': 'Values',
    'page.index.section.references': 'References',
    'page.index.section.offers': 'Offers',
    'page.imprint.title': 'Imprint',
    'page.notFound.title': 'Page not found',
    'page.notFound.content': "I'm sorry. The requested page couldn't be found.",
    'page.articles.title': 'Blog'
  }
};
