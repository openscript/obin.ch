import styled from '@emotion/styled';
import React from 'react';
import { Props } from '../utils/Props';

const StyledHint = styled.div`
  width: 100%;
`;

type HintProps = Props;

export function Hint({ children, className }: HintProps) {
  return <StyledHint className={className}>{children}</StyledHint>;
}
