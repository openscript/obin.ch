import React from 'react'

interface Props {}

class RootWrapper extends React.Component<Props> {
  public constructor(props: Props) {
    super(props)
  }

  public render() {
    return <>{this.props.children}</>
  }
}

export default RootWrapper
