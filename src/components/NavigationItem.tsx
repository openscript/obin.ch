import React from 'react';
import { LocalizedLink } from './LocalizedLink';

type NavigationItemProps = {
  path: string;
  title: string;
};

export function NavigationItem({ path, title }: NavigationItemProps) {
  return (
    <li>
      <LocalizedLink to={path}>{title}</LocalizedLink>
    </li>
  );
}
