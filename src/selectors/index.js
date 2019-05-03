import { createSelector } from 'reselect'

const getArticlesByChannel = (state, props) => {
  return state.news.all.filter(article => article.source.id === props.channelId)
}

const getChannelName = (state, props) => {
  const articleWithId = state.news.all.find(
    article => article.source.id === props.channelId
  )

  return articleWithId ? articleWithId.source.name : null
}

export const makeGetArticlesByChannel = () => {
  return createSelector(
    getArticlesByChannel,
    articles => articles
  )
}

export const makeGetChannelName = () => {
  return createSelector(
    getChannelName,
    channelName => channelName
  )
}
