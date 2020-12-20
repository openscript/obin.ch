import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { ElementType } from 'react';
import { FormattedDate, FormattedMessage, FormattedTime } from 'react-intl';
import { Props } from '../utils/Props';
import { Card } from './Card';

const StyledCardHeader = styled(Card.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
`;

const StyledCardFooter = styled(Card.Footer)`
  display: flex;
  align-items: center;
  height: 3rem;
`;

const StyledHeading = styled.h3`
  margin: 0;
`;

type ExcerptItemProps = Props<{
  title: string;
  date: string;
  path: string;
  headingType?: ElementType;
}>;

export function ExcerptItem({ className, title, date, children, path, headingType = 'h3' }: ExcerptItemProps) {
  const header = (
    <StyledCardHeader>
      <Link to={path}>
        <StyledHeading as={headingType}>{title}</StyledHeading>
      </Link>
      <span>
        <FormattedDate value={date} /> <FormattedTime value={date} />
      </span>
    </StyledCardHeader>
  );
  const footer = (
    <StyledCardFooter>
      <Link to={path}>
        <FormattedMessage id={'misc.more'} />
      </Link>
    </StyledCardFooter>
  );

  return (
    <Card header={header} footer={footer} className={className}>
      {children}
    </Card>
  );
}
