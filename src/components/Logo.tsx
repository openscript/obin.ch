import React from 'react';
import { LocalizedLink } from './LocalizedLink';

type LogoProps = {
  homePath: string;
};

export function Logo({ homePath }: LogoProps) {
  return <LocalizedLink to={homePath}>r.obin.ch</LocalizedLink>;
}
