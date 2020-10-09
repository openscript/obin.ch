import * as React from 'react';
import { Link } from 'gatsby';

import IndexLayout from '../layouts';
import Content from '../components/Content';

const NotFoundPage: React.FC = () => (
  <IndexLayout>
    <Content>
      <h1>404: Page not found.</h1>
      <p>
        You&apos;ve hit the void. <Link to="/">Go back.</Link>
      </p>
    </Content>
  </IndexLayout>
);

export default NotFoundPage;
