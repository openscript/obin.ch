import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions, colors } from '../styles/variables'
import Content from './Content'

const StyledFooter = styled.footer`
  position: relative;
  height: ${dimensions.layout.footerHeight};
  background-color: ${colors.orange};
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  border-bottom: 1px solid ${colors.orange};
`

const StyledDivider = styled.svg`
  position: absolute;
  width: 100%;
  bottom: 100%;
  left: 0;
  margin-bottom: -1px;

  polygon {
    fill: ${colors.orange};
  }
`

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className, children }) => (
  <>
    <StyledFooter className={className}>
      <StyledDivider viewBox="-0.01 -0.01 100 2" className="topDivider">
        <polygon points="0 2, 80 0, 100 2"></polygon>
      </StyledDivider>
      <Content>{children}</Content>
    </StyledFooter>
  </>
)

export default Footer
