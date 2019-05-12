import styled from 'styled-components'
import { media } from '../../styles/templates'

export const ChannelStyled = styled.div`
  margin: 60px 35px;

  ${media.phone`
    &:first-child {
      margin-top: 12px;
    }
  `}
`

export const ChannelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
    flex-direction: column;
  `}
`

export const Heading = styled.h3`
  position: relative;
  left: 38px;
  font-family: 'Playfair Display', Times, serif;
  font-size: 26px;
  font-weight: 600;

  ${media.phone`
    left: 0;
  `}

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

export const Select = styled.ul`
  display: flex;
  padding-left: 0;
  list-style-type: none;
`

export const Option = styled.li`
  margin-left: 10px;
  font-family: 'Playfair Display', Times, serif;
  font-size: 18px;
  color: ${props => (props.active ? '#3a3c4c' : '#ccd2e7')};
  cursor: pointer;
  transition: all 0.15s linear;
`

export const Articles = styled.div`
  display: flex;
  flex-wrap: wrap;

  &::after {
    content: '';
    flex: auto;

    ${media.phone`
      flex: none;
    `}
  }

  ${media.tablet`
    max-width: 720px;
    margin: 0 auto;
  `}
`

export const Button = styled.button`
  font-family: 'Playfair Display', Times, serif;
  font-size: 18px;
  color: #ccd2e7;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.2s linear;

  span {
    font-size: 24px;
  }

  &:hover {
    color: #3a3c4c;
  }

  ${media.phone`
    display: block;
    margin: 12px auto;
  `}
`
