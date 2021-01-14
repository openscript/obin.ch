import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { ElementType } from 'react';
import { FormattedDate, FormattedMessage, FormattedTime } from 'react-intl';
import { breakpoints } from '../layouts/default/breakpoints';
import { Props } from '../utils/Props';
import { Card } from './Card';

const StyledCardHeader = styled(Card.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4rem;
  font-size: 1.2rem;

  & > a {
    width: 60%;
  }

  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const StyledMetaInformation = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  text-align: right;
  width: 40%;
  margin-left: 0.5rem;

  @media (max-width: ${breakpoints.small}) {
    flex-direction: row;
  }
`;

const StyledTagContainer = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  a {
    margin-left: 0.5rem;
  }
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
  tags?: { translation: string; path: string }[];
  headingType?: ElementType;
}>;

export function ExcerptItem({ className, title, date, tags, children, path, headingType = 'h3' }: ExcerptItemProps) {
  const header = (
    <StyledCardHeader>
      <Link to={path}>
        <StyledHeading as={headingType}>{title}</StyledHeading>
      </Link>
      <StyledMetaInformation>
        <span>
          <FormattedDate value={date} /> <FormattedTime value={date} />
        </span>
        {tags && (
          <StyledTagContainer title={tags.map((tag) => tag.translation).join(', ')}>
            {tags.map((tag, i) => (
              <Link to={tag.path} key={i}>
                {tag.translation}
              </Link>
            ))}
          </StyledTagContainer>
        )}
      </StyledMetaInformation>
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
