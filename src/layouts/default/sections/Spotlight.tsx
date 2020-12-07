import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { PropsWithChildren } from 'react';
import AslantDivider from '../../../components/AslantDivider';
import { PaddedElement } from '../PaddedElement';

type SpotlightContentProps = {
  color: string;
};

const SpotlightContent = styled(PaddedElement)`
  background-color: var(${(props: SpotlightContentProps) => props.color});
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

const SpotlightContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const BeforeDivider = styled(AslantDivider)`
  position: absolute;
  bottom: 100%;
  margin-bottom: -1px;
`;

type SpotlightProps = PropsWithChildren<{
  color: string;
  className?: string;
  background?: ReactNode;
}>;

export function Spotlight({ background, children, color, className }: SpotlightProps) {
  return (
    <SpotlightContainer className={`spotlight ${className}`}>
      <BeforeDivider color={color} invert flipHorizontally />
      <SpotlightContent color={color}>
        {background}
        {children}
      </SpotlightContent>
      <AslantDivider color={color} invert flipVertically />
    </SpotlightContainer>
  );
}
