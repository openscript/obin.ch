import { graphql } from 'gatsby';
import React from 'react';
import { useIntl } from 'react-intl';
import { BlogPostPageQuery, SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';
import { PaddedElement } from '../layouts/default/PaddedElement';

type BlogPostProps = { data: BlogPostPageQuery; pageContext: SitePageContext };

export default function BlogPost({ data, pageContext }: BlogPostProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.blogPost.title' }, { post: data.blogPost.frontmatter.title });
  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      <PaddedElement>
        <h2>{data.blogPost.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.blogPost.html }} />
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
    }
  }
`;
