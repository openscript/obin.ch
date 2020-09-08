import * as React from 'react';
import styled from '@emotion/styled';
import { dimensions, colors } from '../styles/variables';
import Content from './Content';
import Divider from './Divider';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: ${dimensions.layout.headerHeight};
  background-color: ${colors.brown};
`;

const HeaderDivider = styled(Divider)`
  top: 100%;
  z-index: 10;
`;

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className, children }) => (
  <StyledHeader>
    <Content className={className}>{children}</Content>
    <HeaderDivider color={colors.brown} />
  </StyledHeader>
);

export default Header;
