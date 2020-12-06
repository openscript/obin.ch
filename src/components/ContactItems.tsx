import React from 'react';
import { Fragment } from 'react';

type ContactItemsProps = {
  email: string;
  phone: string;
};

export function ContactItems({ phone, email }: ContactItemsProps) {
  return (
    <Fragment>
      <li>
        <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
      </li>
      <li>
        <a href={`mailto:${email}`}>{email}</a>
      </li>
    </Fragment>
  );
}
