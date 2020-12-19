import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { Card } from './Card';

const StyledCardHeader = styled(Card.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type ExcerptItemProps = {
  title: string;
  date: string;
  excerpt: string;
  path: string;
};

export function ExcerptItem({ title, date, excerpt, path }: ExcerptItemProps) {
  const header = (
    <StyledCardHeader>
      <Link to={path}>
        <h3>{title}</h3>
      </Link>
      <span>
        <FormattedDate value={date} />
      </span>
    </StyledCardHeader>
  );
  const footer = (
    <Card.Footer>
      <Link to={path}>
        <FormattedMessage id={'misc.more'} />
      </Link>
    </Card.Footer>
  );

  return (
    <Card header={header} footer={footer}>
      {excerpt}
    </Card>
  );
}
