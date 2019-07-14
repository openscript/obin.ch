import { Link, GatsbyLinkProps } from 'gatsby'
import { LocaleContext } from './PageWrapper'
import React from 'react'

const LocalizedLink: React.FC<GatsbyLinkProps<any>> = props => {
  const currentLocale = React.useContext(LocaleContext)
  let path = props.to
  if (currentLocale.langKey === 'de') {
    path = `/${currentLocale.langKey}${path}`
  }
  return <Link {...props} ref={null} to={path} />
}

export default LocalizedLink
