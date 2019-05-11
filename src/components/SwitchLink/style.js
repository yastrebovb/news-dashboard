import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { media } from '../../styles/templates'

export const NavLinkStyled = styled(NavLink)`
  position: fixed;
  top: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  font-size: 36px;
  text-decoration: none;
  color: #fff;
  border-radius: 50%;
  background: linear-gradient(110deg, #fa957b 0%, #f7496a 100%);
  box-shadow: 7px 10px 20px 8px rgba(255, 107, 149, 0.2);
  transition: all 0.2s linear;
  transform-origin: center center;

  &.active {
    color: #f7496a;
    background: #fff;
    box-shadow: none;
    transform: rotate(-45deg);
  }

  ${media.tablet`
    top: unset;
    bottom: 40px;
  `}
`
