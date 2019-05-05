import React from 'react'
import { connect } from 'react-redux'
import { toggleChannel } from '../../actions/configuration'
import { List, Item } from './style'

const ChannelList = ({
  availableChannels,
  selectedChannels,
  toggleChannel
}) => {
  return (
    <List>
      {availableChannels.map(channel => (
        <Item
          selected={selectedChannels.includes(channel)}
          onClick={() => toggleChannel(channel)}
        >
          {channel}
        </Item>
      ))}
    </List>
  )
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
)(ChannelList)
