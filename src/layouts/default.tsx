import { css, Global } from '@emotion/react';
import { graphql, StaticQuery } from 'gatsby';
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

const DefaultLayoutStyle = css`
  :root {
    --white-color: #eeeeee;
    --white-alternate-color: #dddddd;
    --black-color: #6a4a3c;
    --black-alternate-color: #2c2a2a;
    --primary-color: #eb6841;
    --primary-alternate-color: #e74818;
    --secondary-color: #ebbd41;
    --heading-font: 'Rajdhani', sans-serif;
    --paragraph-font: 'Poppins', 'Roboto', sans-serif;
    --code-font: 'IBM Plex Mono', monospace;
  }

  html {
    height: 100%;
    font-size: 18px;

    @media (max-width: ${breakpoints.small}) {
      font-size: 14px;
    }

    @media (max-width: ${breakpoints.medium}) {
      font-size: 16px;
    }

    @media (min-width: ${breakpoints.big}) {
      font-size: 24px;
    }
  }

  body {
    margin: 0;
    min-height: 100%;
    scroll-behavior: smooth;
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
    grid-template-rows: 7rem auto 8rem;

    @media (min-width: ${breakpoints.big}) {
      grid-template-rows: 8rem auto 8rem;
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

type DefaultLayoutProps = PropsWithChildren<{ pageContext: SitePageContext; title: string }>;

export function DefaultLayout({ pageContext, title, children }: DefaultLayoutProps) {
  const intl = useIntl();
  const siteTitle = intl.formatMessage({ id: 'meta.title' });
  return (
    <StaticQuery
      query={graphql`
        query DefaultLayout {
          site {
            buildTime
            siteMetadata {
              phone
              email
            }
          }
        }
      `}
      render={(data: DefaultLayoutQuery) => (
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
                language={<LanguageSwitcher paths={pageContext.alternativeLanguagePaths} />}
                collapseWidth={breakpoints.small}
              />
            }
            logo={<Logo homePath={'/'} />}
            siteTitle={siteTitle}
          />
          <main>{children}</main>
          <DefaultFooter
            buildInfo={<BuildInfo buildDateTime={data.site.buildTime} />}
            phone={data.site.siteMetadata.phone}
            email={data.site.siteMetadata.email}
          />
        </div>
      )}
    />
  );
}