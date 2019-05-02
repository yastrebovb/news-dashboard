import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import newsReducer from '../reducers/news'
import configurationReducer from '../reducers/configuration'

export default () => {
  const store = createStore(
    (state = {}, action) => ({
      news: newsReducer(state.news, action, state),
      configuration: configurationReducer(state.configuration, action, state)
    }),
    compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  )

  return store
}
