import * as React from 'react';

import styled from '@emotion/styled';
import Spotlight from '../Spotlight';
import { ReactComponent as Welcome } from '../../assets/welcome.svg';
import { dimensions } from '../../styles/variables';

const StyledContent = styled.div`
  padding: ${dimensions.layout.gutter} calc((100vw - ${dimensions.layout.pageWidth}) / 2);
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledInnerContent = styled.div`
  padding: 0 ${dimensions.layout.gutter};
  position: relative;
  height: 100%;
`;

const StyledWelcome = styled(Welcome)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: absolute;
  padding: 0 13rem;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.4rem;

  @media (max-width: ${dimensions.breakpoints.small}) {
    width: 70%;
    padding: 0 10rem;
    font-size: 1.2rem;
  }

  @media (max-width: ${dimensions.breakpoints.mobile}) {
    width: 80%;
    padding: 0 5rem;
    font-size: 1rem;
  }

  @media (max-width: ${dimensions.breakpoints.tiny}) {
    width: 75%;
    padding: 0 1rem 0 0;
  }
`;

const WelcomeSpotlight: React.FC = ({ children }) => (
  <Spotlight>
    <StyledContent>
      <StyledInnerContent>
        <StyledWelcome />
        <Content>{children}</Content>
      </StyledInnerContent>
    </StyledContent>
  </Spotlight>
);

export default WelcomeSpotlight;
