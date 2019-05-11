import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { makeGetChannelName, makeGetArticlesByChannel } from '../../selectors/'
import Article from '../../components/Article'
import {
  ChannelStyled,
  ChannelHeader,
  Select,
  Option,
  Articles,
  Heading,
  Button
} from './style'
class Channel extends Component {
  state = {
    visibleArticles: 4,
    viewMode: 'image'
  }

  changeViewMode = nextView => {
    this.setState({
      viewMode: nextView
    })
  }

  showMoreArticles = () => {
    this.setState(prevState => ({
      visibleArticles: prevState.visibleArticles + 4
    }))
  }

  render() {
    const { visibleArticles, viewMode } = this.state
    const { channelName, articles } = this.props

    return (
      <ChannelStyled>
        <ChannelHeader>
          <Heading>{channelName}</Heading>
          <Select>
            <Option
              onClick={() => this.changeViewMode('image')}
              active={viewMode === 'image' && true}
            >
              image
            </Option>
            <Option
              onClick={() => this.changeViewMode('big')}
              active={viewMode === 'big' && true}
            >
              big
            </Option>
          </Select>
        </ChannelHeader>
        <Articles>
          {articles.map(
            ({ title, description, publishedAt, urlToImage, url }, index) =>
              index < visibleArticles && (
                <Article
                  viewMode={viewMode}
                  render={{
                    title,
                    description,
                    publishedAt,
                    urlToImage
                  }}
                  key={url}
                />
              )
          )}
        </Articles>
        {articles.length > visibleArticles && (
          <Button onClick={this.showMoreArticles}>
            more <span>&#8964;</span>
          </Button>
        )}
      </ChannelStyled>
    )
  }
}

Channel.propTypes = {
  channelName: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(PropTypes.object).isRequired
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
