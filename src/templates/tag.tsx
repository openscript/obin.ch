import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import { useIntl } from 'react-intl';
import { SitePageContext, TagPageQuery } from '../../graphql-types';
import { ExcerptItem } from '../components/ExcerptItem';
import { DefaultLayout } from '../layouts/default';
import { PaddedElement } from '../layouts/default/PaddedElement';

const StyledExcerptItem = styled(ExcerptItem)`
  margin-bottom: 2rem;
`;

type TagProps = { data: TagPageQuery; pageContext: SitePageContext };

export default function Tag({ data, pageContext }: TagProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.tag.title' }, { tag: pageContext.tag });

  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      <PaddedElement>
        <h2>{pageContext.tag}</h2>
        {data.entries.edges.map((entry, i) => (
          <StyledExcerptItem
            title={entry.node.frontmatter.title}
            path={entry.node.fields.path}
            key={i}
            date={entry.node.fields.modifiedAt}
            tags={entry.node.fields.tags}
          >
            {entry.node.excerpt}
          </StyledExcerptItem>
        ))}
      </PaddedElement>
    </DefaultLayout>
  );
}

export const query = graphql`
  query TagPage($language: String!, $tag: String!) {
    entries: allMarkdownRemark(
      sort: { fields: fields___modifiedAt, order: DESC }
      filter: { fields: { language: { eq: $language }, tags: { elemMatch: { value: { eq: $tag } } } } }
    ) {
      edges {
        node {
          fields {
            path
            modifiedAt
            tags {
              value
              path
            }
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
