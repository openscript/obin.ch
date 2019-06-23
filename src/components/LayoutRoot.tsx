import * as React from 'react'
import { Global } from '@emotion/core'
import { globalStyles } from '../styles/global'

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children }) => (
  <>
    <Global styles={globalStyles} />
    {children}
  </>
)

export default LayoutRoot
