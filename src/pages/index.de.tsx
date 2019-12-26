import * as React from 'react'

import IndexLayout from '../layouts'
import WelcomeSpotlight from '../components/sections/WelcomeSpotlight'
import FeaturedProjects from '../components/sections/FeaturedProjects'

const IndexPage: React.FC = () => (
  <IndexLayout>
    <WelcomeSpotlight>
      <h2>Hallo!</h2>
      <p>
        <strong>Schön dich hier zu haben.</strong> Auf dieser Seite sammle ich Dinge, von denen ich denke, dass sie anderen vielleicht noch
        nützlich sind.
      </p>
    </WelcomeSpotlight>
    <FeaturedProjects />
  </IndexLayout>
)

export default IndexPage
