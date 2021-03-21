import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: ${props => props.theme.transition.default};
    font-family: 'Inter', sans-serif;
  }

  html {
    width: 100vw;
    height: 100vh;
  }

  body {
    background: #fff;
    color: #333;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    width: 100%;
    height: 100%;
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  input, input, textarea, select {
    outline: none;
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`
