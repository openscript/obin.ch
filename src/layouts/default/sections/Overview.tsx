import styled from '@emotion/styled';
import React from 'react';
import { PropsWithChildren } from 'react';
import { PaddedElement } from '../PaddedElement';

const OverviewSection = styled(PaddedElement)`
  display: flex;
`;

type OverviewProps = PropsWithChildren<unknown>;

export function Overview({ children }: OverviewProps) {
  return <OverviewSection>{children}</OverviewSection>;
}
