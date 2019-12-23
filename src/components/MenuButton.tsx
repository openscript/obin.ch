import React, { useState } from 'react'
import styled from '@emotion/styled'
import { ClassNames } from '@emotion/core'

const Burger = styled.div`
  width: 2.2rem;
  cursor: pointer;

  &:after,
  &:before,
  & div {
    background-color: #fff;
    border-radius: 3px;
    content: '';
    display: block;
    height: 4px;
    margin: 6px 0;
    transition: all 0.2s ease-in-out;
  }

  &.active div {
    transform: scale(0);
  }

  &.active:after {
    transform: translateY(-10px) rotate(-135deg);
  }

  &.active:before {
    transform: translateY(10px) rotate(135deg);
  }
`

interface MenuButtonProps {
  className?: string
  onClick?: (active: boolean) => void
}

const MenuButton: React.FC<MenuButtonProps> = ({ className, onClick }) => {
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    const newActive = !active
    setActive(newActive)
    if (onClick) {
      onClick(newActive)
    }
  }

  return (
    <Burger className={`${className}${active ? ' active' : ''}`} onClick={toggleActive}>
      <div />
    </Burger>
  )
}

export default MenuButton
