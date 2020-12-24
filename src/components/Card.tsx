import React, { ReactNode } from 'react';
import { Props } from '../utils/Props';

type CardProps = Props<{
  header?: ReactNode;
  footer?: ReactNode;
}>;

export function Card({ className, children, header, footer }: CardProps) {
  return (
    <div className={className}>
      {header}
      {children}
      {footer}
    </div>
  );
}

type HeaderProps = Props;

function Header({ children, className }: HeaderProps) {
  return <div className={className}>{children}</div>;
}

Card.Header = Header;

type FooterProps = Props;

function Footer({ children, className }: FooterProps) {
  return <div className={className}>{children}</div>;
}

Card.Footer = Footer;
