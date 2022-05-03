import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --theme-black: 17, 17, 17;
  }

  html, body{
    font-family: 'Italian Garamond';
  }

  

  
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--theme-black);
  }

  a {
    text-decoration: none;
  }

`;