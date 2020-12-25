import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import React from 'react';
import { FormattedDate, FormattedMessage, FormattedTime, useIntl } from 'react-intl';
import { BlogPostPageQuery, SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';
import { breakpoints } from '../layouts/default/breakpoints';
import { PaddedElement } from '../layouts/default/PaddedElement';

const Post = styled.article`
  display: grid;
  grid-template-areas:
    'title title'
    'content meta';
  grid-column-gap: 1rem;

  @media (max-width: ${breakpoints.small}) {
    grid-template-areas:
      'title'
      'meta'
      'content';
  }

  h2 {
    grid-area: title;
  }
`;

const PostContent = styled.div`
  grid-area: content;
`;

const MetaInformation = styled.dl`
  grid-area: meta;
  margin-top: 1rem;
  font-size: 0.8rem;

  dd a {
    margin-right: 0.5rem;
  }

  @media (max-width: ${breakpoints.small}) {
    display: flex;
    margin: 0;

    dt {
      font-weight: bold;
    }

    dd {
      margin: 0 0.5rem;
    }
  }
`;

type BlogPostProps = { data: BlogPostPageQuery; pageContext: SitePageContext };

export default function BlogPost({ data, pageContext }: BlogPostProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.blogPost.title' }, { post: data.blogPost.frontmatter.title });
  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      <PaddedElement>
        <Post>
          <h2>{data.blogPost.frontmatter.title}</h2>
          <MetaInformation>
            <dt>
              <FormattedMessage id="misc.date" />
            </dt>
            <dd>
              <FormattedDate value={data.blogPost.fields.modifiedAt} /> <FormattedTime value={data.blogPost.fields.modifiedAt} />
            </dd>
            <dt>
              <FormattedMessage id="misc.tags" />
            </dt>
            <dd>
              {data.blogPost.fields.tags.map((tag, i) => (
                <Link to={tag.path} key={i}>
                  {tag.value}
                </Link>
              ))}
            </dd>
          </MetaInformation>
          <PostContent dangerouslySetInnerHTML={{ __html: data.blogPost.html }} />
        </Post>
      </PaddedElement>
    </DefaultLayout>
  );
}

export const query = graphql`
  query BlogPostPage($language: String, $slug: String) {
    blogPost: markdownRemark(fields: { language: { eq: $language }, kind: { eq: "blog" }, slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        path
        modifiedAt
        tags {
          value
          path
        }
      }
    }
  }
`;
