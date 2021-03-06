import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BlogPageQuery, SitePageContext } from '../../graphql-types';
import { ExcerptItem } from '../components/ExcerptItem';
import { Hint } from '../components/Hint';
import { DefaultLayout } from '../layouts/default';
import { PaddedElement } from '../layouts/default/PaddedElement';

const StyledExcerptItem = styled(ExcerptItem)`
  margin-bottom: 2rem;
`;

const NoPostsHint = styled(Hint)``;

type BlogProps = { data: BlogPageQuery; pageContext: SitePageContext };

export default function Blog({ data, pageContext }: BlogProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.blog.title' });
  const posts = data.posts.edges;

  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      <PaddedElement>
        <h2>
          <FormattedMessage id={'page.blog.title'} />
        </h2>
        {posts.length === 0 ? (
          <NoPostsHint>
            <FormattedMessage id="misc.noEntries" />
          </NoPostsHint>
        ) : (
          posts.map((post, i) => (
            <StyledExcerptItem
              title={post.node.frontmatter.title}
              path={post.node.fields.path}
              key={i}
              date={post.node.fields.modifiedAt}
              tags={post.node.fields.tags}
            >
              {post.node.excerpt}
            </StyledExcerptItem>
          ))
        )}
      </PaddedElement>
    </DefaultLayout>
  );
}

export const query = graphql`
  query BlogPage($language: String!, $skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
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
            tags {
              translation
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
