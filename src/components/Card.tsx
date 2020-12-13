import { Link } from 'gatsby';
import React, { PropsWithChildren, ReactNode } from 'react';

type CardProps = PropsWithChildren<{
  title: string;
  path?: string;
  titleComponent?: ReactNode;
}>;

export function Card({ title, children, path }: CardProps) {
  return (
    <div>
      <h3>{path ? <Link to={path}>{title}</Link> : title}</h3>
      {children}
    </div>
  );
}
