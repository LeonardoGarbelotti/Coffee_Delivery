import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['base-hover']};
  }

  body {
    background: ${props => props.theme['background']};
    color: ${props => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
    appearance: unset;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme['base-button']};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${props => props.theme['purple']};
  }
`;