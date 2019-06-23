import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions, colors } from '../styles/variables'

const StyledFooter = styled.footer`
  height: ${dimensions.layout.footerHeight};
  background-color: ${colors.dark};
`

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => <StyledFooter className={className}>{new Date().toISOString()}</StyledFooter>

export default Footer
