import styled from '@emotion/styled';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import AslantDivider from '../../components/AslantDivider';
import { ContactItems } from '../../components/ContactItems';
import { LocalizedLink } from '../../components/LocalizedLink';
import { PaddedElement } from './PaddedElement';

const StyledFooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  color: var(--white-color);
  background-color: var(--black-color);
  font-family: var(--heading-font);

  a {
    color: var(--white-color);
  }
`;

const Footer = styled(PaddedElement)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

const FooterInfo = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const FooterMenu = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

type DefaultFooterProps = {
  phone: string;
  email: string;
  buildInfo: JSX.Element;
};

export function DefaultFooter({ buildInfo, phone, email }: DefaultFooterProps) {
  return (
    <StyledFooterContainer>
      <AslantDivider color="--white-alternate-color" flipHorizontally />
      <Footer>
        <FooterInfo>
          <ContactItems phone={phone} email={email} />
          <li>{buildInfo}</li>
        </FooterInfo>
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
