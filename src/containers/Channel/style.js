import styled from 'styled-components'

export const ChannelStyled = styled.div`
  margin: 60px 35px;
`

export const Heading = styled.h3`
  position: relative;
  left: 38px;
  font-family: 'Playfair Display', Times, serif;
  font-size: 26px;
  font-weight: 600;

  &:after {
    position: absolute;
    left: -30px;
    top: 50%;
    width: 24px;
    height: 2.5px;
    background-color: #f74368;
    content: '';
  }
`

export const Articles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
