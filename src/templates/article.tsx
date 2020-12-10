import { graphql } from 'gatsby';
import React from 'react';
import { useIntl } from 'react-intl';
import { ArticlePageQuery, SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';
import { PaddedElement } from '../layouts/default/PaddedElement';

type ArticleProps = { data: ArticlePageQuery; pageContext: SitePageContext };

export default function Article({ data, pageContext }: ArticleProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.imprint.title' });
  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      <PaddedElement dangerouslySetInnerHTML={{ __html: data.article.html }}></PaddedElement>
    </DefaultLayout>
  );
}

export const query = graphql`
  query ArticlePage($language: String, $slug: String) {
    article: markdownRemark(fields: { language: { eq: $language }, kind: { eq: "articles" } }, frontmatter: { slug: { eq: $slug } }) {
      html
    }
  }
`;
