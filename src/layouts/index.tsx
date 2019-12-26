import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'

import { FormattedDate, FormattedTime } from 'react-intl'
import styled from '@emotion/styled'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Brand from '../components/parts/Brand'
import PageHead from '../components/PageHead'
import TopNavigation from '../components/parts/TopNavigation'
import { IndexLayoutQuery } from '../../graphql-types'
import { PageContext } from '../models/pageContext'

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
`

const IndexLayout: React.FC = props => {
  const { children } = props
  const currentPageContext = React.useContext(PageContext)
  return (
    <StaticQuery
      query={graphql`
        query IndexLayout {
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
      render={(data: IndexLayoutQuery) => (
        <>
          <PageHead
            language={currentPageContext.langKey}
            title={data.site?.siteMetadata?.title || 'Title'}
            author={data.site?.siteMetadata?.author?.name || 'Author'}
          />
          <StyledHeader>
            <Brand />
            <TopNavigation />
          </StyledHeader>
          <Main>{children}</Main>
          <Footer>
            {data.site?.siteMetadata?.license} - <FormattedDate value={new Date(data.site?.buildTime)} />{' '}
            <FormattedTime value={new Date(data.site?.buildTime)} />
          </Footer>
        </>
      )}
    />
  )
}

export default IndexLayout
