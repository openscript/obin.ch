import styled from '@emotion/styled';
import React from 'react';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--black-color);
  font-size: 1.2rem;
  font-family: var(--heading-font);
`;

const SiteHeading = styled.h1`
  text-indent: -9999em;
`;

type DefaultHeaderProps = {
  navigationBar: JSX.Element;
  logo: JSX.Element;
  siteTitle: string;
};

export function DefaultHeader({ navigationBar, logo, siteTitle }: DefaultHeaderProps) {
  return (
    <StyledHeader>
      {logo}
      <SiteHeading>{siteTitle}</SiteHeading>
      {navigationBar}
    </StyledHeader>
  );
}
