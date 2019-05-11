import React from 'react'
import { withRouter } from 'react-router-dom'
import { NavLinkStyled } from './style'

const SwitchLink = withRouter(
  ({ location: { pathname }, firstLink, secondLink }) => (
    <NavLinkStyled
      to={pathname === firstLink ? secondLink : firstLink}
      activeClassName="active"
    >
      +
    </NavLinkStyled>
  )
)

export default SwitchLink
