import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions } from '../../styles/variables'

interface TopNavigationProps {
  className?: string
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`

const StyledList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    margin-left: ${dimensions.layout.gutter};
  }
`

const TopNavigation: React.FC<TopNavigationProps> = ({ className }) => (
  <StyledNav className={className}>
    <StyledList>
      <li>Über mich</li>
      <li>Projekte</li>
      <li>Aufnahmen</li>
      <li>Weblog</li>
      <li>Sammlung</li>
    </StyledList>
  </StyledNav>
)

export default TopNavigation
