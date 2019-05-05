import React from 'react'
import ChannelList from '../../containers/ChannelList'
import { PreferencesPageStyled, Heading } from './style'

const PreferencesPage = () => (
  <PreferencesPageStyled>
    <Heading>Choose your prefered media</Heading>
    <ChannelList />
  </PreferencesPageStyled>
)

export default PreferencesPage
