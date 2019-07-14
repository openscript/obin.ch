import * as React from 'react'

import IndexLayout from '../layouts'
import Spotlight from '../components/sections/Spotlight'
import Content from '../components/Content'

const CollectionPage = () => (
  <IndexLayout>
    <Spotlight></Spotlight>
    <Content>
      <h2>Sammlung</h2>
    </Content>
  </IndexLayout>
)

export default CollectionPage
