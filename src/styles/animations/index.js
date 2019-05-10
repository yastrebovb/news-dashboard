import { keyframes } from 'styled-components'

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`

export const backgroundGrow = keyframes`
  0% {
    width: 10vw;
    height: 10vw;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
`
