import * as React from 'react';

import IndexLayout from '../layouts';
import Spotlight from '../components/Spotlight';
import Content from '../components/Content';

const BlogPage: React.FC = () => (
  <IndexLayout>
    <Spotlight />
    <Content>
      <h2>Blog</h2>
    </Content>
  </IndexLayout>
);

export default BlogPage;
