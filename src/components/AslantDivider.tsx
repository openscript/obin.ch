import styled from '@emotion/styled';
import React from 'react';

interface StyledDividerProps {
  color: string;
}

const StyledDivider = styled.svg<StyledDividerProps>`
  pointer-events: none;
  margin: -1px;
  polygon {
    fill: var(${(props: StyledDividerProps) => props.color});
  }
`;

interface Props {
  className?: string;
  flipHorizontally?: boolean;
  flipVertically?: boolean;
  invert?: boolean;
  color: string;
}

const viewBox = '0 0 100 2.1';
const baseCoordinates = [
  [0, 0],
  [100, 0],
  [100, 2.1],
  [20, 0.1],
  [0, 2.1]
];
const invertedBaseCoordinates = [
  [0, 2.0],
  [80, 0.0],
  [100, 2.0],
  [100, 2.1],
  [0, 2.1]
];

const convertCoordinatesToHTMLPoints = (coordinates: Array<Array<number>>) => {
  return coordinates.map((p) => p.join(' ')).join(', ');
};

const AslantDivider: React.FC<Props> = (props) => {
  const { flipVertically, flipHorizontally, invert, color, className } = props;
  const coordinates = invert ? invertedBaseCoordinates : baseCoordinates;
  const transform: string[] = [];

  if (flipVertically) {
    transform.push('scale(1 -1) translate(0 -2.1)');
  }

  if (flipHorizontally) {
    transform.push('scale(-1 1) translate(-100 0)');
  }

  return (
    <StyledDivider color={color} viewBox={viewBox} className={className}>
      <polygon points={convertCoordinatesToHTMLPoints(coordinates)} transform={transform.join(' ')} />
    </StyledDivider>
  );
};

export default AslantDivider;
