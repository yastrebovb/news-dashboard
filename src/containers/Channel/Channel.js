import React, { Component } from 'react'
import { connect } from 'react-redux'
import { makeGetChannelName, makeGetArticlesByChannel } from '../../selectors/'
import Article from '../../components/Article'
import {
  ChannelStyled,
  ChannelHeading,
  Select,
  Option,
  Articles,
  Heading
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
        <ChannelHeading>
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
        </ChannelHeading>
        <Articles>
          {articles.map(
            ({ title, description, publishedAt, urlToImage }, index) =>
              index < visibleArticles && (
                <Article
                  viewMode={viewMode}
                  render={{
                    title,
                    description,
                    publishedAt,
                    urlToImage
                  }}
                />
              )
          )}
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
