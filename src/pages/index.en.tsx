import * as React from 'react'

import IndexLayout from '../layouts'
import Spotlight from '../components/sections/Spotlight'
import Content from '../components/Content'

const IndexPage = () => (
  <IndexLayout>
    <Spotlight></Spotlight>
    <Content>
      <p>Welcome :)</p>
    </Content>
  </IndexLayout>
)

export default IndexPage
