import styled from '@emotion/styled';
import React from 'react';
import { PaddedElement } from './PaddedElement';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  background-color: var(--black-color);
  font-size: 1.2rem;
  font-family: var(--heading-font);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 20% calc(100% - var(--divider-height)), 0 100%);
  padding-bottom: var(--divider-height);
  margin-bottom: calc(var(--divider-height) * -1);
  z-index: 2;

  a {
    color: var(--white-color);

    &:hover {
      font-weight: bold;
    }
  }
`;

const Header = styled(PaddedElement)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

const SiteHeading = styled.h1`
  text-indent: -9999em;
  margin: 0;
`;

type DefaultHeaderProps = {
  navigationBar: JSX.Element;
  logo: JSX.Element;
  siteTitle: string;
};

export function DefaultHeader({ navigationBar, logo, siteTitle }: DefaultHeaderProps) {
  return (
    <StyledHeader>
      <Header>
        {logo}
        <SiteHeading>{siteTitle}</SiteHeading>
        {navigationBar}
      </Header>
    </StyledHeader>
  );
}
