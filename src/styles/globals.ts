import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${({ theme }) => theme.palette.backgrounds.contrasted};
    color: ${({ theme }) => theme.palette.texts.dark};
    font-family: "Open Sans", sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  html,
  img,
  li,
  ol,
  p,
  ul {
    border: 0;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  header,
  footer,
  section,
  aside,
  figure {
    display: block;
    margin: 0;
    padding: 0;
  }

  body,
  input,
  textarea,
  button,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Open Sans", sans-serif;
  }
`

export default GlobalStyle
