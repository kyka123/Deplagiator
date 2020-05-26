import {
  createGlobalStyle
} from 'styled-components'

const GlobalStyle = createGlobalStyle `
  body {
    background-color: #181a1b;
    margin: 0;
    padding: 0;
    font-family: 'Ms Gothic', monospace;

  *, *::after, *::before{
    box-sizing: border-box;
     font-family: 'Ms Gothic', monospace;
  }

  &::-webkit-scrollbar{
    width: 10px;
}

&::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #3e3e3e;
}
  }
`

export default GlobalStyle