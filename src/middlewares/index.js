import { SELECT_CHANNEL } from '../constants/actionTypes'
import { fetchNews } from '../actions/news'

export const fetchMiddleWate = ({ getState, dispatch }) => next => action => {
  next(action)

  if (action.type === SELECT_CHANNEL) {
    dispatch(fetchNews(getState().configuration.selectedChannels))
  }
}
