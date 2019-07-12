import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${colors.dark};
`

interface MainProps {
  className?: string
}

const Main: React.FC<MainProps> = ({ children, className }) => (
  <>
    <StyledMain className={className}>{children}</StyledMain>
  </>
)

export default Main
