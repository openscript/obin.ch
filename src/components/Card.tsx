import { Link } from 'gatsby';
import React, { createElement, ElementType, PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<{
  title: string;
  path?: string;
  titleComponent?: ElementType;
}>;

export function Card({ title, children, path, titleComponent = 'h3' }: CardProps) {
  const headingContent = path ? <Link to={path}>{title}</Link> : title;
  const heading = createElement(titleComponent, null, headingContent);
  return (
    <div>
      {heading}
      {children}
    </div>
  );
}
