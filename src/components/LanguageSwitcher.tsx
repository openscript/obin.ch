import React from 'react'
import { Link } from 'gatsby'
import { PageContext } from './Context'
import { DefaultLocale } from '../models/locales'

interface Props {
  locales: { [key: string]: { key: string; name: string } }
}

const LanguageSwitcher: React.FC<Props> = ({ locales }) => {
  const localeKeys = Object.keys(locales)
  const createPath = (langKey: string, path: string) => {
    if (langKey === DefaultLocale.key) {
      const trailedPath = path
        .split('/')
        .slice(2)
        .join('/')
      return `/${trailedPath}`
    }
    return `/${langKey}/${path}`
  }

  const currentPageContext = React.useContext(PageContext)
  const menuItems = localeKeys.map(l => {
    if (currentPageContext.langKey !== l) {
      return (
        <Link to={createPath(l, currentPageContext.slug)} key={l}>
          {locales[l].name}
        </Link>
      )
    }
    return null
  })

  return <>{menuItems}</>
}

export default LanguageSwitcher
