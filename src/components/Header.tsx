import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions, colors } from '../styles/variables'
import Content from './Content'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: ${dimensions.layout.headerHeight};
  background-color: ${colors.dark};
`

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className, children }) => (
  <StyledHeader>
    <Content className={className}>{children}</Content>
  </StyledHeader>
)

export default Header
