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

const PageWrapper: React.FC<Props> = props => {
  const { pageContext, children } = props

  const translation = pageContext.langKey === 'de' ? GermanTranslation : EnglishTranslation
  const currentPageContext = { ...defaultPageContext, ...{ langKey: translation.key, slug: pageContext.slug } }
  return (
    <>
      <Global styles={globalStyles} />
      <IntlProvider locale={translation.key} messages={translation.messages}>
        <PageContext.Provider value={currentPageContext}>{children}</PageContext.Provider>
      </IntlProvider>
    </>
  )
}

export default PageWrapper