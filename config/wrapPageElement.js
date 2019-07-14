import React from 'react'
import Wrapper from '../src/components/Wrapper'

export const wrapPageElement = ({ element, props }) => {
  return <Wrapper {...props}>{element}</Wrapper>
}
