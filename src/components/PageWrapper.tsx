import React from 'react'
import { IntlProvider } from 'react-intl'
import { Global } from '@emotion/core'
import { GermanTranslation, EnglishTranslation } from '../models/locales'
import { globalStyles } from '../styles/global'
import { PageContext as PageContextModel, defaultPageContext } from '../models/pageContext'
import { PageContext } from './Context'

interface Props {
  className?: string
  pageContext: PageContextModel
}

class PageWrapper extends React.Component<Props> {
  public constructor(props: Props) {
    super(props)

    if (!Intl.PluralRules) {
      require('intl-pluralrules')
    }

    if (!Intl.RelativeTimeFormat) {
      require('@formatjs/intl-relativetimeformat/polyfill')
      require('@formatjs/intl-relativetimeformat/dist/locale-data/en') // Add locale data for de
    }
  }

  public render() {
    const translation = this.props.pageContext.langKey === 'de' ? GermanTranslation : EnglishTranslation
    const currentPageContext = { ...defaultPageContext, ...{ langKey: translation.key, slug: this.props.pageContext.slug } }
    return (
      <>
        <Global styles={globalStyles} />
        <IntlProvider locale={translation.key} messages={translation.messages}>
          <PageContext.Provider value={currentPageContext}>{this.props.children}</PageContext.Provider>
        </IntlProvider>
      </>
    )
  }
}

export default PageWrapper
