import styled from '@emotion/styled';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import AslantDivider from '../../components/AslantDivider';
import { LocalizedLink } from '../../components/LocalizedLink';
import { PaddedElement } from './PaddedElement';

const StyledFooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  color: var(--white-color);
  background-color: var(--black-color);
  font-family: var(--heading-font);
`;

const Footer = styled(PaddedElement)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

const FooterMenu = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

type DefaultFooterProps = {
  buildInfo: JSX.Element;
};

export function DefaultFooter({ buildInfo }: DefaultFooterProps) {
  return (
    <StyledFooterContainer>
      <AslantDivider color="--white-alternate-color" flipHorizontally />
      <Footer>
        {buildInfo}
        <FooterMenu>
          <ul>
            <li>
              <LocalizedLink to={'/imprint'}>
                <FormattedMessage id="page.imprint.title" />
              </LocalizedLink>
            </li>
          </ul>
        </FooterMenu>
      </Footer>
    </StyledFooterContainer>
  );
}
