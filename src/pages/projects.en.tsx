import * as React from 'react'

import IndexLayout from '../layouts/de'
import Spotlight from '../components/sections/Spotlight'
import Content from '../components/Content'

const ProjectsPage = () => (
  <IndexLayout>
    <Spotlight></Spotlight>
    <Content>
      <h2>Projects</h2>
    </Content>
  </IndexLayout>
)

export default ProjectsPage
