import React from 'react'
import { connect } from 'react-redux'
import { PreferencesPageStyled, Heading, Channel } from './style'

const PreferencesPage = ({ availableChannels, selectedChannels }) => (
  <PreferencesPageStyled>
    <Heading>Choose your prefered media</Heading>
    {availableChannels.map(channel => (
      <Channel selected={selectedChannels.includes(channel) ? true : null}>
        {channel}
      </Channel>
    ))}
  </PreferencesPageStyled>
)

const mapStateToProps = state => {
  return {
    availableChannels: state.configuration.availableChannels,
    selectedChannels: state.configuration.selectedChannels
  }
}

export default connect(mapStateToProps)(PreferencesPage)
