import styled, { keyframes } from 'styled-components'
import { backgroundGrow } from '../../styles/animations'

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
  }

  &.page-enter-active:before {
    animation: ${backgroundGrow} 0.3s;
  }

  &.page-exit-active {
    text-indent: -9999px;

    &:before {
      animation: ${backgroundGrow} 0.35s reverse both ease-out;
    }
  }
`

export const Heading = styled.h2`
  font-size: 22px;
  text-align: center;
`
