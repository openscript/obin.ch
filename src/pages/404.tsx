import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';
import { PaddedElement } from '../layouts/default/PaddedElement';

type NotFoundPageProps = { pageContext: SitePageContext };

export default function NotFoundPage({ pageContext }: NotFoundPageProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.notFound.title' });
  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      <PaddedElement>
        <h2>{title}</h2>
        <FormattedMessage id="page.notFound.content" />
      </PaddedElement>
    </DefaultLayout>
  );
}
