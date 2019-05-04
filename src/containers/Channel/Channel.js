import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeGetChannelName, makeGetArticlesByChannel } from '../../selectors/'
import Article from '../../components/Article'
import { ChannelStyled, Articles, Heading } from './style'

class Channel extends Component {
  state = {
    visibleArticles: 4,
    viewMode: 'image'
  }

  showMoreArticles = () => {
    this.setState(prevState => ({
      visibleArticles: prevState.visibleArticles + 4
    }))
  }

  render() {
    const { channelName, articles } = this.props

    return (
      <ChannelStyled>
        <Heading>{channelName}</Heading>
        <Articles>
          {articles.map(({ title, description, publishedAt, urlToImage }) => (
            <Article
              viewMode={this.state.viewMode}
              render={{
                title,
                description,
                publishedAt,
                urlToImage
              }}
            />
          ))}
        </Articles>
      </ChannelStyled>
    )
  }
}

const makeMapStateToProps = () => {
  const getChannelName = makeGetChannelName()
  const getArticlesByChannel = makeGetArticlesByChannel()

  const mapStateToProps = (state, props) => {
    return {
      channelName: getChannelName(state, props),
      articles: getArticlesByChannel(state, props)
    }
  }

  return mapStateToProps
}

export default connect(makeMapStateToProps)(Channel)
