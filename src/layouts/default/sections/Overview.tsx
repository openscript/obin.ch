import styled from '@emotion/styled';
import React from 'react';
import { PropsWithChildren } from 'react';
import { breakpoints } from '../breakpoints';
import { PaddedElement } from '../PaddedElement';

const OverviewSection = styled(PaddedElement)`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 3rem;
  margin: 3rem 0 4rem 0;

  @media (max-width: ${breakpoints.tiny}) {
    grid-template-columns: 1fr;
  }
`;

type OverviewProps = PropsWithChildren<unknown>;

export function Overview({ children }: OverviewProps) {
  return <OverviewSection>{children}</OverviewSection>;
}
