import * as React from 'react'
import { useIntl } from 'react-intl'
import Helmet from 'react-helmet'

interface HeadProps {
  language: string
  title: string
  author: string
}

const PageHead: React.FC<HeadProps> = ({ language, title, author }) => {
  const intl = useIntl()

  return (
    <Helmet
      title={`${intl.formatMessage({ id: 'subtitle' })} - ${title}`}
      meta={[
        { name: 'description', content: intl.formatMessage({ id: 'description' }) },
        { name: 'keywords', content: intl.formatMessage({ id: 'keywords' }) },
        { name: 'author', content: author }
      ]}
    >
      <html lang={language} />
    </Helmet>
  )
}

export default PageHead
