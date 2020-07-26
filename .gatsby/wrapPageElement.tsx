import React from 'react'
import PageWrapper from '../src/components/PageWrapper'
import { PageContextModel } from '../src/models/pageContext'
import { GatsbyBrowser, GatsbySSR } from 'gatsby'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement'] = ({ element, props }) => {
  return <PageWrapper pageContext={props.pageContext as PageContextModel}>{element}</PageWrapper>
}
