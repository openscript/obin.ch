import * as React from 'react'

import IndexLayout from '../layouts'
import Spotlight from '../components/sections/Spotlight'
import Content from '../components/Content'

const RecordingsPage = () => (
  <IndexLayout>
    <Spotlight></Spotlight>
    <Content>
      <h2>Aufnahmen</h2>
    </Content>
  </IndexLayout>
)

export default RecordingsPage
