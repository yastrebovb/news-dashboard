import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/news.js'
import Channel from '../Channel/'

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchNews(this.props.channels)
  }

  render() {
    return (
      <div>
        {this.props.channels.map(channel => (
          <Channel channelName={channel} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    channels: state.configuration.selectedChannels
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: channels => {
      dispatch(fetchNews(channels))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
