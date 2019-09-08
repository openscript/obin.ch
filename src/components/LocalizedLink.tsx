import { Link, GatsbyLinkProps } from 'gatsby'
import React from 'react'
import { PageContext } from './Context'

const LocalizedLink: React.FC<GatsbyLinkProps<any>> = props => {
  const currentPageContext = React.useContext(PageContext)
  let path = props.to
  if (currentPageContext.langKey === 'de') {
    path = `/${currentPageContext.langKey}${path}`
  }
  return <Link {...props} ref={null} to={path} />
}

export default LocalizedLink
