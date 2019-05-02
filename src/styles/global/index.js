import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  html {
    height: 100%;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  html, body, #root{
    height: 100%
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`
