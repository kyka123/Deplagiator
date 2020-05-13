import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #3e3e3e;
    margin: 0;
    padding: 0;
    font-family: 'Ms Gothic', monospace;  }
  *, *::after, *::before{
    box-sizing: border-box;
     font-family: 'Ms Gothic', monospace; 
  }
`
export default GlobalStyle
