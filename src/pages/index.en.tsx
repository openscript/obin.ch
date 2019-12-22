import * as React from 'react'

import styled from '@emotion/styled'
import IndexLayout from '../layouts'
import Spotlight from '../components/sections/Spotlight'
import Content from '../components/Content'
import { ReactComponent as Welcome } from '../assets/welcome.svg'
import { dimensions } from '../styles/variables'

const StyledContent = styled.div`
  padding: ${dimensions.layout.gutter} calc((100vw - ${dimensions.layout.pageWidth}) / 2);
  width: 100%;
  height: 100%;
  position: relative;
`

const StyledInnerContent = styled.div`
  padding: 0 ${dimensions.layout.gutter};
`

const StyledWelcome = styled(Welcome)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const IndexPage: React.FC = () => (
  <IndexLayout>
    <Spotlight>
      <StyledContent>
        <StyledInnerContent>
          <h2>Welcome</h2>
          <StyledWelcome />
        </StyledInnerContent>
      </StyledContent>
    </Spotlight>
    <Content>
      <p>Welcome :)</p>
    </Content>
  </IndexLayout>
)

export default IndexPage
