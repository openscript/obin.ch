import styled from '@emotion/styled';
import React from 'react';
import { PropsWithChildren } from 'react';
import { PaddedElement } from '../PaddedElement';

const OverviewSection = styled(PaddedElement)`
  display: flex;
  margin: 2rem 0 4rem 0;
`;

type OverviewProps = PropsWithChildren<unknown>;

export function Overview({ children }: OverviewProps) {
  return <OverviewSection>{children}</OverviewSection>;
}
