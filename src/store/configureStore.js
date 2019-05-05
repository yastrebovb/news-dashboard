import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { loadState, saveState } from './localStorage'
import { fetchMiddleWate } from '../middlewares'
import reducers from '../reducers'
import throttle from 'lodash/throttle'

export default () => {
  const persistedState = loadState()

  const store = createStore(
    reducers,
    persistedState,
    compose(
      applyMiddleware(thunk, logger, fetchMiddleWate),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  )

  store.subscribe(
    throttle(() => {
      saveState(store.getState())
    }, 1000)
  )

  return store
}
