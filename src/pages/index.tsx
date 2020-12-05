import React from 'react';
import { useIntl } from 'react-intl';
import { SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';

type IndexPageProps = { pageContext: SitePageContext };

export default function IndexPage({ pageContext }: IndexPageProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.index.title' });

  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      Hello World
    </DefaultLayout>
  );
}
