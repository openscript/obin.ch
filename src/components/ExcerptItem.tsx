import React from 'react';
import { FormattedDate } from 'react-intl';
import { Card } from './Card';

type ExcerptItemProps = {
  title: string;
  publishedAt: string;
  excerpt: string;
  path: string;
};

export function ExcerptItem({ title, publishedAt, excerpt, path }: ExcerptItemProps) {
  return (
    <Card title={title} path={path}>
      {publishedAt}
      <FormattedDate value={publishedAt} />
      {excerpt}
    </Card>
  );
}
