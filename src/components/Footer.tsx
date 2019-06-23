import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions, colors } from '../styles/variables'

const StyledFooter = styled.footer`
  position: relative;
  height: ${dimensions.layout.footerHeight};
  background-color: ${colors.dark};
`

const StyledDivider = styled.svg`
  width: 100%;

  polygon {
    fill: ${colors.dark};
  }
`

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => (
  <>
    <StyledDivider viewBox="0 0 100 2">
      <polygon points="0 0, 80 2, 100 0, 100 2, 0 100"></polygon>
    </StyledDivider>
    <StyledFooter className={className}>{new Date().toISOString()}</StyledFooter>
  </>
)

export default Footer
