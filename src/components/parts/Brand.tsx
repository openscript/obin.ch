import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const HomepageLink = styled(Link)`
  color: white;
  font-size: 1.5rem;
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
`

interface BrandProps {}

const Brand: React.FC<BrandProps> = () => (
  <>
    <h1>
      <HomepageLink to="/">
        r.obin<span>.ch</span>
      </HomepageLink>
    </h1>
  </>
)

export default Brand
