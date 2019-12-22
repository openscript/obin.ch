import styled from '@emotion/styled'

interface StyledDividerProps {
  stickToBottom: boolean
  color: string
}

const StyledDivider = styled.svg<StyledDividerProps>`
  pointer-events: none;
  position: absolute;
  width: 100%;
  bottom: ${(props: StyledDividerProps) => (props.stickToBottom ? '0' : 'auto')};
  left: 0;

  polygon {
    fill: ${(props: StyledDividerProps) => props.color};
  }
`

interface Props {
  className?: string
  flipHorizontally?: boolean
  flipVertically?: boolean
  invert?: boolean
  color: string
}

const viewBox = '0 0 100 2'
const baseCoordinates = [
  [0, 0],
  [100, 0],
  [100, 2],
  [20, 0],
  [0, 2]
]
const invertedBaseCoordinates = [
  [0, 2],
  [80, 0],
  [100, 2]
]

const convertCoordinatesToHTMLPoints = (coordinates: Array<Array<number>>) => {
  return coordinates.map(p => p.join(' ')).join(', ')
}

const Divider: React.FC<Props> = props => {
  const stickToBottom = !!props.flipVertically
  const coordinates = props.invert ? invertedBaseCoordinates : baseCoordinates
  let transform = ''

  if (props.flipVertically) {
    transform += 'scale(1 -1) translate(0 -2)'
  }

  if (props.flipHorizontally) {
    transform += 'scale(-1 1) translate(-100 0)'
  }

  return (
    <StyledDivider stickToBottom={stickToBottom} color={props.color} viewBox={viewBox} className={props.className}>
      <polygon points={convertCoordinatesToHTMLPoints(coordinates)} transform={transform} />
    </StyledDivider>
  )
}

export default Divider
