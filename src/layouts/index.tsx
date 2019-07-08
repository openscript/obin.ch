import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { IntlProvider } from 'react-intl'
import { Translation } from '../translations/locales'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

interface Props {
  translation: Translation
}

const IndexLayout: React.FC<Props> = ({ children, translation }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <IntlProvider locale={translation.language} messages={translation.messages}>
        <LayoutRoot>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords }
            ]}
          >
            <html lang={translation.language} />
          </Helmet>
          <Header title={data.site.siteMetadata.title} />
          <Main>{children}</Main>
          <Footer />
        </LayoutRoot>
      </IntlProvider>
    )}
  />
)

export default IndexLayout
