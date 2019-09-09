import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '../../styles/variables'
import Divider from '../Divider'

const StyledSpotlightContainer = styled.div`
  position: relative;
  min-height: 20rem;
  height: 50vh;
  background-color: ${colors.white};
  color: ${colors.black};
  overflow: hidden;
`

interface SpotlightProps {
  className?: string
}

const Spotlight: React.FC<SpotlightProps> = ({ className }) => (
  <StyledSpotlightContainer className={className}>
    <Divider color={colors.dark} />
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio animi doloribus possimus voluptas deserunt magnam. Dolore non culpa
      fugiat in commodi facere expedita blanditiis deleniti odio, veniam exercitationem ab ipsam.
    </div>
    <Divider color={colors.dark} flipVertically={true} flipHorizontally={true} />
  </StyledSpotlightContainer>
)

export default Spotlight
