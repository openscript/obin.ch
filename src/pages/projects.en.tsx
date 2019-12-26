import * as React from 'react'

import IndexLayout from '../layouts'
import Spotlight from '../components/Spotlight'
import Content from '../components/Content'

const ProjectsPage = () => (
  <IndexLayout>
    <Spotlight />
    <Content>
      <h2>Projects</h2>
    </Content>
  </IndexLayout>
)

export default ProjectsPage
