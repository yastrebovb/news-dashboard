import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/news.js'
import { getLastUpdateDiff } from '../../selectors/'
import Channel from '../Channel/'

class HomePage extends Component {
  componentDidMount() {
    const { lastUpdated, fetchNews, channels } = this.props

    if (lastUpdated > 15) {
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
    lastUpdated: getLastUpdateDiff(state)
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
