import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/news'

class Channel extends Component {
  componentDidMount() {
    this.props.fetchNews()
  }

  render() {
    return <div />
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchNews: () => dispatch(fetchNews(ownProps.channelName))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Channel)
