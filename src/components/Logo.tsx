import styled from '@emotion/styled';
import React from 'react';
import { LocalizedLink } from './LocalizedLink';

const StyledLink = styled(LocalizedLink)`
  font-weight: bold;
  font-size: 1.6rem;
`;

type LogoProps = {
  homePath: string;
};

export function Logo({ homePath }: LogoProps) {
  return <StyledLink to={homePath}>r.obin.ch</StyledLink>;
}
