import { combineReducers } from 'redux'
import configuration from './configuration'
import news from './news'

export default combineReducers({
  configuration,
  news
})
