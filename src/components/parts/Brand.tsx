import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../styles/variables';
import LocalizedLink from '../LocalizedLink';

const HomepageLink = styled(LocalizedLink)`
  display: block;
  color: ${colors.white};
  font-size: 1.7rem;
  font-weight: 600;
  text-decoration: none;

  &:hover,
  &:focus {
    span {
      opacity: 1;
      margin-left: 0;
    }
  }

  span {
    opacity: 0;
    margin-left: -1rem;
    transition: 0.5s;
  }
`;

const Brand: React.FC = () => (
  <>
    <h1>
      <HomepageLink to="/">
        r.obin<span>.ch</span>
      </HomepageLink>
    </h1>
  </>
);

export default Brand;
