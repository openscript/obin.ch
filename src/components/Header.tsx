import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { dimensions, colors } from '../styles/variables'

const StyledHeader = styled.header`
  position: relative;
  height: ${dimensions.layout.headerHeight};
  background-color: ${colors.dark};
`

const HomepageLink = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <>
    <StyledHeader>
      <HomepageLink to="/">{title}</HomepageLink>
    </StyledHeader>
  </>
)

export default Header
