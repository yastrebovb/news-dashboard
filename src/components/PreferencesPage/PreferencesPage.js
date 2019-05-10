import React from 'react'
import Preferences from '../../containers/Preferences'
import { PreferencesPageStyled, Heading } from './style'

const PreferencesPage = () => (
  <PreferencesPageStyled>
    <Heading>Choose your prefered media</Heading>
    <Preferences />
  </PreferencesPageStyled>
)

export default PreferencesPage
