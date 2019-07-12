import * as React from 'react'
import { InjectedIntlProps, injectIntl } from 'react-intl'
import Helmet from 'react-helmet'
import { colors } from '../styles/variables'

interface HeadProps extends InjectedIntlProps {
  language: string
  title: string
  author: string
}

const Head: React.FC<HeadProps> = ({ intl, language, title, author }) => (
  <>
    <Helmet
      title={`${intl.formatMessage({ id: 'subtitle' })} - ${title}`}
      meta={[
        { name: 'description', content: intl.formatMessage({ id: 'description' }) },
        { name: 'keywords', content: intl.formatMessage({ id: 'keywords' }) },
        { name: 'author', content: author },
        { name: 'theme-color', content: colors.orange }
      ]}
    >
      <html lang={language} />
    </Helmet>
  </>
)

export default injectIntl(Head)
