import styled from '@emotion/styled';
import React, { useState } from 'react';
import { BurgerButton } from './BurgerButton';
import { ContactItems } from './ContactItems';

type CollapseWidthProps = {
  collapseWidth: string;
};

const MenuList = styled.ul<CollapseWidthProps>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${(props: CollapseWidthProps) => props.collapseWidth}) {
    display: none;

    &.open {
      display: block;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      padding: 0 2rem;
      background-color: var(--black-color);

      li {
        margin-right: 0;
        margin-bottom: 1rem;
      }
    }
  }

  li {
    margin-right: 1rem;
  }
`;

const StyledBurgerButton = styled(BurgerButton)<CollapseWidthProps>`
  display: none;

  @media (max-width: ${(props: CollapseWidthProps) => props.collapseWidth}) {
    display: block;
  }
`;

type NavigationBarProps = {
  language: JSX.Element;
  collapseWidth: string;
};

export function NavigationBar({ language, collapseWidth }: NavigationBarProps) {
  const [open, isOpen] = useState(false);
  const toggleOpen = () => isOpen(!open);

  return (
    <nav>
      <StyledBurgerButton onClick={toggleOpen} isActive={open} collapseWidth={collapseWidth} />
      <MenuList className={open ? 'open' : ''} collapseWidth={collapseWidth}>
        <li>{language}</li>
      </MenuList>
    </nav>
  );
}
