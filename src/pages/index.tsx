import React from 'react';
import { useIntl } from 'react-intl';
import { IndexPageQuery, SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';
import { Spotlight } from '../layouts/default/sections/Spotlight';
import { ReactComponent as WelcomeGraphic } from '../../static/graphics/welcome.svg';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { Overview } from '../layouts/default/sections/Overview';
import { ExcerptItem } from '../components/ExcerptItem';
import { breakpoints } from '../layouts/default/breakpoints';

type IndexPageProps = {
  data: IndexPageQuery;
  pageContext: SitePageContext;
};

const WelcomeSpotlight = styled(Spotlight)`
  min-height: 50vh;
  height: 55vw;
  max-height: 80vh;
`;

const WelcomeContent = styled.div`
  position: relative;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;

  @media (max-width: ${breakpoints.tiny}) {
    width: 60%;
  }
`;

const StyledExcerptItem = styled(ExcerptItem)`
  text-align: justify;
`;

export default function IndexPage({ data, pageContext }: IndexPageProps) {
  const intl = useIntl();
  const title = intl.formatMessage({ id: 'page.index.title' });

  return (
    <DefaultLayout pageContext={pageContext} title={title}>
      <WelcomeSpotlight color="--white-color" background={<WelcomeGraphic />}>
        <WelcomeContent dangerouslySetInnerHTML={{ __html: data.welcomeSpotlight.html }} />
      </WelcomeSpotlight>
      <Overview>
        {data.recentArticles.nodes.map((article, i) => {
          return (
            <StyledExcerptItem
              title={article.frontmatter.title}
              path={article.fields.path}
              key={i}
              date={article.fields.modifiedAt}
              tags={article.fields.tags}
            >
              {article.excerpt}
            </StyledExcerptItem>
          );
        })}
      </Overview>
    </DefaultLayout>
  );
}

export const query = graphql`
  query IndexPage($language: String) {
    welcomeSpotlight: markdownRemark(fields: { language: { eq: $language }, kind: { eq: "blocks" }, filename: { glob: "*welcome*" } }) {
      html
    }
    recentArticles: allMarkdownRemark(
      sort: { fields: fields___modifiedAt, order: DESC }
      filter: { fields: { language: { eq: $language }, kind: { eq: "blog" } } }
      limit: 2
    ) {
      nodes {
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
`;
