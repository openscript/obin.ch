import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions, colors } from '../../styles/variables'
import Navigation from '../sections/Navigation'
import { FormattedMessage } from 'react-intl'
import { Link } from 'gatsby'

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
      <Link to="/about">
        <FormattedMessage id="navigation.about" />
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to="/projects">
        <FormattedMessage id="navigation.projects" />
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to="/recordings">
        <FormattedMessage id="navigation.recordings" />
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to="/blog">
        <FormattedMessage id="navigation.blog" />
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to="/collection">
        <FormattedMessage id="navigation.collection" />
      </Link>
    </MenuItem>
  </Navigation>
)

export default TopNavigation
