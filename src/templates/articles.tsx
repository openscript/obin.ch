import { graphql } from 'gatsby';
import React from 'react';
import { useIntl } from 'react-intl';
import { ArticlesPageQuery, SitePageContext } from '../../graphql-types';
import { Card } from '../components/Card';
import { DefaultLayout } from '../layouts/default';
import { PaddedElement } from '../layouts/default/PaddedElement';

type ArticlesProps = { data: ArticlesPageQuery; pageContext: SitePageContext };

export default function Articles({ data, pageContext }: ArticlesProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.articles.title' });
  console.log(data);
  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      <PaddedElement>
        {data.articles.edges.map((article, i) => (
          <Card title={article.node.frontmatter.title} path={article.node.fields.path} key={i}>
            {article.node.excerpt}
          </Card>
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
      filter: { fields: { language: { eq: $language }, kind: { eq: "articles" } } }
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
