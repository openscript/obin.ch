import { css, Global } from '@emotion/react';
import { graphql, useStaticQuery } from 'gatsby';
import React, { PropsWithChildren } from 'react';
import { useIntl } from 'react-intl';
import { DefaultLayoutQuery, SitePageContext } from '../../graphql-types';
import { BuildInfo } from '../components/BuildInfo';
import { NavigationBar } from '../components/NavigationBar';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { Logo } from '../components/Logo';
import { PageHead } from '../components/PageHead';
import { DefaultFooter } from './default/Footer';
import { DefaultHeader } from './default/Header';
import { breakpoints } from './default/breakpoints';
import { NavigationItem } from '../components/NavigationItem';
import styled from '@emotion/styled';

const DefaultLayoutStyle = css`
  :root {
    --white-color: #eeeeee;
    --white-alternate-color: #ece3df;
    --black-color: #6a4a3c;
    --black-alternate-color: #2c2a2a;
    --primary-color: #eb6841;
    --primary-alternate-color: #e74818;
    --secondary-color: #ebbd41;
    --heading-font: 'Rajdhani', sans-serif;
    --paragraph-font: 'Poppins', 'Roboto', sans-serif;
    --code-font: 'IBM Plex Mono', monospace;
    --divider-height: 1.5rem;
  }

  html {
    height: 100%;
    font-size: 18px;

    @media (max-width: ${breakpoints.small}) {
      font-size: 14px;
      :root {
        --divider-height: 1rem;
      }
    }

    @media (max-width: ${breakpoints.medium}) {
      font-size: 18px;
    }

    @media (min-width: ${breakpoints.big}) {
      font-size: 24px;
    }
  }

  body {
    margin: 0;
    min-height: 100%;
    scroll-behavior: smooth;
    overflow-y: scroll;
    display: flex;
    min-height: 100%;
    background: var(--white-alternate-color);
    color: var(--black-color);
    font-family: var(--paragraph-font);
  }

  #___gatsby,
  #___gatsby > * {
    display: flex;
    flex-grow: 1;
  }

  #wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: 5.5rem auto 8rem;

    @media (min-width: ${breakpoints.big}) {
      grid-template-rows: 6.5rem auto 8rem;
    }

    grid-template-areas:
      'header'
      'main'
      'footer';

    & > * {
      box-sizing: border-box;
      max-width: 100%;
    }

    & > main > section::not(.section) {
      margin-top: 2rem;
      padding-bottom: 2rem;
    }
  }

  header {
    grid-area: header;
    position: relative;

    nav {
      display: flex;
      align-items: center;
      margin-left: 1rem;
    }
  }

  main {
    grid-area: main;
    hyphens: auto;

    & > * {
      padding-top: var(--divider-height);
      padding-bottom: var(--divider-height);
    }
  }

  footer {
    grid-area: footer;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);

    &:hover {
      color: var(--secondary-color);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--heading-font);
    font-weight: 600;
  }

  h3 {
    margin-top: 2rem;
  }

  pre,
  code,
  samp,
  kbd {
    font-family: var(--code-font);
  }
`;

const StyledLanguageSwitcher = styled(LanguageSwitcher)`
  border-left: 2px solid var(--white-alternate-color);
  padding-left: 1rem;

  @media (max-width: ${breakpoints.medium}) {
    border-left: none;
    padding-left: 0;

    li {
      padding-left: 0;
    }
  }
`;

type DefaultLayoutProps = PropsWithChildren<{ pageContext: SitePageContext; title: string }>;

export function DefaultLayout({ pageContext, title, children }: DefaultLayoutProps) {
  const intl = useIntl();
  const siteTitle = intl.formatMessage({ id: 'meta.title' });
  const siteMetadata = useStaticQuery<DefaultLayoutQuery>(graphql`
    query DefaultLayout {
      site {
        buildTime
        siteMetadata {
          phone
          email
          mainNavigation {
            title
            path
          }
        }
      }
    }
  `);
  const mainNavigationItems = siteMetadata.site.siteMetadata.mainNavigation.map((entry, i) => {
    return <NavigationItem path={entry.path} title={intl.formatMessage({ id: entry.title })} key={i} />;
  });
  return (
    <div id="wrapper">
      <PageHead
        alternativeLanguagePaths={pageContext.alternativeLanguagePaths}
        locale={pageContext.language}
        title={`${title} - ${siteTitle}`}
      />
      <Global styles={DefaultLayoutStyle} />
      <DefaultHeader
        navigationBar={
          <NavigationBar
            items={mainNavigationItems}
            language={<StyledLanguageSwitcher paths={pageContext.alternativeLanguagePaths} />}
            collapseWidth={breakpoints.small}
          />
        }
        logo={<Logo homePath={'/'} />}
        siteTitle={siteTitle}
      />
      <main>{children}</main>
      <DefaultFooter
        buildInfo={<BuildInfo buildDateTime={siteMetadata.site.buildTime} />}
        phone={siteMetadata.site.siteMetadata.phone}
        email={siteMetadata.site.siteMetadata.email}
      />
    </div>
  );
}
