import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import * as en from 'react-intl/locale-data/en'
import * as de from 'react-intl/locale-data/de'
import { GermanTranslation, EnglishTranslation } from '../translations/locales'

interface Props {
  className?: string
  pageContext: {
    langKey: string
  }
}

export const LocaleContext = React.createContext<{ langKey: string }>({ langKey: 'en' })

class Wrapper extends React.Component<Props> {
  public constructor(props: Props) {
    super(props)

    addLocaleData([...de, ...en])
  }

  public render() {
    const translation = this.props.pageContext.langKey === 'de' ? GermanTranslation : EnglishTranslation
    return (
      <>
        <IntlProvider locale={translation.language} messages={translation.messages}>
          <LocaleContext.Provider value={{ langKey: translation.language }}>{this.props.children}</LocaleContext.Provider>
        </IntlProvider>
      </>
    )
  }
}

export default Wrapper
