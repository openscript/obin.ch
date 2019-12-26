import { Link, GatsbyLinkProps } from 'gatsby'
import React from 'react'
import { PageContext } from '../models/pageContext'

const LocalizedLink: React.FC<GatsbyLinkProps<{}>> = props => {
  const { to } = props
  const currentPageContext = React.useContext(PageContext)
  let path = to
  if (currentPageContext.langKey === 'de') {
    path = `/${currentPageContext.langKey}${path}`
  }
  return <Link {...props} ref={null} to={path} />
}

export default LocalizedLink
