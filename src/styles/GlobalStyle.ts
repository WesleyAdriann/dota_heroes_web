import { createGlobalStyle } from 'styled-components';

import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: ${(props) => props.theme.fontFamily};
    src: url(${RobotoRegular});
  }
  * {
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fontFamily};
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(props) => props.theme.background};
  }
`;