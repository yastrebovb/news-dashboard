import { createSelector } from 'reselect'

const getArticlesByChannel = (state, props) => {
  return state.news.all.filter(
    article => article.source.id === props.channelName
  )
}

export const makeGetArticlesByChannel = () => {
  return createSelector(
    getArticlesByChannel,
    articles => articles
  )
}
