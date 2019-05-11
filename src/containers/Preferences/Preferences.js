import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleChannel } from '../../actions/configuration'
import reactStringReplace from 'react-string-replace'
import { List, Item } from './style'

const Preferences = ({
  availableChannels,
  selectedChannels,
  toggleChannel
}) => {
  return (
    <List>
      {availableChannels.map((channel, i) => (
        <Item
          selected={selectedChannels.includes(channel)}
          key={i}
          onClick={() => toggleChannel(channel)}
        >
          {reactStringReplace(channel, '-', () => ' ')}
        </Item>
      ))}
    </List>
  )
}

Preferences.propTypes = {
  availableChannels: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedChannels: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleChannel: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    availableChannels: state.configuration.availableChannels,
    selectedChannels: state.configuration.selectedChannels
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleChannel: channel => {
      dispatch(toggleChannel(channel))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preferences)
