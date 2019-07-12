import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from '../../styles/variables'

const StyledSpotlightContainer = styled.div`
  position: relative;
  min-height: 20rem;
  height: 50vh;
  background-color: ${colors.white};
  color: ${colors.black};
  overflow: hidden;
`

const StyledDivider = styled.svg`
  position: absolute;
  margin: 0 -1px;

  &.topDivider {
    top: 0;
    left: 0;
  }

  &.bottomDivider {
    bottom: 0;
    left: 0;
  }

  polygon {
    fill: ${colors.dark};
  }
`

interface SpotlightProps {
  className?: string
}

const Spotlight: React.FC<SpotlightProps> = ({ className }) => (
  <StyledSpotlightContainer className={className}>
    <StyledDivider viewBox="0 0 100 2" className="topDivider">
      <polygon points="0 0, 100 0, 100 2, 20 0, 0 2"></polygon>
    </StyledDivider>
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio animi doloribus possimus voluptas deserunt magnam. Dolore non culpa
      fugiat in commodi facere expedita blanditiis deleniti odio, veniam exercitationem ab ipsam.
    </div>
    <StyledDivider viewBox="0 0 100 2" className="bottomDivider">
      <polygon points="0 0, 80 2, 100 0, 100 2, 0 100"></polygon>
    </StyledDivider>
  </StyledSpotlightContainer>
)

export default Spotlight
