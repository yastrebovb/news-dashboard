import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { defaultStyle, activeStyle } from './style'

const SwitchLink = withRouter(
  ({ location: { pathname }, firstLink, secondLink }) => (
    <NavLink
      to={pathname === firstLink ? secondLink : firstLink}
      style={defaultStyle}
      activeStyle={activeStyle}
    >
      {pathname === firstLink ? '+' : 'x'}
    </NavLink>
  )
)

export default SwitchLink
