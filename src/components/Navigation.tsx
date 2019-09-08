import * as React from 'react'
import styled from '@emotion/styled'

interface Navigation {
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
`

const Navigation: React.FC<Navigation> = ({ className, children }) => (
  <StyledNav>
    <StyledList className={className}>{children}</StyledList>
  </StyledNav>
)

export default Navigation
