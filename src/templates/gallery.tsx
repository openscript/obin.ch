import { graphql } from 'gatsby';
import React from 'react';
import { SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';
import { GalleryPageQuery } from '../../graphql-types';
import { PaddedElement } from '../layouts/default/PaddedElement';
import { FormattedMessage } from 'react-intl';
import Img from 'gatsby-image';

type GalleryProps = { data: GalleryPageQuery; pageContext: SitePageContext };

export default function Gallery({ data, pageContext }: GalleryProps) {
  return (
    <DefaultLayout pageContext={pageContext} title="Gallery">
      <PaddedElement>
        <h2>
          <FormattedMessage id={'page.gallery.title'} />
        </h2>
        {data.entries.group.map((group) => {
          return (
            <div>
              <h3>{group.fieldValue}</h3>
              {group.edges.map((entry) => {
                return <Img fixed={entry.node.frontmatter.photo.childImageSharp.fixed} />;
              })}
            </div>
          );
        })}
      </PaddedElement>
    </DefaultLayout>
  );
}

export const query = graphql`
  query GalleryPage($language: String!) {
    entries: allMarkdownRemark(filter: { fields: { language: { eq: $language }, kind: { eq: "gallery" } } }) {
      group(field: frontmatter___category, limit: 3) {
        edges {
          node {
            frontmatter {
              title
              photo {
                childImageSharp {
                  fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
        fieldValue
        totalCount
      }
    }
  }
`;
