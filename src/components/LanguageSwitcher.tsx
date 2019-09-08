import React from 'react'
import Navigation from './Navigation'

interface Props {
  currentPath: string
}

const LanguageSwitcher: React.FC<Props> = () => {
  return (
    <Navigation>
      <li>huhu</li>
    </Navigation>
  )
}

export default LanguageSwitcher
