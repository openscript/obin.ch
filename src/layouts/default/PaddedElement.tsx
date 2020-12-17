import styled from '@emotion/styled';
import React, { ElementType, PropsWithChildren } from 'react';
import { breakpoints } from './breakpoints';

const PaddedComponent = styled.div`
  padding: 0 20%;

  @media (max-width: ${breakpoints.big}) {
    padding: 0 17.5%;
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 0 10%;
  }

  @media (max-width: ${breakpoints.tiny}) {
    padding: 0 1rem;
  }
`;

type PaddedElementProps = React.ComponentProps<'div'> &
  PropsWithChildren<{
    as?: ElementType;
  }>;

export function PaddedElement(props: PaddedElementProps) {
  return <PaddedComponent {...props}>{props.children}</PaddedComponent>;
}
