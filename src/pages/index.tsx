import React from 'react';
import { useIntl } from 'react-intl';
import { IndexPageQuery, SitePageContext } from '../../graphql-types';
import { DefaultLayout } from '../layouts/default';
import { Spotlight } from '../layouts/default/sections/Spotlight';
import { ReactComponent as WelcomeGraphic } from '../../static/graphics/welcome.svg';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { Card } from '../components/Card';
import { Overview } from '../layouts/default/sections/Overview';
import { ExcerptItem } from '../components/ExcerptItem';

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
            <ExcerptItem
              title={article.frontmatter.title}
              excerpt={article.excerpt}
              path={article.fields.path}
              key={i}
              date={article.fields.modifiedAt}
            />
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
      filter: { fields: { language: { eq: $language }, kind: { eq: "articles" } } }
      limit: 3
    ) {
      nodes {
        fields {
          path
        }
        frontmatter {
          title
        }
        excerpt
      }
    }
  }
`;
