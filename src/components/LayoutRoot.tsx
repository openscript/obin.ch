import * as React from 'react'
import { Global, css } from '@emotion/core'
import globalStyles from '../styles/global.module.scss'

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children }) => (
  <>
    <Global styles={() => css(globalStyles)} />
    {children}
  </>
)

export default LayoutRoot
