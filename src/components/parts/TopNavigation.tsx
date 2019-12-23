import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FormattedMessage } from 'react-intl'
import { dimensions, colors } from '../../styles/variables'
import LocalizedLink from '../LocalizedLink'
import LanguageSwitcher from '../LanguageSwitcher'
import { Locales } from '../../models/locales'
import MenuButton from '../MenuButton'

interface MenuListProps {
  isOpen?: boolean
}

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`

const MenuList = styled.ul<MenuListProps>`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 1.2rem;

  @media (max-width: ${dimensions.breakpoints.mobile}) {
    display: ${(props: MenuListProps) => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 20;
    background-color: ${colors.dark};

    li {
      margin: 0 calc(${dimensions.layout.gutter} / 2);
    }

    li:last-child {
      margin-bottom: calc(${dimensions.layout.gutter} / 2);
    }
  }
`

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

const StyledMenuButton = styled(MenuButton)`
  display: none;

  @media (max-width: ${dimensions.breakpoints.mobile}) {
    display: block;
  }
`

interface TopNavigationProps {
  className?: string
}

const TopNavigation: React.FC<TopNavigationProps> = ({ className }) => {
  const [open, isOpen] = useState(false)

  return (
    <Navigation>
      <StyledMenuButton onClick={isOpen} />
      <MenuList className={className} isOpen={open}>
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
      </MenuList>
    </Navigation>
  )
}

export default TopNavigation
