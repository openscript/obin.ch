import React from 'react';
import PageWrapper from '../src/components/PageWrapper';
import { GatsbyBrowser, GatsbySSR } from 'gatsby';
import { SitePageContext } from '../graphql-types';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement'] = ({ element, props }) => {
  return <PageWrapper pageContext={props.pageContext as SitePageContext}>{element}</PageWrapper>;
};
