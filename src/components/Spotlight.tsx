import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'
import Divider from './Divider'

const StyledSpotlightContainer = styled.section`
  position: relative;
  min-height: 25rem;
  height: 60vw;
  background-color: ${colors.white};
  color: ${colors.black};
  overflow: hidden;

  @media screen and (min-width: 1200px) {
    height: 60vh;
  }
`

const SpotlightDivider = styled(Divider)`
  bottom: 0;
`

interface SpotlightProps {
  className?: string
}

const Spotlight: React.FC<SpotlightProps> = (props) => {
  const { className, children } = props

  return (
    <StyledSpotlightContainer className={className}>
      {children}
      <SpotlightDivider color={colors.bright} flipVertically flipHorizontally />
    </StyledSpotlightContainer>
  )
}

export default Spotlight
