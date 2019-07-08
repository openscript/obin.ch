import * as React from 'react'
import styled from '@emotion/styled'
import { FormattedMessage } from 'react-intl'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

interface MainProps {
  className?: string
}

const Main: React.FC<MainProps> = ({ children, className }) => (
  <>
    <StyledMain className={className}>{children}</StyledMain>
    <FormattedMessage id="name" />
  </>
)

export default Main
