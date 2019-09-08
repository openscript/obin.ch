export interface Locale {
  key: string
  name: string
}

export const Locales: { [key: string]: Locale } = {
  de: { key: 'de', name: 'Deutsch' },
  en: { key: 'en', name: 'English' }
}

export const DefaultLocale = Locales.en

export interface Translation {
  key: string
  messages: { [key: string]: string }
}

export const GermanTranslation: Translation = {
  key: Locales.de.key,
  messages: {
    language: 'Deutsch',
    subtitle: 'Mein Faszikel',
    description: 'Persönliche Webseite zu den Themen: Informatik, Progressive Webapplikationen (PWA), Softwareentwicklung und vieles mehr.',
    keywords: 'Informatik, Progressive Webapplikationen, Informatik Schulungen, Experte für Softwareentwicklung, persönlich, engagiert',
    'navigation.about': 'Über mich',
    'navigation.projects': 'Projekte',
    'navigation.recordings': 'Aufnahmen',
    'navigation.blog': 'Blog',
    'navigation.collection': 'Sammlung'
  }
}

export const EnglishTranslation: Translation = {
  key: Locales.en.key,
  messages: {
    language: 'English',
    subtitle: 'My fascicle',
    description:
      'Personal website about topics like: information technologies, progressive web applications (PWA), software development and much more.',
    keywords: 'computer science, progressive web applications, IT teaching, expert for software development',
    'navigation.about': 'About me',
    'navigation.projects': 'Projects',
    'navigation.recordings': 'Recordings',
    'navigation.blog': 'Blog',
    'navigation.collection': 'Collection'
  }
}
