import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: rgb(70, 70, 80);
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
    padding: 0;
    border: 0;
    margin: 0;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  header,
  footer,
  section,
  aside,
  figure {
    display: block;
    padding: 0;
    margin: 0;
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
    font-family: 'Open Sans', sans-serif;
  }
`

export default GlobalStyle
