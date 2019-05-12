import styled from 'styled-components'
import {
  backgroundGrowTop,
  backgroundGrowBottom
} from '../../styles/animations'
import { media } from '../../styles/templates'

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
    will-change: width, height;
    content: '';

    ${media.tablet`
      top: unset;
      bottom: 0;
    `}
  }

  &.page-enter-active:before {
    animation: ${backgroundGrowTop} 0.3s;

    ${media.tablet`
      animation: ${backgroundGrowBottom} 0.3s;
    `}
  }

  &.page-exit-active {
    text-indent: -9999px;

    &:before {
      animation: ${backgroundGrowTop} 0.35s reverse both ease-out;

      ${media.tablet`
        animation: ${backgroundGrowBottom} 0.3s reverse both ease-out;
      `}
    }
  }
`

export const Heading = styled.h2`
  font-size: 22px;
  text-align: center;
`
