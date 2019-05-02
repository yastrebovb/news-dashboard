import { REQUEST_NEWS, RECEIVE_NEWS, API_FAIL } from '../constants/actionTypes'

const API_KEY = process.env.REACT_APP_NEWS_API_TOKEN

export const requestNews = channel => ({
  type: REQUEST_NEWS,
  channel
})

export const receiveNews = (channel, payload) => ({
  type: RECEIVE_NEWS,
  channel,
  payload
})

export const newsApiFail = () => ({
  type: API_FAIL
})

export function fetchNews(channel) {
  return function(dispatch) {
    dispatch(requestNews(channel))

    return fetch(
      `https://newsapi.org/v2/top-headlines?sources=${channel}&apiKey=${API_KEY}`
    )
      .then(
        res => res.json(),
        error => {
          dispatch(newsApiFail())
        }
      )
      .then(json => dispatch(receiveNews(channel, json)))
  }
}
