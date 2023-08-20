import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px  ${(props) => props.theme.blue} !important;
  }

`
