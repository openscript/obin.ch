import css from '@emotion/css';
import { dimensions } from './variables'

export const globalStyles = css`
  html {
    height: 100%;
    font-size: ${dimensions.baseSize.regular};
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

  header,
  main,
  footer {
    padding: 0 calc((100vw - ${dimensions.layout.pageWidth}) / 2);
  }
`
