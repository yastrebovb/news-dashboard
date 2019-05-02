import React from 'react'
import { connect } from 'react-redux'
import { makeGetArticlesByChannel } from '../../selectors/'

const Channel = props => (
  <div>
    {props.articles.map(article => (
      <p>{article.source.name}</p>
    ))}
  </div>
)

const makeMapStateToProps = () => {
  const getArticlesByChannel = makeGetArticlesByChannel()

  const mapStateToProps = (state, props) => {
    return {
      articles: getArticlesByChannel(state, props)
    }
  }

  return mapStateToProps
}

export default connect(makeMapStateToProps)(Channel)
