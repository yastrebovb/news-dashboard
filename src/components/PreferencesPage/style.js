import styled, { keyframes } from 'styled-components'

const backgroundGrow = keyframes`
  0% {
    width: 10vw;
    height: 10vw;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
`

export const PreferencesPageStyled = styled.div`
  padding: 40px 0;

  &:before {
    position: absolute;
    right: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(110deg, #fa957b 0%, #f7496a 100%);
    z-index: -1;
    content: '';
    animation: ${backgroundGrow} 0.3s ease-out;
  }
`

export const Heading = styled.h2`
  font-size: 22px;
  text-align: center;
`
