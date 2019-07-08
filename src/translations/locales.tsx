export const Locales = {
  de: { key: 'de', name: 'Deutsch' },
  en: { key: 'en', name: 'English' }
}

export interface Translation {
  language: string
  messages: { [key: string]: string }
}

export const GermanTranslation: Translation = {
  language: Locales.de.key,
  messages: {
    name: 'Deutsch'
  }
}

export const EnglishTranslation: Translation = {
  language: Locales.en.key,
  messages: {
    name: 'Englisch'
  }
}
