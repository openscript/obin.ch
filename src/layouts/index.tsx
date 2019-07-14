import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { FormattedDate, FormattedTime } from 'react-intl'
import Brand from '../components/parts/Brand'
import Head from '../components/Head'
import TopNavigation from '../components/parts/TopNavigation'
import styled from '@emotion/styled'
import { LocaleContext } from '../components/Wrapper'

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

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
`

const IndexLayout: React.FC = ({ children }) => {
  const currentLocale = React.useContext(LocaleContext)
  return (
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
        <>
          <Head language={currentLocale.langKey} title={data.site.siteMetadata.title} author={data.site.siteMetadata.author.name} />
          <StyledHeader>
            <Brand />
            <TopNavigation />
          </StyledHeader>
          <Main>{children}</Main>
          <Footer>
            {data.site.siteMetadata.license} - <FormattedDate value={new Date(data.site.buildTime)} />{' '}
            <FormattedTime value={new Date(data.site.buildTime)} />
          </Footer>
        </>
      )}
    />
  )
}

export default IndexLayout
