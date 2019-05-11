import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
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

SwitchLink.propTypes = {
  firstLink: PropTypes.string.isRequired,
  secondLink: PropTypes.string.isRequired
}

export default SwitchLink
