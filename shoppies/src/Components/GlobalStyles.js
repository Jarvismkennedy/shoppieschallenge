import {createGlobalStyle} from 'styled-components';
export const GlobalStyles = createGlobalStyle`
*,
  *::after,
  *::before {
    box-sizing: border-box;
  }
    body {
        align-items: center;
        background: ${props => props.theme.body};
        color: ${props => props.theme.text};
        height: auto;
        width:100%;
        margin: 0;
        padding: 0;
        transition: all 0.25s linear;
      }`;