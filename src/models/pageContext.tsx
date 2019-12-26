import React from 'react'

export interface PageContextModel {
  langKey: string
  slug: string
}

export const defaultPageContext: PageContextModel = {
  langKey: 'en',
  slug: '/'
}

export const PageContext = React.createContext<PageContextModel>(defaultPageContext)
