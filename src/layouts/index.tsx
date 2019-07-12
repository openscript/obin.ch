import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { IntlProvider, FormattedDate, FormattedTime } from 'react-intl'
import { Translation, EnglishTranslation } from '../translations/locales'
import Brand from '../components/parts/Brand'
import Head from '../components/Head'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      license: string
      author: {
        name: string
      }
    }
    buildTime: string
  }
}

interface Props {
  translation?: Translation
}

const IndexLayout: React.FC<Props> = ({ children, translation = EnglishTranslation }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            license
            author {
              name
            }
          }
          buildTime
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <IntlProvider locale={translation.language} messages={translation.messages}>
        <LayoutRoot>
          <Head language={translation.language} title={data.site.siteMetadata.title} author={data.site.siteMetadata.author.name} />
          <Header>
            <Brand />
          </Header>
          <Main>{children}</Main>
          <Footer>
            {data.site.siteMetadata.license} - <FormattedDate value={new Date(data.site.buildTime)} />{' '}
            <FormattedTime value={new Date(data.site.buildTime)} />
          </Footer>
        </LayoutRoot>
      </IntlProvider>
    )}
  />
)

export default IndexLayout
