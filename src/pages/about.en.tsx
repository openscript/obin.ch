import * as React from 'react'

import IndexLayout from '../layouts/de'
import Spotlight from '../components/sections/Spotlight'
import Content from '../components/Content'

const AboutPage = () => (
  <IndexLayout>
    <Spotlight></Spotlight>
    <Content>
      <h2>About me</h2>
    </Content>
  </IndexLayout>
)

export default AboutPage
