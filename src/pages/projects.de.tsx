import * as React from 'react'

import IndexLayout from '../layouts'
import Spotlight from '../components/Spotlight'
import Content from '../components/Content'

const ProjectsPage: React.FC = () => (
  <IndexLayout>
    <Spotlight />
    <Content>
      <h2>Projekte</h2>
    </Content>
  </IndexLayout>
)

export default ProjectsPage
