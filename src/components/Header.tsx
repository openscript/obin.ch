import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { dimensions, colors } from '../styles/variables'
import Content from './Content'

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
      <Content>
        <HomepageLink to="/">{title}</HomepageLink>
      </Content>
    </StyledHeader>
  </>
)

export default Header
