import { graphql } from 'gatsby';
import React from 'react';
import { useIntl } from 'react-intl';
import { ArticlePageQuery, SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';
import { PaddedElement } from '../layouts/default/PaddedElement';

type ArticlesProps = { data: ArticlePageQuery; pageContext: SitePageContext };

export default function Articles({ data, pageContext }: ArticlesProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.imprint.title' });
  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      <PaddedElement>
        <h1>{data.article.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.article.html }} />
      </PaddedElement>
    </DefaultLayout>
  );
}

export const query = graphql`
  query ArticlesPage($language: String, $slug: String) {
    article: markdownRemark(fields: { language: { eq: $language }, kind: { eq: "articles" }, slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
