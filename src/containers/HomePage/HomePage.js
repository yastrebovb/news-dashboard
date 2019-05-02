import React from 'react'
import { connect } from 'react-redux'
import Channel from '../Channel'

const HomePage = props => (
  <div>
    {props.channels.map(channel => (
      <Channel channelName={channel} />
    ))}
  </div>
)

const mapStateToProps = state => {
  return {
    channels: state.configuration.channels
  }
}

export default connect(mapStateToProps)(HomePage)
