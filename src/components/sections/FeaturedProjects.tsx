import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useStaticQuery, graphql } from 'gatsby';
import Content from '../Content';
import { FeaturedProjectsQuery } from '../../../graphql-types';

const FeaturedProjects: React.FC = () => {
  const projects = useStaticQuery<FeaturedProjectsQuery>(graphql`
    query FeaturedProjects {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(content/projects)/" }, frontmatter: { featured: { eq: true } } }) {
        nodes {
          frontmatter {
            title
          }
        }
      }
    }
  `);

  return (
    <Content>
      <h2>
        <FormattedMessage id="navigation.projects" />
      </h2>
      {projects.allMarkdownRemark.nodes.map((p) => {
        return <div>{p.frontmatter?.title}</div>;
      })}
    </Content>
  );
};

export default FeaturedProjects;
