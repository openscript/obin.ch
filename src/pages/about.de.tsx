import * as React from 'react'

import IndexLayout from '../layouts'
import Spotlight from '../components/sections/Spotlight'
import Content from '../components/Content'

const AboutPage = () => (
  <IndexLayout>
    <Spotlight />
    <Content>
      <h2>Über mich</h2>
    </Content>
  </IndexLayout>
)

export default AboutPage
