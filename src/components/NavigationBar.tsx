import styled from '@emotion/styled';
import React, { ReactNode, useState } from 'react';
import { breakpoints } from '../layouts/default/breakpoints';
import { BurgerButton } from './BurgerButton';

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
      background-color: var(--black-color);
      padding-top: 2rem;
      z-index: 1;
      padding: 0 20%;

      @media (max-width: ${breakpoints.big}) {
        padding: 0 17.5%;
      }

      @media (max-width: ${breakpoints.medium}) {
        padding: 0 10%;
      }

      @media (max-width: ${breakpoints.tiny}) {
        padding: 0 1rem;
      }

      li {
        margin-right: 0;
        margin-bottom: 1rem;
        padding: 0;
      }
    }
  }

  li {
    padding: 0 1rem;

    &:last-child {
      padding-right: 0;
    }
  }
`;

const StyledBurgerButton = styled(BurgerButton)<CollapseWidthProps>`
  display: none;

  @media (max-width: ${(props: CollapseWidthProps) => props.collapseWidth}) {
    display: block;
  }
`;

type NavigationBarProps = {
  items: ReactNode;
  language: JSX.Element;
  collapseWidth: string;
};

export function NavigationBar({ items, language, collapseWidth }: NavigationBarProps) {
  const [open, isOpen] = useState(false);
  const toggleOpen = () => isOpen(!open);

  return (
    <nav>
      <StyledBurgerButton onClick={toggleOpen} isActive={open} collapseWidth={collapseWidth} />
      <MenuList className={open ? 'open' : ''} collapseWidth={collapseWidth}>
        {items}
        <li>{language}</li>
      </MenuList>
    </nav>
  );
}
