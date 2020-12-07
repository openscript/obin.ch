import styled from '@emotion/styled';
import React, { ElementType, PropsWithChildren } from 'react';

const PaddedComponent = styled.div`
  padding: 0 20%;

  @media (max-width: 100rem) {
    padding: 0 17.5%;
  }

  @media (max-width: 60rem) {
    padding: 0 2rem;
  }

  @media (max-width: 20rem) {
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
