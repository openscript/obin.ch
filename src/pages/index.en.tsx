import * as React from 'react'

import IndexLayout from '../layouts'
import Content from '../components/Content'
import WelcomeSpotlight from '../components/sections/WelcomeSpotlight'

const IndexPage: React.FC = () => (
  <IndexLayout>
    <WelcomeSpotlight>
      <h2>Hello!</h2>
      <p>
        <strong>Great to have you here.</strong> On this website I collect things of which I think they can be useful for other people.
      </p>
    </WelcomeSpotlight>
    <Content>
      <p>Welcome :)</p>
    </Content>
  </IndexLayout>
)

export default IndexPage
