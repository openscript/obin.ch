import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { ArticlesPageQuery, SitePageContext } from '../../graphql-types';
import { ExcerptItem } from '../components/ExcerptItem';
import { DefaultLayout } from '../layouts/default';
import { PaddedElement } from '../layouts/default/PaddedElement';

const StyledExcerptItem = styled(ExcerptItem)`
  margin-bottom: 2rem;
`;

type ArticlesProps = { data: ArticlesPageQuery; pageContext: SitePageContext };

export default function Articles({ data, pageContext }: ArticlesProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.articles.title' });

  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      <PaddedElement>
        <h2>
          <FormattedMessage id={'page.articles.title'} />
        </h2>
        {data.articles.edges.map((article, i) => (
          <StyledExcerptItem
            title={article.node.frontmatter.title}
            path={article.node.fields.path}
            key={i}
            date={article.node.fields.modifiedAt}
          >
            {article.node.excerpt}
          </StyledExcerptItem>
        ))}
      </PaddedElement>
    </DefaultLayout>
  );
}

export const query = graphql`
  query ArticlesPage($language: String!, $skip: Int!, $limit: Int!) {
    articles: allMarkdownRemark(
      sort: { fields: fields___modifiedAt, order: DESC }
      limit: $limit
      skip: $skip
      filter: { fields: { language: { eq: $language }, kind: { eq: "blog" } } }
    ) {
      edges {
        node {
          fields {
            path
            modifiedAt
          }
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`;
