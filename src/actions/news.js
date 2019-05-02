import { REQUEST_NEWS, RECEIVE_NEWS, API_FAIL } from '../constants/actionTypes'

const API_KEY = process.env.REACT_APP_NEWS_API_TOKEN

export const requestNews = () => ({
  type: REQUEST_NEWS
})

export const receiveNews = payload => ({
  type: RECEIVE_NEWS,
  payload
})

export const newsApiFail = () => ({
  type: API_FAIL
})

export function fetchNews(channels = channels.toString()) {
  return function(dispatch) {
    dispatch(requestNews())

    return fetch(
      `https://newsapi.org/v2/everything?sources=${channels}&pageSize=100&apiKey=${API_KEY}`
    )
      .then(
        res => res.json(),
        error => {
          dispatch(newsApiFail())
        }
      )
      .then(json => dispatch(receiveNews(json)))
  }
}
