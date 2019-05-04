import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:700');

  html {
    height: 100%;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    color: #3a3c4c;
    background-color: #f6f7fb;
  }

  html, body, #root{
    height: 100%
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`
