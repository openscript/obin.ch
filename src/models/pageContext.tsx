export interface PageContext {
  langKey: string
  slug: string
}

export const defaultPageContext: PageContext = {
  langKey: 'en',
  slug: '/'
}
