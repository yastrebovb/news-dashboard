import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/news.js'
import { getLastUpdateDiff } from '../../selectors/'
import Channel from '../Channel/'
import Loading from '../../components/Loading'
import { HomePageStyled } from './style'

class HomePage extends Component {
  componentDidMount() {
    const { lastUpdated, fetchNews, channels } = this.props

    if (lastUpdated > 15) {
      fetchNews(channels)
    }
  }

  render() {
    const { loading, channels } = this.props

    return (
      <HomePageStyled>
        {loading ? (
          <Loading />
        ) : (
          channels.map(channel => <Channel channelId={channel} key={channel} />)
        )}
      </HomePageStyled>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.news.loading,
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
