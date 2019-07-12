import css from '@emotion/css';
import { dimensions, fonts } from './variables'

export const globalStyles = css`
  html {
    height: 100%;
    font-size: ${dimensions.baseSize.regular};
    font-family: ${fonts.sansSerif};
  }

  body {
    display: flex;
    min-height: 100%;
    flex-direction: column;
  }

  #___gatsby,
  #___gatsby > * {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`
