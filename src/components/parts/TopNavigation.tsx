import * as React from 'react'
import styled from '@emotion/styled'
import { FormattedMessage } from 'react-intl'
import { dimensions, colors } from '../../styles/variables'
import Navigation from '../Navigation'
import LocalizedLink from '../LocalizedLink'
import LanguageSwitcher from '../LanguageSwitcher'
import { Locales } from '../../models/locales'

interface TopNavigationProps {
  className?: string
}

const MenuItem = styled.li`
  margin-left: calc(${dimensions.layout.gutter} / 2);

  a {
    display: block;
    text-decoration: none;
    padding: calc(${dimensions.layout.gutter} / 2);
    background-color: rgba(255, 255, 255, 0.1);
    outline: 2px solid transparent;

    &:hover {
      outline: 2px solid ${colors.white};
    }
  }
`

const TopNavigation: React.FC<TopNavigationProps> = ({ className }) => (
  <Navigation className={className}>
    <MenuItem>
      <LocalizedLink to="/projects">
        <FormattedMessage id="navigation.projects" />
      </LocalizedLink>
    </MenuItem>
    <MenuItem>
      <LocalizedLink to="/recordings">
        <FormattedMessage id="navigation.recordings" />
      </LocalizedLink>
    </MenuItem>
    <MenuItem>
      <LocalizedLink to="/blog">
        <FormattedMessage id="navigation.blog" />
      </LocalizedLink>
    </MenuItem>
    <MenuItem>
      <LocalizedLink to="/collection">
        <FormattedMessage id="navigation.collection" />
      </LocalizedLink>
    </MenuItem>
    <MenuItem>
      <LanguageSwitcher locales={Locales} />
    </MenuItem>
  </Navigation>
)

export default TopNavigation
