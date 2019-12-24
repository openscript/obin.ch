import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions, colors } from '../styles/variables'
import Content from './Content'
import Divider from './Divider'

const StyledFooter = styled.footer`
  position: relative;
  height: ${dimensions.layout.footerHeight};
  background-color: ${colors.brown};
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: ${colors.white};
`

const StyledDivider = styled(Divider)`
  bottom: 100%;
`

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className, children }) => (
  <>
    <StyledFooter className={className}>
      <StyledDivider color={colors.brown} invert />
      <Content>{children}</Content>
    </StyledFooter>
  </>
)

export default Footer
