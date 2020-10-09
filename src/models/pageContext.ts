import React from 'react';
import { SitePageContext } from '../../graphql-types';

export const defaultPageContext: SitePageContext = {
  langKey: 'en',
  slug: '/'
};

export const PageContext = React.createContext<SitePageContext>(defaultPageContext);
