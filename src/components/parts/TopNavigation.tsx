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
    background-color: ${colors.brown};

    li {
      padding: 0 calc(${dimensions.layout.gutter} / 2);
      margin: 0;
      border: none;
    }

    li:last-child {
      padding-bottom: calc(${dimensions.layout.gutter} / 2);
    }
  }
`

const MenuItem = styled.li`
  padding-left: calc(${dimensions.layout.gutter} / 2);

  a {
    display: block;
    text-decoration: none;
    padding: calc(${dimensions.layout.gutter} / 2);
    outline: 2px solid transparent;
    transition: 200ms;

    &:hover {
      outline: 2px solid ${colors.white};
    }

    &:focus,
    &:active {
      outline: 1px dotted ${colors.white};
    }
  }
`

const OtherMenuItem = styled(MenuItem)`
  border-left: 2px solid ${colors.white};
  margin-left: calc(${dimensions.layout.gutter} / 2);
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
        <OtherMenuItem>
          <LanguageSwitcher locales={Locales} />
        </OtherMenuItem>
      </MenuList>
    </Navigation>
  )
}

export default TopNavigation
