import { REQUEST_NEWS, RECEIVE_NEWS, API_FAIL } from '../constants/actionTypes'

const API_KEY = process.env.REACT_APP_NEWS_API_TOKEN

const requestNews = () => ({
  type: REQUEST_NEWS
})

const receiveNews = payload => ({
  type: RECEIVE_NEWS,
  updateDate: Math.floor(Date.now() / 60000),
  payload
})

const newsApiFail = () => ({
  type: API_FAIL
})

export const fetchNews = (channels = channels.toString()) => {
  return dispatch => {
    dispatch(requestNews())

    return fetch(
      `https://newsapi.org/v2/everything?language=en&sources=${channels}&pageSize=100&apiKey=${API_KEY}`
    )
      .then(res => res.json())
      .catch(err => dispatch(newsApiFail()))
      .then(json => dispatch(receiveNews(json)))
  }
}
