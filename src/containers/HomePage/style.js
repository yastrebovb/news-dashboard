import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const HomePageStyled = styled.div`
  &.page-enter {
    animation: ${fadeIn} 0.3s 0.2s both;
  }

  &.page-exit-active {
    display: none;
  }
`
