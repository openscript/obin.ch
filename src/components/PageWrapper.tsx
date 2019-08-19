import React from 'react'
import { IntlProvider } from 'react-intl'
import { GermanTranslation, EnglishTranslation } from '../translations/locales'
import { Global } from '@emotion/core'
import { globalStyles } from '../styles/global'

interface Props {
  className?: string
  pageContext: {
    langKey: string
  }
}

export const LocaleContext = React.createContext<{ langKey: string }>({ langKey: 'en' })

class PageWrapper extends React.Component<Props> {
  public constructor(props: Props) {
    super(props)

    if (!Intl.PluralRules) {
      require('intl-pluralrules');
    }

    if (!Intl.RelativeTimeFormat) {
      require('@formatjs/intl-relativetimeformat/polyfill');
      require('@formatjs/intl-relativetimeformat/dist/include-aliases'); // Optional, if you care about edge cases in locale resolution, e.g zh-CN -> zh-Hans-CN
      require('@formatjs/intl-relativetimeformat/dist/locale-data/en'); // Add locale data for de
    }
  }

  public render() {
    const translation = this.props.pageContext.langKey === 'de' ? GermanTranslation : EnglishTranslation
    return (
      <>
        <Global styles={globalStyles} />
        <IntlProvider locale={translation.language} messages={translation.messages}>
          <LocaleContext.Provider value={{ langKey: translation.language }}>{this.props.children}</LocaleContext.Provider>
        </IntlProvider>
      </>
    )
  }
}

export default PageWrapper
