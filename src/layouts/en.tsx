import * as React from 'react'
import 'modern-normalize'
import { EnglishTranslation } from '../translations/locales'
import { addLocaleData } from 'react-intl'
import * as en from 'react-intl/locale-data/en'
import IndexLayout from '.'

addLocaleData([...en])

const EnglishIndexLayout: React.FC = ({ children }) => <IndexLayout children={children} translation={EnglishTranslation} />

export default EnglishIndexLayout
