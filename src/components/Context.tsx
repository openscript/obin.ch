import React from 'react'
import { PageContext as PageContextModel, defaultPageContext } from '../models/pageContext'

export const PageContext = React.createContext<PageContextModel>(defaultPageContext)
