import * as React from 'react'

import IndexLayout from '../layouts/de'
import Spotlight from '../components/Spotlight'
import Content from '../components/Content'

const IndexPage = () => (
  <IndexLayout>
    <Spotlight></Spotlight>
    <Content>
      <p>Willkommen :)</p>
    </Content>
  </IndexLayout>
)

export default IndexPage
