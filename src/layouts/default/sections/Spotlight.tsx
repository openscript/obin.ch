import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { PropsWithChildren } from 'react';
import { PaddedElement } from '../PaddedElement';

type SpotlightContainerProps = {
  color: string;
};

const SpotlightContainer = styled.section`
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--divider-height)), 80% 100%, 0 calc(100% - var(--divider-height)));
  background-color: var(${(props: SpotlightContainerProps) => props.color});
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SpotlightContent = styled(PaddedElement)`
  position: relative;
  flex-grow: 1;

  svg {
    pointer-events: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
  }
`;

type SpotlightProps = PropsWithChildren<{
  color: string;
  className?: string;
  background?: ReactNode;
}>;

export function Spotlight({ background, children, color, className }: SpotlightProps) {
  return (
    <SpotlightContainer className={`spotlight ${className}`} color={color}>
      <SpotlightContent>
        {background}
        {children}
      </SpotlightContent>
    </SpotlightContainer>
  );
}
