import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions, colors } from '../styles/variables'

const StyledFooter = styled.footer`
  height: ${dimensions.layout.footerHeight};
  background-color: ${colors.orange};
  display: flex;
  align-items: center;
`

const StyledDivider = styled.svg`
  width: 100%;
  background-color: ${colors.orange};

  polygon {
    fill: ${colors.dark};
  }
`

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className, children }) => (
  <>
    <StyledDivider viewBox="0 0 100 2" className="topDivider">
      <polygon points="0 0, 100 0, 100 2, 80 0, 0 2"></polygon>
    </StyledDivider>
    <StyledFooter className={className}>{children}</StyledFooter>
  </>
)

export default Footer
