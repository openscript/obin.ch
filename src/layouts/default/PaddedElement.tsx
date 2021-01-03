import styled from '@emotion/styled';
import React, { ElementType, PropsWithChildren } from 'react';
import { breakpoints } from './breakpoints';

const PaddedComponent = styled.div`
  padding-left: 20%;
  padding-right: 20%;

  @media (max-width: ${breakpoints.big}) {
    padding-left: 17.5%;
    padding-right: 17.5%;
  }

  @media (max-width: ${breakpoints.medium}) {
    padding-left: 10%;
    padding-right: 10%;
  }

  @media (max-width: ${breakpoints.tiny}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

type PaddedElementProps = React.ComponentProps<'div'> &
  PropsWithChildren<{
    as?: ElementType;
  }>;

export function PaddedElement(props: PaddedElementProps) {
  return <PaddedComponent {...props}>{props.children}</PaddedComponent>;
}
