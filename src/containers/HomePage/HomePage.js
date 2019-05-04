import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/news.js'
import Channel from '../Channel/'

class HomePage extends Component {
  componentDidMount() {
    const { lastUpdate, fetchNews, channels } = this.props
    const currentTime = Math.floor(Date.now() / 60000)

    if (currentTime - lastUpdate > 15) {
      // Update news
      fetchNews(channels)
    }
  }

  render() {
    return (
      <div>
        {this.props.channels.map(channel => (
          <Channel channelId={channel} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    channels: state.configuration.selectedChannels,
    lastUpdate: state.news.lastUpdate
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
