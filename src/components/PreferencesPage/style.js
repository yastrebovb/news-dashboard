import styled from 'styled-components'

export const PreferencesPageStyled = styled.div`
  padding: 40px 0;

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(110deg, #fa957b 0%, #f7496a 100%);
    z-index: -1;
    content: '';
  }
`

export const Heading = styled.h2`
  font-size: 22px;
  text-align: center;
`
