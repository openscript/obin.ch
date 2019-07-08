import * as React from 'react'
import 'modern-normalize'
import { addLocaleData } from 'react-intl'
import * as de from 'react-intl/locale-data/de'
import { GermanTranslation } from '../translations/locales'
import IndexLayout from '.'

addLocaleData([...de])

const GermanIndexLayout: React.FC = ({ children }) => <IndexLayout children={children} translation={GermanTranslation} />

export default GermanIndexLayout
