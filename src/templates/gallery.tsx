import React from 'react';
import { SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';

type GalleryProps = { pageContext: SitePageContext };

export default function Gallery({ pageContext }: GalleryProps) {
  return (
    <DefaultLayout pageContext={pageContext} title="Gallery">
      Not yet
    </DefaultLayout>
  );
}
