import * as React from 'react'

import styled from '@emotion/styled'
import Spotlight from './Spotlight'
import { ReactComponent as Welcome } from '../../assets/welcome.svg'
import { dimensions } from '../../styles/variables'

const StyledContent = styled.div`
  padding: ${dimensions.layout.gutter} calc((100vw - ${dimensions.layout.pageWidth}) / 2);
  width: 100%;
  height: 100%;
  position: relative;
`

const StyledInnerContent = styled.div`
  padding: 0 ${dimensions.layout.gutter};
  position: relative;
  height: 100%;
`

const StyledWelcome = styled(Welcome)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  position: absolute;
  padding: 0 10rem;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${dimensions.breakpoints.small}) {
    width: 70%;
  }

  @media (max-width: ${dimensions.breakpoints.mobile}) {
    width: 85%;
  }
`

const WelcomeSpotlight: React.FC = ({ children }) => (
  <Spotlight>
    <StyledContent>
      <StyledInnerContent>
        <StyledWelcome />
        <Content>{children}</Content>
      </StyledInnerContent>
    </StyledContent>
  </Spotlight>
)

export default WelcomeSpotlight
