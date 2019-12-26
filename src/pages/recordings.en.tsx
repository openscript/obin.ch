import * as React from 'react'

import IndexLayout from '../layouts'
import Spotlight from '../components/Spotlight'
import Content from '../components/Content'

const RecordingsPage = () => (
  <IndexLayout>
    <Spotlight />
    <Content>
      <h2>Recordings</h2>
    </Content>
  </IndexLayout>
)

export default RecordingsPage
