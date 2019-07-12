import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions } from '../styles/variables'

const StyledContent = styled.div`
  padding: ${dimensions.layout.gutter} calc((100vw - ${dimensions.layout.pageWidth}) / 2);
`

const StyledInnerContent = styled.div`
  padding: 0 ${dimensions.layout.gutter};
`

interface ContentProps {
  className?: string
}

const Content: React.FC<ContentProps> = ({ children, className }) => (
  <>
    <StyledContent className={className}>
      <StyledInnerContent>{children}</StyledInnerContent>
    </StyledContent>
  </>
)

export default Content
